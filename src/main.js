import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store/store.js';
import VueAxios from 'vue-axios'
import VueCookies from 'vue3-cookies'
import VueSweetalert2 from 'vue-sweetalert2';
import VueSelect from "vue-select";
import 'sweetalert2/dist/sweetalert2.min.css';
import "vue-select/dist/vue-select.css";
import PrimeVue from 'primevue/config';
import locales from '@/locales/locales.js';
import 'primevue/resources/themes/lara-light-teal/theme.css'


const app = createApp(App)

app.use(router)
app.use(store)
app.use(VueAxios, axios)
app.use(VueCookies);
app.use(VueSweetalert2);
app.use(locales)
app.use(PrimeVue);
app.mount('#app')

app.component("v-select", VueSelect)
