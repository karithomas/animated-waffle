<template>
  <div id="app-wrapper">
    <a href="#main-content" class="skip-link">Skip to main content</a>
    <AppHeader />
    <main id="main-content">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
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
</style>
