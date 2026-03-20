<template>
  <div class="step-employment-record">
    <h2>Employment Record</h2>
    <p class="step-description">
      Applicants that desire to drive in intrastate/interstate commerce must provide the following
      information on all employers during the previous three years. You must give the same
      information for all employers you have driven a commercial motor vehicle for seven years
      prior to the initial three years (total of ten years employment record).
    </p>

    <fieldset
      v-for="(employer, index) in localData.employers"
      :key="index"
      class="entry-fieldset"
    >
      <legend>Employer {{ index + 1 }}</legend>

      <div class="form-group">
        <label :for="`employer-name-${index}`">
          Employer Name
          <span v-if="index === 0" aria-hidden="true">*</span>
        </label>
        <input
          :id="`employer-name-${index}`"
          type="text"
          :value="employer.employerName"
          @input="updateEmployerField(index, 'employerName', $event.target.value)"
          :aria-required="index === 0 ? 'true' : undefined"
        />
      </div>

      <div class="form-group">
        <label :for="`employer-address-${index}`">
          Address <span aria-hidden="true">*</span>
        </label>
        <input
          :id="`employer-address-${index}`"
          type="text"
          :value="employer.address"
          @input="updateEmployerField(index, 'address', $event.target.value)"
          aria-required="true"
        />
      </div>

      <div class="form-row">
        <div class="form-group">
          <label :for="`employer-phone-${index}`">Phone</label>
          <input
            :id="`employer-phone-${index}`"
            type="text"
            :value="employer.phone"
            @input="updateEmployerField(index, 'phone', $event.target.value)"
          />
        </div>

        <div class="form-group">
          <label :for="`employer-position-${index}`">Position Held</label>
          <input
            :id="`employer-position-${index}`"
            type="text"
            :value="employer.positionHeld"
            @input="updateEmployerField(index, 'positionHeld', $event.target.value)"
          />
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label :for="`employer-date-from-${index}`">Date From</label>
          <input
            :id="`employer-date-from-${index}`"
            type="date"
            :value="employer.dateFrom"
            @input="updateEmployerField(index, 'dateFrom', $event.target.value)"
          />
        </div>

        <div class="form-group">
          <label :for="`employer-date-to-${index}`">Date To</label>
          <input
            :id="`employer-date-to-${index}`"
            type="date"
            :value="employer.dateTo"
            @input="updateEmployerField(index, 'dateTo', $event.target.value)"
          />
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label :for="`employer-salary-${index}`">Salary</label>
          <input
            :id="`employer-salary-${index}`"
            type="text"
            :value="employer.salary"
            @input="updateEmployerField(index, 'salary', $event.target.value)"
          />
        </div>

        <div class="form-group">
          <label :for="`employer-reasons-${index}`">Reasons for Leaving</label>
          <input
            :id="`employer-reasons-${index}`"
            type="text"
            :value="employer.reasonsForLeaving"
            @input="updateEmployerField(index, 'reasonsForLeaving', $event.target.value)"
          />
        </div>
      </div>

      <div class="form-group">
        <label :for="`employer-gaps-${index}`">Gaps in Employment</label>
        <p class="field-note">
          Any gaps in employment and/or unemployment must be explained. Include dates (month/year) and reason.
        </p>
        <textarea
          :id="`employer-gaps-${index}`"
          :value="employer.gapsInEmployment"
          @input="updateEmployerField(index, 'gapsInEmployment', $event.target.value)"
          rows="3"
        ></textarea>
      </div>

      <fieldset class="radio-fieldset">
        <legend>
          Subject to Federal Motor Carrier Safety Regulations (FMCSR)?
        </legend>
        <div class="radio-group">
          <label>
            <input
              type="radio"
              :name="`fmcsr-${index}`"
              value="Yes"
              :checked="employer.subjectToFMCSR === 'Yes'"
              @change="updateEmployerField(index, 'subjectToFMCSR', 'Yes')"
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              :name="`fmcsr-${index}`"
              value="No"
              :checked="employer.subjectToFMCSR === 'No'"
              @change="updateEmployerField(index, 'subjectToFMCSR', 'No')"
            />
            No
          </label>
        </div>
      </fieldset>

      <fieldset class="radio-fieldset">
        <legend>
          Was position DOT safety-sensitive (subject to alcohol &amp; controlled substances testing per 49 CFR Part 40)?
        </legend>
        <div class="radio-group">
          <label>
            <input
              type="radio"
              :name="`dot-sensitive-${index}`"
              value="Yes"
              :checked="employer.dotSafetySensitive === 'Yes'"
              @change="updateEmployerField(index, 'dotSafetySensitive', 'Yes')"
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              :name="`dot-sensitive-${index}`"
              value="No"
              :checked="employer.dotSafetySensitive === 'No'"
              @change="updateEmployerField(index, 'dotSafetySensitive', 'No')"
            />
            No
          </label>
        </div>
      </fieldset>

      <button
        v-if="localData.employers.length > 1"
        type="button"
        class="btn-remove"
        @click="removeEmployer(index)"
      >
        Remove
      </button>
    </fieldset>

    <button
      v-if="localData.employers.length < 3"
      type="button"
      class="btn-add"
      @click="addEmployer"
    >
      Add Another Employer
    </button>
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

function createEmptyEmployer() {
  return {
    employerName: '',
    address: '',
    phone: '',
    positionHeld: '',
    dateFrom: '',
    dateTo: '',
    salary: '',
    reasonsForLeaving: '',
    gapsInEmployment: '',
    subjectToFMCSR: '',
    dotSafetySensitive: ''
  }
}

const localData = reactive({
  employers: props.modelValue.employers?.length
    ? props.modelValue.employers.map(e => ({ ...e }))
    : [createEmptyEmployer()]
})

function emitUpdate() {
  emit('update:modelValue', {
    employers: localData.employers.map(e => ({ ...e }))
  })
}

function updateEmployerField(index, field, value) {
  localData.employers[index][field] = value
  emitUpdate()
}

function addEmployer() {
  if (localData.employers.length < 3) {
    localData.employers.push(createEmptyEmployer())
    emitUpdate()
  }
}

function removeEmployer(index) {
  localData.employers.splice(index, 1)
  emitUpdate()
}

watch(
  () => props.modelValue,
  (newVal) => {
    localData.employers = newVal.employers?.length
      ? newVal.employers.map(e => ({ ...e }))
      : [createEmptyEmployer()]
  },
  { deep: true }
)
</script>

<style lang="scss" scoped>
@use '../../assets/scss/variables' as *;
@use '../../assets/scss/mixins' as *;

.step-employment-record {
  h2 {
    font-family: $font-heading;
    color: $primary-blue;
    margin-bottom: 0.5rem;
  }

  .step-description {
    font-family: $font-body;
    color: $medium-gray-dark;
    margin-bottom: 1.5rem;
    line-height: 1.6;
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

  .field-note {
    font-family: $font-body;
    font-size: 0.85rem;
    color: $medium-gray;
    margin: 0 0 0.35rem 0;
    font-style: italic;
  }

  input[type='text'],
  input[type='date'],
  textarea {
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

  textarea {
    resize: vertical;
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
