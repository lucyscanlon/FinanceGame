import { createApp } from 'vue'
import { createPinia } from "pinia"
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMapPin } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faPersonCane } from '@fortawesome/free-solid-svg-icons'
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons'
import {faTriangleExclamation} from '@fortawesome/free-solid-svg-icons'
import { faShop } from '@fortawesome/free-solid-svg-icons'
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'
import { faMartiniGlassCitrus } from '@fortawesome/free-solid-svg-icons'
import { faHashtag } from '@fortawesome/free-solid-svg-icons'
import { faComputer } from '@fortawesome/free-solid-svg-icons'
import { faBan } from '@fortawesome/free-solid-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faArrowUp} from '@fortawesome/free-solid-svg-icons'
import { faArrowDown} from '@fortawesome/free-solid-svg-icons'
import { faEye} from '@fortawesome/free-solid-svg-icons'
import { faGhost } from '@fortawesome/free-solid-svg-icons'
import { faWheatAwn } from '@fortawesome/free-solid-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'

library.add(faMapPin)
library.add(faArrowRight)
library.add(faArrowLeft)
library.add(faCircle)
library.add(faPersonCane)
library.add(faPiggyBank)
library.add(faTriangleExclamation)
library.add(faShop)
library.add(faMicrophone)
library.add(faMartiniGlassCitrus)
library.add(faHashtag)
library.add(faComputer)
library.add(faBan)
library.add(faAt)
library.add(faHouse)
library.add(faGear)
library.add(faArrowUp)
library.add(faArrowDown)
library.add(faEye)
library.add(faGhost)
library.add(faWheatAwn)
library.add(faBook)

const app = createApp(App);

app.use(createPinia());

app.component('font-awesome-icon', FontAwesomeIcon).mount("#app");
