<template>
    <div class="popup-title-container">
        <h1><font-awesome-icon icon="fa-solid fa-sack-dollar" />Your friend's launch was successful!</h1>
    </div> 
    <div class="popup-description-container workdrinks-desc investmentop-popup-desc">
        <p>Your friend had their launch yesterday and it went very well! They thank you for your support and return triple your initial investment!</p>
    </div>
    <div class="popup-investmentsuccessful-flex-container">
        <div class="popup-investsucc-title-container">
            <h4>Your return on investment</h4>
        </div>
        <div class="popup-investsucc-desc-container">
            <p>You have recieved:</p>
            <p class="colour-green investsucc-amount">£4500</p>
        </div>
        <div class="popup-investsucc-button-container">
            <button @click="manageSound.playClickSound(), managePopUps.InvestmentOpportunitySuccessful(), manageMainGameNav.navigateToPage(11), manageGameTimer.startCountdown()">Deposit into account</button>
        </div>
        
    </div>
   
</template>
<script setup>

import { usePopUpStore } from "../../../../store/MainGameChoicesStore.js";
import { useMainGameplayNavigationStore } from "../../../../store/MainGameChoicesStore.js";
import { useGameTimerStore } from "../../../../store/MoneyStore.js";
import { useSoundEffectsStore } from '../../../../store/soundEffectsStore.js'

const managePopUps = usePopUpStore();
const manageMainGameNav = useMainGameplayNavigationStore();
const manageGameTimer = useGameTimerStore();
const manageSound = useSoundEffectsStore()

</script>
<script>

export default {
name: 'InvestmentOpportunitySuccessfulPopUp',

}

</script>