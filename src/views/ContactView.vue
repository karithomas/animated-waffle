<template>
  <div class="contact">
    <section class="hero">
      <div class="hero__overlay">
        <h1>Contact Us</h1>
      </div>
    </section>

    <section class="contact-section">
      <div class="contact-section__container">
        <div class="contact-section__grid">
          <div class="contact-section__info">
            <h2>Get in Touch</h2>
            <div class="contact-section__details">
              <div class="contact-section__detail">
                <h3>Phone</h3>
                <a href="tel:8045986292">(804) 598-6292</a>
              </div>
              <div class="contact-section__detail">
                <h3>Fax</h3>
                <span>(804) 598-6476</span>
              </div>
              <div class="contact-section__detail">
                <h3>Email</h3>
                <a href="mailto:info@rsthomashauling.com">info@rsthomashauling.com</a>
              </div>
              <div class="contact-section__detail">
                <h3>Address</h3>
                <span>2285 Batterson Rd<br />Powhatan, VA 23139</span>
              </div>
            </div>
          </div>

          <div class="contact-section__form-wrapper">
            <h2>Send Us a Message</h2>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              @submit.prevent="handleSubmit"
              class="contact-form"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p class="hidden" aria-hidden="true">
                <label>Don't fill this out: <input name="bot-field" /></label>
              </p>

              <div class="contact-form__field">
                <label for="company">Company</label>
                <input type="text" id="company" name="company" v-model="form.company" />
              </div>

              <div class="contact-form__field">
                <label for="name">Name <span class="required">*</span></label>
                <input type="text" id="name" name="name" v-model="form.name" required />
              </div>

              <div class="contact-form__field">
                <label for="email">Email <span class="required">*</span></label>
                <input type="email" id="email" name="email" v-model="form.email" required />
              </div>

              <div class="contact-form__field">
                <label for="phone">Phone</label>
                <input type="tel" id="phone" name="phone" v-model="form.phone" />
              </div>

              <div class="contact-form__field">
                <label for="message">Message <span class="required">*</span></label>
                <textarea id="message" name="message" rows="5" v-model="form.message" required></textarea>
              </div>

              <button type="submit" class="btn btn--primary" :disabled="submitted">
                {{ submitted ? 'Message Sent!' : 'Send Message' }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section class="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.5!2d-77.8!3d37.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDMzJzAwLjAiTiA3N8KwNDgnMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
        width="100%"
        height="400"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="R.S. Thomas Hauling location"
      ></iframe>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  company: '',
  name: '',
  email: '',
  phone: '',
  message: ''
})

const submitted = ref(false)

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

async function handleSubmit() {
  try {
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        ...form
      })
    })
    submitted.value = true
  } catch (error) {
    alert('There was an error submitting the form. Please call us at (804) 598-6292.')
  }
}
</script>

<style lang="scss" scoped>
@use '../assets/scss/variables' as *;
@use '../assets/scss/mixins' as *;

.hidden {
  display: none;
}

.hero {
  min-height: 30vh;
  background-color: $primary-blue;
  display: flex;

  &__overlay {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $white;
    text-align: center;
    padding: 2rem;
  }
}

.contact-section {
  @include section-padding;

  &__container {
    @include container;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;

    @include respond-to(md) {
      grid-template-columns: 1fr 1fr;
    }
  }

  &__info {
    h2 {
      color: $primary-blue;
      margin-bottom: 1.5rem;
    }
  }

  &__details {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  &__detail {
    h3 {
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: $accent-gold;
      margin-bottom: 0.25rem;
    }

    a, span {
      color: $dark-gray;
      font-size: 1.05rem;
    }

    a:hover {
      color: $primary-blue;
    }
  }

  &__form-wrapper {
    h2 {
      color: $primary-blue;
      margin-bottom: 1.5rem;
    }
  }
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  &__field {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    label {
      font-family: $font-heading;
      font-weight: 600;
      font-size: 0.9rem;
      color: $dark-gray;

      .required {
        color: #dc2626;
      }
    }

    input, textarea {
      padding: 0.75rem;
      border: 1px solid $medium-gray;
      border-radius: 4px;
      font-size: 1rem;
      transition: border-color 0.2s ease;

      &:focus {
        outline: none;
        border-color: $primary-blue;
      }
    }
  }
}

.map {
  width: 100%;

  iframe {
    display: block;
  }
}
</style>
