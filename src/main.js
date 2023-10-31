import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store/store.js';
import VueAxios from 'vue-axios'
import VueCookies from 'vue3-cookies'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import locales from '@/locales/locales.js';

const app = createApp(App)

app.use(router)
app.use(router)
app.use(store)
app.use(VueAxios, axios)
app.use(VueCookies);
app.use(VueSweetalert2);
app.use(locales)
app.mount('#app')
