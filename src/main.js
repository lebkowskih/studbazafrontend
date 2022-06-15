import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import App from './App.vue'
import { plugin, defaultConfig } from '@formkit/vue'

const app = createApp(App)
app.use(VueAxios, axios)
app.use(plugin, defaultConfig)
app.mount('#app')
