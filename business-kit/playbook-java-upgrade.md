# Playbook — Java 8 → Java 24

## Goal
Smooth, staged modernization that keeps production shipping.

## Typical path
`8 → 11 → 17 → 21 → 24` (skip only when risk analysis supports it).

## Sequence
1. Inventory modules, JDK APIs, and banned/removed APIs.
2. Unlock build (Maven/Gradle) and CI matrix on target JDKs.
3. Upgrade Spring Boot / libraries in lockstep with chosen LTS.
4. Fix compilation, then tests, then soak in staging.
5. Canary production; hold rollback JDK image ready.
6. Document baseline → target and residual debt.

## Risk focus
- Reflection / illegal access
- JAXB / Java EE modules removed from JDK
- Serialization and date/time edge cases
- Native/image or shaded JARs pinned to old bytecode

## Proof points we cite carefully
Prior delivery experience includes major Java backend upgrades (e.g. Java 8→16 class work at Alsharqi Holding Group). Vincul engagements extend that discipline toward current LTS and Java 24 — we do not claim a past “to 24” cutover unless documented for that client.
