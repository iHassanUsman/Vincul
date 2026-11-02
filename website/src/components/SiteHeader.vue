<script setup lang="ts">
import SocialLinks from './SocialLinks.vue'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#proof', label: 'Proof' },
  { href: '#architecture', label: 'Architecture' },
  { href: '#timeline', label: 'Timeline' },
  { href: '#security', label: 'Security' },
  { href: '#engagement', label: 'Pricing' },
  { href: '#contact', label: 'Contact' },
]
</script>

<template>
  <header class="header">
    <div class="container header-inner">
      <a class="logo" href="#top" aria-label="Vincul home">Vincul</a>
      <nav class="nav" aria-label="Primary">
        <a v-for="link in links" :key="link.href" :href="link.href">{{ link.label }}</a>
      </nav>
      <div class="header-actions">
        <div class="header-social">
          <SocialLinks />
        </div>
        <a class="btn btn-dark header-cta" href="mailto:hello@vincul.ai">hello@vincul.ai</a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  height: var(--header-h);
  backdrop-filter: blur(12px);
  background: rgba(248, 250, 252, 0.88);
  border-bottom: 1px solid var(--color-border);
  color: var(--color-primary);
}

.header-inner {
  height: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 1.35rem;
  letter-spacing: -0.03em;
  color: var(--color-primary);
  text-decoration: none;
}

.nav {
  display: none;
  gap: 1rem;
  margin-left: auto;
  margin-right: 0.75rem;
}

.nav a {
  text-decoration: none;
  color: var(--color-secondary);
  font-weight: 500;
  font-size: 0.88rem;
}

.nav a:hover {
  color: var(--color-accent);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin-left: auto;
}

.header-social {
  display: none;
}

.header-cta {
  padding-inline: 1rem;
  font-size: 0.9rem;
}

@media (min-width: 1100px) {
  .nav {
    display: flex;
  }

  .header-social {
    display: block;
  }

  .header-actions {
    margin-left: 0;
  }
}
</style>
