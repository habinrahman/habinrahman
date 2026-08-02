#!/usr/bin/env node
/**
 * Generates a profile stats SVG using GitHub GraphQL contribution data
 * (same source as the profile contribution heatmap).
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const USERNAME = process.env.GITHUB_REPOSITORY_OWNER ?? "habinrahman";
const TOKEN = process.env.GH_TOKEN ?? process.env.GITHUB_TOKEN;
const OUT = join(__dirname, "..", "profile", "github-stats.svg");

const QUERY = `
query ($login: String!) {
  user(login: $login) {
    name
    contributionsCollection {
      contributionCalendar { totalContributions }
      totalCommitContributions
      totalPullRequestContributions
      totalIssueContributions
      totalPullRequestReviewContributions
      restrictedContributionsCount
    }
    repositories(first: 100, ownerAffiliations: OWNER) {
      totalCount
      nodes { stargazerCount }
    }
  }
}`;

function esc(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function fetchStats() {
  if (!TOKEN) throw new Error("GH_TOKEN or GITHUB_TOKEN is required");

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: QUERY, variables: { login: USERNAME } }),
  });

  if (!res.ok) throw new Error(`GraphQL HTTP ${res.status}`);
  const json = await res.json();
  if (json.errors?.length) {
    throw new Error(json.errors.map((e) => e.message).join("; "));
  }
  return json.data.user;
}

function buildSvg(user) {
  const cc = user.contributionsCollection;
  const totalContributions = cc.contributionCalendar.totalContributions;
  const stars = user.repositories.nodes.reduce((n, r) => n + r.stargazerCount, 0);
  const displayName = user.name ?? USERNAME;

  const rows = [
    ["Total Contributions (last year)", totalContributions],
    ["Pull Requests", cc.totalPullRequestContributions],
    ["Issues", cc.totalIssueContributions],
    ["Code Reviews", cc.totalPullRequestReviewContributions],
    ["Stars Earned", stars],
    ["Public Repositories", user.repositories.totalCount],
  ];

  const rowSvg = rows
    .map(
      ([label, value], i) => `
    <g class="stagger" style="animation-delay: ${400 + i * 150}ms" transform="translate(0, ${i * 25})">
      <text class="stat" x="25" y="12.5">${esc(label)}:</text>
      <text class="stat" x="440" y="12.5" text-anchor="end">${esc(String(value))}</text>
    </g>`
    )
    .join("");

  const height = 55 + rows.length * 25 + 20;

  return `<svg
  width="467"
  height="${height}"
  viewBox="0 0 467 ${height}"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  role="img"
  aria-labelledby="titleId descId"
>
  <title id="titleId">${esc(displayName)}&#39;s GitHub Contributions</title>
  <desc id="descId">${rows.map(([l, v]) => `${l}: ${v}`).join(", ")}</desc>
  <style>
    .header { font: 600 18px 'Segoe UI', Ubuntu, Sans-Serif; fill: #70a5fd; }
    .stat { font: 600 14px 'Segoe UI', Ubuntu, 'Helvetica Neue', Sans-Serif; fill: #38bdae; }
    .stagger { opacity: 0; animation: fadeIn 0.3s ease-in-out forwards; }
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  </style>
  <rect x="0.5" y="0.5" rx="4.5" width="466" height="${height - 1}" fill="#1a1b27" stroke="#e4e2e2"/>
  <g transform="translate(0, 0)">
    <text x="25" y="35" class="header">${esc(displayName)}&#39;s GitHub Contributions</text>
  </g>
  <g transform="translate(0, 55)">${rowSvg}
  </g>
</svg>
`;
}

const user = await fetchStats();
mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, buildSvg(user).trim() + "\n", "utf8");
console.log(`Wrote ${OUT} (${user.contributionsCollection.contributionCalendar.totalContributions} contributions)`);
