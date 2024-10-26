import { createApp } from "vue";
import App from "./App.vue";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery';
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import AppModal from "./components/AppModal.vue";

// createApp(App).mount("#app");

const app = createApp(App);
app.component("app-modal", AppModal);
app.mount("#app");

