<template>
  <base-dialog :show="!!error" @close="closeDialog">
    <p>{{ error }}</p>
  </base-dialog>
  <div v-if="isLoadingCoaches">
    <base-spinner></base-spinner>
  </div>
  <div v-else-if="hasCoach">
    <section>
      <base-card>
        <h2>{{ fullName }}</h2>
        <h3>${{ hourlyRate }}/hour</h3>
      </base-card>
    </section>
    <section>
      <base-card>
        <header>
          <h2>Interested? Reach out now!</h2>
          <base-button v-if="IsCoachDetails" link :to="contactLink"
            >Contact</base-button
          >
        </header>
        <router-view></router-view>
      </base-card>
    </section>
    <section>
      <base-card>
        <base-badge
          v-for="area in areas"
          :key="area"
          :type="area"
          :title="area"
        ></base-badge>
        <p>{{ coach.description }}</p>
      </base-card>
    </section>
  </div>
  <div v-else>
    <base-card>
      <h2>Coach not found</h2>
      <p>The coach you're looking for doesn't exist.</p>
      <base-button link to="/coaches">Back to Coaches</base-button>
    </base-card>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      error: null,
      coach: null,
    };
  },
  methods: {
    closeDialog() {
      this.error = null;
    },
    async loadCoaches() {
      if (this.hasCoaches) return;

      this.$store.commit("coaches/setIsLoading", true);
      try {
        await this.$store.dispatch("coaches/setCoaches");
      } catch (error) {
        this.error = error.message || "Something went wrong...";
      } finally {
        this.$store.commit("coaches/setIsLoading", false);
      }
    },
  },
  async created() {
    await this.loadCoaches();
    this.coach = this.$store.getters["coaches/getCoaches"].find(
      (coach) => coach.id === this.id
    );
  },
  computed: {
    isLoadingCoaches() {
      return this.$store.getters["coaches/getIsLoading"];
    },
    hasCoaches() {
      return this.$store.getters["coaches/hasCoaches"];
    },
    hasCoach() {
      return !this.isLoadingCoaches && this.coach;
    },
    IsCoachDetails() {
      return this.$route.name === "coach-details";
    },
    fullName() {
      return this.coach.firstName + " " + this.coach.lastName;
    },
    hourlyRate() {
      return this.coach.hourlyRate;
    },
    areas() {
      return this.coach.areas;
    },
    description() {
      this.coach.description;
    },
    contactLink() {
      return this.$route.path + "/" + "contact";
    },
  },
};
</script>
