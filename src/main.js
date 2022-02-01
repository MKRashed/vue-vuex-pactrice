import { createApp } from 'vue'
import App from './App.vue'
import './css/output.css'
import store from './store/input'

import vue3StarRatings from "vue3-star-ratings";


import router from './router' 

const app = createApp(App);

app.use(router);

app.use(store);

app.use(vue3StarRatings);


app.mount('#app')


