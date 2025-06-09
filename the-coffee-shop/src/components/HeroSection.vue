<template>
  <section class="hero-section">
    <div class="container">
      <div class="hero-content">
        <h1>Welcome to The Coffee Shop</h1>
        <p>Your daily dose of warmth and flavor.</p>
        <a href="#menu" class="btn">View Our Menu</a>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script logic needed for this simple hero section yet
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables';

.hero-section {
  min-height: 100vh; // Make hero section full viewport height
  display: flex;
  align-items: center;    // Vertically center the .container
  justify-content: center; // Horizontally center the .container
  padding: $spacing-unit * 3 0; // Overall vertical padding for the section content
  background-image: url('/cafe-hero.jpg'); // Ensure this path is correct for your image in the public folder
  background-size: cover;
  background-position: center;
  position: relative; // For the ::before pseudo-element (overlay)
  color: $white; // Default text color for content inside this box
  text-align: center; // Center text elements

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba($black, 0.5); // Overlay for better text readability
    z-index: 0; // Behind the content
  }
}

// .container is globally defined in _base.scss and will constrain the hero-content width

.hero-content {
  position: relative; // To sit on top of the ::before overlay
  z-index: 1;
  // No specific width needed here, .container handles it.
  // No specific padding needed here unless you want to space it from container edges.
  // Flex properties from the old .hero-image-box are not needed here as
  // .hero-section's flex properties center the .container, and text-align centers inline content.

  h1 {
    font-size: $spacing-unit * 5; // Can be a bit larger with full bleed
    margin-top: 0;
    margin-bottom: $spacing-unit * 2;
    color: $white;
    font-family: $font-family-serif;
  }

  p {
    font-size: $spacing-unit * 2.5; // Slightly larger
    margin-bottom: $spacing-unit * 3;
    color: $accent-color-2; // Light beige text, good on dark overlay
    max-width: 650px; // Constrain line length for better readability
    margin-left: auto;
    margin-right: auto;
  }

  .btn {
    padding: $spacing-unit * 1.5 $spacing-unit * 3;
    background-color: $accent-color-1;
    color: $white;
    text-decoration: none;
    border-radius: $spacing-unit / 2;
    font-weight: bold;
    transition: background-color 0.3s ease;
    display: inline-block;

    &:hover {
      background-color: darken($accent-color-1, 10%);
    }
  }
}
</style>