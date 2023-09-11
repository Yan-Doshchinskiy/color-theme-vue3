import { createApp } from 'vue';
import './assets/scss/index.scss';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

createApp(App).use(createPinia()).use(router).mount('#app');
