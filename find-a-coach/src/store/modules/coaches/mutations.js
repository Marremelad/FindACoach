export default {
  setIsLoading(state, payload) {
    state.isLoading = payload;
  },
  setCoaches(state, payload) {
    state.coaches = payload;
  },
  addCoach(state, payload) {
    state.coaches.push(payload);
  },
};
