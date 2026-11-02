# Discovery checklist

Use on every Vincul engagement. Capture answers in the proposal.

## Shared
- [ ] Primary business outcome (time saved, conversion, error reduction)
- [ ] Systems of record (CRM, ERP, booking, billing)
- [ ] Environments (dev/stage/prod) and access model
- [ ] Compliance constraints (PII, HIPAA-adjacent, regional data residency)
- [ ] Success metric and review date

## CRM chatbot
- [ ] CRM product / custom stack (Java/Spring? Angular/Vue?)
- [ ] Channels (web widget, WhatsApp, email, in-app)
- [ ] Intents to automate vs escalate
- [ ] Auth: user identity, agent identity, audit trail
- [ ] Write permissions (create lead, update ticket, schedule)
- [ ] Knowledge sources and freshness

## Java upgrade
- [ ] Current JDK and build tool (Maven/Gradle)
- [ ] Framework versions (Spring Boot, Hibernate, etc.)
- [ ] Test coverage and critical paths
- [ ] Deployment topology (VM, K8s, serverless)
- [ ] Hard deadlines / freeze windows
- [ ] Third-party JARs without Java 17+/21+/24 support

## Medical / logistics automation
- [ ] Booking system and calendar rules
- [ ] Invoice source of truth and tax/numbering rules
- [ ] Notification channels and quiet hours
- [ ] Failure/retry and human override
- [ ] Volume estimates (bookings/day, invoices/month)
