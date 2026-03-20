<template>
  <div class="step-residency">
    <h2 class="step-title">Previous Addresses</h2>

    <p class="step-note">
      Only needed if you have lived at other addresses in the past 3 years.
    </p>

    <fieldset
      v-for="(address, index) in modelValue.addresses"
      :key="index"
      class="form-fieldset"
    >
      <legend>Previous Address {{ index + 1 }}</legend>

      <button
        v-if="index > 0"
        type="button"
        class="btn-remove"
        @click="removeAddress(index)"
      >
        Remove
      </button>

      <div class="form-row form-row--one">
        <div class="form-group">
          <label :for="`addr-street-${index}`">Street Address</label>
          <input
            :id="`addr-street-${index}`"
            type="text"
            :value="address.streetAddress"
            @input="updateAddress(index, 'streetAddress', $event.target.value)"
          />
        </div>
      </div>

      <div class="form-row form-row--three">
        <div class="form-group">
          <label :for="`addr-city-${index}`">City</label>
          <input
            :id="`addr-city-${index}`"
            type="text"
            :value="address.city"
            @input="updateAddress(index, 'city', $event.target.value)"
          />
        </div>

        <div class="form-group">
          <label :for="`addr-state-${index}`">State</label>
          <select
            :id="`addr-state-${index}`"
            :value="address.state"
            @change="updateAddress(index, 'state', $event.target.value)"
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
          <label :for="`addr-zip-${index}`">Zip Code</label>
          <input
            :id="`addr-zip-${index}`"
            type="text"
            inputmode="numeric"
            :value="address.zipCode"
            @input="updateAddress(index, 'zipCode', $event.target.value)"
          />
        </div>
      </div>

      <div class="form-row form-row--one">
        <div class="form-group">
          <label :for="`addr-years-${index}`">Number of Years</label>
          <input
            :id="`addr-years-${index}`"
            type="text"
            placeholder="e.g., 2"
            :value="address.numberOfYears"
            @input="updateAddress(index, 'numberOfYears', $event.target.value)"
          />
        </div>
      </div>
    </fieldset>

    <button
      v-if="modelValue.addresses.length < 3"
      type="button"
      class="btn-add"
      @click="addAddress"
    >
      + Add Another Address
    </button>
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

function createEmptyAddress() {
  return {
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    numberOfYears: ''
  }
}

function updateAddress(index, field, value) {
  const updatedAddresses = props.modelValue.addresses.map((addr, i) =>
    i === index ? { ...addr, [field]: value } : addr
  )
  emit('update:modelValue', { ...props.modelValue, addresses: updatedAddresses })
}

function addAddress() {
  if (props.modelValue.addresses.length < 3) {
    const updatedAddresses = [...props.modelValue.addresses, createEmptyAddress()]
    emit('update:modelValue', { ...props.modelValue, addresses: updatedAddresses })
  }
}

function removeAddress(index) {
  const updatedAddresses = props.modelValue.addresses.filter((_, i) => i !== index)
  emit('update:modelValue', { ...props.modelValue, addresses: updatedAddresses })
}

const usStates = [
  { value: 'AL', label: 'Alabama' }, { value: 'AK', label: 'Alaska' }, { value: 'AZ', label: 'Arizona' }, { value: 'AR', label: 'Arkansas' }, { value: 'CA', label: 'California' }, { value: 'CO', label: 'Colorado' }, { value: 'CT', label: 'Connecticut' }, { value: 'DE', label: 'Delaware' }, { value: 'FL', label: 'Florida' }, { value: 'GA', label: 'Georgia' }, { value: 'HI', label: 'Hawaii' }, { value: 'ID', label: 'Idaho' }, { value: 'IL', label: 'Illinois' }, { value: 'IN', label: 'Indiana' }, { value: 'IA', label: 'Iowa' }, { value: 'KS', label: 'Kansas' }, { value: 'KY', label: 'Kentucky' }, { value: 'LA', label: 'Louisiana' }, { value: 'ME', label: 'Maine' }, { value: 'MD', label: 'Maryland' }, { value: 'MA', label: 'Massachusetts' }, { value: 'MI', label: 'Michigan' }, { value: 'MN', label: 'Minnesota' }, { value: 'MS', label: 'Mississippi' }, { value: 'MO', label: 'Missouri' }, { value: 'MT', label: 'Montana' }, { value: 'NE', label: 'Nebraska' }, { value: 'NV', label: 'Nevada' }, { value: 'NH', label: 'New Hampshire' }, { value: 'NJ', label: 'New Jersey' }, { value: 'NM', label: 'New Mexico' }, { value: 'NY', label: 'New York' }, { value: 'NC', label: 'North Carolina' }, { value: 'ND', label: 'North Dakota' }, { value: 'OH', label: 'Ohio' }, { value: 'OK', label: 'Oklahoma' }, { value: 'OR', label: 'Oregon' }, { value: 'PA', label: 'Pennsylvania' }, { value: 'RI', label: 'Rhode Island' }, { value: 'SC', label: 'South Carolina' }, { value: 'SD', label: 'South Dakota' }, { value: 'TN', label: 'Tennessee' }, { value: 'TX', label: 'Texas' }, { value: 'UT', label: 'Utah' }, { value: 'VT', label: 'Vermont' }, { value: 'VA', label: 'Virginia' }, { value: 'WA', label: 'Washington' }, { value: 'WV', label: 'West Virginia' }, { value: 'WI', label: 'Wisconsin' }, { value: 'WY', label: 'Wyoming' }
]
</script>

<style lang="scss" scoped>
@use '../../assets/scss/variables' as *;
@use '../../assets/scss/mixins' as *;

.step-residency {
  width: 100%;
}

.step-title {
  font-family: $font-heading;
  font-size: 1.5rem;
  color: $primary-blue;
  margin-bottom: 0.5rem;
}

.step-note {
  font-family: $font-body;
  font-size: 0.9rem;
  color: $medium-gray-dark;
  margin-bottom: 1.5rem;
  font-style: italic;
}

.form-fieldset {
  border: 1px solid $light-gray;
  border-radius: 4px;
  padding: 1.25rem;
  margin-bottom: 1.5rem;
  position: relative;

  legend {
    font-family: $font-heading;
    font-weight: 700;
    font-size: 1rem;
    color: $primary-blue;
    padding: 0 0.5rem;
  }
}

.btn-remove {
  position: absolute;
  top: -0.5rem;
  right: 0.75rem;
  background: none;
  border: 1px solid $medium-gray;
  border-radius: 4px;
  padding: 0.25rem 0.75rem;
  font-family: $font-body;
  font-size: 0.8rem;
  color: $medium-gray-dark;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: $light-gray;
    color: $dark-gray;
  }
}

.btn-add {
  display: inline-block;
  background-color: $white;
  border: 2px dashed $medium-gray;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  font-family: $font-heading;
  font-weight: 700;
  font-size: 0.9rem;
  color: $primary-blue;
  cursor: pointer;
  transition: background-color 0.2s, border-color 0.2s;

  &:hover {
    background-color: $light-gray;
    border-color: $primary-blue;
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
</style>
