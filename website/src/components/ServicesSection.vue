<script setup lang="ts">
import { motion } from 'motion-v'
import { asset } from '../base'

const services = [
  {
    title: 'CRM AI chatbots',
    body: 'Embed conversational AI into the CRM your team already uses — Spring Boot backends with Angular or Vue front ends — so leads, tickets, and updates stay in one system of record.',
  },
  {
    title: 'Java 8 → Java 24 upgrades',
    body: 'Staged modernization paths that keep production stable: dependency audits, build toolchain moves, regression suites, and incremental cutovers from legacy Java 8 stacks toward modern LTS and Java 24.',
  },
  {
    title: 'Booking & invoice automation',
    body: 'Automate confirmations, invoicing, and follow-ups on top of tools you already run — illustrated with clinic- and logistics-style examples drawn from scheduling/API delivery experience.',
  },
  {
    title: 'AI agents & workflows',
    body: 'Custom agents and automation that move work between systems: enrichment, routing, document extraction, and ops alerts without forcing a platform rewrite.',
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
        <h2 id="services-title" class="section-title">What we bond into your stack</h2>
        <p class="section-lead">
          Remote-global delivery for companies that want AI and automation inside systems they already trust.
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
