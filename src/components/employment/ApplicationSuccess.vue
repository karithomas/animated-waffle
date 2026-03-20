<template>
  <div class="application-success">
    <div class="success-card">
      <svg
        class="success-card__icon"
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M9 12l2 2 4-4" />
      </svg>

      <h2 class="success-card__heading">Application Submitted Successfully!</h2>

      <p class="success-card__message">
        Thank you for your interest in joining R.S. Thomas Hauling, Inc. We have received your application and will review it shortly.
      </p>

      <p class="success-card__sub-message">
        If you have any questions, please call us at
        <a href="tel:8045986292">(804) 598-6292</a> or email
        <a href="mailto:info@rsthomashauling.com">info@rsthomashauling.com</a>.
      </p>

      <router-link to="/employment" class="btn btn--secondary">
        Return to Employment Page
      </router-link>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@use '../../assets/scss/variables' as *;
@use '../../assets/scss/mixins' as *;

.application-success {
  display: flex;
  justify-content: center;
  align-items: center;
  @include section-padding;
}

.success-card {
  text-align: center;
  max-width: 600px;
  padding: 2.5rem;
  background-color: $white;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);

  &__icon {
    color: #16a34a;
    margin-bottom: 1.5rem;
  }

  &__heading {
    font-family: $font-heading;
    font-size: 1.75rem;
    color: $primary-blue;
    margin: 0 0 1rem;
  }

  &__message {
    font-family: $font-body;
    font-size: 1rem;
    color: $dark-gray;
    line-height: 1.6;
    margin: 0 0 0.75rem;
  }

  &__sub-message {
    font-family: $font-body;
    font-size: 0.9rem;
    color: $medium-gray-dark;
    line-height: 1.6;
    margin: 0 0 2rem;

    a {
      color: $primary-blue;
      text-decoration: none;
      font-weight: 600;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}

.btn {
  display: inline-block;
  font-family: $font-heading;
  font-weight: 700;
  font-size: 1rem;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.2s, color 0.2s;
  cursor: pointer;

  &--secondary {
    background-color: $white;
    color: $primary-blue;
    border: 2px solid $primary-blue;

    &:hover {
      background-color: $primary-blue;
      color: $white;
    }
  }
}
</style>
