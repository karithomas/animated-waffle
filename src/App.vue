<template>
  <div id="app-wrapper">
    <a href="#main-content" class="skip-link">Skip to main content</a>
    <div class="hiring-banner" v-if="showBanner">
      <div class="hiring-banner__content">
        <span class="hiring-banner__text">
          <strong>Now Hiring!</strong> We're looking for experienced CDL drivers.
        </span>
        <router-link to="/hiring" class="hiring-banner__link">Learn More &rarr;</router-link>
      </div>
      <button
        class="hiring-banner__close"
        @click="showBanner = false"
        aria-label="Dismiss hiring banner"
      >&times;</button>
    </div>
    <AppHeader />
    <main id="main-content">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

const showBanner = ref(true)
</script>

<style lang="scss">
@use './assets/scss/variables' as *;

#app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  main {
    flex: 1;
  }
}

.skip-link {
  position: absolute;
  top: -100%;
  left: 1rem;
  z-index: 200;
  padding: 0.75rem 1.5rem;
  background-color: $primary-blue;
  color: #fff;
  font-weight: 600;
  border-radius: 0 0 4px 4px;
  text-decoration: none;

  &:focus {
    top: 0;
  }
}

.hiring-banner {
  background-color: $accent-gold;
  color: $dark-gray;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 1rem;
  position: relative;
  z-index: 99;

  &__content {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  &__text {
    font-family: $font-body;
    font-size: 0.9rem;

    strong {
      font-family: $font-heading;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }

  &__link {
    font-family: $font-heading;
    font-weight: 700;
    font-size: 0.85rem;
    color: $dark-gray;
    text-decoration: underline;
    white-space: nowrap;

    &:hover {
      color: $primary-blue;
    }

    &:focus-visible {
      outline: 2px solid $dark-gray;
      outline-offset: 2px;
    }
  }

  &__close {
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    font-size: 1.25rem;
    color: $dark-gray;
    cursor: pointer;
    padding: 0.25rem 0.5rem;
    line-height: 1;
    opacity: 0.7;

    &:hover {
      opacity: 1;
    }

    &:focus-visible {
      outline: 2px solid $dark-gray;
      outline-offset: 2px;
      opacity: 1;
    }
  }
}
</style>
