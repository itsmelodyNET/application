import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/jquery-3.6.3.min.js'
import './assets/index.css'
import './assets/main.js'


const app = createApp(App)

app.use(router)

app.mount('#app')
