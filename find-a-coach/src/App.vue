<template>
  <the-header></the-header>
  <router-view v-if="!isLoadingCoaches"></router-view>
  <div v-else class="spinner-container">
    <base-spinner></base-spinner>
  </div>
  <base-dialog :show="!!error" title="An error occurred" @close="closeDialog">
    <p>{{ error }}</p>
  </base-dialog>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";

export default {
  data() {
    return {
      error: null,
    };
  },
  components: {
    TheHeader,
  },
  methods: {
    closeDialog() {
      this.error = null;
    },
  },
  async created() {
    try {
      await this.$store.dispatch("coaches/setCoaches");
    } catch (error) {
      this.error = error.message || "Something went wrong...";
    } finally {
      this.$store.commit("coaches/setIsLoading", false);
    }
  },
  computed: {
    isLoadingCoaches() {
      return this.$store.getters["coaches/getIsLoading"];
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}

.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
}
</style>
