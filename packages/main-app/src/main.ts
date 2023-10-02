import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import '@/styles/index.scss'
import 'uno.css'

const app = createApp(App)

app.use(ElementPlus)

app.mount('#app')
