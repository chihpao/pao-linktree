import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faGlobe,
  faEnvelope,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// 註冊 Font Awesome 圖標
library.add(
  faGithub,
  faTwitter,
  faLinkedin,
  faInstagram,
  faGlobe,
  faEnvelope,
  faMoon,
  faSun
);

const app = createApp(App);

// 註冊全局組件
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(store).use(router).mount("#app");
