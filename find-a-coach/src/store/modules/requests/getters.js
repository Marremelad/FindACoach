export default {
  getRequests(state, _, _2, rootGetters) {
    const userId = rootGetters.getUserId;
    return state.requests.filter((request) => request.coachId === userId);
  },
  hasRequests(_, getters) {
    const requests = getters.getRequests;
    return requests && requests.length > 0;
  },
};
