import { createApp } from "vue";
import ElementPlus from "element-plus";
import "./styles/normalize.css";
import "./styles/global.css";
import "element-plus/dist/index.css";
import App from "./App.vue";

import PrincipalVue from "./components/PrincipalVue.vue";
import AboutVue from "./components/AboutVue.vue";

const route = {
  "/": PrincipalVue,
  "/about": AboutVue,
};

const app = createApp(App);

app.use(ElementPlus);
app.mount("#app");
