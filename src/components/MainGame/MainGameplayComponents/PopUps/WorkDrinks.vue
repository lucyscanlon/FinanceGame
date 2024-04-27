<template>
    <div class="popup-title-container">
        <h1><font-awesome-icon icon="fa-solid fa-martini-glass-citrus" />Drinks with Work!</h1>
    </div> 
    <div class="popup-description-container workdrinks-desc">
        <p>A group of your new collegues have invited you out for drinks after work to get to know you better. You estimate it will cost <span class="colour-green">£100.</span> What would you like to do?</p>
    </div>
    <div class="popup-work-drinks-choice-container">
        <div class="popup-work-drinks-flex-container">
            <div class="popup-phonebill-option-container">
                <h4>Option 1</h4>
            </div>
            <div class="popup-work-drinks-desc">
                <p>Agree to go for drinks! It's a great opportunity to make friends at my new job.</p>
            </div>
            <div class="popup-workdrinks-cost">
                <p>Cost: <span class="colour-green">£100</span></p>
            </div>
            <div class="popup-phonebill-button workdrinks-button">
                <button @click="manageSound.playClickSound(), managePopUps.workDrinksChoice(1), manageMainGameNav.navigateToPage(11), manageGameTimer.startCountdown()">Choose</button>
            </div>
        </div>
        <div class="popup-work-drinks-flex-container">
            <div class="popup-phonebill-option-container">
                <h4>Option 2</h4>
            </div>
            <div class="popup-work-drinks-desc">
                <p>Politely decline. It's not something you can afford at the moment!</p>
            </div>
            <div class="popup-workdrinks-cost">
                <p>Cost: <span class="colour-green">£0</span></p>
            </div>
            <div class="popup-phonebill-button workdrinks-button workdrinks-button-padding">
                <button @click="manageSound.playClickSound(), managePopUps.workDrinksChoice(2), manageMainGameNav.navigateToPage(11), manageGameTimer.startCountdown()">Choose</button>
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
name: 'WorkDrinksPopUp',

}

</script>