<script setup lang="ts">
import { motion } from 'motion-v'
import SocialLinks from './SocialLinks.vue'

const reduce =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches
</script>

<template>
  <section id="contact" class="section contact" aria-labelledby="contact-title">
    <div class="container">
      <motion.div
        :initial="reduce ? false : { opacity: 0, y: 20 }"
        :whileInView="{ opacity: 1, y: 0 }"
        :inViewOptions="{ once: true, amount: 0.35 }"
        :transition="{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }"
      >
        <p class="section-kicker">Contact</p>
        <h2 id="contact-title" class="section-title">Tell us what to automate next</h2>
        <p class="section-lead">
          Share the time-consuming tasks your team still does by hand — and the tools you already use. We’ll reply with a clear next step.
        </p>
        <div class="contact-actions">
          <motion.a
            class="btn btn-primary mail"
            href="mailto:hello@vincul.ai?subject=Vincul%20project%20inquiry"
            :whileHover="reduce ? undefined : { scale: 1.03 }"
            :whilePress="reduce ? undefined : { scale: 0.98 }"
          >
            hello@vincul.ai
          </motion.a>
          <SocialLinks />
        </div>
      </motion.div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  background: var(--color-primary);
  color: var(--color-on-primary);
}

.section-kicker {
  color: var(--color-accent-soft);
}

.section-title {
  color: var(--color-on-primary);
  max-width: 16ch;
}

.section-lead {
  color: rgba(248, 250, 252, 0.82);
  margin-bottom: 1.75rem;
}

.contact-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
}

.mail {
  font-size: 1.05rem;
}
</style>
