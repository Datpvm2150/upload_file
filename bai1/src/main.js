//import './assets/main.css'

import { createApp } from 'vue'
//import App from './App_vue.vue'
import App from './App_thi.vue'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import router from './router'

// createApp(App).mount('#app')


const app = createApp(App)
app.use(router);
app.mount('#app');