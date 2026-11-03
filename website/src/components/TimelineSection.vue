<script setup lang="ts">
import { motion } from 'motion-v'

const phases = [
  {
    when: 'Days 1–3',
    title: 'Fit & access',
    body: 'Confirm goals, stack, environments, and success metrics. Set staging access and a shared channel.',
  },
  {
    when: 'Days 4–8',
    title: 'Map & design',
    body: 'System map, threat/data notes, architecture sketch, and a written recommendation — build with us or take it internal.',
  },
  {
    when: 'Days 9–14',
    title: 'Discovery wrap',
    body: 'Scoped SOW, timeline, and fixed or phased price. You decide before any build commitment.',
  },
  {
    when: 'Build phase',
    title: 'Integrate → Harden → Handover',
    body: 'Typical AI assistant or automation MVP: 4–8 weeks after discovery. Platform upgrades: staged by module with canary windows.',
  },
]

const reduce =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches
</script>

<template>
  <section id="timeline" class="section timeline" aria-labelledby="timeline-title">
    <div class="container">
      <motion.div
        :initial="reduce ? false : { opacity: 0, y: 20 }"
        :whileInView="{ opacity: 1, y: 0 }"
        :inViewOptions="{ once: true, amount: 0.25 }"
        :transition="{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }"
      >
        <p class="section-kicker">Timeline</p>
        <h2 id="timeline-title" class="section-title">First two weeks, then a clear build path</h2>
        <p class="section-lead">
          Every engagement starts with a fixed-fee discovery so you see architecture and risk before you buy a
          build.
        </p>
      </motion.div>

      <ol>
        <li v-for="(phase, i) in phases" :key="phase.title">
          <span class="when">{{ phase.when }}</span>
          <span class="dot" aria-hidden="true">{{ String(i + 1).padStart(2, '0') }}</span>
          <div>
            <h3>{{ phase.title }}</h3>
            <p>{{ phase.body }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.timeline {
  background: #fff;
}

ol {
  list-style: none;
  margin: 2.5rem 0 0;
  padding: 0;
  display: grid;
  gap: 0;
  border-left: 2px solid var(--color-border);
}

li {
  position: relative;
  display: grid;
  gap: 0.35rem 1rem;
  padding: 1.25rem 0 1.25rem 1.5rem;
  grid-template-columns: 1fr;
}

@media (min-width: 700px) {
  li {
    grid-template-columns: 7.5rem auto 1fr;
    align-items: start;
  }
}

.when {
  font-weight: 700;
  color: var(--color-accent);
  font-size: 0.9rem;
}

.dot {
  display: none;
  font-family: var(--font-display);
  font-weight: 700;
  color: var(--color-primary);
}

@media (min-width: 700px) {
  .dot {
    display: inline;
  }
}

li::before {
  content: '';
  position: absolute;
  left: -5px;
  top: 1.55rem;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-accent);
}

h3 {
  font-family: var(--font-display);
  margin: 0 0 0.35rem;
  font-size: 1.15rem;
  color: var(--color-primary);
}

p {
  margin: 0;
  color: var(--color-muted-foreground);
}
</style>
