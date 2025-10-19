<template>
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
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      coach: null,
    };
  },
  created() {
    this.coach = this.$store.getters["coaches/getCoaches"].find(
      (coach) => coach.id === this.id
    );
  },
  computed: {
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
