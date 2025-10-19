<template>
  <section>
    <base-card>
      <header>
        <h2>Requests Received</h2>
        <ul v-if="hasRequests">
          <request-item
            v-for="request in requests"
            :key="request.id"
            :sender-email="request.senderEmail"
            :message="request.message"
          ></request-item>
        </ul>
        <h3 v-else>You have not received any requests yet!</h3>
      </header>
    </base-card>
  </section>
  <base-dialog :show="!!error" @close="closeDialog">
    <p>{{ error }}</p>
  </base-dialog>
</template>

<script>
import RequestItem from "@/components/requests/RequestItem.vue";

export default {
  components: {
    RequestItem,
  },
  data() {
    return {
      error: null,
    };
  },
  methods: {
    closeDialog() {
      this.error = null;
    },
  },
  computed: {
    requests() {
      return this.$store.getters["requests/getRequests"];
    },
    hasRequests() {
      return this.$store.getters["requests/hasRequests"];
    },
  },
  async created() {
    try {
      await this.$store.dispatch("requests/setRequests");
    } catch (error) {
      this.error = error.message || "Something went wrong...";
    }
  },
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
