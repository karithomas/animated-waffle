<template>
  <div ref="formTop" class="driver-application">
    <div class="driver-application__container">
      <div class="driver-application__header">
        <h1 class="driver-application__title">R.S. Thomas Hauling, Inc. &mdash; Driver's Employment Application</h1>
        <p class="driver-application__notice">
          This application contains sensitive personal information. All data is transmitted securely via HTTPS.
        </p>
      </div>

      <template v-if="!submitted">
        <FormProgressBar
          :current-step="currentStep"
          :total-steps="totalSteps"
          :step-labels="stepLabels"
        />

        <div class="driver-application__card">
          <form
            name="driver-application"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            @submit.prevent
          >
            <input type="hidden" name="form-name" value="driver-application" />
            <p class="driver-application__honeypot">
              <label>Don't fill this out: <input name="bot-field" /></label>
            </p>

            <StepPersonalInfo
              v-if="currentStep === 1"
              v-model="formData.personalInfo"
            />
            <StepResidency
              v-if="currentStep === 2"
              v-model="formData.residency"
            />
            <StepLicense
              v-if="currentStep === 3"
              v-model="formData.license"
            />
            <StepDrivingExperience
              v-if="currentStep === 4"
              v-model="formData.drivingExperience"
            />
            <StepAccidentRecord
              v-if="currentStep === 5"
              v-model="formData.accidentRecord"
            />
            <StepTrafficConvictions
              v-if="currentStep === 6"
              v-model="formData.trafficConvictions"
            />
            <StepLicenseHistory
              v-if="currentStep === 7"
              v-model="formData.licenseHistory"
            />
            <StepEmploymentRecord
              v-if="currentStep === 8"
              v-model="formData.employmentRecord"
            />
            <StepCertification
              v-if="currentStep === 9"
              v-model="formData.certification"
            />
            <StepDisclosure
              v-if="currentStep === 10"
              v-model="formData.disclosure"
            />
            <StepMVRAuth
              v-if="currentStep === 11"
              v-model="formData.mvrAuth"
            />

            <div
              v-if="validationError"
              class="driver-application__error"
              role="alert"
            >
              {{ validationError }}
            </div>

            <div class="driver-application__nav">
              <button
                v-if="currentStep > 1"
                type="button"
                class="btn btn--secondary"
                @click="previousStep"
              >
                Previous
              </button>
              <span v-else></span>
              <button
                type="button"
                class="btn btn--primary"
                @click="nextStep"
              >
                {{ currentStep === totalSteps ? 'Submit Application' : 'Next' }}
              </button>
            </div>
          </form>
        </div>
      </template>

      <ApplicationSuccess v-else />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, nextTick } from 'vue'
import StepPersonalInfo from './StepPersonalInfo.vue'
import StepResidency from './StepResidency.vue'
import StepLicense from './StepLicense.vue'
import StepDrivingExperience from './StepDrivingExperience.vue'
import StepAccidentRecord from './StepAccidentRecord.vue'
import StepTrafficConvictions from './StepTrafficConvictions.vue'
import StepLicenseHistory from './StepLicenseHistory.vue'
import StepEmploymentRecord from './StepEmploymentRecord.vue'
import StepCertification from './StepCertification.vue'
import StepDisclosure from './StepDisclosure.vue'
import StepMVRAuth from './StepMVRAuth.vue'
import FormProgressBar from './FormProgressBar.vue'
import ApplicationSuccess from './ApplicationSuccess.vue'

const totalSteps = 11
const formTop = ref(null)
const currentStep = ref(1)
const submitted = ref(false)

const stepLabels = [
  'Personal Information',
  'Previous Residency',
  'License Information',
  'Driving Experience',
  'Accident Record',
  'Traffic Convictions',
  'License History',
  'Employment Record',
  'Certification',
  'FMCSA Disclosure',
  'MVR Authorization'
]

const formData = reactive({
  personalInfo: {
    firstName: '',
    middleName: '',
    maidenName: '',
    lastName: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    howLongAtAddress: '',
    dateOfBirth: '',

    cellPhone: '',
    expectedPay: ''
  },
  residency: {
    addresses: [
      { streetAddress: '', city: '', state: '', zipCode: '', numberOfYears: '' }
    ]
  },
  license: {
    state: '',
    licenseNumber: '',
    licenseType: '',
    expirationDate: ''
  },
  drivingExperience: {
    experience: [
      { classOfEquipment: 'Straight Truck', typeOfEquipment: '', datesFrom: '', datesTo: '', approxMiles: '' },
      { classOfEquipment: 'Tractor and Semi Trailer', typeOfEquipment: '', datesFrom: '', datesTo: '', approxMiles: '' },
      { classOfEquipment: 'Tractor \u2013 Two Trailers', typeOfEquipment: '', datesFrom: '', datesTo: '', approxMiles: '' }
    ]
  },
  accidentRecord: {
    noAccidents: true,
    accidents: []
  },
  trafficConvictions: {
    noConvictions: true,
    convictions: []
  },
  licenseHistory: {
    deniedLicense: '',
    deniedExplanation: '',
    suspendedRevoked: '',
    suspendedExplanation: ''
  },
  employmentRecord: {
    employers: [
      {
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
    ]
  },
  certification: {
    certificationCheckbox: false,
    signatureDate: '',
    signature: '',
    secondDate: '',
    secondSignature: ''
  },
  disclosure: {
    authorizationCheckbox: false,
    disclosureDate: '',
    disclosureSignature: '',
    printedName: ''
  },
  mvrAuth: {
    employeeName: '',
    mvrLicenseNumber: '',
    mvrState: '',
    yearsOfCDLExperience: '',
    mvrDateOfBirth: '',

    mvrSignature: ''
  }
})

const validationError = ref('')

const stepValidation = {
  1: () => {
    const p = formData.personalInfo
    const missing = []
    if (!p.firstName.trim()) missing.push('First Name')
    if (!p.lastName.trim()) missing.push('Last Name')
    if (!p.streetAddress.trim()) missing.push('Street Address')
    if (!p.city.trim()) missing.push('City')
    if (!p.state) missing.push('State')
    if (!p.zipCode.trim()) missing.push('ZIP Code')
    if (!p.dateOfBirth) missing.push('Date of Birth')
    if (!p.cellPhone.trim()) missing.push('Cell Phone Number')
    return missing
  },
  2: () => [], // residency is optional
  3: () => {
    const l = formData.license
    const missing = []
    if (!l.state) missing.push('State')
    if (!l.licenseNumber.trim()) missing.push('License Number')
    if (!l.licenseType.trim()) missing.push('License Type')
    if (!l.expirationDate) missing.push('Expiration Date')
    return missing
  },
  4: () => [], // driving experience is optional
  5: () => [], // accident record is optional
  6: () => [], // traffic convictions is optional
  7: () => {
    const lh = formData.licenseHistory
    const missing = []
    if (!lh.deniedLicense) missing.push('Have you ever been denied a license?')
    if (lh.deniedLicense === 'yes' && !lh.deniedExplanation.trim()) missing.push('Denied license explanation')
    if (!lh.suspendedRevoked) missing.push('Has any license been suspended or revoked?')
    if (lh.suspendedRevoked === 'yes' && !lh.suspendedExplanation.trim()) missing.push('Suspended/revoked explanation')
    return missing
  },
  8: () => {
    const e = formData.employmentRecord.employers[0]
    const missing = []
    if (!e.employerName.trim()) missing.push('Employer Name')
    if (!e.address.trim()) missing.push('Employer Address')
    return missing
  },
  9: () => {
    const c = formData.certification
    const missing = []
    if (!c.certificationCheckbox) missing.push('Certification checkbox')
    if (!c.signatureDate) missing.push('Date')
    if (!c.signature.trim()) missing.push('Signature')
    if (!c.secondDate) missing.push('Second Date')
    if (!c.secondSignature.trim()) missing.push('Second Signature')
    return missing
  },
  10: () => {
    const d = formData.disclosure
    const missing = []
    if (!d.authorizationCheckbox) missing.push('Authorization checkbox')
    if (!d.disclosureDate) missing.push('Date')
    if (!d.disclosureSignature.trim()) missing.push('Signature')
    if (!d.printedName.trim()) missing.push('Printed Name')
    return missing
  },
  11: () => {
    const m = formData.mvrAuth
    const missing = []
    if (!m.employeeName.trim()) missing.push('Full Name')
    if (!m.mvrLicenseNumber.trim()) missing.push('License Number')
    if (!m.mvrState) missing.push('State')
    if (!m.yearsOfCDLExperience.trim()) missing.push('Years of CDL Experience')
    if (!m.mvrDateOfBirth) missing.push('Date of Birth')
    if (!m.mvrSignature.trim()) missing.push('Signature')
    return missing
  }
}

function validateStep(step) {
  return stepValidation[step] ? stepValidation[step]() : []
}

function validateAllSteps() {
  for (let step = 1; step <= totalSteps; step++) {
    const missing = validateStep(step)
    if (missing.length > 0) {
      return { step, missing }
    }
  }
  return null
}

async function highlightErrors() {
  await nextTick()
  const firstInvalid = document.querySelector('.driver-application [aria-required="true"]')
  if (firstInvalid) {
    firstInvalid.focus()
  }
}

function flattenFormData(data) {
  const flat = { 'form-name': 'driver-application' }
  for (const [section, fields] of Object.entries(data)) {
    if (typeof fields === 'object' && !Array.isArray(fields)) {
      for (const [key, value] of Object.entries(fields)) {
        if (Array.isArray(value)) {
          value.forEach((item, i) => {
            if (typeof item === 'object') {
              for (const [k, v] of Object.entries(item)) {
                flat[`${section}_${key}${i + 1}_${k}`] = v || ''
              }
            } else {
              flat[`${section}_${key}${i + 1}`] = item || ''
            }
          })
        } else {
          flat[`${section}_${key}`] = value || ''
        }
      }
    }
  }
  return flat
}

function previousStep() {
  if (currentStep.value > 1) {
    validationError.value = ''
    currentStep.value--
    formTop.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

async function nextStep() {
  const missing = validateStep(currentStep.value)
  if (missing.length > 0) {
    validationError.value = `Please complete the following required fields: ${missing.join(', ')}`
    await highlightErrors()
    return
  }

  validationError.value = ''

  if (currentStep.value < totalSteps) {
    currentStep.value++
    formTop.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  } else {
    await submitApplication()
  }
}

async function submitApplication() {
  // Validate all steps before submitting
  const failure = validateAllSteps()
  if (failure) {
    currentStep.value = failure.step
    validationError.value = `Please complete the following required fields on this step: ${failure.missing.join(', ')}`
    formTop.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    await highlightErrors()
    return
  }

  const flatData = flattenFormData(formData)
  const body = new URLSearchParams(flatData).toString()

  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body
    })

    if (response.ok) {
      submitted.value = true
      formTop.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      alert('There was an error submitting your application. Please call us at (804) 598-6292.')
    }
  } catch (error) {
    alert('There was an error submitting your application. Please call us at (804) 598-6292.')
  }
}
</script>

<style lang="scss" scoped>
@use '../../assets/scss/variables' as *;
@use '../../assets/scss/mixins' as *;

.driver-application {
  @include section-padding;
  background-color: $light-gray;
  min-height: 100vh;

  &__container {
    @include container;
    max-width: 800px;
    margin: 0 auto;
  }

  &__header {
    text-align: center;
    margin-bottom: 2rem;
  }

  &__title {
    font-family: $font-heading;
    font-size: 1.5rem;
    font-weight: 700;
    color: $primary-blue;
    margin-bottom: 0.5rem;

    @include respond-to(md) {
      font-size: 1.75rem;
    }
  }

  &__notice {
    font-family: $font-body;
    font-size: 0.85rem;
    color: $medium-gray;
    line-height: 1.5;
  }

  &__card {
    background-color: $white;
    border: 1px solid #e0e2e5;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);

    @include respond-to(md) {
      padding: 2rem;
    }
  }

  &__honeypot {
    display: none;
  }

  &__error {
    background-color: #fef2f2;
    border: 1px solid #fca5a5;
    border-radius: 6px;
    color: #991b1b;
    padding: 1rem;
    margin-top: 1.5rem;
    font-size: 0.9rem;
    line-height: 1.5;
  }

  &__nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
    padding-top: 1.5rem;
    border-top: 1px solid $light-gray;
  }
}

.btn {
  font-family: $font-body;
  font-size: 0.95rem;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;

  &--primary {
    background-color: $primary-blue;
    color: $white;

    &:hover {
      background-color: #122840;
    }
  }

  &--secondary {
    background-color: $white;
    color: $primary-blue;
    border: 2px solid $primary-blue;

    &:hover {
      background-color: $light-gray;
    }
  }
}
</style>
