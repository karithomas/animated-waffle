<template>
  <div class="home">
    <section class="hero">
      <div class="hero__overlay">
        <div class="hero__content">
          <h1>Providing Quality Hauling Services Since 1985</h1>
          <p>Family-owned hauling and heavy truck repair in Powhatan, Virginia</p>
          <router-link to="/contact" class="btn btn--primary">Request a Quote</router-link>
        </div>
      </div>
    </section>

    <section class="services">
      <div class="services__container">
        <h2 class="section-heading">Our Services</h2>
        <div class="services__grid">
          <div class="services__card">
            <h3>Hauling Services</h3>
            <p>Dirt, stone, sand, rip rap, and aggregates delivered across Virginia with our fleet of 30+ dump trucks.</p>
            <router-link to="/hauling" class="btn btn--secondary" aria-label="Learn more about hauling services">Learn More</router-link>
          </div>
          <div class="services__card">
            <h3>Heavy Truck Repair</h3>
            <p>Full-service repair shop for dump trucks, tractors, and trailers with experienced, trained technicians.</p>
            <router-link to="/truck-repair" class="btn btn--secondary" aria-label="Learn more about heavy truck repair">Learn More</router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="about-snippet">
      <div class="about-snippet__container">
        <h2 class="section-heading section-heading--light">About R.S. Thomas Hauling, Inc.</h2>
        <div class="about-snippet__stats">
          <div class="about-snippet__stat">
            <span class="about-snippet__stat-number">40+</span>
            <span class="about-snippet__stat-label">Years Experience</span>
          </div>
          <div class="about-snippet__stat">
            <span class="about-snippet__stat-number">30+</span>
            <span class="about-snippet__stat-label">Trucks</span>
          </div>
          <div class="about-snippet__stat">
            <span class="about-snippet__stat-number">30+</span>
            <span class="about-snippet__stat-label">CDL Drivers</span>
          </div>
        </div>
        <p class="about-snippet__text">
          What started as a one-truck operation in 1985 has grown into one of Central Virginia's most trusted hauling companies.
          Family owned and operated, we take pride in delivering quality service on every job.
        </p>
        <router-link to="/about" class="btn btn--outline">About Us</router-link>
      </div>
    </section>

    <section class="photo-strip">
      <div class="photo-strip__container">
        <h2 class="section-heading">Our Fleet in Action</h2>
        <div class="photo-strip__grid">
          <div class="photo-strip__item">
            <img src="/images/photo-trucks-1.svg" alt="R.S. Thomas trucks in action" />
          </div>
          <div class="photo-strip__item">
            <img src="/images/photo-trucks-2.svg" alt="R.S. Thomas hauling equipment" />
          </div>
          <div class="photo-strip__item">
            <img src="/images/photo-trucks-3.svg" alt="R.S. Thomas dump trucks on the job" />
          </div>
          <div class="photo-strip__item">
            <img src="/images/photo-trucks-4.svg" alt="R.S. Thomas fleet" />
          </div>
        </div>
      </div>
    </section>

    <section class="cta-banner">
      <div class="cta-banner__container">
        <h2>Need Something Hauled?</h2>
        <p>Call us at <a href="tel:8045986292">(804) 598-6292</a></p>
        <router-link to="/contact" class="btn btn--primary">Get a Quote</router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useSeoMeta } from '../composables/useSeoMeta'

useSeoMeta({
  title: 'R.S. Thomas Hauling, Inc. | Hauling Services & Truck Repair | Powhatan, VA',
  description: 'R.S. Thomas Hauling, Inc. provides quality commercial hauling services and heavy truck repair in Powhatan, VA. 40+ years in business, 30+ truck fleet. Call (804) 598-6292.',
  canonical: 'https://www.rsthomashauling.com/'
})
</script>

<style lang="scss" scoped>
@use '../assets/scss/variables' as *;
@use '../assets/scss/mixins' as *;

.hero {
  min-height: 70vh;
  background-color: $primary-blue;
  background-image: url('/images/hero-trucks.svg');
  background-size: cover;
  background-position: center;
  display: flex;

  &__overlay {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba($primary-blue, 0.7);
  }

  &__content {
    text-align: center;
    color: $white;
    padding: 2rem;
    max-width: 700px;

    h1 {
      font-size: 2rem;
      margin-bottom: 1rem;

      @include respond-to(md) {
        font-size: 3rem;
      }
    }

    p {
      font-size: 1.1rem;
      margin-bottom: 2rem;
      color: $white;
    }
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
    gap: 2rem;

    @include respond-to(md) {
      grid-template-columns: 1fr 1fr;
    }
  }

  &__card {
    background: $white;
    border: 1px solid $light-gray;
    border-radius: 8px;
    padding: 2rem;
    text-align: center;
    transition: box-shadow 0.3s ease;

    &:hover {
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    }

    h3 {
      color: $primary-blue;
      margin-bottom: 1rem;
    }

    p {
      color: $medium-gray;
      margin-bottom: 1.5rem;
    }
  }
}

.about-snippet {
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
    display: flex;
    flex-direction: column;

    &-number {
      font-family: $font-heading;
      font-weight: 700;
      font-size: 2.5rem;
      color: $accent-gold;
    }

    &-label {
      font-family: $font-heading;
      font-weight: 600;
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: rgba($white, 0.9);
    }
  }

  &__text {
    max-width: 600px;
    margin: 0 auto 2rem;
    color: rgba($white, 0.85);
    font-size: 1.05rem;
  }
}

.photo-strip {
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
    border-radius: 8px;
    overflow: hidden;

    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.05);
      }
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

    h2 {
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 1.25rem;
      margin-bottom: 1.5rem;

      a {
        color: $white;
        font-weight: 600;
        text-decoration: underline;

        &:hover {
          color: $white;
        }
      }
    }
  }
}
</style>
