<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__col">
        <div class="footer__brand">
          <span class="footer__brand-name">R.S. Thomas Hauling</span>
          <p class="footer__brand-tagline">Providing quality hauling services since 1985.</p>
        </div>
      </div>

      <div class="footer__col">
        <h4 class="footer__heading">Quick Links</h4>
        <nav class="footer__links">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About Us</router-link>
          <router-link to="/hauling">Hauling Services</router-link>
          <router-link to="/truck-repair">Truck Repair</router-link>
          <router-link to="/employment">Employment</router-link>
          <router-link to="/contact">Contact Us</router-link>
        </nav>
      </div>

      <div class="footer__col">
        <h4 class="footer__heading">Contact Info</h4>
        <div class="footer__contact">
          <a href="tel:8045986292" class="footer__contact-item">
            Phone: (804) 598-6292
          </a>
          <span class="footer__contact-item">Fax: (804) 598-6476</span>
          <a href="mailto:info@rsthomashauling.com" class="footer__contact-item">
            info@rsthomashauling.com
          </a>
          <span class="footer__contact-item">
            2285 Batterson Rd<br />
            Powhatan, VA 23139
          </span>
        </div>
      </div>
    </div>

    <div class="footer__bottom">
      <p>&copy; {{ currentYear }} R.S. Thomas Hauling. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

<style lang="scss" scoped>
@use '../assets/scss/variables' as *;
@use '../assets/scss/mixins' as *;

.footer {
  background-color: $primary-blue;
  color: $white;
  padding-top: 3rem;

  &__container {
    @include container;
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;

    @include respond-to(md) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  &__brand {
    &-name {
      font-family: $font-heading;
      font-weight: 700;
      font-size: 1.25rem;
      display: block;
      margin-bottom: 0.5rem;
    }

    &-tagline {
      color: rgba($white, 0.7);
      font-size: 0.9rem;
    }
  }

  &__heading {
    font-family: $font-heading;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: $accent-gold;
    margin-bottom: 1rem;
  }

  &__links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    a {
      color: rgba($white, 0.8);
      font-size: 0.9rem;
      transition: color 0.2s ease;

      &:hover {
        color: $accent-gold;
      }
    }
  }

  &__contact {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    &-item {
      color: rgba($white, 0.8);
      font-size: 0.9rem;
      transition: color 0.2s ease;

      &:hover {
        color: $accent-gold;
      }
    }
  }

  &__bottom {
    @include container;
    border-top: 1px solid rgba($white, 0.15);
    margin-top: 2rem;
    padding: 1.5rem 0;
    text-align: center;

    p {
      font-size: 0.85rem;
      color: rgba($white, 0.5);
    }
  }
}
</style>
