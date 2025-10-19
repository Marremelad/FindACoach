<template>
  <the-header></the-header>
  <router-view v-if="!isLoadingCoaches"></router-view>
  <div v-else class="spinner-container">
    <base-spinner></base-spinner>
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
  async created() {
    await this.$store.dispatch("coaches/setCoaches");
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
