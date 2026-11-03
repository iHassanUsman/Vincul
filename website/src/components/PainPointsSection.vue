<script setup lang="ts">
import { motion } from 'motion-v'

const pains = [
  {
    title: 'Your team is stuck in repetitive work',
    body: 'Copy-paste between tools, manual follow-ups, status chasing — hours that should go to customers and growth.',
  },
  {
    title: 'Leads and tickets sit untouched',
    body: 'Slow first response loses deals. AI can qualify, route, and draft replies inside the systems you already use.',
  },
  {
    title: 'You want AI — not a rebuild',
    body: 'Rip-and-replace projects stall. We bond agents and automation onto your current CRM, apps, and workflows.',
  },
  {
    title: 'Any domain, one pattern',
    body: 'Sales, support, ops, finance, healthcare admin, logistics — if it’s a time-consuming task, we design AI to own the busywork.',
  },
]

const reduce =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches
</script>

<template>
  <section id="problems" class="section pains" aria-labelledby="pains-title">
    <div class="container">
      <motion.div
        :initial="reduce ? false : { opacity: 0, y: 20 }"
        :whileInView="{ opacity: 1, y: 0 }"
        :inViewOptions="{ once: true, amount: 0.3 }"
        :transition="{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }"
      >
        <p class="section-kicker">Why teams call us</p>
        <h2 id="pains-title" class="section-title">Replace time-consuming work with AI</h2>
        <p class="section-lead">
          Not a niche chatbot shop — an automation partner for any repetitive process that drains your people.
        </p>
      </motion.div>

      <ul>
        <li v-for="item in pains" :key="item.title">
          <h3>{{ item.title }}</h3>
          <p>{{ item.body }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.pains {
  background: #fff;
}

ul {
  list-style: none;
  margin: 2.5rem 0 0;
  padding: 0;
  display: grid;
  gap: 1rem;
}

@media (min-width: 800px) {
  ul {
    grid-template-columns: 1fr 1fr;
  }
}

li {
  padding: 1.25rem 1.15rem;
  border-left: 3px solid var(--color-accent);
  background: var(--color-background);
}

h3 {
  font-family: var(--font-display);
  margin: 0 0 0.4rem;
  font-size: 1.15rem;
  color: var(--color-primary);
}

p {
  margin: 0;
  color: var(--color-muted-foreground);
}
</style>
