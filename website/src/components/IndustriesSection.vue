<script setup lang="ts">
import { motion } from 'motion-v'
import { asset } from '../base'

const reduce =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches
</script>

<template>
  <section id="examples" class="section" aria-labelledby="examples-title">
    <div class="container">
      <motion.div
        :initial="reduce ? false : { opacity: 0, y: 20 }"
        :whileInView="{ opacity: 1, y: 0 }"
        :inViewOptions="{ once: true, amount: 0.3 }"
        :transition="{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }"
      >
        <p class="section-kicker">Where it lands</p>
        <h2 id="examples-title" class="section-title">Built for every domain that still runs on busywork</h2>
        <p class="section-lead">
          Healthcare admin, logistics, sales, support, finance — if your team repeats the same tasks every day, Vincul
          designs AI to take that load while your systems stay the source of truth.
        </p>
      </motion.div>

      <div class="industry-grid">
        <article>
          <img
            :src="asset('images/medical.jpg')"
            alt="Professional admin workspace with scheduling on screen"
            width="960"
            height="540"
            loading="lazy"
          />
          <h3>Admin &amp; customer ops</h3>
          <p>
            Intake, scheduling, reminders, document drafting, CRM updates — cut the front-desk and back-office grind
            without replacing your software.
          </p>
        </article>
        <article>
          <img
            :src="asset('images/logistics.jpg')"
            alt="Operations room with status screens"
            width="960"
            height="540"
            loading="lazy"
          />
          <h3>Sales, support &amp; field ops</h3>
          <p>
            Lead chase, ticket triage, dispatch follow-ups, status sync, reporting — AI handles the repetition; people
            handle exceptions.
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.industry-grid {
  margin-top: 2.5rem;
  display: grid;
  gap: 2rem;
}

@media (min-width: 800px) {
  .industry-grid {
    grid-template-columns: 1fr 1fr;
    gap: 1.75rem;
  }
}

article img {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
}

h3 {
  font-family: var(--font-display);
  margin: 0 0 0.4rem;
  font-size: 1.35rem;
  color: var(--color-primary);
}

p {
  margin: 0;
  color: var(--color-muted-foreground);
}
</style>
