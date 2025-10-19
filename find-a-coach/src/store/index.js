import { createStore } from "vuex";
import coachesModule from "./modules/coaches/index.js";
import requestsModule from "./modules/requests/index.js";

const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestsModule,
  },
  state() {
    return {
      userId: "3d04",
    };
  },
});

export default store;
