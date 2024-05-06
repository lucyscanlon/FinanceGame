<!-- Template for investment opportunity pop up

The parent of this component:
- Popupscomponent

The children of this component:
- None

-->
<template>
    <div class="popups-main-container-wrapper">
        <div class="popup-title-container">
            <h1><font-awesome-icon icon="fa-solid fa-sack-dollar" />An Investment Opportunity</h1>
        </div> 
        <div class="popup-description-container workdrinks-desc investmentop-popup-desc">
            <p>Your friend approaches you with an investment opportunity. They would like <span class="colour-green">£1500</span> investment in their new start up company. They promise if their upcoming launch is successful then you will recieve a large return on your investment. What would you like to do?</p>
        </div>
        <div class="popup-work-drinks-choice-container">
            <div class="popup-work-drinks-flex-container investmentop-flex">
                <div class="popup-phonebill-option-container">
                    <h4>Option 1</h4>
                </div>
                <div class="popup-work-drinks-desc">
                    <p>Take a chance and give your friend the investment</p>
                </div>
                <div class="popup-workdrinks-cost">
                    <p>Cost: <span class="colour-green">£1500</span></p>
                </div>
                <!-- play sound, register choice, navigate back to main page, start countdown -->
                <div class="popup-phonebill-button workdrinks-button">
                    <button @click="manageSound.playClickSound(), managePopUps.investmentOpportunityChoice(1), manageMainGameNav.navigateToPage(11), manageGameTimer.startCountdown()">Choose</button>
                </div>
            </div>
            <div class="popup-work-drinks-flex-container investmentop-flex">
                <div class="popup-phonebill-option-container">
                    <h4>Option 2</h4>
                </div>
                <div class="popup-work-drinks-desc">
                    <p>Politely decline. It's a risk you can't take at the moment!</p>
                </div>
                <div class="popup-workdrinks-cost">
                    <p>Cost: <span class="colour-green">£0</span></p>
                </div>
                <!-- play sound, register choice, navigate back to main page, start countdown -->
                <div class="popup-phonebill-button workdrinks-button">
                    <button @click="manageSound.playClickSound(), managePopUps.investmentOpportunityChoice(2), manageMainGameNav.navigateToPage(11), manageGameTimer.startCountdown()">Choose</button>
                </div>
            </div>
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
name: 'InvestmentOpportunityPopUp',

}

</script>