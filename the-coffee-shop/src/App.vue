<template>
  <div id="app-wrapper">
    <Navbar />
    <main>
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <ContactSection />
    </main>
    <footer class="app-footer">
      <div class="container">
        <p>&copy; {{ new Date().getFullYear() }} The Coffee Shop. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import HeroSection from './components/HeroSection.vue';
import AboutSection from './components/AboutSection.vue';
import MenuSection from './components/MenuSection.vue';
import ContactSection from './components/ContactSection.vue';
</script>

<style lang="scss">
// Global styles specific to App.vue or for overriding if needed
// Note: _base.scss and _typography.scss are already imported globally via main.js
@import './assets/scss/variables';

#app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1;
}

.app-footer {
  background-color: $primary-text;
  color: $primary-bg;
  padding: $spacing-unit * 3 0;
  text-align: center;
  font-size: $spacing-unit * 1.75;
}
</style>