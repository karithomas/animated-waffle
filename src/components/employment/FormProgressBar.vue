<template>
  <div class="progress-bar">
    <div class="progress-bar__mobile">
      Step {{ currentStep }} of {{ totalSteps }} &mdash; {{ stepLabels[currentStep - 1] }}
    </div>
    <div class="progress-bar__desktop">
      <div class="progress-bar__header">
        <span class="progress-bar__step-count">Step {{ currentStep }} of {{ totalSteps }}</span>
        <span class="progress-bar__step-label">{{ stepLabels[currentStep - 1] }}</span>
      </div>
      <div class="progress-bar__track">
        <div
          class="progress-bar__fill"
          :style="{ width: (currentStep / totalSteps) * 100 + '%' }"
        ></div>
      </div>
      <div class="progress-bar__steps">
        <div
          v-for="step in totalSteps"
          :key="step"
          class="progress-bar__dot"
          :class="{
            'progress-bar__dot--completed': step < currentStep,
            'progress-bar__dot--active': step === currentStep
          }"
        >
          <span class="progress-bar__dot-indicator"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  currentStep: {
    type: Number,
    required: true
  },
  totalSteps: {
    type: Number,
    default: 11
  },
  stepLabels: {
    type: Array,
    required: true
  }
})
</script>

<style lang="scss" scoped>
@use '../../assets/scss/variables' as *;
@use '../../assets/scss/mixins' as *;

.progress-bar {
  margin-bottom: 2rem;

  &__mobile {
    display: block;
    font-family: $font-body;
    font-size: 0.95rem;
    color: $dark-gray;
    font-weight: 600;
    text-align: center;
    padding: 0.75rem 0;

    @include respond-to(md) {
      display: none;
    }
  }

  &__desktop {
    display: none;

    @include respond-to(md) {
      display: block;
    }
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 0.5rem;
  }

  &__step-count {
    font-family: $font-heading;
    font-size: 0.9rem;
    font-weight: 700;
    color: $primary-blue;
  }

  &__step-label {
    font-family: $font-body;
    font-size: 0.9rem;
    color: $medium-gray-dark;
    font-weight: 600;
  }

  &__track {
    width: 100%;
    height: 8px;
    background-color: $light-gray;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 0.75rem;
  }

  &__fill {
    height: 100%;
    background-color: $accent-gold;
    border-radius: 4px;
    transition: width 0.3s ease;
  }

  &__steps {
    display: flex;
    justify-content: space-between;
  }

  &__dot {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__dot-indicator {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: $light-gray;
    border: 2px solid $light-gray;
    transition: background-color 0.3s ease, border-color 0.3s ease;
  }

  &__dot--completed .progress-bar__dot-indicator {
    background-color: $accent-gold;
    border-color: $accent-gold;
  }

  &__dot--active .progress-bar__dot-indicator {
    background-color: $white;
    border-color: $accent-gold;
    box-shadow: 0 0 0 3px rgba($accent-gold, 0.25);
  }
}
</style>
