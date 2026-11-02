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
        <p class="section-kicker">Example patterns</p>
        <h2 id="examples-title" class="section-title">Booking &amp; invoice automation examples</h2>
        <p class="section-lead">
          Medical and logistics are example contexts — not exclusive niches. The same scheduling and API reliability
          patterns from prior delivery apply wherever bookings and invoices create daily drag.
        </p>
      </motion.div>

      <div class="industry-grid">
        <article>
          <img
            :src="asset('images/medical.jpg')"
            alt="Clinic front desk with appointment booking on screen"
            width="960"
            height="540"
            loading="lazy"
          />
          <h3>Example: clinic-style booking</h3>
          <p>
            Capture appointment requests, confirm/remind, draft invoices from completed visits, sync status into CRM —
            admin workflows only, with human override.
          </p>
        </article>
        <article>
          <img
            :src="asset('images/logistics.jpg')"
            alt="Logistics dispatch room with route and shipment screens"
            width="960"
            height="540"
            loading="lazy"
          />
          <h3>Example: logistics-style ops</h3>
          <p>
            Pickup/booking requests into a dispatch queue, status chase, invoice drafts from delivered jobs — adapted
            from scheduling and ride-ops reliability work.
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
