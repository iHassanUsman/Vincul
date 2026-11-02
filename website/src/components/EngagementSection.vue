<script setup lang="ts">
import { motion } from 'motion-v'

const plans = [
  {
    name: 'Discovery sprint',
    price: 'From $2,500',
    meta: '1–2 weeks · fixed fee',
    points: [
      'System & workflow map',
      'Architecture + risk notes',
      'Scoped SOW and build quote',
      'Yours to keep even if you build in-house',
    ],
  },
  {
    name: 'Fixed-scope build',
    price: 'Quoted after discovery',
    meta: 'Typical MVP 4–8 weeks',
    points: [
      'CRM chatbot or automation MVP',
      'Java upgrade tranche',
      'Staging + production handover',
      'Runbooks and observability basics',
    ],
  },
  {
    name: 'Retainer',
    price: 'Monthly capacity',
    meta: 'Ongoing integrate & harden',
    points: [
      'Priority bug/feature queue',
      'Model/provider changes',
      'Upgrade hypercare',
      'Ops tuning for booking/invoice flows',
    ],
  },
]

const reduce =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches
</script>

<template>
  <section id="engagement" class="section engagement" aria-labelledby="engagement-title">
    <div class="container">
      <motion.div
        :initial="reduce ? false : { opacity: 0, y: 20 }"
        :whileInView="{ opacity: 1, y: 0 }"
        :inViewOptions="{ once: true, amount: 0.25 }"
        :transition="{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }"
      >
        <p class="section-kicker">Engagement</p>
        <h2 id="engagement-title" class="section-title">Start small. See the path. Then build.</h2>
        <p class="section-lead">
          Illustrative starting points in USD for remote-global work. Final quotes follow discovery complexity and
          access quality.
        </p>
      </motion.div>

      <ul class="plans">
        <li v-for="plan in plans" :key="plan.name">
          <h3>{{ plan.name }}</h3>
          <p class="price">{{ plan.price }}</p>
          <p class="meta">{{ plan.meta }}</p>
          <ul class="points">
            <li v-for="point in plan.points" :key="point">{{ point }}</li>
          </ul>
        </li>
      </ul>

      <a class="btn btn-primary cta" href="mailto:hello@vincul.ai?subject=Vincul%20discovery%20inquiry">
        Ask about a discovery sprint
      </a>
    </div>
  </section>
</template>

<style scoped>
.engagement {
  background: var(--color-background);
}

.plans {
  list-style: none;
  margin: 2.5rem 0 1.75rem;
  padding: 0;
  display: grid;
  gap: 1rem;
}

@media (min-width: 900px) {
  .plans {
    grid-template-columns: repeat(3, 1fr);
  }
}

.plans > li {
  padding: 1.4rem 1.25rem 1.5rem;
  background: #fff;
  border: 1px solid var(--color-border);
}

h3 {
  font-family: var(--font-display);
  margin: 0 0 0.5rem;
  font-size: 1.2rem;
  color: var(--color-primary);
}

.price {
  margin: 0;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.35rem;
  color: var(--color-accent);
}

.meta {
  margin: 0.25rem 0 1rem;
  color: var(--color-muted-foreground);
  font-size: 0.95rem;
}

.points {
  list-style: disc;
  margin: 0;
  padding-left: 1.15rem;
  color: var(--color-secondary);
  display: grid;
  gap: 0.35rem;
  font-size: 0.95rem;
}

.cta {
  width: fit-content;
}
</style>
