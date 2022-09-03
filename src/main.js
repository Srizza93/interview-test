import { createApp } from "vue";
import mount from "./scripts/mount.js";
import App from "./App.vue";
import router from "./router/index.js";

document.body.appendChild(mount());

createApp(App).use(router).mount(".root");
