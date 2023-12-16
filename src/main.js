import { createApp } from 'vue'
import { createPinia } from "pinia"
import App from './App.vue'

const app = createApp(App);

app.use(createPinia());

app.config.globalProperties.$global= {
    currentmoney: 2000,
    bankmoney: 1000,
}

app.mount("#app");
