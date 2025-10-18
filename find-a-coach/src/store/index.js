import { createStore } from "vuex";
import coachesModule from "./modules/coaches/index.js";

const store = createStore({
  modules: {
    coaches: coachesModule,
  },
  state() {
    return {
      userId: "3d04",
    };
  },
});

export default store;
