<script setup lang="ts">
import { motion } from 'motion-v'

const cases = [
  {
    label: 'SaaS messaging platform',
    outcome: 'Cut peak API response from ~28s to under 200ms under load',
    detail:
      'Redesigned messaging consumers and payload handling so concurrent spikes stayed stable — the reliability layer AI agents need in production.',
    stack: 'High-scale APIs · performance',
  },
  {
    label: 'Enterprise holding group',
    outcome: 'Modernized a live platform without a rewrite',
    detail:
      'Led staged backend and frontend upgrades, CI/CD, and cloud migration across a large engineering org — the same careful rollout model we use for AI go-lives.',
    stack: 'Platform modernization · delivery leadership',
  },
  {
    label: 'Ops / scheduling system',
    outcome: 'Hardened scheduling reliability and API speed',
    detail:
      'Fixed critical scheduling defects and improved API response on key paths (~60%) — patterns we reuse wherever ops teams fight manual chase work.',
    stack: 'Scheduling · APIs · reliability',
  },
]

const reduce =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches
</script>

<template>
  <section id="proof" class="section proof" aria-labelledby="proof-title">
    <div class="container">
      <motion.div
        :initial="reduce ? false : { opacity: 0, y: 20 }"
        :whileInView="{ opacity: 1, y: 0 }"
        :inViewOptions="{ once: true, amount: 0.25 }"
        :transition="{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }"
      >
        <p class="section-kicker">Proof</p>
        <h2 id="proof-title" class="section-title">Outcomes from real delivery</h2>
        <p class="section-lead">
          Results from production systems we’ve engineered — the depth behind how Vincul ships AI and automation.
        </p>
      </motion.div>

      <ul class="cases">
        <li v-for="item in cases" :key="item.label">
          <p class="label">{{ item.label }}</p>
          <h3>{{ item.outcome }}</h3>
          <p class="detail">{{ item.detail }}</p>
          <p class="stack">{{ item.stack }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.proof {
  background: #fff;
}

.cases {
  list-style: none;
  margin: 2.5rem 0 0;
  padding: 0;
  display: grid;
  gap: 1.25rem;
}

@media (min-width: 900px) {
  .cases {
    grid-template-columns: repeat(3, 1fr);
  }
}

li {
  padding: 1.35rem 1.25rem 1.5rem;
  border: 1px solid var(--color-border);
  border-top: 3px solid var(--color-accent);
  background: var(--color-background);
}

.label {
  margin: 0 0 0.5rem;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-accent);
}

h3 {
  font-family: var(--font-display);
  font-size: 1.15rem;
  line-height: 1.3;
  margin: 0 0 0.65rem;
  color: var(--color-primary);
}

.detail {
  margin: 0 0 0.85rem;
  color: var(--color-muted-foreground);
  font-size: 0.98rem;
}

.stack {
  margin: 0;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-secondary);
}
</style>
