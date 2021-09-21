import { createApp } from 'vue';
import App from './App.vue'

require("assets/fonts/stylesheet.css")

document.addEventListener("DOMContentLoaded", () => {
  const app = createApp(App)
  app.mount('#app')
})
