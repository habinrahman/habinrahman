<div align="center">

<br/>

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=500&size=26&duration=3000&pause=1200&color=22C55E&center=true&vCenter=true&width=600&lines=AI+Systems+Engineer;Agentic+AI+%2B+Backend+Engineering;Building+Reliable+Production+Systems" alt="Typing SVG" />

<br/>

# Habin Rahman

**Backend & AI Systems Engineer** transitioning deep into **Agentic AI** — I build production backend platforms and I'm now applying that same reliability discipline to autonomous, tool-using LLM systems.

<br/>

<a href="https://habin-portfolio.vercel.app"><img src="https://img.shields.io/badge/Portfolio-0D1117?style=flat-square&logoColor=22C55E&labelColor=0D1117&color=161B22" height="28"/></a>
<a href="https://linkedin.com/in/habinrahman"><img src="https://img.shields.io/badge/LinkedIn-0D1117?style=flat-square&logo=linkedin&logoColor=22C55E&labelColor=0D1117&color=161B22" height="28"/></a>
<a href="mailto:habin936@gmail.com"><img src="https://img.shields.io/badge/Email-0D1117?style=flat-square&logo=gmail&logoColor=22C55E&labelColor=0D1117&color=161B22" height="28"/></a>
<a href="https://github.com/habinrahman"><img src="https://img.shields.io/badge/GitHub-0D1117?style=flat-square&logo=github&logoColor=22C55E&labelColor=0D1117&color=161B22" height="28"/></a>

<br/>

<img src="https://komarev.com/ghpvc/?username=habinrahman&style=flat-square&color=22C55E&label=Profile+Views" height="20"/>

</div>

<br/>

<div align="center">

![GitHub Stats](https://github-readme-stats.vercel.app/api?username=habinrahman&show_icons=true&theme=transparent&hide_border=true&title_color=22C55E&icon_color=22C55E&text_color=c9d1d9&bg_color=0D1117)

![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=habinrahman&layout=compact&theme=transparent&hide_border=true&title_color=22C55E&text_color=c9d1d9&bg_color=0D1117)

![GitHub Streak](https://github-readme-streak-stats.demolab.com/?user=habinrahman&theme=dark&hide_border=true&background=0D1117&ring=22C55E&fire=22C55E&currStreakLabel=22C55E)

</div>

<br/>

---

## About

I design backend systems that stay correct under real operational load — enrollment engines, outreach automation, verification infrastructure — and I'm now pointing that same discipline at agentic AI: systems where an LLM doesn't just respond, it plans, calls tools, and carries state across steps.

I care about the boundary most AI demos skip past — the part where a system has to keep working after the happy path ends.

<br/>

## Philosophy

```
Reliability is a feature, not an afterthought.
Idempotency over optimism — every operation assumes it might run twice.
State transitions should be explicit — implicit state is where incidents live.
Automation should be observable, or it isn't trustworthy.
Simplicity scales. Unnecessary complexity doesn't.
```

<br/>

## Current Focus

I'm moving from LLM-integrated backend features toward true agentic systems — planning, tool orchestration, and multi-step autonomy, with the same production discipline I apply to backend infrastructure.

| Status | Area |
|---|---|
| 🟢 Production experience | LLM-integrated services, RAG, vector search, tool calling |
| 🟡 Actively learning | LangGraph, Model Context Protocol (MCP), multi-agent orchestration, AI evaluation |

I label these honestly on purpose — expertise claimed and expertise in progress are not the same thing.

<br/>

---

## Tech Stack

<table>
<tr>
<td valign="top" width="33%">

**Languages**

Python · TypeScript · Java · Elixir · SQL

</td>
<td valign="top" width="33%">

**Frontend**

Next.js · React · Tailwind CSS

</td>
<td valign="top" width="33%">

**Backend**

FastAPI · Phoenix · Spring Boot

</td>
</tr>
<tr>
<td valign="top">

**Databases**

PostgreSQL · Supabase · MySQL

</td>
<td valign="top">

**AI / LLM**

OpenAI · Gemini · RAG · Vector Search (pgvector) · LLM Tool Calling

</td>
<td valign="top">

**Cloud & Infra**

Docker · AWS · DigitalOcean · Kubernetes

</td>
</tr>
</table>

<br/>

---

## Architecture

How I structure the systems I build — an agent pipeline, a backend service, a workflow engine, and an inference layer.

<br/>

**Agentic AI Application**

```mermaid
flowchart TD
    A[User Request] --> B[Agent Orchestrator]
    B --> C[Planner]
    C --> D[Retriever / RAG]
    C --> E[Tool Calls]
    D --> F[(Vector Store)]
    E --> G[External APIs]
    C --> H[FastAPI Service Layer]
    H --> I[(PostgreSQL)]
    H --> J[Background Workers]
    H --> K[Observability & Logging]
    J --> K
```

<br/>

**Backend System**

```mermaid
flowchart LR
    Client[Client] --> API[FastAPI / Phoenix Service]
    API --> Auth[Auth & RBAC]
    API --> DB[(PostgreSQL)]
    API --> Cache[(Cache)]
    API --> Queue[Job Queue]
    Queue --> Worker[Background Workers]
    Worker --> DB
    API --> Obs[Logging & Monitoring]
```

<br/>

**Workflow / Automation Engine**

```mermaid
flowchart TD
    Trigger[Cron Trigger] --> Sched[Scheduler]
    Sched --> Seq[Sequence Engine]
    Seq --> Send[Delivery Layer]
    Send --> Track[Reply Tracking]
    Track --> Class[Classification]
    Class -->|Positive reply| Suppress[Auto-Suppression]
    Class -->|No reply| Retry[Next Step in Sequence]
    Retry --> Seq
    Track --> Dash[Analytics Dashboard]
```

<br/>

**Inference / Observability Pipeline**

```mermaid
flowchart LR
    Req[Inference Request] --> Gateway[Provider Abstraction Layer]
    Gateway --> P1[OpenAI]
    Gateway --> P2[Gemini]
    Gateway --> Stream[Streaming Handler]
    Stream --> Ingest[Ingestion Pipeline]
    Ingest --> TSDB[(Telemetry Store)]
    TSDB --> Dash[Observability Dashboard]
```

<br/>

---

## Featured Projects

<br/>

> **Pin these on your profile:** [AI-CSV-IMPORTER](https://github.com/habinrahman/AI-CSV-IMPORTER) · [RLS Inspector](https://github.com/habinrahman/rls-inspector) · [MyCareer-AI](https://github.com/habinrahman/MyCareer-AI)

<br/>

<table>
<tr><td colspan="2">

### 🎓 MicroDegree Hub
Student operations & cohort orchestration platform running live cohorts today.

**Architecture** — Next.js frontend → Supabase Auth/RBAC → PostgreSQL, with cron-driven batch jobs handling cohort lifecycle transitions across a multi-portal setup.
**Stack** — `Next.js` `TypeScript` `Supabase` `PostgreSQL`
**Key features** — enrollment lifecycle state machines · Zoom-integrated live sessions · role-based access control · audit logging · cron-driven orchestration

[Live](https://central.microdegree.work/) · [Repository](https://github.com/habinrahman/Hub)

</td></tr>
<tr><td colspan="2">

### 📣 Placement Outreach Automation
Campaign sequencing engine for high-volume, multi-touch outreach.

**Architecture** — Scheduler triggers a stateful sequence engine → delivery layer → reply tracking/classification loop, feeding an analytics dashboard. See the Workflow diagram above — this is the system it models.
**Stack** — `Python` `Workflow Orchestration` `Scheduler`
**Key features** — autonomous follow-up sequencing · reply intelligence with auto-suppression · fail-safe batch delivery · operational observability

[Live](https://outreach.microdegree.work/) · [Repository](https://github.com/habinrahman/microdegree-outreach-platform)

</td></tr>
<tr><td colspan="2">

### 📬 AI Job Application Tracker
Turns a Gmail inbox into structured application intelligence.

**Architecture** — Gmail API sync → LLM classification layer → Phoenix/LiveView backend → PostgreSQL, with monitoring on the classification pipeline itself.
**Stack** — `Elixir` `Phoenix` `PostgreSQL` `Gmail API`
**Key features** — inbox sync & classification · interview/rejection detection · reply-aware automation · analytics dashboard

[Repository](https://github.com/habinrahman/AI-Job-Application-Tracker)

</td></tr>
<tr><td colspan="2">

### 🧠 MyCareer AI
AI-powered resume intelligence & career mentorship platform.

**Architecture** — Next.js frontend → FastAPI backend → OpenAI for structured extraction/guidance, with retrieval over embedded resume + career data.
**Stack** — `FastAPI` `Next.js` `OpenAI`
**Key features** — resume parsing into structured signal · retrieval-augmented career guidance · LLM-orchestrated backend services

[Repository](https://github.com/habinrahman/MyCareer-AI)

</td></tr>
<tr><td colspan="2">

### 🔐 Certificate Verification Platform
Secure, scalable issuance & verification for digital certificates.

**Architecture** — FastAPI service → Supabase storage/DB → QR generation & hash/signature verification, deployed as a standalone cloud-hosted verification portal.
**Stack** — `FastAPI` `Python` `Supabase` `Docker`
**Key features** — QR-based verification · hash/signature integrity checks · per-template layouts · batch issuance for full cohorts

[Live](https://certificate.microdegree.in/) · [Repository](https://github.com/habinrahman/CertificationVerification-V2)

</td></tr>
<tr><td colspan="2">

### 📊 Ollive Inference Platform
Lightweight AI inference observability & telemetry platform.

**Architecture** — matches the Inference Pipeline diagram above: a provider-abstraction gateway in front of multiple model providers, feeding a streaming ingestion pipeline into telemetry storage and dashboards.
**Stack** — `Python` `Kubernetes` `Gemini`
**Key features** — streaming workloads · ingestion pipelines · provider abstraction · operational dashboards for inference behavior

[Repository](https://github.com/habinrahman/Ollive-Inference-Platform)

</td></tr>
</table>

<br/>

---

## Contribution Activity

<div align="center">

<img src="https://raw.githubusercontent.com/habinrahman/habinrahman/output/github-contribution-grid-snake-dark.svg" width="100%"/>

</div>

<br/>

---

## Open Source & Tools

Small tools built to solve a real problem, not to pad a portfolio.

| Project | What it does |
|---|---|
| [**AI CSV Importer**](https://github.com/habinrahman/AI-CSV-IMPORTER) | LLM-powered CSV importer mapping any lead CSV into a CRM schema — semantic field mapping, streaming parse, batched + retried AI calls, SSE progress, and a golden-set eval harness. |
| [**RLS Inspector**](https://github.com/habinrahman/rls-inspector) | Visual debugger for Supabase Row Level Security policies — catches missing `WITH CHECK` clauses and overly-permissive rules. |
| [**Competition Tracker**](https://github.com/habinrahman/competition-tracker) | Automated intelligence platform tracking EdTech, Cloud/DevOps, and GenAI updates with dedup and scheduled email digests. |

<br/>

---

## AI Journey

LLM integration → RAG & vector search → structured tool calling → **now: agentic orchestration.**

Each step above is backed by a shipped system, not a tutorial. The current step — LangGraph, MCP, multi-agent design, and evaluation — is genuinely in progress, and I'd rather say that plainly than round up.

<br/>

## Writing & Speaking

Not active yet. When there's something worth publishing about production agentic systems, it'll show up here instead of being implied.

<br/>

---

## Contact

<div align="center">

Open to roles and collaborations at the intersection of backend engineering and agentic AI.

<a href="https://habin-portfolio.vercel.app"><img src="https://img.shields.io/badge/Portfolio-0D1117?style=flat-square&logoColor=22C55E&labelColor=0D1117&color=161B22" height="28"/></a>
<a href="https://linkedin.com/in/habinrahman"><img src="https://img.shields.io/badge/LinkedIn-0D1117?style=flat-square&logo=linkedin&logoColor=22C55E&labelColor=0D1117&color=161B22" height="28"/></a>
<a href="mailto:habin936@gmail.com"><img src="https://img.shields.io/badge/Email-0D1117?style=flat-square&logo=gmail&logoColor=22C55E&labelColor=0D1117&color=161B22" height="28"/></a>

<br/><br/>

<sub>Design for scale. Build for reliability.</sub>

</div>
