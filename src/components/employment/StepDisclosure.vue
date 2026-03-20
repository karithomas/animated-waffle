<template>
  <div class="step-disclosure">
    <h2 class="step-title">FMCSA Disclosure &amp; Authorization</h2>

    <div class="legal-text-box" aria-label="FMCSA disclosure text">
      <p>In connection with your application for employment with R S Thomas Hauling, Inc. ("Prospective Employer"), Prospective Employer, its employees, agents or contractors may obtain one or more reports regarding your driving and safety history from the Federal Motor Carrier Safety Administration (FMCSA).</p>
      <p>When the application for employment is submitted by mail, telephone, computer, or other similar means, if the Prospective Employer uses any information it obtains from FMCSA in a decision to not hire you or to make any other adverse employment decision regarding you, the Prospective Employer must provide you with a copy of the report upon which its decision was based and a written summary of your rights under the Fair Credit Reporting Act before taking any final adverse action. If any final adverse action is taken against you based upon your driving history or safety report, the Prospective Employer will notify you that the action has been taken and that the action was based in part or in whole on this report.</p>
      <p>You may obtain a copy of the report from FMCSA by contacting the FMCSA via its website or the following address: Federal Motor Carrier Safety Administration, Office of Enforcement and Compliance, 1200 New Jersey Avenue SE, Washington DC 20590.</p>
    </div>

    <fieldset class="form-fieldset">
      <legend>Authorization</legend>

      <div class="form-row form-row--one">
        <div class="form-group form-group--checkbox">
          <label for="authorizationCheckbox">
            <input
              id="authorizationCheckbox"
              type="checkbox"
              :checked="modelValue.authorizationCheckbox"
              @change="update('authorizationCheckbox', $event.target.checked)"
              aria-required="true"
            />
            <span>
              I authorize R S Thomas Hauling, Inc. to access the FMCSA Pre-Employment Screening Program (PSP) to seek information regarding my commercial driving safety record and information regarding my safety inspection history.
              <span aria-hidden="true">*</span>
            </span>
          </label>
        </div>
      </div>

      <div class="form-row form-row--two">
        <div class="form-group">
          <label for="disclosureDate">
            Date <span aria-hidden="true">*</span>
          </label>
          <input
            id="disclosureDate"
            type="date"
            :value="modelValue.disclosureDate"
            @input="update('disclosureDate', $event.target.value)"
            required
            aria-required="true"
          />
        </div>

        <div class="form-group">
          <label for="disclosureSignature">
            Electronic Signature (type your full name) <span aria-hidden="true">*</span>
          </label>
          <input
            id="disclosureSignature"
            type="text"
            :value="modelValue.disclosureSignature"
            @input="update('disclosureSignature', $event.target.value)"
            required
            aria-required="true"
          />
        </div>
      </div>

      <div class="form-row form-row--one">
        <div class="form-group">
          <label for="printedName">
            Printed Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="printedName"
            type="text"
            :value="modelValue.printedName"
            @input="update('printedName', $event.target.value)"
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

.step-disclosure {
  width: 100%;
}

.step-title {
  font-family: $font-heading;
  font-size: 1.5rem;
  color: $primary-blue;
  margin-bottom: 1.5rem;
}

.legal-text-box {
  max-height: 250px;
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
