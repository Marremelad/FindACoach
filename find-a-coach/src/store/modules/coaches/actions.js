import axios from "axios";

export default {
  async setCoaches({ commit }) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const response = await axios.get("http://localhost:5000/coaches");
    commit("setCoaches", response.data);
  },
  async addCoach({ commit }, payload) {
    try {
      const response = await axios.post(
        "http://localhost:5000/coaches",
        payload
      );
      commit("addCoach", response.data);
    } catch (error) {
      console.error("Error adding coach", error);
    }
  },
};
