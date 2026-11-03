<script setup lang="ts">
import { motion } from 'motion-v'
import { asset } from '../base'

const reduce =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const enter = reduce
  ? { opacity: 1, y: 0 }
  : { opacity: 1, y: 0 }

const initial = reduce
  ? { opacity: 1, y: 0 }
  : { opacity: 0, y: 24 }

const transition = { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }
</script>

<template>
  <section id="top" class="hero" aria-labelledby="hero-brand">
    <div class="hero-media" aria-hidden="true">
      <img
        :src="asset('images/hero.jpg')"
        alt=""
        width="1920"
        height="1080"
        fetchpriority="high"
      />
      <div class="hero-scrim" />
    </div>

    <div class="container hero-content">
      <motion.h1
        id="hero-brand"
        class="brand"
        :initial="initial"
        :animate="enter"
        :transition="transition"
      >
        Vincul
      </motion.h1>
      <motion.p
        class="headline"
        :initial="initial"
        :animate="enter"
        :transition="{ ...transition, delay: reduce ? 0 : 0.12 }"
      >
        Replace time-consuming work with AI — on the tools you already run
      </motion.p>
      <motion.p
        class="support"
        :initial="initial"
        :animate="enter"
        :transition="{ ...transition, delay: reduce ? 0 : 0.22 }"
      >
        Assistants and agents for sales, support, ops, finance, and admin — bonded into
        your CRM and systems so your team stops drowning in repetitive work.
      </motion.p>
      <motion.div
        class="cta-row"
        :initial="initial"
        :animate="enter"
        :transition="{ ...transition, delay: reduce ? 0 : 0.32 }"
      >
        <motion.a
          class="btn btn-primary"
          href="mailto:hello@vincul.ai?subject=Vincul%20inquiry"
          :whileHover="reduce ? undefined : { scale: 1.03 }"
          :whilePress="reduce ? undefined : { scale: 0.98 }"
        >
          Book a discovery call
        </motion.a>
        <a class="btn btn-ghost" href="#problems">See how we help</a>
      </motion.div>
      <motion.p
        class="proof-teaser"
        :initial="initial"
        :animate="enter"
        :transition="{ ...transition, delay: reduce ? 0 : 0.4 }"
      >
        Recent delivery: AI chatbot in a logistics system that cut support team time.
      </motion.p>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: min(100vh, 52rem);
  min-height: min(100dvh, 52rem);
  display: flex;
  align-items: flex-end;
  color: var(--color-on-primary);
  overflow: hidden;
}

.hero-media {
  position: absolute;
  inset: 0;
}

.hero-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-scrim {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(15, 23, 42, 0.35) 0%, rgba(15, 23, 42, 0.72) 48%, rgba(2, 6, 23, 0.92) 100%),
    radial-gradient(ellipse at 20% 20%, rgba(3, 105, 161, 0.35), transparent 50%);
}

.hero-content {
  position: relative;
  z-index: 1;
  padding-block: clamp(4rem, 12vw, 7rem) clamp(3rem, 8vw, 5rem);
}

.brand {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(3.25rem, 10vw, 6rem);
  line-height: 0.95;
  letter-spacing: -0.045em;
  margin: 0 0 0.75rem;
}

.headline {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: clamp(1.35rem, 3vw, 1.85rem);
  line-height: 1.25;
  max-width: 22ch;
  margin: 0 0 1rem;
}

.support {
  max-width: 36rem;
  margin: 0 0 1.75rem;
  color: rgba(248, 250, 252, 0.86);
  font-size: 1.1rem;
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.proof-teaser {
  margin: 1.15rem 0 0;
  max-width: 36rem;
  font-size: 0.95rem;
  color: rgba(186, 230, 253, 0.95);
}
</style>
