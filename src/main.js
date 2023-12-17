import { createApp } from 'vue'
import { createPinia } from "pinia"
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMapPin } from '@fortawesome/free-solid-svg-icons'

library.add(faMapPin)

const app = createApp(App);

app.use(createPinia());

app.config.globalProperties.$global= {
    currentmoney: 2000,
    bankmoney: 1000,
}


app.component('font-awesome-icon', FontAwesomeIcon).mount("#app");
