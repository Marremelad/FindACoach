import axios from "axios";

export default {
  async setCoaches({ commit }) {
    try {
      const response = await axios.get("http://localhost:5000/coaches");
      commit("setCoaches", response.data);
    } catch (error) {
      console.error("Error fetching coaches", error);
    }
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
