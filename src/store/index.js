import { createStore } from "vuex";
import links from "./modules/links";
import theme from "./modules/theme";

export default createStore({
  modules: {
    links,
    theme,
  },
});
