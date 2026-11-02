<script setup lang="ts">
/** Placeholders — URLs will be wired later. Clicks intentionally do nothing. */
function noop(event: Event) {
  event.preventDefault()
}
</script>

<template>
  <div class="social" role="group" aria-label="Social profiles coming soon">
    <button
      type="button"
      class="social-btn"
      aria-label="LinkedIn (link coming soon)"
      title="LinkedIn — link coming soon"
      @click="noop"
    >
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="currentColor">
        <path
          d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.05c.53-1 1.82-2.05 3.75-2.05 4.01 0 4.75 2.64 4.75 6.07V23h-4v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.49V23h-4V8.5z"
        />
      </svg>
    </button>
    <button
      type="button"
      class="social-btn"
      aria-label="Facebook (link coming soon)"
      title="Facebook — link coming soon"
      @click="noop"
    >
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="currentColor">
        <path
          d="M22 12.07C22 6.48 17.52 2 11.93 2S1.86 6.48 1.86 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.02H7.9v-2.91h2.4V9.84c0-2.37 1.41-3.68 3.57-3.68 1.03 0 2.12.18 2.12.18v2.33h-1.2c-1.18 0-1.55.73-1.55 1.48v1.78h2.64l-.42 2.91h-2.22V22c4.78-.75 8.44-4.91 8.44-9.93z"
        />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.social {
  display: inline-flex;
  gap: 0.5rem;
  align-items: center;
}

.social-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  min-width: 40px;
  min-height: 40px;
  border-radius: 999px;
  border: 1px solid currentColor;
  background: transparent;
  color: inherit;
  cursor: pointer;
  opacity: 0.85;
  transition: opacity 160ms ease, background-color 160ms ease;
}

.social-btn:hover {
  opacity: 1;
  background: rgba(255, 255, 255, 0.08);
}

.social-btn:focus-visible {
  outline: 3px solid var(--color-accent);
  outline-offset: 2px;
}
</style>
