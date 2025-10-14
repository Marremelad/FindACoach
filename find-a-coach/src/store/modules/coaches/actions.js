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
};
