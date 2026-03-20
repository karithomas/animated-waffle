<template>
  <div class="employment">
    <section class="hero">
      <div class="hero__overlay">
        <h1>Join Our Team</h1>
      </div>
    </section>

    <section class="now-hiring">
      <div class="now-hiring__container">
        <h2 class="section-heading">Now Hiring</h2>
        <p class="now-hiring__intro">
          R.S. Thomas Hauling, Inc. is currently looking for Class A &amp; B CDL Dump Trailer and Dump Truck drivers to join our team.
        </p>
        <h3 class="now-hiring__subtitle">Applicants Must Possess:</h3>
        <ul class="now-hiring__list">
          <li>3 years experience driving a dump truck or dump trailer</li>
          <li>Good driving record</li>
          <li>Lift axle experience</li>
          <li>Class A or B CDL</li>
        </ul>
      </div>
    </section>

    <section class="culture">
      <div class="culture__container">
        <h2 class="section-heading">Why Work With Us?</h2>
        <div class="culture__grid">
          <div class="culture__item">
            <h3>Family Business</h3>
            <p>We treat our employees like family. You're not just a number here.</p>
          </div>
          <div class="culture__item">
            <h3>Stable Work</h3>
            <p>Consistent year-round work with a company that's been around since 1985.</p>
          </div>
          <div class="culture__item">
            <h3>Quality Equipment</h3>
            <p>Drive well-maintained, modern trucks from our fleet of 30+ vehicles.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="application">
      <div class="application__container">
        <h2 class="section-heading">Apply Now</h2>
        <p class="application__intro">
          Complete the application below or call us at
          <a href="tel:8045986292">(804) 598-6292</a> to apply by phone.
        </p>
        <p class="application__intro">
          Prefer to fill out a paper application? <router-link to="/employment/print-application">Print the application</router-link> and bring it to our office.
        </p>
        <DriverApplication />
      </div>
    </section>
  </div>
</template>

<script setup>
import { useSeoMeta } from '../composables/useSeoMeta'
import DriverApplication from '../components/employment/DriverApplication.vue'

useSeoMeta({
  title: 'Employment | R.S. Thomas Hauling, Inc. | Powhatan, VA',
  description: 'Apply to drive for R.S. Thomas Hauling, Inc. in Powhatan, VA. Now hiring Class A & B CDL dump truck and dump trailer drivers. Apply online or call (804) 598-6292.',
  canonical: 'https://www.rsthomashauling.com/employment'
})
</script>

<style lang="scss" scoped>
@use '../assets/scss/variables' as *;
@use '../assets/scss/mixins' as *;

.hero {
  min-height: 40vh;
  background-color: $primary-blue;
  background-image: url('/images/hero-employment.svg');
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

.now-hiring {
  @include section-padding;

  &__container {
    @include container;
  }

  &__intro {
    font-size: 1.1rem;
    color: $dark-gray;
    text-align: center;
    margin-bottom: 2rem;
    line-height: 1.7;
  }

  &__subtitle {
    color: $primary-blue;
    font-size: 1.15rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  &__list {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;

    @include respond-to(sm) {
      grid-template-columns: 1fr 1fr;
    }

    @include respond-to(lg) {
      grid-template-columns: repeat(4, 1fr);
    }

    li {
      padding: 1.5rem 1rem;
      padding-top: 3rem;
      background: $light-gray;
      border-radius: 8px;
      color: $dark-gray;
      font-size: 1rem;
      text-align: center;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;

      &::before {
        content: '\2713';
        position: absolute;
        top: 0.75rem;
        left: 50%;
        transform: translateX(-50%);
        color: $accent-gold-text;
        font-weight: 700;
        font-size: 1.25rem;
        margin-bottom: 0.5rem;
      }
    }
  }
}

.culture {
  @include section-padding;
  background-color: $light-gray;

  &__container {
    @include container;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;

    @include respond-to(md) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  &__item {
    text-align: center;
    padding: 2rem;
    background: $white;
    border-radius: 8px;

    h3 {
      color: $primary-blue;
      margin-bottom: 0.75rem;
    }

    p {
      color: $medium-gray-dark;
    }
  }
}

.application {
  @include section-padding;

  &__container {
    @include container;
  }

  &__intro {
    text-align: center;
    color: $medium-gray;
    font-size: 1.05rem;
    margin-bottom: 2rem;

    a {
      color: $accent-gold-text;
      font-weight: 600;

      &:hover {
        color: $primary-blue;
      }
    }
  }
}
</style>
