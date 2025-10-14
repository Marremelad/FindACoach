<template>
  <the-header></the-header>
  <router-view v-if="!isLoading"></router-view>
  <div v-else>Loading...</div>
</template>
<script>
import TheHeader from "./components/layout/TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  async created() {
    await this.$store.dispatch("coaches/setCoaches");
    this.isLoading = false;
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
</style>
