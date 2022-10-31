import { createApp } from 'vue'
import { createPinia } from 'pinia'

import router from '@/router'
import i18n from '@/locales/i18n'
import useIcons from './hooks/useIcons'

import App from './App.vue'

import '@/assets/reset.css'
import '@/router/permission'

const pinia = createPinia()

const app = createApp(App)
app.use(pinia).use(router).use(useIcons).use(i18n).mount('#app')

app.config.globalProperties.$axios = 1
