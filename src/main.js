import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";

// inizializzo app
const app = createApp(App);

// monto app nel dom
app.mount("#app");
