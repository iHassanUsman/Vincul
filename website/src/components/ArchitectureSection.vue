<script setup lang="ts">
import { motion } from 'motion-v'

const reduce =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches
</script>

<template>
  <section id="architecture" class="section architecture" aria-labelledby="architecture-title">
    <div class="container">
      <motion.div
        :initial="reduce ? false : { opacity: 0, y: 20 }"
        :whileInView="{ opacity: 1, y: 0 }"
        :inViewOptions="{ once: true, amount: 0.2 }"
        :transition="{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }"
      >
        <p class="section-kicker">Architecture</p>
        <h2 id="architecture-title" class="section-title">How we wire AI into your stack</h2>
        <p class="section-lead">
          Simple diagrams of the patterns we implement — Spring Boot orchestration, CRM tools, staged JDK
          upgrades, and booking/invoice automation examples.
        </p>
      </motion.div>

      <div class="diagrams">
        <figure>
          <figcaption>CRM AI chatbot (Spring Boot + Angular/Vue)</figcaption>
          <svg
            class="diagram"
            viewBox="0 0 640 220"
            role="img"
            aria-label="User widget to Spring Boot AI layer to CRM APIs"
          >
            <rect width="640" height="220" fill="#0f172a" rx="8" />
            <rect x="24" y="70" width="120" height="64" rx="6" fill="#0369a1" />
            <text x="84" y="100" text-anchor="middle" fill="#fff" font-size="13" font-family="Source Sans 3, sans-serif">
              User / widget
            </text>
            <text x="84" y="118" text-anchor="middle" fill="#bae6fd" font-size="11" font-family="Source Sans 3, sans-serif">
              Angular / Vue
            </text>
            <path d="M150 102 H210" stroke="#7dd3fc" stroke-width="2" marker-end="url(#arrow)" />
            <rect x="220" y="50" width="170" height="104" rx="6" fill="#1e293b" stroke="#7dd3fc" />
            <text x="305" y="78" text-anchor="middle" fill="#fff" font-size="13" font-family="Source Sans 3, sans-serif">
              Spring Boot AI layer
            </text>
            <text x="305" y="98" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="Source Sans 3, sans-serif">
              session · tools · audit
            </text>
            <text x="305" y="118" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="Source Sans 3, sans-serif">
              model gateway
            </text>
            <text x="305" y="138" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="Source Sans 3, sans-serif">
              escalate to human
            </text>
            <path d="M396 102 H450" stroke="#7dd3fc" stroke-width="2" />
            <rect x="460" y="36" width="150" height="50" rx="6" fill="#334155" />
            <text x="535" y="66" text-anchor="middle" fill="#fff" font-size="12" font-family="Source Sans 3, sans-serif">
              CRM APIs
            </text>
            <rect x="460" y="100" width="150" height="50" rx="6" fill="#334155" />
            <text x="535" y="130" text-anchor="middle" fill="#fff" font-size="12" font-family="Source Sans 3, sans-serif">
              Booking / billing
            </text>
            <rect x="460" y="164" width="150" height="36" rx="6" fill="#334155" />
            <text x="535" y="187" text-anchor="middle" fill="#fff" font-size="12" font-family="Source Sans 3, sans-serif">
              Audit log
            </text>
            <path d="M545 86 V100" stroke="#7dd3fc" stroke-width="2" />
            <defs>
              <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#7dd3fc" />
              </marker>
            </defs>
          </svg>
        </figure>

        <figure>
          <figcaption>Java upgrade path (staged, production-safe)</figcaption>
          <svg
            class="diagram"
            viewBox="0 0 640 160"
            role="img"
            aria-label="Java 8 to 11 to 17 to 21 to 24 upgrade stages"
          >
            <rect width="640" height="160" fill="#0f172a" rx="8" />
            <g v-for="(jdk, i) in ['8', '11', '17', '21', '24']" :key="jdk">
              <circle :cx="70 + i * 125" cy="70" r="28" :fill="i === 4 ? '#0369a1' : '#1e293b'" stroke="#7dd3fc" />
              <text
                :x="70 + i * 125"
                y="75"
                text-anchor="middle"
                fill="#fff"
                font-size="14"
                font-family="Syne, sans-serif"
                font-weight="700"
              >
                {{ jdk }}
              </text>
              <path
                v-if="i < 4"
                :d="`M${98 + i * 125} 70 H${167 + i * 125}`"
                stroke="#7dd3fc"
                stroke-width="2"
              />
            </g>
            <text x="320" y="130" text-anchor="middle" fill="#94a3b8" font-size="12" font-family="Source Sans 3, sans-serif">
              Inventory → CI matrix → library upgrades → soak → canary → rollback ready
            </text>
          </svg>
        </figure>

        <figure>
          <figcaption>Booking &amp; invoice automation example (ops pattern)</figcaption>
          <svg
            class="diagram"
            viewBox="0 0 640 180"
            role="img"
            aria-label="Request to rules to systems to notify flow"
          >
            <rect width="640" height="180" fill="#0f172a" rx="8" />
            <rect x="20" y="60" width="110" height="56" rx="6" fill="#0369a1" />
            <text x="75" y="93" text-anchor="middle" fill="#fff" font-size="12" font-family="Source Sans 3, sans-serif">
              Request in
            </text>
            <path d="M136 88 H180" stroke="#7dd3fc" stroke-width="2" />
            <rect x="186" y="50" width="130" height="76" rx="6" fill="#1e293b" stroke="#7dd3fc" />
            <text x="251" y="80" text-anchor="middle" fill="#fff" font-size="12" font-family="Source Sans 3, sans-serif">
              Rules / agent
            </text>
            <text x="251" y="100" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="Source Sans 3, sans-serif">
              + human override
            </text>
            <path d="M322 88 H366" stroke="#7dd3fc" stroke-width="2" />
            <rect x="372" y="36" width="120" height="44" rx="6" fill="#334155" />
            <text x="432" y="63" text-anchor="middle" fill="#fff" font-size="12" font-family="Source Sans 3, sans-serif">
              Calendar
            </text>
            <rect x="372" y="92" width="120" height="44" rx="6" fill="#334155" />
            <text x="432" y="119" text-anchor="middle" fill="#fff" font-size="12" font-family="Source Sans 3, sans-serif">
              Invoicing
            </text>
            <path d="M498 88 H534" stroke="#7dd3fc" stroke-width="2" />
            <rect x="540" y="60" width="80" height="56" rx="6" fill="#0369a1" />
            <text x="580" y="93" text-anchor="middle" fill="#fff" font-size="12" font-family="Source Sans 3, sans-serif">
              Notify
            </text>
            <text x="320" y="160" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="Source Sans 3, sans-serif">
              Example pattern for clinics or logistics ops — adapted from scheduling/API delivery experience
            </text>
          </svg>
        </figure>
      </div>
    </div>
  </section>
</template>

<style scoped>
.architecture {
  background: linear-gradient(180deg, #eef2f7 0%, var(--color-background) 100%);
}

.diagrams {
  margin-top: 2.5rem;
  display: grid;
  gap: 1.75rem;
}

figure {
  margin: 0;
}

figcaption {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.05rem;
  margin-bottom: 0.65rem;
  color: var(--color-primary);
}

.diagram {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 0.35rem;
}
</style>
