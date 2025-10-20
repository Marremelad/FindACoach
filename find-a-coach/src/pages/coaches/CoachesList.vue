<template>
  <base-dialog :show="!!error" @close="closeDialog">
    <p>{{ error }}</p>
  </base-dialog>
  <section>
    <coach-filter @set-filter="setFilter"></coach-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline" @click="loadCoaches(true)">
          Refresh
        </base-button>
        <base-button v-if="!isLoadingCoaches && hasCoaches" link to="register">
          Register a Coach
        </base-button>
      </div>
      <div v-if="isLoadingCoaches">
        <base-spinner></base-spinner>
      </div>
      <ul v-else-if="hasCoaches">
        <coach-item
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :id="coach.id"
          :first-name="coach.firstName"
          :last-name="coach.lastName"
          :areas="coach.areas"
          :hourly-rate="coach.hourlyRate"
        ></coach-item>
      </ul>
      <h3 v-else>No coaches found</h3>
    </base-card>
  </section>
</template>

<script>
import CoachItem from "@/components/coaches/CoachItem.vue";
import CoachFilter from "@/components/coaches/CoachFilter.vue";
export default {
  components: {
    CoachItem,
    CoachFilter,
  },
  data() {
    return {
      error: null,
      activeFilters: ["frontend", "backend", "career"],
    };
  },
  methods: {
    closeDialog() {
      this.error = null;
    },
    async loadCoaches(forceRefresh = false) {
      if (!forceRefresh && this.hasCoaches) return;

      this.$store.commit("coaches/setIsLoading", true);
      try {
        await this.$store.dispatch("coaches/setCoaches");
      } catch (error) {
        this.error = error.message || "Something went wrong...";
      } finally {
        this.$store.commit("coaches/setIsLoading", false);
      }
    },
    setFilter(event) {
      this.activeFilters = event;
    },
  },
  computed: {
    isLoadingCoaches() {
      return this.$store.getters["coaches/getIsLoading"];
    },
    filteredCoaches() {
      const coaches = this.$store.getters["coaches/getCoaches"];
      return coaches.filter((coach) =>
        coach.areas.some((area) => this.activeFilters.includes(area))
      );
    },
    hasCoaches() {
      return this.$store.getters["coaches/hasCoaches"];
    },
  },
  created() {
    this.loadCoaches();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.controls {
  display: flex;
  justify-content: space-between;
}
</style>
