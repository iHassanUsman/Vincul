<script setup lang="ts">
import { motion } from 'motion-v'
import { asset } from '../base'

const steps = [
  { name: 'Discover', detail: 'Map systems, data flows, and the highest-ROI automation or upgrade path.' },
  { name: 'Integrate', detail: 'Ship into your CRM and APIs with clear contracts, auth, and observability.' },
  { name: 'Harden', detail: 'Load, regression, and rollout controls so production stays predictable.' },
  { name: 'Handover', detail: 'Docs, runbooks, and optional retainers so your team owns the outcome.' },
]

const reduce =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches
</script>

<template>
  <section id="how" class="section how" aria-labelledby="how-title">
    <div class="how-media" aria-hidden="true">
      <img :src="asset('images/how-bg.jpg')" alt="" width="1920" height="1080" loading="lazy" />
      <div class="how-scrim" />
    </div>

    <div class="container how-inner">
      <motion.div
        :initial="reduce ? false : { opacity: 0, y: 20 }"
        :whileInView="{ opacity: 1, y: 0 }"
        :inViewOptions="{ once: true, amount: 0.3 }"
        :transition="{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }"
      >
        <p class="section-kicker">How we work</p>
        <h2 id="how-title" class="section-title">From discovery to durable systems</h2>
        <p class="section-lead">
          One accountable partner from architecture through production — remote, senior, and stack-fluent.
        </p>
      </motion.div>

      <ol class="steps">
        <li v-for="(step, i) in steps" :key="step.name">
          <span class="num">{{ String(i + 1).padStart(2, '0') }}</span>
          <div>
            <h3>{{ step.name }}</h3>
            <p>{{ step.detail }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.how {
  position: relative;
  overflow: hidden;
  color: #f8fafc;
}

.how-media {
  position: absolute;
  inset: 0;
}

.how-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.how-scrim {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(15, 23, 42, 0.78) 0%, rgba(2, 6, 23, 0.88) 100%),
    radial-gradient(ellipse at 15% 10%, rgba(3, 105, 161, 0.35), transparent 55%);
}

.how-inner {
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

.steps {
  list-style: none;
  margin: 2.5rem 0 0;
  padding: 0;
  display: grid;
  gap: 1rem;
}

@media (min-width: 800px) {
  .steps {
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }
}

.steps li {
  display: grid;
  gap: 0.75rem;
  padding: 1.15rem 1.1rem 1.25rem;
  border-top: 2px solid var(--color-accent-soft);
  background: rgba(15, 23, 42, 0.45);
  backdrop-filter: blur(8px);
  border-radius: 0 0 0.35rem 0.35rem;
}

.num {
  font-family: var(--font-display);
  font-weight: 700;
  color: var(--color-accent-soft);
  font-size: 0.95rem;
  letter-spacing: 0.06em;
}

h3 {
  font-family: var(--font-display);
  margin: 0 0 0.35rem;
  font-size: 1.2rem;
  color: #fff;
}

.steps p {
  margin: 0;
  color: rgba(248, 250, 252, 0.8);
  font-size: 0.98rem;
}
</style>
