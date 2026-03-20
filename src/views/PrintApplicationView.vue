<template>
  <div class="print-application">
    <div class="no-print">
      <button class="print-btn" @click="printPage">Print this page</button>
      <p class="print-instructions">
        Complete this application and bring it to our office at 2285 Batterson Road, Powhatan, VA 23139,
        or call <a href="tel:8045986292">(804) 598-6292</a> for more information.
      </p>
    </div>

    <!-- Company Header -->
    <div class="company-header">
      <h1>R.S. Thomas Hauling, Inc.</h1>
      <p>2285 Batterson Road, Powhatan, VA 23139</p>
      <p>(804) 598-6292</p>
      <h2 class="app-title">Driver's Employment Application</h2>
    </div>

    <!-- Section 1: Personal Information -->
    <div class="section">
      <h3 class="section-heading">1. Personal Information</h3>

      <div class="field-row">
        <div class="field field--third">
          <span class="field__label">First Name</span>
          <span class="field__line"></span>
        </div>
        <div class="field field--third">
          <span class="field__label">Middle Name</span>
          <span class="field__line"></span>
        </div>
        <div class="field field--third">
          <span class="field__label">Maiden Name</span>
          <span class="field__line"></span>
        </div>
      </div>

      <div class="field-row">
        <div class="field field--full">
          <span class="field__label">Last Name</span>
          <span class="field__line"></span>
        </div>
      </div>

      <div class="field-row">
        <div class="field field--full">
          <span class="field__label">Street Address</span>
          <span class="field__line"></span>
        </div>
      </div>

      <div class="field-row">
        <div class="field field--third">
          <span class="field__label">City</span>
          <span class="field__line"></span>
        </div>
        <div class="field field--third">
          <span class="field__label">State</span>
          <span class="field__line"></span>
        </div>
        <div class="field field--third">
          <span class="field__label">ZIP Code</span>
          <span class="field__line"></span>
        </div>
      </div>

      <div class="field-row">
        <div class="field field--third">
          <span class="field__label">How Long at This Address?</span>
          <span class="field__line"></span>
        </div>
        <div class="field field--third">
          <span class="field__label">Date of Birth</span>
          <span class="field__line"></span>
        </div>
        <div class="field field--third">
          <span class="field__label">Social Security Number</span>
          <span class="field__line"></span>
        </div>
      </div>

      <div class="field-row">
        <div class="field field--half">
          <span class="field__label">Cell Phone</span>
          <span class="field__line"></span>
        </div>
        <div class="field field--half">
          <span class="field__label">Expected Pay</span>
          <span class="field__line"></span>
        </div>
      </div>
    </div>

    <!-- Section 2: Previous Residency -->
    <div class="section">
      <h3 class="section-heading">2. Previous Residency (Past 3 Years)</h3>
      <p class="section-note">Only needed if you have lived at other addresses in the past 3 years.</p>

      <table class="data-table">
        <thead>
          <tr>
            <th>Street Address</th>
            <th>City</th>
            <th>State</th>
            <th>ZIP</th>
            <th>Years</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="n in 3" :key="n">
            <td class="cell--wide">&nbsp;</td>
            <td>&nbsp;</td>
            <td class="cell--narrow">&nbsp;</td>
            <td class="cell--narrow">&nbsp;</td>
            <td class="cell--narrow">&nbsp;</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Section 3: License Information -->
    <div class="section">
      <h3 class="section-heading">3. Driver's License Information</h3>

      <div class="regulatory-note">
        <p>Section 383.21 FMCSR states "No person who operates a commercial motor vehicle shall at any time have more than one driver's license." I certify that I do not have more than one motor vehicle license, the information for which is listed below.</p>
      </div>

      <div class="field-row">
        <div class="field field--quarter">
          <span class="field__label">State</span>
          <span class="field__line"></span>
        </div>
        <div class="field field--quarter">
          <span class="field__label">License Number</span>
          <span class="field__line"></span>
        </div>
        <div class="field field--quarter">
          <span class="field__label">License Type</span>
          <span class="field__line"></span>
        </div>
        <div class="field field--quarter">
          <span class="field__label">Expiration Date</span>
          <span class="field__line"></span>
        </div>
      </div>
    </div>

    <!-- Section 4: Driving Experience -->
    <div class="section">
      <h3 class="section-heading">4. Driving Experience</h3>

      <table class="data-table">
        <thead>
          <tr>
            <th>Class of Equipment</th>
            <th>Type of Equipment</th>
            <th>Dates From</th>
            <th>Dates To</th>
            <th>Approx. Miles</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Straight Truck</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>Tractor and Semi Trailer</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>Tractor &ndash; Two Trailers</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Section 5: Accident Record -->
    <div class="section">
      <h3 class="section-heading">5. Accident Record (Past 3 Years)</h3>

      <table class="data-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Nature of Accident</th>
            <th>Fatalities</th>
            <th>Injuries</th>
            <th>Chemical Spills</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="n in 3" :key="n">
            <td>&nbsp;</td>
            <td class="cell--wide">&nbsp;</td>
            <td class="cell--narrow">&nbsp;</td>
            <td class="cell--narrow">&nbsp;</td>
            <td class="cell--narrow">&nbsp;</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Section 6: Traffic Convictions -->
    <div class="section">
      <h3 class="section-heading">6. Traffic Convictions (Past 3 Years)</h3>
      <p class="section-note">Other than parking violations.</p>

      <table class="data-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Violation</th>
            <th>State</th>
            <th>Penalty</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="n in 3" :key="n">
            <td>&nbsp;</td>
            <td class="cell--wide">&nbsp;</td>
            <td class="cell--narrow">&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Section 7: License History -->
    <div class="section">
      <h3 class="section-heading">7. License History</h3>

      <div class="question-block">
        <p class="question-block__text">A. Have you ever been denied a license, permit or privilege to operate a motor vehicle?</p>
        <div class="question-block__options">
          <span class="checkbox-option"><span class="checkbox-box"></span> Yes</span>
          <span class="checkbox-option"><span class="checkbox-box"></span> No</span>
        </div>
        <div class="field field--full">
          <span class="field__label">If yes, explain:</span>
          <span class="field__line"></span>
        </div>
        <div class="field field--full">
          <span class="field__line"></span>
        </div>
      </div>

      <div class="question-block">
        <p class="question-block__text">B. Has any license, permit or privilege ever been suspended or revoked?</p>
        <div class="question-block__options">
          <span class="checkbox-option"><span class="checkbox-box"></span> Yes</span>
          <span class="checkbox-option"><span class="checkbox-box"></span> No</span>
        </div>
        <div class="field field--full">
          <span class="field__label">If yes, explain:</span>
          <span class="field__line"></span>
        </div>
        <div class="field field--full">
          <span class="field__line"></span>
        </div>
      </div>
    </div>

    <!-- Section 8: Employment Record -->
    <div class="section">
      <h3 class="section-heading">8. Employment Record</h3>
      <p class="section-note">
        Applicants that desire to drive in intrastate/interstate commerce must provide the following
        information on all employers during the previous three years. You must give the same
        information for all employers you have driven a commercial motor vehicle for seven years
        prior to the initial three years (total of ten years employment record).
      </p>

      <div v-for="n in 3" :key="n" class="employer-block">
        <h4 class="employer-block__title">Employer {{ n }}</h4>

        <div class="field-row">
          <div class="field field--half">
            <span class="field__label">Employer Name</span>
            <span class="field__line"></span>
          </div>
          <div class="field field--half">
            <span class="field__label">Phone</span>
            <span class="field__line"></span>
          </div>
        </div>

        <div class="field-row">
          <div class="field field--full">
            <span class="field__label">Address</span>
            <span class="field__line"></span>
          </div>
        </div>

        <div class="field-row">
          <div class="field field--quarter">
            <span class="field__label">Position Held</span>
            <span class="field__line"></span>
          </div>
          <div class="field field--quarter">
            <span class="field__label">Date From</span>
            <span class="field__line"></span>
          </div>
          <div class="field field--quarter">
            <span class="field__label">Date To</span>
            <span class="field__line"></span>
          </div>
          <div class="field field--quarter">
            <span class="field__label">Salary</span>
            <span class="field__line"></span>
          </div>
        </div>

        <div class="field-row">
          <div class="field field--full">
            <span class="field__label">Reasons for Leaving</span>
            <span class="field__line"></span>
          </div>
        </div>

        <div class="field-row">
          <div class="field field--full">
            <span class="field__label">Gaps in Employment (include dates and reasons)</span>
            <span class="field__line"></span>
          </div>
        </div>
        <div class="field-row">
          <div class="field field--full">
            <span class="field__line"></span>
          </div>
        </div>

        <div class="field-row">
          <div class="field field--half">
            <span class="field__label">Subject to FMCSR?</span>
            <span class="checkbox-option"><span class="checkbox-box"></span> Yes</span>
            <span class="checkbox-option"><span class="checkbox-box"></span> No</span>
          </div>
          <div class="field field--half">
            <span class="field__label">DOT safety-sensitive position (49 CFR Part 40)?</span>
            <span class="checkbox-option"><span class="checkbox-box"></span> Yes</span>
            <span class="checkbox-option"><span class="checkbox-box"></span> No</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Section 9: Applicant Certification -->
    <div class="section">
      <h3 class="section-heading">9. Certification of Applicant</h3>

      <div class="legal-text">
        <p>I authorize you to make sure investigations and inquiries to my personal, employment, financial or medical history and other related matters as may be necessary in arriving at an employment decision. (Generally, inquiries regarding medical history will be made only if and after a conditional offer of employment has been extended.) I hereby release employers, schools, health care providers and other persons from all liability in responding to inquiries and releasing information in connection with my application.</p>
        <p>In the event of employment, I understand that false or misleading information given in my application or interview(s) may result in discharge. I understand, also, that I am required to abide by all rules and regulations of R S Thomas Hauling, Inc.</p>
      </div>

      <p class="certification-statement">I certify that I completed this application, and that all entries on it and information in it are true and complete to the best of my knowledge.</p>

      <div class="signature-row">
        <div class="signature-field">
          <span class="signature-field__line"></span>
          <span class="signature-field__label">Signature</span>
        </div>
        <div class="signature-field signature-field--short">
          <span class="signature-field__line"></span>
          <span class="signature-field__label">Date</span>
        </div>
      </div>

      <div class="signature-row">
        <div class="signature-field">
          <span class="signature-field__line"></span>
          <span class="signature-field__label">Signature</span>
        </div>
        <div class="signature-field signature-field--short">
          <span class="signature-field__line"></span>
          <span class="signature-field__label">Date</span>
        </div>
      </div>
    </div>

    <!-- Section 10: FMCSA Disclosure -->
    <div class="section">
      <h3 class="section-heading">10. FMCSA Disclosure &amp; Authorization</h3>

      <div class="legal-text">
        <p>In connection with your application for employment with R S Thomas Hauling, Inc. ("Prospective Employer"), Prospective Employer, its employees, agents or contractors may obtain one or more reports regarding your driving and safety history from the Federal Motor Carrier Safety Administration (FMCSA).</p>
        <p>When the application for employment is submitted by mail, telephone, computer, or other similar means, if the Prospective Employer uses any information it obtains from FMCSA in a decision to not hire you or to make any other adverse employment decision regarding you, the Prospective Employer must provide you with a copy of the report upon which its decision was based and a written summary of your rights under the Fair Credit Reporting Act before taking any final adverse action. If any final adverse action is taken against you based upon your driving history or safety report, the Prospective Employer will notify you that the action has been taken and that the action was based in part or in whole on this report.</p>
        <p>You may obtain a copy of the report from FMCSA by contacting the FMCSA via its website or the following address: Federal Motor Carrier Safety Administration, Office of Enforcement and Compliance, 1200 New Jersey Avenue SE, Washington DC 20590.</p>
      </div>

      <div class="authorization-check">
        <span class="checkbox-option"><span class="checkbox-box"></span> I authorize R S Thomas Hauling, Inc. to access the FMCSA Pre-Employment Screening Program (PSP) to seek information regarding my commercial driving safety record and information regarding my safety inspection history.</span>
      </div>

      <div class="signature-row">
        <div class="signature-field">
          <span class="signature-field__line"></span>
          <span class="signature-field__label">Signature</span>
        </div>
        <div class="signature-field signature-field--short">
          <span class="signature-field__line"></span>
          <span class="signature-field__label">Date</span>
        </div>
      </div>

      <div class="field-row">
        <div class="field field--full">
          <span class="field__label">Printed Name</span>
          <span class="field__line"></span>
        </div>
      </div>
    </div>

    <!-- Section 11: MVR Authorization -->
    <div class="section">
      <h3 class="section-heading">11. MVR Authorization</h3>

      <div class="legal-text">
        <p>VA Code 46.2-208 classifies driver abstracts as privileged and limits the release of an abstract of a driver's record to only an employer, potential employer, or authorized agent who has been authorized in writing by such driver to obtain the driver's record.</p>
      </div>

      <p class="acknowledgment-intro">By signing below, the undersigned:</p>
      <ol class="acknowledgment-list">
        <li>Gives consent to release of driving record ("MVR") for review by R S Thomas Hauling, Inc.</li>
        <li>Authorizes driving record to be periodically obtained and reviewed for initial and continued employment.</li>
        <li>Gives consent to release of driving record ("MVR") for review by Nansemond Insurance Agency, Inc.</li>
        <li>Understands driving record may also be provided to insurance carriers for insurability purposes.</li>
        <li>Authorizes release of and discussion of driving record between potential employees and Nansemond Insurance Agency and any insurance company.</li>
      </ol>

      <div class="field-row">
        <div class="field field--half">
          <span class="field__label">Full Name (as it appears on license)</span>
          <span class="field__line"></span>
        </div>
        <div class="field field--half">
          <span class="field__label">License Number</span>
          <span class="field__line"></span>
        </div>
      </div>

      <div class="field-row">
        <div class="field field--third">
          <span class="field__label">State</span>
          <span class="field__line"></span>
        </div>
        <div class="field field--third">
          <span class="field__label">Years of CDL Experience</span>
          <span class="field__line"></span>
        </div>
        <div class="field field--third">
          <span class="field__label">Date of Birth</span>
          <span class="field__line"></span>
        </div>
      </div>

      <div class="field-row">
        <div class="field field--full">
          <span class="field__label">Social Security Number</span>
          <span class="field__line field__line--short"></span>
        </div>
      </div>

      <div class="signature-row">
        <div class="signature-field">
          <span class="signature-field__line"></span>
          <span class="signature-field__label">Signature</span>
        </div>
        <div class="signature-field signature-field--short">
          <span class="signature-field__line"></span>
          <span class="signature-field__label">Date</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
function printPage() {
  window.print()
}
</script>

<style lang="scss" scoped>
@use '../assets/scss/variables' as *;

.print-application {
  max-width: 8.5in;
  margin: 0 auto;
  padding: 0.5in;
  font-family: 'Open Sans', Arial, sans-serif;
  font-size: 11px;
  color: #000;
  line-height: 1.4;
}

// No-print area (button and instructions)
.no-print {
  text-align: center;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #f0f4f8;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.print-btn {
  display: inline-block;
  padding: 0.6rem 1.5rem;
  background-color: $primary-blue;
  color: #fff;
  font-family: $font-heading;
  font-weight: 700;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 0.5rem;

  &:hover {
    opacity: 0.9;
  }
}

.print-instructions {
  font-size: 0.9rem;
  color: #333;
  margin: 0;

  a {
    color: $primary-blue;
    font-weight: 600;
  }
}

// Company Header
.company-header {
  text-align: center;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #000;

  h1 {
    font-family: $font-heading;
    font-size: 20px;
    margin: 0 0 2px;
  }

  p {
    margin: 0;
    font-size: 11px;
  }

  .app-title {
    font-family: $font-heading;
    font-size: 16px;
    margin-top: 6px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
}

// Sections
.section {
  margin-bottom: 14px;
  page-break-inside: avoid;
}

.section-heading {
  font-family: $font-heading;
  font-size: 14px;
  font-weight: 700;
  border-bottom: 1px solid #000;
  padding-bottom: 2px;
  margin: 0 0 8px;
}

.section-note {
  font-size: 10px;
  font-style: italic;
  color: #333;
  margin: 0 0 6px;
}

// Field rows and fields
.field-row {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

.field {
  display: flex;
  flex-direction: column;

  &--full { flex: 1 1 100%; }
  &--half { flex: 1 1 48%; }
  &--third { flex: 1 1 31%; }
  &--quarter { flex: 1 1 23%; }

  &__label {
    font-size: 10px;
    font-weight: 700;
    margin-bottom: 2px;
  }

  &__line {
    border-bottom: 1px solid #000;
    min-width: 200px;
    display: inline-block;
    min-height: 18px;
    width: 100%;

    &--short {
      max-width: 250px;
    }
  }
}

// Data tables
.data-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 6px;

  th, td {
    border: 1px solid #000;
    padding: 4px 6px;
    text-align: left;
    font-size: 10px;
  }

  th {
    font-family: $font-heading;
    font-weight: 700;
    font-size: 10px;
    background: #eee;
  }

  td {
    min-height: 22px;
    height: 22px;
  }

  .cell--wide {
    width: 35%;
  }

  .cell--narrow {
    width: 10%;
  }
}

// Regulatory / legal text
.regulatory-note {
  border-left: 3px solid #000;
  padding: 4px 8px;
  margin-bottom: 8px;
  background: #f9f9f9;

  p {
    font-size: 10px;
    font-style: italic;
    margin: 0;
    line-height: 1.4;
  }
}

.legal-text {
  border: 1px solid #999;
  padding: 6px 8px;
  margin-bottom: 8px;
  background: #f9f9f9;

  p {
    font-size: 10px;
    margin: 0 0 4px;
    line-height: 1.4;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

// Question blocks (license history)
.question-block {
  margin-bottom: 10px;
  padding-left: 4px;

  &__text {
    font-size: 11px;
    font-weight: 700;
    margin: 0 0 4px;
  }

  &__options {
    display: flex;
    gap: 20px;
    margin-bottom: 6px;
  }
}

// Checkbox options
.checkbox-option {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  margin-right: 12px;
}

.checkbox-box {
  display: inline-block;
  width: 12px;
  height: 12px;
  border: 1px solid #000;
  vertical-align: middle;
}

// Employer blocks
.employer-block {
  border: 1px solid #999;
  padding: 8px;
  margin-bottom: 10px;
  page-break-inside: avoid;

  &__title {
    font-family: $font-heading;
    font-size: 12px;
    font-weight: 700;
    margin: 0 0 6px;
  }
}

// Certification statement
.certification-statement {
  font-size: 11px;
  font-weight: 700;
  margin: 6px 0 10px;
}

// Authorization check
.authorization-check {
  margin-bottom: 10px;
  font-size: 10px;
  line-height: 1.4;
}

// Acknowledgment list
.acknowledgment-intro {
  font-size: 11px;
  font-weight: 700;
  margin: 0 0 4px;
}

.acknowledgment-list {
  margin: 0 0 10px;
  padding-left: 20px;
  font-size: 10px;
  line-height: 1.5;

  li {
    margin-bottom: 2px;
  }
}

// Signature rows
.signature-row {
  display: flex;
  gap: 20px;
  margin-bottom: 12px;
  align-items: flex-end;
}

.signature-field {
  flex: 1;
  display: flex;
  flex-direction: column;

  &--short {
    flex: 0 0 180px;
  }

  &__line {
    border-bottom: 1px solid #000;
    min-height: 24px;
    width: 100%;
  }

  &__label {
    font-size: 9px;
    color: #333;
    margin-top: 1px;
  }
}

// Print styles
@media print {
  .no-print {
    display: none !important;
  }

  .print-application {
    padding: 0;
    max-width: 100%;
  }

  .section {
    page-break-inside: avoid;
  }
}
</style>

<style lang="scss">
@media print {
  .header,
  .footer {
    display: none !important;
  }

  #app-wrapper {
    display: block;
  }

  body {
    margin: 0;
    padding: 0;
  }
}
</style>
