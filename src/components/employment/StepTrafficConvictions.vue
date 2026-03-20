<template>
  <div class="step-traffic-convictions">
    <h2>Traffic Convictions</h2>
    <p class="step-description">
      Other than parking violations, please list all traffic convictions in the past 3 years (up to 3 entries).
    </p>

    <div class="no-records-check">
      <label class="checkbox-label">
        <input
          type="checkbox"
          :checked="localData.noConvictions"
          @change="toggleNoConvictions"
        />
        No convictions to report
      </label>
    </div>

    <div v-if="!localData.noConvictions">
      <fieldset
        v-for="(conviction, index) in localData.convictions"
        :key="index"
        class="entry-fieldset"
      >
        <legend>Conviction {{ index + 1 }}</legend>

        <div class="form-group">
          <label :for="`conviction-date-${index}`">
            Date (MM/YYYY) <span aria-hidden="true">*</span>
          </label>
          <input
            :id="`conviction-date-${index}`"
            type="text"
            placeholder="MM/YYYY"
            :value="conviction.date"
            @input="updateConvictionField(index, 'date', $event.target.value)"
            aria-required="true"
          />
        </div>

        <div class="form-group">
          <label :for="`conviction-violation-${index}`">
            Violation <span aria-hidden="true">*</span>
          </label>
          <input
            :id="`conviction-violation-${index}`"
            type="text"
            :value="conviction.violation"
            @input="updateConvictionField(index, 'violation', $event.target.value)"
            aria-required="true"
          />
        </div>

        <div class="form-group">
          <label :for="`conviction-state-${index}`">
            State of Violation <span aria-hidden="true">*</span>
          </label>
          <select
            :id="`conviction-state-${index}`"
            :value="conviction.stateOfViolation"
            @change="updateConvictionField(index, 'stateOfViolation', $event.target.value)"
            aria-required="true"
          >
            <option value="">-- Select State --</option>
            <option
              v-for="state in usStates"
              :key="state.value"
              :value="state.value"
            >
              {{ state.label }}
            </option>
          </select>
        </div>

        <div class="form-group">
          <label :for="`conviction-penalty-${index}`">
            Penalty <span aria-hidden="true">*</span>
          </label>
          <input
            :id="`conviction-penalty-${index}`"
            type="text"
            :value="conviction.penalty"
            @input="updateConvictionField(index, 'penalty', $event.target.value)"
            aria-required="true"
          />
        </div>

        <button
          v-if="localData.convictions.length > 1"
          type="button"
          class="btn-remove"
          @click="removeConviction(index)"
        >
          Remove
        </button>
      </fieldset>

      <button
        v-if="localData.convictions.length < 3"
        type="button"
        class="btn-add"
        @click="addConviction"
      >
        Add Another Conviction
      </button>
    </div>
  </div>
</template>

<script setup>
import { reactive, watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

const usStates = [
  { value: 'AL', label: 'Alabama' }, { value: 'AK', label: 'Alaska' }, { value: 'AZ', label: 'Arizona' }, { value: 'AR', label: 'Arkansas' }, { value: 'CA', label: 'California' }, { value: 'CO', label: 'Colorado' }, { value: 'CT', label: 'Connecticut' }, { value: 'DE', label: 'Delaware' }, { value: 'FL', label: 'Florida' }, { value: 'GA', label: 'Georgia' }, { value: 'HI', label: 'Hawaii' }, { value: 'ID', label: 'Idaho' }, { value: 'IL', label: 'Illinois' }, { value: 'IN', label: 'Indiana' }, { value: 'IA', label: 'Iowa' }, { value: 'KS', label: 'Kansas' }, { value: 'KY', label: 'Kentucky' }, { value: 'LA', label: 'Louisiana' }, { value: 'ME', label: 'Maine' }, { value: 'MD', label: 'Maryland' }, { value: 'MA', label: 'Massachusetts' }, { value: 'MI', label: 'Michigan' }, { value: 'MN', label: 'Minnesota' }, { value: 'MS', label: 'Mississippi' }, { value: 'MO', label: 'Missouri' }, { value: 'MT', label: 'Montana' }, { value: 'NE', label: 'Nebraska' }, { value: 'NV', label: 'Nevada' }, { value: 'NH', label: 'New Hampshire' }, { value: 'NJ', label: 'New Jersey' }, { value: 'NM', label: 'New Mexico' }, { value: 'NY', label: 'New York' }, { value: 'NC', label: 'North Carolina' }, { value: 'ND', label: 'North Dakota' }, { value: 'OH', label: 'Ohio' }, { value: 'OK', label: 'Oklahoma' }, { value: 'OR', label: 'Oregon' }, { value: 'PA', label: 'Pennsylvania' }, { value: 'RI', label: 'Rhode Island' }, { value: 'SC', label: 'South Carolina' }, { value: 'SD', label: 'South Dakota' }, { value: 'TN', label: 'Tennessee' }, { value: 'TX', label: 'Texas' }, { value: 'UT', label: 'Utah' }, { value: 'VT', label: 'Vermont' }, { value: 'VA', label: 'Virginia' }, { value: 'WA', label: 'Washington' }, { value: 'WV', label: 'West Virginia' }, { value: 'WI', label: 'Wisconsin' }, { value: 'WY', label: 'Wyoming' }
]

function createEmptyConviction() {
  return {
    date: '',
    violation: '',
    stateOfViolation: '',
    penalty: ''
  }
}

const localData = reactive({
  noConvictions: props.modelValue.noConvictions ?? true,
  convictions: props.modelValue.convictions?.length
    ? props.modelValue.convictions.map(c => ({ ...c }))
    : [createEmptyConviction()]
})

function emitUpdate() {
  emit('update:modelValue', {
    noConvictions: localData.noConvictions,
    convictions: localData.convictions.map(c => ({ ...c }))
  })
}

function toggleNoConvictions(event) {
  localData.noConvictions = event.target.checked
  if (localData.noConvictions) {
    localData.convictions = [createEmptyConviction()]
  }
  emitUpdate()
}

function updateConvictionField(index, field, value) {
  localData.convictions[index][field] = value
  emitUpdate()
}

function addConviction() {
  if (localData.convictions.length < 3) {
    localData.convictions.push(createEmptyConviction())
    emitUpdate()
  }
}

function removeConviction(index) {
  localData.convictions.splice(index, 1)
  emitUpdate()
}

watch(
  () => props.modelValue,
  (newVal) => {
    localData.noConvictions = newVal.noConvictions ?? true
    localData.convictions = newVal.convictions?.length
      ? newVal.convictions.map(c => ({ ...c }))
      : [createEmptyConviction()]
  },
  { deep: true }
)
</script>

<style lang="scss" scoped>
@use '../../assets/scss/variables' as *;
@use '../../assets/scss/mixins' as *;

.step-traffic-convictions {
  h2 {
    font-family: $font-heading;
    color: $primary-blue;
    margin-bottom: 0.5rem;
  }

  .step-description {
    font-family: $font-body;
    color: $medium-gray-dark;
    margin-bottom: 1.5rem;
  }
}

.no-records-check {
  margin-bottom: 1.5rem;

  .checkbox-label {
    font-family: $font-heading;
    font-weight: bold;
    font-size: 0.9rem;
    color: $dark-gray;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;

    input[type='checkbox'] {
      width: 1.1rem;
      height: 1.1rem;
      accent-color: $primary-blue;
    }
  }
}

.entry-fieldset {
  border: 1px solid $medium-gray;
  border-radius: 4px;
  padding: 1.25rem;
  margin-bottom: 1.25rem;

  > legend {
    font-family: $font-heading;
    font-weight: bold;
    font-size: 1rem;
    color: $primary-blue;
    padding: 0 0.5rem;
  }
}

.form-group {
  margin-bottom: 1rem;

  label {
    display: block;
    font-family: $font-heading;
    font-weight: bold;
    font-size: 0.9rem;
    color: $dark-gray;
    margin-bottom: 0.35rem;

    span {
      color: $accent-gold-text;
    }
  }

  input[type='text'],
  select {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid $medium-gray;
    border-radius: 4px;
    font-family: $font-body;
    font-size: 0.95rem;
    color: $dark-gray;
    box-sizing: border-box;

    &:focus {
      outline: none;
      border-color: $primary-blue;
      box-shadow: 0 0 0 2px rgba($primary-blue, 0.15);
    }
  }
}

.btn-add {
  display: inline-block;
  padding: 0.6rem 1.25rem;
  background-color: $primary-blue;
  color: $white;
  font-family: $font-heading;
  font-weight: bold;
  font-size: 0.9rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 0.5rem;

  &:hover {
    opacity: 0.9;
  }
}

.btn-remove {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: $white;
  color: $accent-gold-text;
  font-family: $font-heading;
  font-weight: bold;
  font-size: 0.85rem;
  border: 1px solid $accent-gold-text;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 0.5rem;

  &:hover {
    background-color: $light-gray;
  }
}
</style>
