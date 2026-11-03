<script setup lang="ts">
import { motion } from 'motion-v'
import { asset } from '../base'

const services = [
  {
    title: 'AI chat & assistants in your CRM',
    body: 'Never miss a lead or ticket — assistants that answer, qualify, and update records inside the CRM and apps you already run.',
  },
  {
    title: 'Replace repetitive busywork with AI',
    body: 'Follow-ups, data entry, document handling, status chasing, reporting — any time-consuming task your team still does by hand.',
  },
  {
    title: 'AI agents across your tools',
    body: 'Agents that enrich, route, extract, and notify across systems — with human approval where it matters.',
  },
  {
    title: 'Legacy platform modernization',
    body: 'When old stacks block AI, we upgrade carefully in staged, reversible steps so you can ship automation on a stable base.',
  },
]

const reduce =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches
</script>

<template>
  <section id="services" class="section services" aria-labelledby="services-title">
    <div class="container">
      <motion.div
        :initial="reduce ? false : { opacity: 0, y: 20 }"
        :whileInView="{ opacity: 1, y: 0 }"
        :inViewOptions="{ once: true, amount: 0.3 }"
        :transition="{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }"
      >
        <p class="section-kicker">Services</p>
        <h2 id="services-title" class="section-title">What you get — outcomes, not buzzwords</h2>
        <p class="section-lead">
          Remote delivery for any industry. We bond AI into the stack you trust so your people stop drowning in manual work.
        </p>
      </motion.div>

      <ul class="service-list">
        <motion.li
          v-for="(service, index) in services"
          :key="service.title"
          :initial="reduce ? false : { opacity: 0, y: 18 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :inViewOptions="{ once: true, amount: 0.35 }"
          :transition="{ duration: 0.5, delay: reduce ? 0 : index * 0.06, ease: [0.22, 1, 0.36, 1] }"
        >
          <h3>{{ service.title }}</h3>
          <p>{{ service.body }}</p>
        </motion.li>
      </ul>
    </div>

    <div class="systems-band" aria-hidden="true">
      <img :src="asset('images/systems.jpg')" alt="" width="1920" height="1080" loading="lazy" />
      <div class="systems-scrim" />
      <p class="systems-caption">Integrate. Don’t replace.</p>
    </div>
  </section>
</template>

<style scoped>
.services {
  padding-bottom: 0;
}

.service-list {
  list-style: none;
  margin: 2.5rem 0 0;
  padding: 0;
  display: grid;
  gap: 0;
}

.service-list li {
  padding: 1.5rem 0;
  border-top: 1px solid var(--color-border);
}

.service-list li:last-child {
  border-bottom: 1px solid var(--color-border);
}

.service-list h3 {
  font-family: var(--font-display);
  font-size: 1.35rem;
  margin: 0 0 0.5rem;
  color: var(--color-primary);
}

.service-list p {
  margin: 0;
  max-width: 48rem;
  color: var(--color-muted-foreground);
}

.systems-band {
  position: relative;
  margin-top: clamp(3rem, 8vw, 5rem);
  min-height: 16rem;
  overflow: hidden;
}

.systems-band img {
  width: 100%;
  height: 100%;
  min-height: 16rem;
  max-height: 22rem;
  object-fit: cover;
}

.systems-scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.25));
}

.systems-caption {
  position: absolute;
  left: max(1rem, calc((100% - var(--max)) / 2));
  bottom: 1.5rem;
  margin: 0;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(1.25rem, 3vw, 1.75rem);
  color: #fff;
}
</style>
