<script setup lang="ts">
import { motion } from 'motion-v'

const items = [
  {
    title: 'Secrets stay server-side',
    body: 'Model keys and CRM credentials never ship to the browser. Short-lived session tokens only.',
  },
  {
    title: 'Least-privilege tools',
    body: 'Assistants and agents get explicit CRM/tool scopes — create lead, update ticket, draft a record — not unbounded write access.',
  },
  {
    title: 'Audit everything that writes',
    body: 'Tool calls, prompts (per retention policy), and actor identity are logged so your team can review what automation did.',
  },
  {
    title: 'Your data is not our training set',
    body: 'No client data used to train or fine-tune models unless you approve it in writing.',
  },
  {
    title: 'GDPR-minded by default',
    body: 'We discuss DPA needs, data residency, retention, and deletion up front — especially for regulated and EU/UK buyers.',
  },
  {
    title: 'Upgrade safety nets',
    body: 'Platform cutovers use staging soak, canary, and a documented rollback path before production flips.',
  },
]

const reduce =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches
</script>

<template>
  <section id="security" class="section security" aria-labelledby="security-title">
    <div class="container">
      <motion.div
        :initial="reduce ? false : { opacity: 0, y: 20 }"
        :whileInView="{ opacity: 1, y: 0 }"
        :inViewOptions="{ once: true, amount: 0.25 }"
        :transition="{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }"
      >
        <p class="section-kicker">Security &amp; compliance</p>
        <h2 id="security-title" class="section-title">Built to earn production trust</h2>
        <p class="section-lead">
          AI in a CRM only works if your security and compliance bar is met. These are baseline practices on every
          Vincul engagement.
        </p>
      </motion.div>

      <ul>
        <li v-for="item in items" :key="item.title">
          <h3>{{ item.title }}</h3>
          <p>{{ item.body }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.security {
  background: var(--color-primary);
  color: #f8fafc;
}

.section-kicker {
  color: var(--color-accent-soft);
}

.section-title {
  color: #fff;
}

.section-lead {
  color: rgba(248, 250, 252, 0.8);
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
  padding: 1.15rem 1.1rem;
  background: rgba(248, 250, 252, 0.06);
  border: 1px solid rgba(125, 211, 252, 0.25);
}

h3 {
  font-family: var(--font-display);
  margin: 0 0 0.4rem;
  font-size: 1.1rem;
  color: #fff;
}

p {
  margin: 0;
  color: rgba(248, 250, 252, 0.78);
  font-size: 0.98rem;
}
</style>
