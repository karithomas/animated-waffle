<template>
  <div class="employment">
    <section class="hero">
      <div class="hero__overlay">
        <h1>Join Our Team</h1>
      </div>
    </section>

    <section class="requirements">
      <div class="requirements__container">
        <h2 class="section-heading">What We're Looking For</h2>
        <div class="requirements__grid">
          <div class="requirements__item">
            <h3>CDL License</h3>
            <p>Class A &amp; B CDL required</p>
          </div>
          <div class="requirements__item">
            <h3>Experience</h3>
            <p>3+ years of driving experience preferred</p>
          </div>
          <div class="requirements__item">
            <h3>Clean Record</h3>
            <p>Good driving record required</p>
          </div>
        </div>
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

    <section class="cta-banner">
      <div class="cta-banner__container">
        <h2>Ready to Apply?</h2>
        <p>Give us a call or send us a message to get started.</p>
        <div class="cta-banner__actions">
          <a href="tel:8045986292" class="btn btn--primary">Call to Apply</a>
          <router-link to="/contact" class="btn btn--outline">Contact Us</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@use '../assets/scss/variables' as *;
@use '../assets/scss/mixins' as *;

.hero {
  min-height: 40vh;
  background-color: $primary-blue;
  background-image: url('/images/hero-employment.jpg');
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

.requirements {
  @include section-padding;

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
    background: $light-gray;
    border-radius: 8px;

    h3 {
      color: $primary-blue;
      margin-bottom: 0.5rem;
    }

    p {
      color: $medium-gray;
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
      color: $medium-gray;
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

  &__actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>
