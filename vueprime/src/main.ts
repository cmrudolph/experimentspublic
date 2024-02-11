import './assets/main.css'
import 'primevue/resources/themes/aura-light-green/theme.css'
import '/node_modules/primeflex/primeflex.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'

import App from './App.vue'
import router from './router'

import Button from 'primevue/button'
import Menubar from 'primevue/menubar'
import TabMenu from 'primevue/tabmenu'

const app = createApp(App)

app.use(PrimeVue)
app.use(createPinia())
app.use(router)

app.component('Button', Button)
app.component('Menubar', Menubar)
app.component('TabMenu', TabMenu)

app.mount('#app')
