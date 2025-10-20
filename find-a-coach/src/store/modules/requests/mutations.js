export default {
  setIsLoading(state, payload) {
    state.isLoading = payload;
  },
  setRequests(state, payload) {
    state.requests = payload;
  },
  addRequest(state, payload) {
    state.requests.push(payload);
  },
};
