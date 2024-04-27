<template>
    <div class="popup-title-container">
        <h1><font-awesome-icon icon="fa-solid fa-sack-dollar" />Your friend's launch was unsuccessful</h1>
    </div> 
    <div class="popup-description-container workdrinks-desc investmentop-popup-desc">
        <p>Unfortunately your friend's launch was unsuccessful and you have lost your investment. Your friend promises their next idea will be better!</p>
    </div>
    <div class="popup-investmentsuccessful-flex-container">
        <div class="popup-investsucc-title-container">
            <h4>Your return on investment</h4>
        </div>
        <div class="popup-investsucc-desc-container">
            <p>You have recieved:</p>
            <p class="colour-green investsucc-amount">£0</p>
        </div>
        <div class="popup-investsucc-button-container investfailed-button">
            <button @click="manageSound.playClickSound(), manageMainGameNav.navigateToPage(11), manageGameTimer.startCountdown()">Close</button>
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
name: 'InvestmentOpportunityFailedPopUp',

}

</script>