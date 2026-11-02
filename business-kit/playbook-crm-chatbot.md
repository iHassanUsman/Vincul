# Playbook — CRM AI chatbot integration

## Goal
Bond a production chatbot to the client’s existing CRM so conversations create/update real records — not a disconnected demo.

## Preferred stack
- **Backend:** Java / Spring Boot (ChatClient or equivalent orchestration, tool calling, structured outputs)
- **Frontend:** Angular or Vue widget / embedded panel
- **CRM:** existing REST/GraphQL or DB-backed domain services

## Pattern
1. **Session bridge** — map end-user identity to CRM actor; never put provider secrets in the browser.
2. **Tool surface** — explicit tools only: `searchContact`, `createLead`, `updateTicket`, `bookSlot`, etc.
3. **Human escalate** — confidence / policy gates with transcript handoff.
4. **Audit** — store prompt/tool traces with retention policy.
5. **Feature flags** — channel and intent rollout by cohort.

## Non-goals
Full CRM replacement; unbounded autonomous write access; training on client data without agreement.
