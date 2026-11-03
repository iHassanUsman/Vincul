<script setup lang="ts">
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import PainPointsSection from './components/PainPointsSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import ProofSection from './components/ProofSection.vue'
import ArchitectureSection from './components/ArchitectureSection.vue'
import HowSection from './components/HowSection.vue'
import TimelineSection from './components/TimelineSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import IndustriesSection from './components/IndustriesSection.vue'
import SecuritySection from './components/SecuritySection.vue'
import EngagementSection from './components/EngagementSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <a class="skip-link" href="#problems">Skip to content</a>
  <SiteHeader />
  <main>
    <HeroSection />
    <PainPointsSection />
    <ServicesSection />
    <ProofSection />
    <ArchitectureSection />
    <HowSection />
    <TimelineSection />
    <ExperienceSection />
    <IndustriesSection />
    <SecuritySection />
    <EngagementSection />
    <ContactSection />
  </main>
  <SiteFooter />
</template>
