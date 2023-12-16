import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);

//createApp(App).mount('#app')

app.config.globalProperties.state = {
    currentPocketMoney: 2500.00,
}

app.mount("#app");
