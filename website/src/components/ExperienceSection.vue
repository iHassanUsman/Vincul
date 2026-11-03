<script setup lang="ts">
import { motion } from 'motion-v'
import { asset } from '../base'

const companies = [
  {
    name: 'One Valley',
    line: 'High-scale messaging architecture and API performance work on concurrent workloads.',
  },
  {
    name: 'Alsharqi Holding Group',
    line: 'Led platform modernization, staged upgrades, cloud migration, and CI/CD across a large engineering org.',
  },
  {
    name: 'TABS Inc.',
    line: 'Backend leadership for scheduling and ride-ops systems — reliability work for ops-heavy workflows.',
  },
  {
    name: 'Insight',
    line: 'Full-lifecycle delivery across planning, build, test, and deployment on enterprise backends.',
  },
]

const reduce =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches
</script>

<template>
  <section id="experience" class="section experience" aria-labelledby="experience-title">
    <div class="experience-media" aria-hidden="true">
      <img :src="asset('images/experience-bg.jpg')" alt="" width="1920" height="1080" loading="lazy" />
      <div class="experience-scrim" />
    </div>

    <div class="container experience-inner">
      <motion.div
        :initial="reduce ? false : { opacity: 0, y: 20 }"
        :whileInView="{ opacity: 1, y: 0 }"
        :inViewOptions="{ once: true, amount: 0.3 }"
        :transition="{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }"
      >
        <p class="section-kicker">Experience</p>
        <h2 id="experience-title" class="section-title">Delivery backgrounds we draw from</h2>
        <p class="section-lead">
          Prior roles and platforms that shaped how Vincul ships AI automation and safe upgrades into live systems.
        </p>
      </motion.div>

      <ul>
        <li v-for="company in companies" :key="company.name">
          <h3>{{ company.name }}</h3>
          <p>{{ company.line }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.experience {
  position: relative;
  overflow: hidden;
  color: #f8fafc;
}

.experience-media {
  position: absolute;
  inset: 0;
}

.experience-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.experience-scrim {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(120deg, rgba(2, 6, 23, 0.86) 0%, rgba(15, 23, 42, 0.72) 55%, rgba(3, 105, 161, 0.45) 100%);
}

.experience-inner {
  position: relative;
  z-index: 1;
}

.section-kicker {
  color: var(--color-accent-soft);
}

.section-title {
  color: #f8fafc;
}

.section-lead {
  color: rgba(248, 250, 252, 0.82);
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
  padding: 1.25rem 1.15rem 1.35rem 1.15rem;
  border-left: 3px solid var(--color-accent-soft);
  background: rgba(248, 250, 252, 0.08);
  backdrop-filter: blur(10px);
  border-radius: 0 0.35rem 0.35rem 0;
}

h3 {
  font-family: var(--font-display);
  margin: 0 0 0.35rem;
  font-size: 1.2rem;
  color: #fff;
}

li p {
  margin: 0;
  color: rgba(248, 250, 252, 0.8);
}
</style>
