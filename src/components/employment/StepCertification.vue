<template>
  <div class="step-certification">
    <h2 class="step-title">Certification of Applicant</h2>

    <div class="legal-text-box" aria-label="Authorization and certification text">
      <p>I authorize you to make sure investigations and inquiries to my personal, employment, financial or medical history and other related matters as may be necessary in arriving at an employment decision. (Generally, inquiries regarding medical history will be made only if and after a conditional offer of employment has been extended.) I hereby release employers, schools, health care providers and other persons from all liability in responding to inquiries and releasing information in connection with my application.</p>
      <p>In the event of employment, I understand that false or misleading information given in my application or interview(s) may result in discharge. I understand, also, that I am required to abide by all rules and regulations of R S Thomas Hauling, Inc.</p>
    </div>

    <fieldset class="form-fieldset">
      <legend>Certification</legend>

      <div class="form-row form-row--one">
        <div class="form-group form-group--checkbox">
          <label for="certificationCheckbox">
            <input
              id="certificationCheckbox"
              type="checkbox"
              :checked="modelValue.certificationCheckbox"
              @change="update('certificationCheckbox', $event.target.checked)"
              aria-required="true"
            />
            <span>
              I certify that I completed this application, and that all entries on it and information in it are true and complete to the best of my knowledge.
              <span aria-hidden="true">*</span>
            </span>
          </label>
        </div>
      </div>

      <div class="form-row form-row--two">
        <div class="form-group">
          <label for="signatureDate">
            Date <span aria-hidden="true">*</span>
          </label>
          <input
            id="signatureDate"
            type="date"
            :value="modelValue.signatureDate"
            @input="update('signatureDate', $event.target.value)"
            required
            aria-required="true"
          />
        </div>

        <div class="form-group">
          <label for="signature">
            Electronic Signature (type your full name) <span aria-hidden="true">*</span>
          </label>
          <input
            id="signature"
            type="text"
            :value="modelValue.signature"
            @input="update('signature', $event.target.value)"
            required
            aria-required="true"
          />
        </div>
      </div>

      <div class="form-row form-row--two">
        <div class="form-group">
          <label for="secondDate">
            Date <span aria-hidden="true">*</span>
          </label>
          <input
            id="secondDate"
            type="date"
            :value="modelValue.secondDate"
            @input="update('secondDate', $event.target.value)"
            required
            aria-required="true"
          />
        </div>

        <div class="form-group">
          <label for="secondSignature">
            Electronic Signature <span aria-hidden="true">*</span>
          </label>
          <input
            id="secondSignature"
            type="text"
            :value="modelValue.secondSignature"
            @input="update('secondSignature', $event.target.value)"
            required
            aria-required="true"
          />
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

function update(field, value) {
  emit('update:modelValue', { ...props.modelValue, [field]: value })
}
</script>

<style lang="scss" scoped>
@use '../../assets/scss/variables' as *;
@use '../../assets/scss/mixins' as *;

.step-certification {
  width: 100%;
}

.step-title {
  font-family: $font-heading;
  font-size: 1.5rem;
  color: $primary-blue;
  margin-bottom: 1.5rem;
}

.legal-text-box {
  max-height: 200px;
  overflow-y: auto;
  background-color: $light-gray;
  border: 1px solid $medium-gray;
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  font-family: $font-body;
  font-size: 0.9rem;
  line-height: 1.6;
  color: $dark-gray;

  p {
    margin: 0 0 0.75rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.form-fieldset {
  border: 1px solid $light-gray;
  border-radius: 4px;
  padding: 1.25rem;
  margin-bottom: 1.5rem;

  legend {
    font-family: $font-heading;
    font-weight: 700;
    font-size: 1rem;
    color: $primary-blue;
    padding: 0 0.5rem;
  }
}

.form-row {
  display: grid;
  gap: 1rem;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }

  &--one {
    grid-template-columns: 1fr;
  }

  &--two {
    grid-template-columns: 1fr;

    @include respond-to(md) {
      grid-template-columns: 1fr 1fr;
    }
  }
}

.form-group {
  display: flex;
  flex-direction: column;

  label {
    font-family: $font-heading;
    font-weight: 700;
    font-size: 0.9rem;
    color: $dark-gray;
    margin-bottom: 0.35rem;
  }

  input[type="text"],
  input[type="date"] {
    font-family: $font-body;
    font-size: 0.95rem;
    padding: 0.75rem;
    border: 1px solid $medium-gray;
    border-radius: 4px;
    color: $dark-gray;
    background-color: $white;
    transition: border-color 0.2s, box-shadow 0.2s;

    &:focus {
      outline: none;
      border-color: $primary-blue;
      box-shadow: 0 0 0 3px rgba($primary-blue, 0.15);
    }
  }

  &--checkbox {
    label {
      display: flex;
      align-items: flex-start;
      gap: 0.5rem;
      font-weight: 400;
      font-family: $font-body;
      font-size: 0.9rem;
      cursor: pointer;
    }

    input[type="checkbox"] {
      margin-top: 0.2rem;
      flex-shrink: 0;
      width: 1.1rem;
      height: 1.1rem;
      accent-color: $primary-blue;
    }
  }
}
</style>
