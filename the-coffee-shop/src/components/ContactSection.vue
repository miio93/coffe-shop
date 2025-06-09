<template>
  <section id="contact" class="content-section">
    <div class="container">
      <h2>Contact Us</h2>
      <p>Visit us at 123 Coffee Lane, Flavor Town, or get in touch:</p>
      <ul class="contact-details">
        <li>Phone: (555) 123-4567</li>
        <li>Email: hello@thecoffeeshop.com</li>
      </ul>

      <div class="social-media-links">
        <p>Follow our journey and see what's brewing!</p>
        <div class="icon-container">
          <a @click="openModal('Instagram', $event)" href="#" class="social-icon" aria-label="Visit our Instagram page">
            <!-- Instagram SVG Icon -->
            <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.74 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.74 0 12c0 3.259.014 3.667.072 4.947.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.74 24 12 24c3.259 0 3.667-.014 4.947-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.687.073-4.947 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.26 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.805a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
          <a @click="openModal('Facebook', $event)" href="#" class="social-icon" aria-label="Visit our Facebook page">
            <!-- Facebook SVG Icon -->
            <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
              <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.088h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- You could embed a map here later -->
    </div>

    <!-- Modal -->
    <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <button @click="closeModal" class="modal-close-button" aria-label="Close modal">&times;</button>
        <p>{{ modalMessage }}</p>
        <button @click="redirectToSocial" class="btn modal-action-button">Yes, let's go!</button>
        <button @click="closeModal" class="btn btn-secondary modal-action-button">Maybe later</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const showModal = ref(false);
const modalMessage = ref('');
const currentPlatform = ref('');

const platformMessages = {
  Instagram: "Heads up! We're about to whisk you away to our Instagram page. Ready to see more?",
  Facebook: "Just a friendly note! Clicking this will take you to our Facebook world. Shall we go?",
};

const platformLinks = {
  Instagram: "https://www.instagram.com", // Replace with your actual Instagram link
  Facebook: "https://www.facebook.com",   // Replace with your actual Facebook link
};

const openModal = (platform, event) => {
  if (event) {
    event.preventDefault();
  }
  currentPlatform.value = platform;
  modalMessage.value = platformMessages[platform] || "You're about to visit our social media page!";
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const redirectToSocial = () => {
  const url = platformLinks[currentPlatform.value];
  if (url) {
    window.open(url, '_blank'); // Opens in a new tab
  }
  closeModal();
};

</script>

<style lang="scss" scoped>
@import '../assets/scss/variables';

.content-section {
  padding: $spacing-unit * 6 0;
  h2 {
    text-align: center;
    margin-bottom: $spacing-unit * 4;
  }
  .contact-details { // Changed from direct ul to class
    list-style: none;
    text-align: center;
    li {
      margin-bottom: $spacing-unit;
      font-size: $spacing-unit * 2; // 16px
      color: $primary-text;
    }
  }
}

.social-media-links {
  text-align: center;
  margin-top: $spacing-unit * 4;
  p {
    margin-bottom: $spacing-unit * 2;
    font-size: $spacing-unit * 2;
    color: darken($primary-text, 5%);
  }
  .icon-container {
    display: flex;
    justify-content: center;
    gap: $spacing-unit * 3;
  }
  .social-icon {
    color: $primary-text;
    transition: color 0.3s ease, transform 0.3s ease;
    &:hover {
      color: $accent-color-1;
      transform: scale(1.1);
    }
    svg {
      display: block; // Removes extra space below inline SVGs
    }
  }
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba($black, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000; // Ensure it's above other content like navbar
}

.modal-content {
  background-color: $primary-bg;
  padding: $spacing-unit * 4 $spacing-unit * 5;
  border-radius: $spacing-unit;
  box-shadow: 0 5px 15px rgba($black, 0.3);
  text-align: center;
  max-width: 400px;
  width: 90%;
  position: relative;

  p {
    font-size: $spacing-unit * 2.25; // 18px
    color: $primary-text;
    margin-bottom: $spacing-unit * 3;
    line-height: 1.6;
  }
}

.modal-close-button {
  position: absolute;
  top: $spacing-unit * 1.5;
  right: $spacing-unit * 1.5;
  background: none;
  border: none;
  font-size: $spacing-unit * 3.5; // 28px
  color: $primary-text;
  cursor: pointer;
  line-height: 1;
  padding: $spacing-unit * 0.5;
  &:hover {
    color: darken($primary-text, 20%);
  }
}

.modal-action-button {
  margin: ($spacing-unit * 1) ($spacing-unit * 0.5);
  padding: $spacing-unit * 1.25 $spacing-unit * 2.5;
  font-size: $spacing-unit * 1.85; // ~15px
}

// General button style (if not already globally defined or if you need to override)
.btn {
  padding: $spacing-unit * 1.5 $spacing-unit * 3;
  background-color: $accent-color-1;
  color: $white;
  text-decoration: none;
  border: none;
  border-radius: $spacing-unit / 2;
  font-weight: bold;
  transition: background-color 0.3s ease;
  cursor: pointer;
  display: inline-block;

  &:hover {
    background-color: darken($accent-color-1, 10%);
  }

  &.btn-secondary {
    background-color: $accent-color-2;
    color: $primary-text;
    &:hover {
      background-color: darken($accent-color-2, 10%);
    }
  }
}
</style>
