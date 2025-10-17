<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !formData.firstName.isValid }">
      <label for="first-name">First Name</label>
      <input
        type="text"
        id="first-name"
        v-model.trim="formData.firstName.value"
        @blur="validateFirstName"
      />
      <p v-if="!formData.firstName.isValid">First name can not be empty</p>
    </div>
    <div class="form-control" :class="{ invalid: !formData.lastName.isValid }">
      <label for="last-name">Last Name</label>
      <input
        type="text"
        id="last-name"
        v-model.trim="formData.lastName.value"
        @blur="validateLastName"
      />
      <p v-if="!formData.lastName.isValid">Last name can not be empty</p>
    </div>
    <div
      class="form-control"
      :class="{ invalid: !formData.description.isValid }"
    >
      <label for="description">Description</label>
      <textarea
        id="description"
        v-model.trim="formData.description.value"
        @blur="validateDescription"
      />
      <p v-if="!formData.description.isValid">Description can not be empty</p>
    </div>
    <div
      class="form-control"
      :class="{ invalid: !formData.hourlyRate.isValid }"
    >
      <label for="hourly-rate">Hourly Rate</label>
      <input
        type="number"
        id="hourly-rate"
        v-model.number="formData.hourlyRate.value"
        @blur="validateHourlyRate"
      />
      <p v-if="!formData.hourlyRate.isValid">
        Hourly rate has to be larger than 0
      </p>
    </div>
    <div class="form-control">
      <h3>Areas of Expertise</h3>
      <div :class="{ invalid: !formData.areas.isValid }">
        <input
          type="checkbox"
          id="frontend"
          value="frontend"
          v-model="formData.areas.value"
          @change="validateAreas"
        />
        <label for="frontend">Frontend Development</label>
      </div>
      <div :class="{ invalid: !formData.areas.isValid }">
        <input
          type="checkbox"
          id="backend"
          value="backend"
          v-model="formData.areas.value"
          @change="validateAreas"
        />
        <label for="backend">Backend Development</label>
      </div>
      <div :class="{ invalid: !formData.areas.isValid }">
        <input
          type="checkbox"
          id="career"
          value="career"
          v-model="formData.areas.value"
          @change="validateAreas"
        />
        <label for="career">Career Advisory</label>
      </div>
      <p v-if="!formData.areas.isValid">
        At least on area of expertise has to be selected
      </p>
    </div>
    <p v-if="!isValidForm">
      Make sure that all input fields are valid before submitting the form
    </p>
    <base-button>Register</base-button>
  </form>
</template>

<script>
export default {
  emits: ["submit-data"],
  data() {
    return {
      formData: {
        firstName: {
          value: "",
          isValid: true,
        },
        lastName: {
          value: "",
          isValid: true,
        },
        description: {
          value: "",
          isValid: true,
        },
        hourlyRate: {
          value: null,
          isValid: true,
        },
        areas: {
          value: [],
          isValid: true,
        },
      },
      isValidForm: true,
    };
  },
  methods: {
    validateFirstName() {
      const firstName = this.formData.firstName;
      firstName.isValid = firstName.value !== "";
    },
    validateLastName() {
      const lastName = this.formData.lastName;
      lastName.isValid = lastName.value !== "";
    },
    validateDescription() {
      const description = this.formData.description;
      description.isValid = description.value !== "";
    },
    validateHourlyRate() {
      const hourlyRate = this.formData.hourlyRate;
      hourlyRate.isValid = hourlyRate.value && hourlyRate.value > 0;
    },
    validateAreas() {
      const areas = this.formData.areas;
      areas.isValid = areas.value.length > 0;
    },
    validateForm() {
      this.validateFirstName();
      this.validateLastName();
      this.validateDescription();
      this.validateHourlyRate();
      this.validateAreas();

      this.isValidForm = Object.values(this.formData).every(
        (field) => field.isValid
      );
    },
    submitForm() {
      this.validateForm();
      if (!this.isValidForm) return;

      const formData = {
        firstName: this.formData.firstName.value,
        lastName: this.formData.lastName.value,
        description: this.formData.description.value,
        hourlyRate: this.formData.hourlyRate.value,
        areas: this.formData.areas.value,
      };

      console.log(formData);
      this.$emit("submit-data", formData);
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;
}

input[type="checkbox"]:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
