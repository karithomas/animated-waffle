<template>
  <header class="header" :class="{ 'header--scrolled': isScrolled }">
    <div class="header__container">
      <router-link to="/" class="header__logo">
        <img src="/images/logo.png" alt="R.S. Thomas Hauling, Inc." class="header__logo-img" />
      </router-link>

      <button
        ref="hamburgerBtn"
        class="header__hamburger"
        :class="{ 'header__hamburger--open': menuOpen }"
        @click="menuOpen = !menuOpen"
        :aria-expanded="menuOpen"
        aria-controls="main-nav"
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div
        v-if="menuOpen"
        class="header__overlay"
        @click="menuOpen = false"
        aria-hidden="true"
      ></div>
      <nav id="main-nav" class="header__nav" :class="{ 'header__nav--open': menuOpen }">
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
import { ref, watch, onMounted, onUnmounted } from 'vue'

const menuOpen = ref(false)
const isScrolled = ref(false)
const hamburgerBtn = ref(null)

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

function handleKeydown(e) {
  if (e.key === 'Escape' && menuOpen.value) {
    menuOpen.value = false
    hamburgerBtn.value?.focus()
  }
}

watch(menuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('keydown', handleKeydown)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<style lang="scss" scoped>
@use '../assets/scss/variables' as *;
@use '../assets/scss/mixins' as *;

.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: $white;
  color: $dark-gray;
  border-bottom: 1px solid $light-gray;
  transition: box-shadow 0.3s ease;

  &--scrolled {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
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

    &-img {
      height: 80px;
      width: auto;
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
      background-color: $dark-gray;
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

  &__overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 99;

    @include respond-to(lg) {
      display: none;
    }
  }

  &__nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 280px;
    height: 100vh;
    background-color: $white;
    display: flex;
    flex-direction: column;
    padding: 6rem 2rem 2rem;
    gap: 0.5rem;
    transition: right 0.3s ease;
    z-index: 100;
    box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);

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
      box-shadow: none;
    }

    &-link {
      padding: 0.75rem 1rem;
      font-family: $font-heading;
      font-weight: 600;
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: $primary-blue;
      border-bottom: 2px solid transparent;
      transition: color 0.2s ease, border-color 0.2s ease;

      &:hover,
      &.router-link-active {
        color: $accent-gold-text;
        border-bottom-color: $accent-gold-text;
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
