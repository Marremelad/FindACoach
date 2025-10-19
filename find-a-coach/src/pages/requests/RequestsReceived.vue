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
</template>

<script>
import RequestItem from "@/components/requests/RequestItem.vue";

export default {
  components: {
    RequestItem,
  },
  computed: {
    requests() {
      return this.$store.getters["requests/getRequests"];
    },
    hasRequests() {
      return this.$store.getters["requests/hasRequests"];
    },
  },
  created() {
    this.$store.dispatch("requests/setRequests");
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
