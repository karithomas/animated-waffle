<template>
  <div class="step-license-history">
    <h2>License History</h2>
    <p class="step-description">
      Please answer the following questions regarding your driving license history.
    </p>

    <fieldset class="question-fieldset">
      <legend>
        A. Have you ever been denied a license, permit or privilege to operate a motor vehicle?
        <span aria-hidden="true">*</span>
      </legend>
      <div class="radio-group">
        <label>
          <input
            type="radio"
            name="denied-license"
            value="Yes"
            :checked="localData.deniedLicense === 'Yes'"
            @change="updateField('deniedLicense', 'Yes')"
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="denied-license"
            value="No"
            :checked="localData.deniedLicense === 'No'"
            @change="updateField('deniedLicense', 'No')"
            aria-required="true"
          />
          No
        </label>
      </div>

      <div v-if="localData.deniedLicense === 'Yes'" class="form-group">
        <label for="denied-explanation">
          Please explain <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="denied-explanation"
          :value="localData.deniedLicenseExplanation"
          @input="updateField('deniedLicenseExplanation', $event.target.value)"
          rows="4"
          required
          aria-required="true"
        ></textarea>
      </div>
    </fieldset>

    <fieldset class="question-fieldset">
      <legend>
        B. Has any license, permit or privilege ever been suspended or revoked?
        <span aria-hidden="true">*</span>
      </legend>
      <div class="radio-group">
        <label>
          <input
            type="radio"
            name="suspended-revoked"
            value="Yes"
            :checked="localData.suspendedRevoked === 'Yes'"
            @change="updateField('suspendedRevoked', 'Yes')"
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="suspended-revoked"
            value="No"
            :checked="localData.suspendedRevoked === 'No'"
            @change="updateField('suspendedRevoked', 'No')"
            aria-required="true"
          />
          No
        </label>
      </div>

      <div v-if="localData.suspendedRevoked === 'Yes'" class="form-group">
        <label for="suspended-explanation">
          Please explain <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="suspended-explanation"
          :value="localData.suspendedRevokedExplanation"
          @input="updateField('suspendedRevokedExplanation', $event.target.value)"
          rows="4"
          required
          aria-required="true"
        ></textarea>
      </div>
    </fieldset>
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

const localData = reactive({
  deniedLicense: props.modelValue.deniedLicense ?? '',
  deniedLicenseExplanation: props.modelValue.deniedLicenseExplanation ?? '',
  suspendedRevoked: props.modelValue.suspendedRevoked ?? '',
  suspendedRevokedExplanation: props.modelValue.suspendedRevokedExplanation ?? ''
})

function emitUpdate() {
  emit('update:modelValue', { ...localData })
}

function updateField(field, value) {
  localData[field] = value
  if (field === 'deniedLicense' && value === 'No') {
    localData.deniedLicenseExplanation = ''
  }
  if (field === 'suspendedRevoked' && value === 'No') {
    localData.suspendedRevokedExplanation = ''
  }
  emitUpdate()
}

watch(
  () => props.modelValue,
  (newVal) => {
    localData.deniedLicense = newVal.deniedLicense ?? ''
    localData.deniedLicenseExplanation = newVal.deniedLicenseExplanation ?? ''
    localData.suspendedRevoked = newVal.suspendedRevoked ?? ''
    localData.suspendedRevokedExplanation = newVal.suspendedRevokedExplanation ?? ''
  },
  { deep: true }
)
</script>

<style lang="scss" scoped>
@use '../../assets/scss/variables' as *;
@use '../../assets/scss/mixins' as *;

.step-license-history {
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

.question-fieldset {
  border: 1px solid $medium-gray;
  border-radius: 4px;
  padding: 1.25rem;
  margin-bottom: 1.5rem;

  > legend {
    font-family: $font-heading;
    font-weight: bold;
    font-size: 0.95rem;
    color: $dark-gray;
    padding: 0 0.5rem;

    span {
      color: $accent-gold-text;
    }
  }
}

.radio-group {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;

  label {
    font-family: $font-body;
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

  textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid $medium-gray;
    border-radius: 4px;
    font-family: $font-body;
    font-size: 0.95rem;
    color: $dark-gray;
    box-sizing: border-box;
    resize: vertical;

    &:focus {
      outline: none;
      border-color: $primary-blue;
      box-shadow: 0 0 0 2px rgba($primary-blue, 0.15);
    }
  }
}
</style>
