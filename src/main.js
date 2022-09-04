import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import mount from "./mount.js";

document.body.appendChild(mount());

createApp(App).use(router).mount(".app-root");
