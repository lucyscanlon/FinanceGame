<!-- Template for broken laptop pop up

The parent of this component:
- Popupscomponent

The children of this component:
- None

-->
<template>
    <div class="popups-main-container-wrapper">
    <div class="popup-title-container">
        <h1><font-awesome-icon icon="fa-solid fa-triangle-exclamation" />Your laptop broke!</h1>
    </div> 
    <div class="popup-description-container workdrinks-desc investmentop-popup-desc">
        <p>You spilt a glass of water on your laptop that you need for work! You will need to spend <span class="colour-green">£1500</span> today to buy a new one.</p>
    </div>
    <div class="popup-work-drinks-choice-container">
        <div class="popup-work-drinks-flex-container investmentop-flex">
            <div class="popup-phonebill-option-container">
                <h4>Option 1</h4>
            </div>
            <div class="popup-work-drinks-desc">
                <p>Take the money out of your emergency fund</p>
            </div>
            <div class="popup-workdrinks-cost">
                <p>Cost: <span class="colour-green">£1500</span></p>
            </div>
            <!-- navigate to main page, register choice, start countdown, increase or decrease score -->
            <div class="popup-phonebill-button workdrinks-button">
                <button @click="manageSound.playClickSound(), manageMainGameNav.navigateToPage(11), managePopUps.brokenLaptopChoice(1), manageGameTimer.startCountdown(), manageBarometer.increaseScore(10)">Choose</button>
            </div>
        </div>
        <div class="popup-work-drinks-flex-container investmentop-flex">
            <div class="popup-phonebill-option-container">
                <h4>Option 2</h4>
            </div>
            <div class="popup-work-drinks-desc">
                <p>Take the money out of your bank</p>
            </div>
            <div class="popup-workdrinks-cost">
                <p>Cost: <span class="colour-green">£1500</span></p>
            </div>
            <!-- navigate to main page, register choice, start countdown, increase or decrease score -->
            <div class="popup-phonebill-button workdrinks-button">
                <button @click="manageSound.playClickSound(), manageMainGameNav.navigateToPage(11), managePopUps.brokenLaptopChoice(2), manageGameTimer.startCountdown(), manageBarometer.decreaseScore(15)">Choose</button>
            </div>
        </div>
    </div>
    </div>
</template>
<script setup>

import { usePopUpStore } from "../../../../store/MainGameChoicesStore.js";
import { useMainGameplayNavigationStore, useBarometerStore } from "../../../../store/MainGameChoicesStore.js";
import { useGameTimerStore } from "../../../../store/MoneyStore.js";
import { useSoundEffectsStore } from '../../../../store/soundEffectsStore.js'

const managePopUps = usePopUpStore();
const manageMainGameNav = useMainGameplayNavigationStore();
const manageGameTimer = useGameTimerStore();
const manageBarometer = useBarometerStore()
const manageSound = useSoundEffectsStore()

</script>
<script>

export default {
name: 'brokenLaptopPopUp',

}

</script>