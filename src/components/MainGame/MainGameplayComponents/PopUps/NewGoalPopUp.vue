<!-- Template for new goal pop up

The parent of this component:
- Popupscomponent

The children of this component:
- None

-->
<template>
    <div class="popups-main-container-newgoal-container">
        <div class="newgoalpopup-title-container">
            <h1><font-awesome-icon icon="fa-solid fa-bullseye" />New Goal!</h1>
        </div>
        <div class="newgoalpopup-description-container">
            <p>You have a new goal. Complete the tasks inside the current goal section of the homepage to complete it.</p>
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
name: 'newGoalPopUp',

}

</script>