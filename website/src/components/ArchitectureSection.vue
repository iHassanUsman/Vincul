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
        <p class="section-kicker">How it works</p>
        <h2 id="architecture-title" class="section-title">AI on your tools — any domain</h2>
        <p class="section-lead">
          Stack-agnostic patterns: chat and agents in your CRM, safe platform upgrades when you need them, and
          automation for whatever repetitive work is burning hours.
        </p>
      </motion.div>

      <div class="diagrams">
        <figure>
          <figcaption>AI assistant inside your existing systems</figcaption>
          <svg
            class="diagram"
            viewBox="0 0 640 220"
            role="img"
            aria-label="User to AI layer to business systems"
          >
            <rect width="640" height="220" fill="#0f172a" rx="8" />
            <rect x="24" y="70" width="120" height="64" rx="6" fill="#0369a1" />
            <text x="84" y="100" text-anchor="middle" fill="#fff" font-size="13" font-family="Source Sans 3, sans-serif">
              Your users
            </text>
            <text x="84" y="118" text-anchor="middle" fill="#bae6fd" font-size="11" font-family="Source Sans 3, sans-serif">
              chat · voice · app
            </text>
            <path d="M150 102 H210" stroke="#7dd3fc" stroke-width="2" />
            <rect x="220" y="50" width="170" height="104" rx="6" fill="#1e293b" stroke="#7dd3fc" />
            <text x="305" y="78" text-anchor="middle" fill="#fff" font-size="13" font-family="Source Sans 3, sans-serif">
              Vincul AI layer
            </text>
            <text x="305" y="98" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="Source Sans 3, sans-serif">
              understand · decide
            </text>
            <text x="305" y="118" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="Source Sans 3, sans-serif">
              act with tools
            </text>
            <text x="305" y="138" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="Source Sans 3, sans-serif">
              human when needed
            </text>
            <path d="M396 102 H450" stroke="#7dd3fc" stroke-width="2" />
            <rect x="460" y="36" width="150" height="50" rx="6" fill="#334155" />
            <text x="535" y="66" text-anchor="middle" fill="#fff" font-size="12" font-family="Source Sans 3, sans-serif">
              CRM / ERP
            </text>
            <rect x="460" y="100" width="150" height="50" rx="6" fill="#334155" />
            <text x="535" y="130" text-anchor="middle" fill="#fff" font-size="12" font-family="Source Sans 3, sans-serif">
              Your apps &amp; data
            </text>
            <rect x="460" y="164" width="150" height="36" rx="6" fill="#334155" />
            <text x="535" y="187" text-anchor="middle" fill="#fff" font-size="12" font-family="Source Sans 3, sans-serif">
              Audit trail
            </text>
            <path d="M545 86 V100" stroke="#7dd3fc" stroke-width="2" />
          </svg>
        </figure>

        <figure>
          <figcaption>Safe platform upgrades (when legacy is the blocker)</figcaption>
          <p class="diagram-note">
            Purpose: upgrade live systems in small, reversible steps so production stays online — find risks first,
            prove each stage in CI and staging, release to a small slice of traffic, keep a rollback ready.
          </p>
          <svg
            class="diagram"
            viewBox="0 0 640 160"
            role="img"
            aria-label="Staged upgrade from legacy to modern"
          >
            <rect width="640" height="160" fill="#0f172a" rx="8" />
            <g v-for="(step, i) in ['Map', 'Test', 'Upgrade', 'Soak', 'Go live']" :key="step">
              <circle :cx="70 + i * 125" cy="70" r="28" :fill="i === 4 ? '#0369a1' : '#1e293b'" stroke="#7dd3fc" />
              <text
                :x="70 + i * 125"
                y="75"
                text-anchor="middle"
                fill="#fff"
                font-size="12"
                font-family="Syne, sans-serif"
                font-weight="700"
              >
                {{ step }}
              </text>
              <path
                v-if="i < 4"
                :d="`M${98 + i * 125} 70 H${167 + i * 125}`"
                stroke="#7dd3fc"
                stroke-width="2"
              />
            </g>
            <text x="320" y="130" text-anchor="middle" fill="#94a3b8" font-size="12" font-family="Source Sans 3, sans-serif">
              Find risks → prove in CI → upgrade libraries → soak in staging → canary release → rollback ready
            </text>
          </svg>
        </figure>

        <figure>
          <figcaption>Any repetitive task → AI workflow</figcaption>
          <svg
            class="diagram"
            viewBox="0 0 640 180"
            role="img"
            aria-label="Repetitive task to AI agent to systems to notify"
          >
            <rect width="640" height="180" fill="#0f172a" rx="8" />
            <rect x="20" y="60" width="110" height="56" rx="6" fill="#0369a1" />
            <text x="75" y="85" text-anchor="middle" fill="#fff" font-size="12" font-family="Source Sans 3, sans-serif">
              Time-consuming
            </text>
            <text x="75" y="103" text-anchor="middle" fill="#bae6fd" font-size="11" font-family="Source Sans 3, sans-serif">
              task / request
            </text>
            <path d="M136 88 H180" stroke="#7dd3fc" stroke-width="2" />
            <rect x="186" y="50" width="130" height="76" rx="6" fill="#1e293b" stroke="#7dd3fc" />
            <text x="251" y="80" text-anchor="middle" fill="#fff" font-size="12" font-family="Source Sans 3, sans-serif">
              AI agent
            </text>
            <text x="251" y="100" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="Source Sans 3, sans-serif">
              + human approve
            </text>
            <path d="M322 88 H366" stroke="#7dd3fc" stroke-width="2" />
            <rect x="372" y="36" width="120" height="44" rx="6" fill="#334155" />
            <text x="432" y="63" text-anchor="middle" fill="#fff" font-size="12" font-family="Source Sans 3, sans-serif">
              Your tools
            </text>
            <rect x="372" y="92" width="120" height="44" rx="6" fill="#334155" />
            <text x="432" y="119" text-anchor="middle" fill="#fff" font-size="12" font-family="Source Sans 3, sans-serif">
              Records update
            </text>
            <path d="M498 88 H534" stroke="#7dd3fc" stroke-width="2" />
            <rect x="540" y="60" width="80" height="56" rx="6" fill="#0369a1" />
            <text x="580" y="93" text-anchor="middle" fill="#fff" font-size="12" font-family="Source Sans 3, sans-serif">
              Done
            </text>
            <text x="320" y="160" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="Source Sans 3, sans-serif">
              Sales · support · ops · finance · admin — same pattern across domains
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

.diagram-note {
  margin: 0 0 0.75rem;
  color: var(--color-muted-foreground);
  font-size: 0.98rem;
  max-width: 52rem;
}

.diagram {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 0.35rem;
}
</style>
