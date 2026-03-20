<template>
  <div class="truck-repair">
    <section class="hero">
      <div class="hero__overlay">
        <h1>Heavy Truck Repair</h1>
      </div>
    </section>

    <section class="intro">
      <div class="intro__container">
        <p>
          Located in Powhatan, Virginia, R.S. Thomas Hauling, Inc. operates a full-service heavy truck
          repair facility capable of servicing most heavy trucks and trailers. From dump trucks
          to 18-wheel tractor-trailers, our team handles it all. With the latest diagnostic technology
          and ongoing training, we're able to identify and repair virtually any issue.
        </p>
        <p>
          We can also fabricate most types of hydraulic hoses. If your truck or trailer needs service,
          don't hesitate to call one of the most experienced and professional repair shops in Virginia —
          we'll get you back up and running.
        </p>
      </div>
    </section>

    <section class="services">
      <div class="services__container">
        <h2 class="section-heading">Services We Offer</h2>
        <div class="services__grid">
          <div class="services__item" v-for="service in serviceList" :key="service">
            <span class="services__check">&#10003;</span>
            <span>{{ service }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-banner">
      <div class="cta-banner__container">
        <h2>Need Truck Repair?</h2>
        <p>Contact us to schedule service for your heavy equipment.</p>
        <div class="cta-banner__actions">
          <a href="tel:8045986292" class="btn btn--primary">Call Now</a>
          <router-link to="/contact" class="btn btn--outline">Schedule Service</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const serviceList = [
  'Clutches',
  'Differentials',
  'Transmissions',
  'Lift Axle Repair',
  'Hydraulic Repair',
  'Tire Repair',
  'Welding Steel & Aluminum',
  'Brake Service',
  'Other Services'
]
</script>

<style lang="scss" scoped>
@use '../assets/scss/variables' as *;
@use '../assets/scss/mixins' as *;

.hero {
  min-height: 40vh;
  background-color: $primary-blue;
  background-image: url('/images/hero-repair.svg');
  background-size: cover;
  background-position: center;
  display: flex;

  &__overlay {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba($primary-blue, 0.7);
    color: $white;
    text-align: center;
    padding: 2rem;
  }
}

.intro {
  @include section-padding;

  &__container {
    @include container;
    max-width: 800px;

    p {
      color: $dark-gray;
      font-size: 1.05rem;
      line-height: 1.8;
      margin-bottom: 1.5rem;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

.services {
  @include section-padding;
  background-color: $light-gray;

  &__container {
    @include container;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;

    @include respond-to(sm) {
      grid-template-columns: 1fr 1fr;
    }

    @include respond-to(lg) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background: $white;
    padding: 1.25rem 1.5rem;
    border-radius: 8px;
    font-size: 1.05rem;
    color: $dark-gray;
  }

  &__check {
    color: $accent-gold-text;
    font-weight: 700;
    font-size: 1.2rem;
    flex-shrink: 0;
  }
}

.extras {
  @include section-padding;

  &__container {
    @include container;
    max-width: 800px;

    p {
      color: $dark-gray;
      font-size: 1.05rem;
      line-height: 1.8;
    }
  }
}

.cta-banner {
  @include section-padding;
  background-color: #2A5080;
  text-align: center;
  color: $white;

  &__container {
    @include container;

    h2 { margin-bottom: 0.5rem; }

    p {
      font-size: 1.1rem;
      margin-bottom: 1.5rem;
      color: rgba($white, 0.9);
    }
  }

  &__actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>
