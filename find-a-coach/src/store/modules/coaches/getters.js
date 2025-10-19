export default {
  getIsLoading(state) {
    return state.isLoading;
  },
  getCoaches(state) {
    return state.coaches;
  },
  hasCoaches(state) {
    return state.coaches && state.coaches.length > 0;
  },
};
