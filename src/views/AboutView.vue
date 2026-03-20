<template>
  <div class="about">
    <section class="hero">
      <div class="hero__overlay">
        <h1>About R.S. Thomas Hauling, Inc.</h1>
      </div>
    </section>

    <section class="story">
      <div class="story__container">
        <h2 class="section-heading">Our Story</h2>
        <p>
          In 1985, Randy Thomas started R.S. Thomas Hauling, Inc. with a single truck and a simple promise:
          deliver quality work, on time, every time. Over 40 years later, Randy still owns and operates
          the company, and that promise still holds. What began as a one-man operation in Powhatan, Virginia
          has grown into one of the most trusted aggregate hauling contractors in the state.
        </p>
        <p>
          Now armed with over 30 dump trucks and tractor-trailers and a team of 30+ CDL-licensed drivers,
          we carry all the equipment, vehicles, and staff to haul whatever aggregate you need moved. We
          specialize in stone, rip rap, shot rock, dirt, sand, and gravel — but if there's another aggregate
          you need, give us a call and we can likely accommodate your needs. Our customers include site
          contractors, quarries, and environmental and shoreline restoration contractors across Virginia
          and the surrounding states.
        </p>
        <p>
          In addition to hauling, we operate a full-service repair and maintenance shop geared toward
          heavy truck repair, staffed by experienced, trained technicians who can tackle virtually any problem.
        </p>
        <p>
          We also believe in protecting the environment and go above and beyond in preserving our natural
          resources — as evidenced by the Clean Business Award of Powhatan, which we're proud to have earned.
          Browse our site to see how we can best serve you.
        </p>
      </div>
    </section>

    <section class="stats">
      <div class="stats__container">
        <div class="stats__item">
          <span class="stats__number">40+</span>
          <span class="stats__label">Years Experience</span>
        </div>
        <div class="stats__item">
          <span class="stats__number">30+</span>
          <span class="stats__label">Trucks</span>
        </div>
        <div class="stats__item">
          <span class="stats__number">30+</span>
          <span class="stats__label">CDL Drivers</span>
        </div>
      </div>
    </section>

    <section class="awards">
      <div class="awards__container">
        <h2 class="section-heading">Awards &amp; Certifications</h2>
        <div class="awards__grid">
          <div class="awards__item">
            <div class="awards__badge-wrapper">
              <img src="/images/clean-business-award-img.png" alt="Clean Business Award of Powhatan" class="awards__badge awards__badge--clean" />
            </div>
            <h3>Clean Business Award</h3>
            <p>Powhatan County</p>
          </div>
          <div class="awards__item">
            <div class="awards__badge-wrapper">
              <img src="/images/swamlogo.jpg" alt="SWaM Certified" class="awards__badge awards__badge--swam" />
            </div>
            <h3>SWaM Certified</h3>
            <p>Small, Women-owned, and Minority-owned Business</p>
          </div>
        </div>
      </div>
    </section>

    <section class="service-area">
      <div class="service-area__container">
        <h2 class="section-heading">Service Area</h2>
        <p>Based in Powhatan, Virginia, we proudly serve clients across Virginia and surrounding states.</p>
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
  background-image: url('/images/hero-about.svg');
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

.story {
  @include section-padding;

  &__container {
    @include container;
    max-width: 800px;

    p {
      color: $medium-gray;
      font-size: 1.05rem;
      margin-bottom: 1.5rem;
      line-height: 1.8;
    }
  }
}

.stats {
  @include section-padding;
  background-color: $accent-gold;

  &__container {
    @include container;
    display: flex;
    justify-content: center;
    gap: 4rem;
    flex-wrap: wrap;
  }

  &__item {
    text-align: center;
    color: $white;
  }

  &__number {
    display: block;
    font-family: $font-heading;
    font-weight: 700;
    font-size: 3rem;
  }

  &__label {
    font-family: $font-heading;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
}

.awards {
  @include section-padding;

  &__container {
    @include container;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    max-width: 600px;
    margin: 0 auto;

    @include respond-to(md) {
      grid-template-columns: 1fr 1fr;
      max-width: none;
    }
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 2rem;
    background: $light-gray;
    border-radius: 8px;

    h3 {
      color: $primary-blue;
      margin-bottom: 0.5rem;
    }

    p {
      color: $medium-gray-dark;
    }
  }

  &__badge-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;
    margin-bottom: 1rem;
  }

  &__badge {
    max-height: 100%;
    width: auto;

    &--clean {
      height: 150px;
    }

    &--swam {
      height: 80px;
    }
  }
}

.service-area {
  @include section-padding;
  background-color: $light-gray;
  text-align: center;

  &__container {
    @include container;

    p {
      color: $medium-gray-dark;
      font-size: 1.05rem;
    }
  }
}
</style>
