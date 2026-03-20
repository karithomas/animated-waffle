<template>
  <div class="hauling">
    <section class="hero">
      <div class="hero__overlay">
        <h1>Hauling Services</h1>
      </div>
    </section>

    <section class="materials">
      <div class="materials__container">
        <h2 class="section-heading">What We Haul</h2>
        <div class="materials__grid">
          <div class="materials__item" v-for="material in materials" :key="material">
            <h3>{{ material }}</h3>
          </div>
        </div>
      </div>
    </section>

    <section class="fleet">
      <div class="fleet__container">
        <h2 class="section-heading" style="color: #fff">Our Fleet</h2>
        <div class="fleet__stats">
          <div class="fleet__stat">
            <span class="fleet__stat-number">30+</span>
            <span class="fleet__stat-label">Dump Trucks</span>
          </div>
          <div class="fleet__stat">
            <span class="fleet__stat-number">6</span>
            <span class="fleet__stat-label">Aluminum Trailers</span>
          </div>
          <div class="fleet__stat">
            <span class="fleet__stat-number">11</span>
            <span class="fleet__stat-label">Hardox Steel Trailers</span>
          </div>
        </div>
        <p class="fleet__detail">All trucks equipped with hydraulic high-lift tailgates for efficient unloading.</p>
      </div>
    </section>

    <section class="use-cases">
      <div class="use-cases__container">
        <h2 class="section-heading">Projects We Handle</h2>
        <ul class="use-cases__list">
          <li>Landfill cell construction</li>
          <li>Road construction and maintenance</li>
          <li>Large site development projects</li>
          <li>Material stockpiling</li>
        </ul>
      </div>
    </section>

    <section class="cta-banner">
      <div class="cta-banner__container">
        <h2>Ready to Get Started?</h2>
        <p>Contact us for a free quote on your next hauling project.</p>
        <router-link to="/contact" class="btn btn--primary">Get a Quote</router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
const materials = [
  'Dirt',
  'Stone',
  'Sand',
  'Rip Rap — Class 1',
  'Rip Rap — Class 2',
  'Rip Rap — Class 3',
  'Armor Stone',
  'Other Aggregates'
]
</script>

<style lang="scss" scoped>
@use '../assets/scss/variables' as *;
@use '../assets/scss/mixins' as *;

.hero {
  min-height: 40vh;
  background-color: $primary-blue;
  background-image: url('/images/hero-hauling.svg');
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

.materials {
  @include section-padding;

  &__container {
    @include container;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    @include respond-to(md) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  &__item {
    background: $light-gray;
    padding: 1.5rem;
    border-radius: 8px;
    text-align: center;
    border-left: 4px solid $accent-gold;

    h3 {
      font-size: 1rem;
      color: $primary-blue;
    }
  }
}

.fleet {
  @include section-padding;
  background-color: $primary-blue;
  color: $white;

  &__container {
    @include container;
    text-align: center;
  }

  &__stats {
    display: flex;
    justify-content: center;
    gap: 3rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
  }

  &__stat {
    &-number {
      display: block;
      font-family: $font-heading;
      font-weight: 700;
      font-size: 2.5rem;
      color: $accent-gold;
    }

    &-label {
      font-family: $font-heading;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: rgba($white, 0.85);
      font-size: 0.9rem;
    }
  }

  &__detail {
    color: rgba($white, 0.85);
    font-size: 1.05rem;
  }
}

.use-cases {
  @include section-padding;

  &__container {
    @include container;
    text-align: center;
  }

  &__list {
    max-width: 500px;
    margin: 0 auto;

    li {
      padding: 0.75rem 0;
      border-bottom: 1px solid $light-gray;
      color: $dark-gray;
      font-size: 1.05rem;

      &:last-child {
        border-bottom: none;
      }
    }
  }
}

.cta-banner {
  @include section-padding;
  background-color: $primary-blue;
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
}
</style>
