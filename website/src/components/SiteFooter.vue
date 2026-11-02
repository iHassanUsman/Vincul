<script setup lang="ts">
import SocialLinks from './SocialLinks.vue'
</script>

<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div class="top">
        <div>
          <p class="brand">Vincul</p>
          <p class="meta">AI automation bonded to existing systems · Remote global</p>
        </div>
        <SocialLinks />
      </div>
      <a href="mailto:hello@vincul.ai">hello@vincul.ai</a>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #020617;
  color: rgba(248, 250, 252, 0.75);
  padding: 2rem 0;
  font-size: 0.95rem;
}

.footer-inner {
  display: grid;
  gap: 1rem;
}

.top {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.brand {
  font-family: var(--font-display);
  font-weight: 700;
  color: #fff;
  margin: 0;
}

.meta {
  margin: 0.35rem 0 0;
}

a {
  color: var(--color-accent-soft);
  width: fit-content;
}
</style>
