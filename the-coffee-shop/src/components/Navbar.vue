<template>
  <nav class="navbar">
    <div class="container navbar-content">
      <a href="/" class="navbar-logo">
        <svg class="logo-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
          <line x1="6" y1="1" x2="6" y2="4"></line>
          <line x1="10" y1="1" x2="10" y2="4"></line>
          <line x1="14" y1="1" x2="14" y2="4"></line>
        </svg>
        <span>The Coffee Shop</span>
      </a>
      <ul class="navbar-links">
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
// No script logic needed for this simple navbar yet
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables';

.navbar {
  background-color: $primary-bg;
  padding: $spacing-unit * 2 0;
  border-bottom: 1px solid $accent-color-2;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba($black, 0.05);

  .navbar-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .navbar-logo {
    display: flex;
    align-items: center;
    font-size: $spacing-unit * 2.5;
    font-weight: bold;
    color: $primary-text;
    text-decoration: none;
    font-family: $font-family-serif; // Giving the logo a distinct look

    .logo-icon {
      margin-right: $spacing-unit;
      // The SVG's stroke is set to "currentColor", so it will inherit the $primary-text color.
      // Adjust size if needed via width/height attributes on the svg tag itself or here.
    }
  }

  .navbar-links {
    list-style: none;
    display: flex;
    gap: $spacing-unit * 3;

    li {
      a {
        color: $primary-text;
        text-decoration: none;
        font-weight: 500;
        padding: $spacing-unit $spacing-unit * 1.5;
        border-radius: $spacing-unit / 2;
        transition: background-color 0.3s ease, color 0.3s ease;

        &:hover {
          color: $white;
          background-color: $accent-color-1;
          text-decoration: none;
        }
      }
    }
  }
}
</style>
