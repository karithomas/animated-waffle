<template>
  <div class="truck-repair">
    <section class="hero">
      <div class="hero__overlay">
        <h1>Heavy Truck Repair</h1>
      </div>
    </section>

    <section class="services">
      <div class="services__container">
        <h2 class="section-heading">What We Service</h2>
        <div class="services__grid">
          <div class="services__card" v-for="service in services" :key="service.title">
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="facility">
      <div class="facility__container">
        <h2 class="section-heading">Our Facility</h2>
        <p>
          Our full-service repair shop is equipped to handle everything from routine maintenance to major overhauls.
          Our experienced, trained technicians keep your heavy equipment running at peak performance.
        </p>
      </div>
    </section>

    <section class="cta-banner">
      <div class="cta-banner__container">
        <h2>Need Truck Repair?</h2>
        <p>Contact us to schedule service for your heavy equipment.</p>
        <router-link to="/contact" class="btn btn--primary">Schedule Service</router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
const services = [
  { title: 'Dump Trucks', description: 'Complete repair and maintenance for all dump truck makes and models.' },
  { title: 'Tractors', description: 'Full-service tractor repair to keep your fleet road-ready.' },
  { title: 'Trailers', description: 'Trailer repair, welding, and maintenance services.' },
  { title: 'Heavy Duty Maintenance', description: 'Preventive maintenance programs to reduce downtime and extend equipment life.' }
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

.services {
  @include section-padding;

  &__container {
    @include container;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;

    @include respond-to(md) {
      grid-template-columns: 1fr 1fr;
    }
  }

  &__card {
    background: $white;
    border: 1px solid $light-gray;
    border-radius: 8px;
    padding: 2rem;
    transition: box-shadow 0.3s ease;

    &:hover {
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    }

    h3 {
      color: $primary-blue;
      margin-bottom: 0.75rem;
    }

    p {
      color: $medium-gray;
    }
  }
}

.facility {
  @include section-padding;
  background-color: $light-gray;
  text-align: center;

  &__container {
    @include container;
    max-width: 700px;

    p {
      color: $medium-gray-dark;
      font-size: 1.05rem;
      line-height: 1.8;
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
