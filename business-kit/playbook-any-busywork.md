# Playbook — Replace any time-consuming task with AI

## Goal
Take repetitive, high-volume work off people and put it on AI agents — while your existing CRM / apps stay the source of truth and humans keep exception control.

## Pattern (every domain)
1. **Map** the task: trigger, inputs, systems touched, success definition, failure modes.
2. **Bond** an assistant or agent with the minimum tools needed (read/write scopes).
3. **Gate** risky actions behind human approval when money, compliance, or customer trust is at stake.
4. **Write back** to systems of record with an audit row and a manual override path.
5. **Measure** time saved, first-response speed, error rate, and escalation volume.

## Example domains (same pattern)
- **Sales / CRM** — lead qualify, follow-ups, enrichment, meeting prep
- **Support** — ticket triage, draft replies, routing, knowledge lookup
- **Ops / admin** — scheduling chase, status sync, document drafting, reminders
- **Finance** — invoice drafts, reconciliation assists, payment chase
- **Field / logistics** — dispatch follow-ups, delay notifications, delivery confirmation

## Integration shape
Event or poll from source system → agent with tools → human gate (when needed) → write back → notify. Never unbounded write access.
