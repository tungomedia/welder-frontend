import './assets/index.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { fetchData } from '@/utils/fillStore'

const app = createApp(App)

const init = async () => {
  await fetchData()
}

app.use(createPinia())
app.use(router)

init()

app.mount('#app')
