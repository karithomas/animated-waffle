<template>
  <div class="step-license">
    <h2 class="step-title">Driver's License Information</h2>

    <blockquote class="regulatory-note">
      <p>
        Section 383.21 FMCSR states "No person who operates a commercial motor
        vehicle shall at any time have more than one driver's license." I certify
        that I do not have more than one motor vehicle license, the information
        for which is listed below.
      </p>
    </blockquote>

    <fieldset class="form-fieldset">
      <legend>License Details</legend>

      <div class="form-row form-row--two">
        <div class="form-group">
          <label for="licenseState">
            State <span aria-hidden="true">*</span>
          </label>
          <select
            id="licenseState"
            :value="modelValue.state"
            @change="update('state', $event.target.value)"
            required
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
          <label for="licenseNumber">
            License Number <span aria-hidden="true">*</span>
          </label>
          <input
            id="licenseNumber"
            type="text"
            :value="modelValue.licenseNumber"
            @input="update('licenseNumber', $event.target.value)"
            required
            aria-required="true"
          />
        </div>
      </div>

      <div class="form-row form-row--two">
        <div class="form-group">
          <label for="licenseType">
            License Type <span aria-hidden="true">*</span>
          </label>
          <input
            id="licenseType"
            type="text"
            placeholder="e.g., CDL Class A"
            :value="modelValue.licenseType"
            @input="update('licenseType', $event.target.value)"
            required
            aria-required="true"
          />
        </div>

        <div class="form-group">
          <label for="expirationDate">
            Expiration Date <span aria-hidden="true">*</span>
          </label>
          <input
            id="expirationDate"
            type="date"
            :value="modelValue.expirationDate"
            @input="update('expirationDate', $event.target.value)"
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

const usStates = [
  { value: 'AL', label: 'Alabama' }, { value: 'AK', label: 'Alaska' }, { value: 'AZ', label: 'Arizona' }, { value: 'AR', label: 'Arkansas' }, { value: 'CA', label: 'California' }, { value: 'CO', label: 'Colorado' }, { value: 'CT', label: 'Connecticut' }, { value: 'DE', label: 'Delaware' }, { value: 'FL', label: 'Florida' }, { value: 'GA', label: 'Georgia' }, { value: 'HI', label: 'Hawaii' }, { value: 'ID', label: 'Idaho' }, { value: 'IL', label: 'Illinois' }, { value: 'IN', label: 'Indiana' }, { value: 'IA', label: 'Iowa' }, { value: 'KS', label: 'Kansas' }, { value: 'KY', label: 'Kentucky' }, { value: 'LA', label: 'Louisiana' }, { value: 'ME', label: 'Maine' }, { value: 'MD', label: 'Maryland' }, { value: 'MA', label: 'Massachusetts' }, { value: 'MI', label: 'Michigan' }, { value: 'MN', label: 'Minnesota' }, { value: 'MS', label: 'Mississippi' }, { value: 'MO', label: 'Missouri' }, { value: 'MT', label: 'Montana' }, { value: 'NE', label: 'Nebraska' }, { value: 'NV', label: 'Nevada' }, { value: 'NH', label: 'New Hampshire' }, { value: 'NJ', label: 'New Jersey' }, { value: 'NM', label: 'New Mexico' }, { value: 'NY', label: 'New York' }, { value: 'NC', label: 'North Carolina' }, { value: 'ND', label: 'North Dakota' }, { value: 'OH', label: 'Ohio' }, { value: 'OK', label: 'Oklahoma' }, { value: 'OR', label: 'Oregon' }, { value: 'PA', label: 'Pennsylvania' }, { value: 'RI', label: 'Rhode Island' }, { value: 'SC', label: 'South Carolina' }, { value: 'SD', label: 'South Dakota' }, { value: 'TN', label: 'Tennessee' }, { value: 'TX', label: 'Texas' }, { value: 'UT', label: 'Utah' }, { value: 'VT', label: 'Vermont' }, { value: 'VA', label: 'Virginia' }, { value: 'WA', label: 'Washington' }, { value: 'WV', label: 'West Virginia' }, { value: 'WI', label: 'Wisconsin' }, { value: 'WY', label: 'Wyoming' }
]
</script>

<style lang="scss" scoped>
@use '../../assets/scss/variables' as *;
@use '../../assets/scss/mixins' as *;

.step-license {
  width: 100%;
}

.step-title {
  font-family: $font-heading;
  font-size: 1.5rem;
  color: $primary-blue;
  margin-bottom: 1.5rem;
}

.regulatory-note {
  background-color: $light-gray;
  border-left: 4px solid $accent-gold;
  padding: 1rem 1.25rem;
  margin: 0 0 1.5rem 0;
  border-radius: 0 4px 4px 0;

  p {
    font-family: $font-body;
    font-size: 0.9rem;
    color: $medium-gray-dark;
    line-height: 1.6;
    margin: 0;
    font-style: italic;
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
</style>
