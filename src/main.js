import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './style.css'
import instanllElement from './plugins/element.js'
import App from './App.vue'
import router from './router/index.js'

const pinia = createPinia()
const app = createApp(App)

instanllElement(app)
app.use(router)
app.use(pinia)
app.mount('#app')