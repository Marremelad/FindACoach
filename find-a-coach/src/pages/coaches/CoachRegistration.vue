<template>
  <section>
    <base-card>
      <h2>Register as a Coach now!</h2>
      <coach-form @submit-data="submitData"></coach-form>
    </base-card>
  </section>
</template>

<script>
import CoachForm from "@/components/coaches/CoachForm.vue";

export default {
  components: {
    CoachForm,
  },
  methods: {
    submitData(data) {
      this.$store.dispatch("coaches/addCoach", data);
    },
  },
};
</script>
