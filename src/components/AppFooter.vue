<template>
  <footer class="footer">
    <div class="footer__top">
      <div class="footer__brand-col">
        <img src="/images/logo.png" alt="R.S. Thomas Hauling, Inc." class="footer__logo" />
        <p class="footer__tagline">Providing quality hauling services since 1985.</p>
        <div class="footer__badges">
          <img src="/images/swamlogo.jpg" alt="SWaM Certified — Small, Women-owned, and Minority-owned Business" class="footer__badge" />
          <img src="/images/fleetmatics.jpg" alt="Fleetmatics" class="footer__badge" />
        </div>
      </div>

      <div class="footer__contact-col">
        <div class="footer__contact-item">
          <strong>Phone</strong>
          <a href="tel:8045986292">(804) 598-6292</a>
        </div>
        <div class="footer__contact-item">
          <strong>Fax</strong>
          <span>(804) 598-6290</span>
        </div>
        <div class="footer__contact-item">
          <strong>Email</strong>
          <a href="mailto:info@rsthomashauling.com">info@rsthomashauling.com</a>
        </div>
      </div>

      <div class="footer__address-col">
        <div class="footer__contact-item">
          <strong>Address</strong>
          <span>2285 Batterson Rd<br />Powhatan, VA 23139</span>
        </div>
        <div class="footer__payment">
          <span class="footer__payment-label">We accept</span>
          <img src="/images/card-logos.png" alt="Visa and MasterCard" class="footer__payment-cards" />
        </div>
      </div>

      <div class="footer__map-col">
        <iframe
          src="https://www.google.com/maps?q=2285+Batterson+Rd,+Powhatan,+VA+23139&output=embed"
          width="100%"
          height="100%"
          style="border:0; border-radius: 6px; min-height: 200px;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="R.S. Thomas Hauling, Inc. location"
          role="region"
          aria-label="Map showing R.S. Thomas Hauling, Inc. location"
        ></iframe>
      </div>
    </div>

    <div class="footer__links-row">
      <nav class="footer__links">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About Us</router-link>
        <router-link to="/hauling">Hauling Services</router-link>
        <router-link to="/truck-repair">Truck Repair</router-link>
        <router-link to="/employment">Employment</router-link>
        <router-link to="/contact">Contact Us</router-link>
      </nav>
    </div>

    <div class="footer__bottom">
      <p>&copy; {{ currentYear }} R.S. Thomas Hauling, Inc. All rights reserved.</p>
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

  &__top {
    @include container;
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;

    @include respond-to(sm) {
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }

    @include respond-to(lg) {
      grid-template-columns: 1fr 1fr 1fr 1.2fr;
      gap: 2.5rem;
      align-items: start;
    }
  }

  &__brand-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    @include respond-to(sm) {
      grid-column: 1 / -1;
      flex-direction: row;
      align-items: center;
      text-align: left;
      gap: 1.5rem;
    }

    @include respond-to(lg) {
      grid-column: auto;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 0;
    }
  }

  &__logo {
    height: 100px;
    width: auto;
    max-width: 260px;
    object-fit: contain;
    object-position: center;
    margin-bottom: 0.75rem;
  }

  &__tagline {
    color: rgba($white, 0.7);
    font-size: 0.9rem;
    line-height: 1.5;
  }

  &__contact-col,
  &__address-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.25rem;

    @include respond-to(lg) {
      align-items: flex-start;
      text-align: left;
    }
  }

  &__contact-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.2rem;

    @include respond-to(lg) {
      align-items: flex-start;
    }

    strong {
      font-family: $font-heading;
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      color: rgba($white, 0.9);
    }

    a, span {
      color: rgba($white, 0.85);
      font-size: 0.95rem;
      line-height: 1.5;
      transition: color 0.2s ease;
    }

    a:hover {
      color: $white;
    }
  }

  &__badges {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 0.75rem;
  }

  &__badge {
    height: 60px;
    width: auto;
    border-radius: 3px;
    opacity: 0.85;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 1;
    }
  }

  &__payment {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    margin-top: 0.75rem;

    @include respond-to(lg) {
      justify-content: flex-start;
    }

    &-label {
      font-size: 0.8rem;
      color: rgba($white, 0.6);
      text-transform: uppercase;
      letter-spacing: 1px;
      font-family: $font-heading;
      font-weight: 600;
    }

    &-cards {
      height: 35px;
      width: auto;
      border-radius: 3px;
    }
  }

  &__map-col {
    display: none;

    @include respond-to(sm) {
      display: block;
      border-radius: 6px;
      overflow: hidden;
      min-height: 180px;
      grid-column: 1 / -1;
    }

    @include respond-to(lg) {
      grid-column: auto;
      min-height: 200px;
      height: 100%;
    }
  }

  &__links-row {
    @include container;
    margin-top: 2.5rem;
    padding-top: 1.25rem;
    border-top: 1px solid rgba($white, 0.12);
  }

  &__links {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;

    @include respond-to(sm) {
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
      gap: 0;
    }

    a {
      color: rgba($white, 0.7);
      font-family: $font-heading;
      font-size: 0.8rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
      transition: color 0.2s ease;
      padding: 0.25rem 1rem;

      @include respond-to(sm) {
        border-right: 1px solid rgba($white, 0.2);

        &:last-child {
          border-right: none;
        }
      }

      &:hover {
        color: $white;
      }
    }
  }

  &__bottom {
    @include container;
    margin-top: 1.25rem;
    padding: 1.25rem 0;
    text-align: center;

    p {
      font-size: 0.8rem;
      color: rgba($white, 0.5);
    }
  }
}
</style>
