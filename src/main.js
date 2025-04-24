import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles.css";  // Import global styles
import router from "./router"; // Import Vue Router

// Create Vue app instance
const app = createApp(App);

// Register Vue Router
app.use(router); 

// Mount the app to the #app element in /public/index.html
app.mount("#app");
