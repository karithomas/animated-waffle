<template>
  <div class="step-personal-info">
    <h2 class="step-title">Personal Information</h2>

    <div class="notice notice--secure">
      <svg class="notice__icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 1C8.676 1 6 3.676 6 7v2H4v14h16V9h-2V7c0-3.324-2.676-6-6-6zm0 2c2.276 0 4 1.724 4 4v2H8V7c0-2.276 1.724-4 4-4zm0 10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"/>
      </svg>
      <p>Your information is transmitted securely via HTTPS encryption.</p>
    </div>

    <fieldset class="form-fieldset">
      <legend>Full Name</legend>

      <div class="form-row form-row--three">
        <div class="form-group">
          <label for="firstName">
            First Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="firstName"
            type="text"
            :value="modelValue.firstName"
            @input="update('firstName', $event.target.value)"
            aria-required="true"
          />
        </div>

        <div class="form-group">
          <label for="middleName">Middle Name</label>
          <input
            id="middleName"
            type="text"
            :value="modelValue.middleName"
            @input="update('middleName', $event.target.value)"
          />
        </div>

        <div class="form-group">
          <label for="lastName">
            Last Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="lastName"
            type="text"
            :value="modelValue.lastName"
            @input="update('lastName', $event.target.value)"
            aria-required="true"
          />
        </div>
      </div>

      <div class="form-row form-row--one">
        <div class="form-group">
          <label for="maidenName">Maiden Name</label>
          <input
            id="maidenName"
            type="text"
            :value="modelValue.maidenName"
            @input="update('maidenName', $event.target.value)"
          />
        </div>
      </div>
    </fieldset>

    <fieldset class="form-fieldset">
      <legend>Address</legend>

      <div class="form-row form-row--one">
        <div class="form-group">
          <label for="streetAddress">
            Street Address <span aria-hidden="true">*</span>
          </label>
          <input
            id="streetAddress"
            type="text"
            :value="modelValue.streetAddress"
            @input="update('streetAddress', $event.target.value)"
            aria-required="true"
          />
        </div>
      </div>

      <div class="form-row form-row--three">
        <div class="form-group">
          <label for="city">
            City <span aria-hidden="true">*</span>
          </label>
          <input
            id="city"
            type="text"
            :value="modelValue.city"
            @input="update('city', $event.target.value)"
            aria-required="true"
          />
        </div>

        <div class="form-group">
          <label for="state">
            State <span aria-hidden="true">*</span>
          </label>
          <select
            id="state"
            :value="modelValue.state"
            @change="update('state', $event.target.value)"
            aria-required="true"
          >
            <option value="">Select a state</option>
            <option
              v-for="s in usStates"
              :key="s.value"
              :value="s.value"
            >
              {{ s.label }}
            </option>
          </select>
        </div>

        <div class="form-group">
          <label for="zipCode">
            Zip Code <span aria-hidden="true">*</span>
          </label>
          <input
            id="zipCode"
            type="text"
            inputmode="numeric"
            :value="modelValue.zipCode"
            @input="update('zipCode', $event.target.value)"
            aria-required="true"
          />
        </div>
      </div>

      <div class="form-row form-row--one">
        <div class="form-group">
          <label for="howLongAtAddress">How Long at This Address?</label>
          <input
            id="howLongAtAddress"
            type="text"
            placeholder="e.g., 2 years"
            :value="modelValue.howLongAtAddress"
            @input="update('howLongAtAddress', $event.target.value)"
          />
        </div>
      </div>
    </fieldset>

    <fieldset class="form-fieldset">
      <legend>Additional Details</legend>

      <div class="form-row form-row--two">
        <div class="form-group">
          <label for="dateOfBirth">
            Date of Birth <span aria-hidden="true">*</span>
          </label>
          <input
            id="dateOfBirth"
            type="date"
            :value="modelValue.dateOfBirth"
            @input="update('dateOfBirth', $event.target.value)"
            aria-required="true"
          />
        </div>

        <div class="form-group">
          <label for="cellPhone">
            Cell Phone <span aria-hidden="true">*</span>
          </label>
          <input
            id="cellPhone"
            type="tel"
            :value="modelValue.cellPhone"
            @input="update('cellPhone', $event.target.value)"
            aria-required="true"
          />
        </div>
      </div>

      <div class="form-row form-row--two">
        <div class="form-group">
          <label for="expectedPay">Expected Pay</label>
          <input
            id="expectedPay"
            type="text"
            placeholder="e.g., $25/hr or $52,000/yr"
            :value="modelValue.expectedPay"
            @input="update('expectedPay', $event.target.value)"
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

const usStates = [
  { value: 'AL', label: 'Alabama' }, { value: 'AK', label: 'Alaska' }, { value: 'AZ', label: 'Arizona' }, { value: 'AR', label: 'Arkansas' }, { value: 'CA', label: 'California' }, { value: 'CO', label: 'Colorado' }, { value: 'CT', label: 'Connecticut' }, { value: 'DE', label: 'Delaware' }, { value: 'FL', label: 'Florida' }, { value: 'GA', label: 'Georgia' }, { value: 'HI', label: 'Hawaii' }, { value: 'ID', label: 'Idaho' }, { value: 'IL', label: 'Illinois' }, { value: 'IN', label: 'Indiana' }, { value: 'IA', label: 'Iowa' }, { value: 'KS', label: 'Kansas' }, { value: 'KY', label: 'Kentucky' }, { value: 'LA', label: 'Louisiana' }, { value: 'ME', label: 'Maine' }, { value: 'MD', label: 'Maryland' }, { value: 'MA', label: 'Massachusetts' }, { value: 'MI', label: 'Michigan' }, { value: 'MN', label: 'Minnesota' }, { value: 'MS', label: 'Mississippi' }, { value: 'MO', label: 'Missouri' }, { value: 'MT', label: 'Montana' }, { value: 'NE', label: 'Nebraska' }, { value: 'NV', label: 'Nevada' }, { value: 'NH', label: 'New Hampshire' }, { value: 'NJ', label: 'New Jersey' }, { value: 'NM', label: 'New Mexico' }, { value: 'NY', label: 'New York' }, { value: 'NC', label: 'North Carolina' }, { value: 'ND', label: 'North Dakota' }, { value: 'OH', label: 'Ohio' }, { value: 'OK', label: 'Oklahoma' }, { value: 'OR', label: 'Oregon' }, { value: 'PA', label: 'Pennsylvania' }, { value: 'RI', label: 'Rhode Island' }, { value: 'SC', label: 'South Carolina' }, { value: 'SD', label: 'South Dakota' }, { value: 'TN', label: 'Tennessee' }, { value: 'TX', label: 'Texas' }, { value: 'UT', label: 'Utah' }, { value: 'VT', label: 'Vermont' }, { value: 'VA', label: 'Virginia' }, { value: 'WA', label: 'Washington' }, { value: 'WV', label: 'West Virginia' }, { value: 'WI', label: 'Wisconsin' }, { value: 'WY', label: 'Wyoming' }
]
</script>

<style lang="scss" scoped>
@use '../../assets/scss/variables' as *;
@use '../../assets/scss/mixins' as *;

.step-personal-info {
  width: 100%;
}

.step-title {
  font-family: $font-heading;
  font-size: 1.5rem;
  color: $primary-blue;
  margin-bottom: 1.5rem;
}

.notice {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: 4px;
  margin-bottom: 1.5rem;
  font-family: $font-body;
  font-size: 0.85rem;

  &--secure {
    background-color: $light-gray;
    border: 1px solid $medium-gray;
    color: $medium-gray-dark;
  }

  &__icon {
    flex-shrink: 0;
    margin-top: 0.1rem;
    color: $primary-blue;
  }

  p {
    margin: 0;
    line-height: 1.4;
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

  &--three {
    grid-template-columns: 1fr;

    @include respond-to(md) {
      grid-template-columns: 1fr 1fr 1fr;
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

  input,
  select {
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

  select {
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236B7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    padding-right: 2rem;
  }
}

.form-hint {
  font-family: $font-body;
  font-size: 0.8rem;
  color: $medium-gray-dark;
  margin-top: 0.25rem;
  font-style: italic;
}
</style>
