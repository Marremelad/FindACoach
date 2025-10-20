<template>
  <div>
    <section>
      <base-card>
        <h2>Register as a Coach now!</h2>
        <coach-form @submit-data="submitData"></coach-form>
      </base-card>
    </section>
    <base-dialog :show="!!error" @close="closeDialog">
      <p>{{ error }}</p>
    </base-dialog>
  </div>
</template>

<script>
import CoachForm from "@/components/coaches/CoachForm.vue";

export default {
  data() {
    return {
      error: null,
    };
  },
  components: {
    CoachForm,
  },
  methods: {
    closeDialog() {
      this.error = null;
    },

    async submitData(data) {
      try {
        await this.$store.dispatch("coaches/addCoach", data);
        this.$router.push("/coaches");
      } catch (error) {
        console.log("Hello from the catch block!");
        this.error = error.message || "Something went wrong...";
      }
    },
  },
};
</script>
