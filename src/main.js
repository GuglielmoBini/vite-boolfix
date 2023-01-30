import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(regularStar, solidStar);

// inizializzo app
const app = createApp(App);

// registro i componenti globali
app.component("font-awesome-icon", FontAwesomeIcon);

// monto app nel dom
app.mount("#app");
