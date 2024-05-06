<!-- Template for new goal pop up

The parent of this component:
- Popupscomponent

The children of this component:
- None

-->
<template>
    <div class="popups-main-container-newgoal-container">
        <div class="newgoalpopup-title-container newyearpopuptitle">
            <h1><font-awesome-icon icon="fa-solid fa-champagne-glasses" />Happy New Year!</h1>
        </div>
        <div class="newgoalpopup-description-container">
            <p>Its a new year! Make sure to take advantage of your LISA bonus by adding up to £4000 before the financial year ends in April to get the biggest bonus.</p>
        </div>
        <!-- play sound, navigate to main page, start countdown -->
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
name: 'LISAReminderPopUp',

}

</script>