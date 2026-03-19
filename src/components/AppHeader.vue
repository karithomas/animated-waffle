<template>
  <header class="header" :class="{ 'header--scrolled': isScrolled }">
    <div class="header__container">
      <router-link to="/" class="header__logo">
        <span class="header__logo-text">R.S. Thomas</span>
        <span class="header__logo-sub">Hauling</span>
      </router-link>

      <a href="tel:8045986292" class="header__phone">
        <svg class="header__phone-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.01-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.1.31.03.66-.25 1.02l-2.2 2.2z"/>
        </svg>
        (804) 598-6292
      </a>

      <button
        class="header__hamburger"
        :class="{ 'header__hamburger--open': menuOpen }"
        @click="menuOpen = !menuOpen"
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav class="header__nav" :class="{ 'header__nav--open': menuOpen }">
        <router-link
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="header__nav-link"
          @click="menuOpen = false"
        >
          {{ link.label }}
        </router-link>
        <a href="tel:8045986292" class="btn btn--primary header__nav-cta">Call Now</a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const menuOpen = ref(false)
const isScrolled = ref(false)

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/hauling', label: 'Hauling' },
  { to: '/truck-repair', label: 'Truck Repair' },
  { to: '/employment', label: 'Employment' },
  { to: '/contact', label: 'Contact' }
]

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style lang="scss" scoped>
@use '../assets/scss/variables' as *;
@use '../assets/scss/mixins' as *;

.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: $primary-blue;
  color: $white;
  transition: box-shadow 0.3s ease;

  &--scrolled {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }

  &__container {
    @include container;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: $header-height;
  }

  &__logo {
    display: flex;
    flex-direction: column;
    line-height: 1.1;

    &-text {
      font-family: $font-heading;
      font-weight: 700;
      font-size: 1.25rem;
    }

    &-sub {
      font-family: $font-heading;
      font-weight: 600;
      font-size: 0.85rem;
      color: $accent-gold;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
  }

  &__phone {
    display: none;
    align-items: center;
    gap: 0.5rem;
    font-family: $font-heading;
    font-weight: 600;
    font-size: 1.1rem;
    color: $accent-gold;

    @include respond-to(md) {
      display: flex;
    }

    &:hover {
      color: $white;
    }

    &-icon {
      flex-shrink: 0;
    }
  }

  &__hamburger {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    z-index: 101;

    @include respond-to(lg) {
      display: none;
    }

    span {
      display: block;
      width: 24px;
      height: 2px;
      background-color: $white;
      transition: transform 0.3s ease, opacity 0.3s ease;
    }

    &--open span:nth-child(1) {
      transform: translateY(7px) rotate(45deg);
    }
    &--open span:nth-child(2) {
      opacity: 0;
    }
    &--open span:nth-child(3) {
      transform: translateY(-7px) rotate(-45deg);
    }
  }

  &__nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 280px;
    height: 100vh;
    background-color: $primary-blue;
    display: flex;
    flex-direction: column;
    padding: 6rem 2rem 2rem;
    gap: 0.5rem;
    transition: right 0.3s ease;
    z-index: 100;

    &--open {
      right: 0;
    }

    @include respond-to(lg) {
      position: static;
      width: auto;
      height: auto;
      flex-direction: row;
      align-items: center;
      padding: 0;
      gap: 0;
    }

    &-link {
      padding: 0.75rem 1rem;
      font-family: $font-heading;
      font-weight: 600;
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      border-bottom: 2px solid transparent;
      transition: color 0.2s ease, border-color 0.2s ease;

      &:hover,
      &.router-link-active {
        color: $accent-gold;
        border-bottom-color: $accent-gold;
      }
    }

    &-cta {
      margin-top: 1rem;
      text-align: center;

      @include respond-to(lg) {
        margin-top: 0;
        margin-left: 1rem;
      }
    }
  }
}
</style>
