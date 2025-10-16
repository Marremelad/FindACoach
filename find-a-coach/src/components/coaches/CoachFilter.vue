<template>
  <base-card>
    <h2>Find Your Coach</h2>
    <span class="filter-option">
      <input
        type="checkbox"
        id="frontend"
        :checked="activeFilters.includes('frontend')"
        @change="setFilter"
      />
      <label for="frontend">Frontend</label>
    </span>
    <span class="filter-option">
      <input
        type="checkbox"
        id="backend"
        :checked="activeFilters.includes('backend')"
        @change="setFilter"
      />
      <label for="backend">Backend</label>
    </span>
    <span class="filter-option">
      <input
        type="checkbox"
        id="career"
        :checked="activeFilters.includes('career')"
        @change="setFilter"
      />
      <label for="career">Career</label>
    </span>
  </base-card>
</template>

<script>
export default {
  emits: ["set-filter"],
  data() {
    return {
      activeFilters: ["frontend", "backend", "career"],
    };
  },
  methods: {
    setFilter(event) {
      const filter = event.target.id;
      this.activeFilters = this.activeFilters.includes(filter)
        ? this.activeFilters.filter((activeFilter) => activeFilter !== filter)
        : [...this.activeFilters, filter];
      this.$emit("set-filter", this.activeFilters);
    },
  },
};
</script>
