import Vue from "vue";
import Vuex from "vuex";
import links from "./modules/links";
import theme from "./modules/theme";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    links,
    theme,
  },
});
