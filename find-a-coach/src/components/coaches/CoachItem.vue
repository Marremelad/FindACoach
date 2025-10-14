<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ hourlyRate }}/hour</h4>
    <div>
      <span v-for="area in areas" :key="area">{{ area }}</span>
    </div>
    <div class="actions">
      <router-link :to="contactLink">Contact</router-link>
      <router-link :to="detailsLink">View Details</router-link>
    </div>
  </li>
</template>

<script>
export default {
  props: ["id", "firstName", "lastName", "hourlyRate", "areas"],
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },
    contactLink() {
      return this.$route.path + "/" + this.id + "/contact";
      // return {
      //   name: "coach-contact",
      //   params: { id: this.id },
      // };
    },
    detailsLink() {
      return this.$route.path + "/" + this.id;

      // return {
      //   name: "coach-details",
      //   params: { id: this.id },
      // };
    },
  },
};
</script>

<style scopes>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
