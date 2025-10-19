import axios from "axios";

export default {
  async setRequests({ commit }) {
    const response = axios.get("http://localhost:5000/requests");
    commit("setRequests", (await response).data);
  },
  async addRequest({ commit }, payload) {
    try {
      const response = await axios.post(
        "http://localhost:5000/requests",
        payload
      );
      commit("addRequest", response.data);
    } catch (error) {
      console.error("Error adding request", error);
    }
  },
};
