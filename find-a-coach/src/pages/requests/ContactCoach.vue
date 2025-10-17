<template>
  <form @submit.prevent="submitForm">
    <div :class="['form-control', { invalid: !isValidEmail }]">
      <label for="email">Your E-Mail</label>
      <input
        type="text"
        id="email"
        v-model.trim="formData.email.value"
        @blur="validateEmail"
      />
      <p v-if="!isValidEmail" class="errors">Invalid email address</p>
    </div>
    <div :class="['form-control', { invalid: !isValidMessage }]">
      <label for="message">Message</label>
      <textarea
        rows="5"
        id="message"
        v-model.trim="formData.message.value"
        @blur="validateMessage"
      ></textarea>
      <p v-if="!isValidMessage" class="errors">Message can not be empty</p>
    </div>
    <div class="actions">
      <base-button>Send Message</base-button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        email: {
          value: "",
          isValid: true,
        },
        message: {
          value: "",
          isValid: true,
        },
      },
    };
  },
  methods: {
    validateEmail() {
      const email = this.formData.email;
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      email.isValid = emailPattern.test(email.value);
    },
    validateMessage() {
      const message = this.formData.message;
      message.isValid = message.value !== "";
    },
    validateForm() {
      this.validateEmail();
      this.validateMessage();
      return Object.values(this.formData).every((field) => field.isValid);
    },
    submitForm() {
      if (!this.validateForm()) return;
      const request = {
        email: this.formData.email.value,
        message: this.formData.message.value,
      };
      console.log(request);
    },
  },
  computed: {
    isValidEmail() {
      return this.formData.email.isValid;
    },
    isValidMessage() {
      return this.formData.message.isValid;
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
  resize: none;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}

.errors {
  font-weight: bold;
  color: rgb(85, 85, 85);
}

.actions {
  text-align: center;
}
</style>
