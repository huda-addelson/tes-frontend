import './index.css';

import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import ToastPlugin from 'vue-toast-notification';

const app = createApp(App);

app.use(ToastPlugin);
app.use(router);
app.mount('#app');
