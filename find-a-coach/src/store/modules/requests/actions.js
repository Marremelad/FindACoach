import axios from "axios";

export default {
  async setRequests({ commit }) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const response = axios.get("http://localhost:5000/requests");
    commit("setRequests", (await response).data);
  },
  async addRequest({ commit }, payload) {
    const response = await axios.post(
      "http://localhost:5000/requests",
      payload
    );
    commit("addRequest", response.data);
  },
};
