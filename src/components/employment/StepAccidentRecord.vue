<template>
  <div class="step-accident-record">
    <h2>Accident Record</h2>
    <p class="step-description">
      Please list all accidents in the past 3 years (up to 3 entries).
    </p>

    <div class="no-records-check">
      <label class="checkbox-label">
        <input
          type="checkbox"
          :checked="localData.noAccidents"
          @change="toggleNoAccidents"
        />
        No accidents to report
      </label>
    </div>

    <div v-if="!localData.noAccidents">
      <fieldset
        v-for="(accident, index) in localData.accidents"
        :key="index"
        class="entry-fieldset"
      >
        <legend>Accident {{ index + 1 }}</legend>

        <div class="form-group">
          <label :for="`accident-date-${index}`">
            Date <span aria-hidden="true">*</span>
          </label>
          <input
            :id="`accident-date-${index}`"
            type="date"
            :value="accident.date"
            @input="updateAccidentField(index, 'date', $event.target.value)"
            aria-required="true"
          />
        </div>

        <div class="form-group">
          <label :for="`accident-nature-${index}`">
            Nature of Accident <span aria-hidden="true">*</span>
          </label>
          <select
            :id="`accident-nature-${index}`"
            :value="accident.natureOfAccident"
            @change="updateAccidentField(index, 'natureOfAccident', $event.target.value)"
            aria-required="true"
          >
            <option value="">-- Select --</option>
            <option value="Head-On">Head-On</option>
            <option value="Rear-End">Rear-End</option>
            <option value="Upset">Upset</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div v-if="accident.natureOfAccident === 'Other'" class="form-group">
          <label :for="`accident-nature-other-${index}`">
            Please specify <span aria-hidden="true">*</span>
          </label>
          <input
            :id="`accident-nature-other-${index}`"
            type="text"
            :value="accident.natureOther"
            @input="updateAccidentField(index, 'natureOther', $event.target.value)"
            aria-required="true"
          />
        </div>

        <div class="form-row">
          <div class="form-group">
            <label :for="`accident-fatalities-${index}`">
              Fatalities <span aria-hidden="true">*</span>
            </label>
            <input
              :id="`accident-fatalities-${index}`"
              type="number"
              min="0"
              :value="accident.fatalities"
              @input="updateAccidentField(index, 'fatalities', $event.target.value)"
              aria-required="true"
            />
          </div>

          <div class="form-group">
            <label :for="`accident-injuries-${index}`">
              Injuries <span aria-hidden="true">*</span>
            </label>
            <input
              :id="`accident-injuries-${index}`"
              type="number"
              min="0"
              :value="accident.injuries"
              @input="updateAccidentField(index, 'injuries', $event.target.value)"
              aria-required="true"
            />
          </div>
        </div>

        <fieldset class="radio-fieldset">
          <legend>
            Chemical Spills <span aria-hidden="true">*</span>
          </legend>
          <div class="radio-group">
            <label>
              <input
                type="radio"
                :name="`chemical-spills-${index}`"
                value="Yes"
                :checked="accident.chemicalSpills === 'Yes'"
                @change="updateAccidentField(index, 'chemicalSpills', 'Yes')"
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                :name="`chemical-spills-${index}`"
                value="No"
                :checked="accident.chemicalSpills === 'No'"
                @change="updateAccidentField(index, 'chemicalSpills', 'No')"
              />
              No
            </label>
          </div>
        </fieldset>

        <button
          v-if="localData.accidents.length > 1"
          type="button"
          class="btn-remove"
          @click="removeAccident(index)"
        >
          Remove
        </button>
      </fieldset>

      <button
        v-if="localData.accidents.length < 3"
        type="button"
        class="btn-add"
        @click="addAccident"
      >
        Add Another Accident
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

function createEmptyAccident() {
  return {
    date: '',
    natureOfAccident: '',
    natureOther: '',
    fatalities: '',
    injuries: '',
    chemicalSpills: ''
  }
}

const localData = reactive({
  noAccidents: props.modelValue.noAccidents ?? true,
  accidents: props.modelValue.accidents?.length
    ? props.modelValue.accidents.map(a => ({ ...a }))
    : [createEmptyAccident()]
})

function emitUpdate() {
  emit('update:modelValue', {
    noAccidents: localData.noAccidents,
    accidents: localData.accidents.map(a => ({ ...a }))
  })
}

function toggleNoAccidents(event) {
  localData.noAccidents = event.target.checked
  if (localData.noAccidents) {
    localData.accidents = [createEmptyAccident()]
  }
  emitUpdate()
}

function updateAccidentField(index, field, value) {
  localData.accidents[index][field] = value
  emitUpdate()
}

function addAccident() {
  if (localData.accidents.length < 3) {
    localData.accidents.push(createEmptyAccident())
    emitUpdate()
  }
}

function removeAccident(index) {
  localData.accidents.splice(index, 1)
  emitUpdate()
}

watch(
  () => props.modelValue,
  (newVal) => {
    localData.noAccidents = newVal.noAccidents ?? true
    localData.accidents = newVal.accidents?.length
      ? newVal.accidents.map(a => ({ ...a }))
      : [createEmptyAccident()]
  },
  { deep: true }
)
</script>

<style lang="scss" scoped>
@use '../../assets/scss/variables' as *;
@use '../../assets/scss/mixins' as *;

.step-accident-record {
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
  input[type='date'],
  input[type='number'],
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

.form-row {
  display: flex;
  gap: 1rem;

  .form-group {
    flex: 1;
  }

  @include respond-to(md) {
    flex-direction: row;
  }
}

.radio-fieldset {
  border: none;
  padding: 0;
  margin: 0 0 1rem 0;

  legend {
    font-family: $font-heading;
    font-weight: bold;
    font-size: 0.9rem;
    color: $dark-gray;
    margin-bottom: 0.35rem;

    span {
      color: $accent-gold-text;
    }
  }

  .radio-group {
    display: flex;
    gap: 1.5rem;

    label {
      font-family: $font-body;
      font-weight: normal;
      font-size: 0.95rem;
      color: $dark-gray;
      display: flex;
      align-items: center;
      gap: 0.35rem;
      cursor: pointer;

      input[type='radio'] {
        accent-color: $primary-blue;
      }
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
