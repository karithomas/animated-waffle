<template>
  <div class="step-mvr-auth">
    <h2 class="step-title">MVR Authorization</h2>

    <div class="legal-text-box" aria-label="MVR authorization text">
      <p>VA Code 46.2-208 classifies driver abstracts as privileged and limits the release of an abstract of a driver's record to only an employer, potential employer, or authorized agent who has been authorized in writing by such driver to obtain the driver's record.</p>
    </div>

    <div class="acknowledgment-list">
      <p class="acknowledgment-list__intro">By signing below, the undersigned:</p>
      <ol>
        <li>Gives consent to release of driving record ("MVR") for review by R S Thomas Hauling, Inc.</li>
        <li>Authorizes driving record to be periodically obtained and reviewed for initial and continued employment.</li>
        <li>Gives consent to release of driving record ("MVR") for review by Nansemond Insurance Agency, Inc.</li>
        <li>Understands driving record may also be provided to insurance carriers for insurability purposes.</li>
        <li>Authorizes release of and discussion of driving record between potential employees and Nansemond Insurance Agency and any insurance company.</li>
      </ol>
    </div>

    <fieldset class="form-fieldset">
      <legend>Driver Information</legend>

      <div class="form-row form-row--two">
        <div class="form-group">
          <label for="employeeName">
            Full Name (as it appears on license) <span aria-hidden="true">*</span>
          </label>
          <input
            id="employeeName"
            type="text"
            :value="modelValue.employeeName"
            @input="update('employeeName', $event.target.value)"
            aria-required="true"
          />
        </div>

        <div class="form-group">
          <label for="mvrLicenseNumber">
            License Number <span aria-hidden="true">*</span>
          </label>
          <input
            id="mvrLicenseNumber"
            type="text"
            :value="modelValue.mvrLicenseNumber"
            @input="update('mvrLicenseNumber', $event.target.value)"
            aria-required="true"
          />
        </div>
      </div>

      <div class="form-row form-row--two">
        <div class="form-group">
          <label for="mvrState">
            State <span aria-hidden="true">*</span>
          </label>
          <select
            id="mvrState"
            :value="modelValue.mvrState"
            @change="update('mvrState', $event.target.value)"
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
          <label for="yearsOfCDLExperience">
            Years of CDL Experience <span aria-hidden="true">*</span>
          </label>
          <input
            id="yearsOfCDLExperience"
            type="text"
            :value="modelValue.yearsOfCDLExperience"
            @input="update('yearsOfCDLExperience', $event.target.value)"
            aria-required="true"
          />
        </div>
      </div>

      <div class="form-row form-row--two">
        <div class="form-group">
          <label for="mvrDateOfBirth">
            Date of Birth <span aria-hidden="true">*</span>
          </label>
          <input
            id="mvrDateOfBirth"
            type="date"
            :value="modelValue.mvrDateOfBirth"
            @input="update('mvrDateOfBirth', $event.target.value)"
            aria-required="true"
          />
          <p class="form-hint">Pre-filled from Step 1 if available.</p>
        </div>

      </div>
    </fieldset>

    <fieldset class="form-fieldset">
      <legend>Signature</legend>

      <div class="form-row form-row--one">
        <div class="form-group">
          <label for="mvrSignature">
            Electronic Signature (type your full name) <span aria-hidden="true">*</span>
          </label>
          <input
            id="mvrSignature"
            type="text"
            :value="modelValue.mvrSignature"
            @input="update('mvrSignature', $event.target.value)"
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

.step-mvr-auth {
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
    margin: 0;
  }
}

.acknowledgment-list {
  background-color: $white;
  border: 1px solid $medium-gray;
  border-radius: 4px;
  padding: 1rem 1rem 1rem 1.5rem;
  margin-bottom: 1.5rem;
  font-family: $font-body;
  font-size: 0.9rem;
  line-height: 1.6;
  color: $dark-gray;

  &__intro {
    font-weight: 700;
    margin: 0 0 0.5rem;
  }

  ol {
    margin: 0;
    padding-left: 1.25rem;

    li {
      margin-bottom: 0.4rem;

      &:last-child {
        margin-bottom: 0;
      }
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
