<template>
    <div class="popups-main-container-newgoal-container">
    <div class="newgoalpopup-title-container">
        <h1><font-awesome-icon icon="fa-solid fa-calendar-days" />A financial year has passed</h1>
    </div> 
    <div class="popup-description-container workdrinks-desc investmentop-popup-desc">
        <p>April is here and that means that we now enter a new financial year. Interest and bonuses will now be added to necessary accounts and account limits will now reset.</p>
    </div>
    <div class="newgoalpopup-home-button">
            <button @click="manageSound.playClickSound(), manageMainGameNav.navigateToPage(11), manageGameTimer.startCountdown()">Continue</button>
    </div>
    </div>
   
</template>
<script setup>

import { useMainGameplayNavigationStore } from "../../../../store/MainGameChoicesStore.js";
import { useGameTimerStore } from "../../../../store/MoneyStore.js";
import { useSoundEffectsStore } from '../../../../store/soundEffectsStore.js'

const manageMainGameNav = useMainGameplayNavigationStore();
const manageGameTimer = useGameTimerStore();
const manageSound = useSoundEffectsStore()

</script>
<script>

export default {
name: 'AprilPopUp',

}

</script>