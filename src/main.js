import { createApp } from 'vue'
import { createPinia } from "pinia"
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMapPin } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faMapPin)
library.add(faArrowRight)
library.add(faArrowLeft)
library.add(faCircle)


const app = createApp(App);

app.use(createPinia());

app.component('font-awesome-icon', FontAwesomeIcon).mount("#app");
