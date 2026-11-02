# Playbook — Medical & logistics booking / invoice automation

## Goal
Remove manual chase from booking and invoicing while keeping humans in control of exceptions.

## Medical (clinic / admin)
- Capture appointment requests → validate slots → confirm / remind
- Generate or draft invoices from completed visits
- Sync status into CRM (patient/client record)
- Never automate clinical judgment; admin workflows only

## Logistics
- Booking / pickup requests → dispatch queue
- Status notifications and no-show / delay chase
- Invoice drafts from delivered jobs
- Sync to CRM or ops system of record

## Integration shape
Event or poll from source system → rules engine / agent with tools → write back → notify. Every automated write needs an audit row and a manual override path.
