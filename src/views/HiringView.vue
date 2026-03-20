<template>
  <div class="hiring">
    <!-- Hero Section -->
    <section class="hero" aria-label="CDL driver hiring hero">
      <div class="hero__overlay">
        <div class="hero__content">
          <h1>We're Hiring CDL Drivers</h1>
          <p class="hero__subtext">
            R.S. Thomas Hauling, Inc. is looking for experienced Class A &amp; B CDL
            dump truck and dump trailer drivers to join our growing team in Powhatan, Virginia.
          </p>
          <div class="hero__actions">
            <router-link to="/employment#apply" class="btn btn--primary">Apply Now</router-link>
            <a href="tel:8045986292" class="btn btn--outline" aria-label="Call to apply at 804-598-6292">
              Call to Apply: (804) 598-6292
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Drive For Us Section -->
    <section class="why-us" aria-label="Benefits of driving for R.S. Thomas Hauling">
      <div class="why-us__container">
        <h2 class="section-heading">Why Drive For Us?</h2>
        <div class="why-us__grid">
          <div class="why-us__card">
            <h3>Family-Owned Business</h3>
            <p>You're not just a number. We treat our drivers like family and have since 1985.</p>
          </div>
          <div class="why-us__card">
            <h3>Top-Quality Equipment</h3>
            <p>Drive well-maintained trucks from our fleet of 30+ dump trucks and trailers.</p>
          </div>
          <div class="why-us__card">
            <h3>Year-Round Work</h3>
            <p>Consistent, stable employment with a company that's been around for over 40 years.</p>
          </div>
          <div class="why-us__card">
            <h3>Experienced Team</h3>
            <p>Join a team of 30+ CDL-licensed drivers with a shared commitment to quality.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Requirements Section -->
    <section class="requirements" aria-label="Driver requirements">
      <div class="requirements__container">
        <h2 class="section-heading">What We're Looking For</h2>
        <ul class="requirements__list">
          <li>3 years experience driving a dump truck or dump trailer</li>
          <li>Good driving record</li>
          <li>Lift axle experience</li>
          <li>Class A or B CDL</li>
        </ul>
      </div>
    </section>

    <!-- About the Company Section -->
    <section class="about" aria-label="About R.S. Thomas Hauling">
      <div class="about__container">
        <h2 class="section-heading section-heading--light">About R.S. Thomas Hauling, Inc.</h2>
        <p class="about__description">
          R.S. Thomas Hauling, Inc. has been one of Virginia's most trusted aggregate hauling
          contractors for over 40 years. Based in Powhatan, VA, we specialize in hauling stone,
          rip rap, dirt, sand, gravel, and other aggregates for site contractors, quarries, and
          environmental restoration projects across Virginia and surrounding states.
        </p>
        <ul class="about__stats" aria-label="Company statistics">
          <li class="about__stat">
            <span class="about__stat-number">40+</span>
            <span class="about__stat-label">Years</span>
          </li>
          <li class="about__stat">
            <span class="about__stat-number">30+</span>
            <span class="about__stat-label">Trucks</span>
          </li>
          <li class="about__stat">
            <span class="about__stat-number">30+</span>
            <span class="about__stat-label">Drivers</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- Apply Now CTA Section -->
    <section class="cta" aria-label="Apply to drive for R.S. Thomas Hauling">
      <div class="cta__container">
        <h2 class="section-heading section-heading--light">Ready to Join Our Team?</h2>
        <p class="cta__text">Apply online in just a few minutes, or give us a call.</p>
        <div class="cta__actions">
          <router-link to="/employment" class="btn btn--primary">Apply Online</router-link>
          <a href="tel:8045986292" class="btn btn--outline" aria-label="Call 804-598-6292 to apply">
            Call (804) 598-6292
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useSeoMeta } from '../composables/useSeoMeta'

useSeoMeta({
  title: 'CDL Dump Truck Driver Jobs | R.S. Thomas Hauling, Inc. | Powhatan, VA',
  description: 'Now hiring Class A & B CDL dump truck and dump trailer drivers in Powhatan, VA. Join R.S. Thomas Hauling, Inc. — family-owned, 40+ years in business, 30+ truck fleet. Apply today!',
  canonical: 'https://www.rsthomashauling.com/hiring'
})

// Job posting structured data (JSON-LD)
onMounted(() => {
  const schema = document.createElement('script')
  schema.type = 'application/ld+json'
  schema.id = 'job-schema'
  schema.textContent = JSON.stringify({
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    "title": "CDL Dump Truck Driver",
    "description": "R.S. Thomas Hauling, Inc. is hiring experienced Class A & B CDL dump truck and dump trailer drivers. 3+ years experience required. Family-owned company with 40+ years in business.",
    "datePosted": "2026-03-20",
    "validThrough": "2026-12-31",
    "employmentType": "FULL_TIME",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "R.S. Thomas Hauling, Inc.",
      "sameAs": "https://www.rsthomashauling.com",
      "logo": "https://www.rsthomashauling.com/images/logo.png"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2285 Batterson Road",
        "addressLocality": "Powhatan",
        "addressRegion": "VA",
        "postalCode": "23139",
        "addressCountry": "US"
      }
    },
    "qualifications": "Class A or B CDL, 3+ years dump truck/trailer experience, good driving record, lift axle experience",
    "industry": "Trucking / Hauling"
  })
  document.head.appendChild(schema)
})

onUnmounted(() => {
  const schema = document.getElementById('job-schema')
  if (schema) schema.remove()
})
</script>

<style lang="scss" scoped>
@use '../assets/scss/variables' as *;
@use '../assets/scss/mixins' as *;

.hero {
  min-height: 50vh;
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
    background: rgba($primary-blue, 0.8);
    color: $white;
    text-align: center;
    padding: 3rem 1rem;

    @include respond-to(md) {
      padding: 4rem 2rem;
    }
  }

  &__content {
    max-width: 800px;
  }

  &__subtext {
    font-size: 1.15rem;
    line-height: 1.7;
    margin-top: 1.25rem;
    margin-bottom: 2rem;
    color: rgba($white, 0.9);
  }

  &__actions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;

    @include respond-to(sm) {
      flex-direction: row;
      justify-content: center;
    }
  }
}

.why-us {
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
      grid-template-columns: repeat(2, 1fr);
    }

    @include respond-to(lg) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  &__card {
    text-align: center;
    padding: 2rem 1.5rem;
    background: $white;
    border-radius: 8px;

    h3 {
      color: $primary-blue;
      margin-bottom: 0.75rem;
      font-size: 1.2rem;
    }

    p {
      color: $medium-gray-dark;
      line-height: 1.6;
    }
  }
}

.requirements {
  @include section-padding;
  background-color: $white;

  &__container {
    @include container;
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
      }
    }
  }
}

.about {
  @include section-padding;
  background-color: $primary-blue;

  &__container {
    @include container;
    text-align: center;
  }

  &__description {
    color: rgba($white, 0.9);
    font-size: 1.1rem;
    line-height: 1.8;
    max-width: 800px;
    margin: 0 auto 2.5rem;
  }

  &__stats {
    display: flex;
    justify-content: center;
    gap: 3rem;
    flex-wrap: wrap;
  }

  &__stat {
    display: flex;
    flex-direction: column;
    align-items: center;

    &-number {
      font-family: $font-heading;
      font-size: 2.5rem;
      font-weight: 700;
      color: $accent-gold;
    }

    &-label {
      font-size: 1rem;
      color: rgba($white, 0.85);
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-top: 0.25rem;
    }
  }
}

.cta {
  @include section-padding;
  background-color: #2A5080;

  &__container {
    @include container;
    text-align: center;
  }

  &__text {
    color: rgba($white, 0.9);
    font-size: 1.15rem;
    margin-bottom: 2rem;
  }

  &__actions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;

    @include respond-to(sm) {
      flex-direction: row;
      justify-content: center;
    }
  }
}
</style>
