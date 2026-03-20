<template>
  <div class="step-driving-experience">
    <h2 class="step-title">Driving Experience</h2>

    <p class="step-note">All fields are optional. Enter your experience for each applicable equipment class.</p>

    <!-- Desktop table -->
    <div class="table-wrapper">
      <table class="experience-table">
        <thead>
          <tr>
            <th>Class of Equipment</th>
            <th>Type of Equipment</th>
            <th>Dates From</th>
            <th>Dates To</th>
            <th>Approx. No. of Miles</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in modelValue.experience" :key="index">
            <td class="equipment-label">{{ row.classOfEquipment }}</td>
            <td>
              <input
                type="text"
                :id="`equip-type-${index}`"
                :aria-label="`Type of equipment for ${row.classOfEquipment}`"
                :value="row.typeOfEquipment"
                @input="updateRow(index, 'typeOfEquipment', $event.target.value)"
              />
            </td>
            <td>
              <input
                type="date"
                :id="`equip-from-${index}`"
                :aria-label="`Dates from for ${row.classOfEquipment}`"
                :value="row.datesFrom"
                @input="updateRow(index, 'datesFrom', $event.target.value)"
              />
            </td>
            <td>
              <input
                type="date"
                :id="`equip-to-${index}`"
                :aria-label="`Dates to for ${row.classOfEquipment}`"
                :value="row.datesTo"
                @input="updateRow(index, 'datesTo', $event.target.value)"
              />
            </td>
            <td>
              <input
                type="number"
                :id="`equip-miles-${index}`"
                :aria-label="`Approximate miles for ${row.classOfEquipment}`"
                :value="row.approxMiles"
                @input="updateRow(index, 'approxMiles', $event.target.value)"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Mobile cards -->
    <div class="cards-wrapper">
      <fieldset
        v-for="(row, index) in modelValue.experience"
        :key="index"
        class="experience-card"
      >
        <legend>{{ row.classOfEquipment }}</legend>

        <div class="form-group">
          <label :for="`mobile-equip-type-${index}`">Type of Equipment</label>
          <input
            type="text"
            :id="`mobile-equip-type-${index}`"
            :value="row.typeOfEquipment"
            @input="updateRow(index, 'typeOfEquipment', $event.target.value)"
          />
        </div>

        <div class="form-row form-row--two">
          <div class="form-group">
            <label :for="`mobile-equip-from-${index}`">Dates From</label>
            <input
              type="date"
              :id="`mobile-equip-from-${index}`"
              :value="row.datesFrom"
              @input="updateRow(index, 'datesFrom', $event.target.value)"
            />
          </div>

          <div class="form-group">
            <label :for="`mobile-equip-to-${index}`">Dates To</label>
            <input
              type="date"
              :id="`mobile-equip-to-${index}`"
              :value="row.datesTo"
              @input="updateRow(index, 'datesTo', $event.target.value)"
            />
          </div>
        </div>

        <div class="form-group">
          <label :for="`mobile-equip-miles-${index}`">Approx. No. of Miles</label>
          <input
            type="number"
            :id="`mobile-equip-miles-${index}`"
            :value="row.approxMiles"
            @input="updateRow(index, 'approxMiles', $event.target.value)"
          />
        </div>
      </fieldset>
    </div>
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

function updateRow(index, field, value) {
  const updatedExperience = props.modelValue.experience.map((row, i) =>
    i === index ? { ...row, [field]: value } : row
  )
  emit('update:modelValue', { ...props.modelValue, experience: updatedExperience })
}
</script>

<style lang="scss" scoped>
@use '../../assets/scss/variables' as *;
@use '../../assets/scss/mixins' as *;

.step-driving-experience {
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

// Desktop table - hidden on mobile
.table-wrapper {
  display: none;

  @include respond-to(md) {
    display: block;
    overflow-x: auto;
  }
}

.experience-table {
  width: 100%;
  border-collapse: collapse;
  font-family: $font-body;

  th {
    font-family: $font-heading;
    font-weight: 700;
    font-size: 0.85rem;
    color: $white;
    background-color: $primary-blue;
    padding: 0.75rem;
    text-align: left;
    white-space: nowrap;
  }

  td {
    padding: 0.5rem;
    border-bottom: 1px solid $light-gray;
    vertical-align: middle;
  }

  .equipment-label {
    font-family: $font-heading;
    font-weight: 700;
    font-size: 0.9rem;
    color: $dark-gray;
    white-space: nowrap;
    padding-right: 1rem;
  }

  input {
    width: 100%;
    font-family: $font-body;
    font-size: 0.9rem;
    padding: 0.75rem;
    border: 1px solid $medium-gray;
    border-radius: 4px;
    color: $dark-gray;
    background-color: $white;
    transition: border-color 0.2s, box-shadow 0.2s;
    box-sizing: border-box;

    &:focus {
      outline: none;
      border-color: $primary-blue;
      box-shadow: 0 0 0 3px rgba($primary-blue, 0.15);
    }
  }

  input[type="number"] {
    min-width: 100px;
  }

  input[type="date"] {
    min-width: 140px;
  }
}

// Mobile cards - visible only on mobile
.cards-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @include respond-to(md) {
    display: none;
  }
}

.experience-card {
  border: 1px solid $light-gray;
  border-radius: 4px;
  padding: 1.25rem;

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

  &--two {
    grid-template-columns: 1fr 1fr;
  }
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }

  label {
    font-family: $font-heading;
    font-weight: 700;
    font-size: 0.9rem;
    color: $dark-gray;
    margin-bottom: 0.35rem;
  }

  input {
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
}
</style>
