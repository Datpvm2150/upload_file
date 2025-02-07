// import './assets/main.css'

import { createApp } from 'vue'
import App from './App_buoi10.vue'
import router from './router'

// import thư viện bootstap vào ứng dụng
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

const app = createApp(App);
app.use(router)
app.mount('#app')

