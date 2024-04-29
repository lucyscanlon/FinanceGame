<template>
    <div class="popups-main-container-newgoal-container">
        <div class="newgoalpopup-title-container">
            <h1><font-awesome-icon icon="fa-solid fa-bullseye" />New Goal!</h1>
        </div>
        <div class="newgoalpopup-description-container">
            <p>You have a new goal. Complete the tasks inside the current goal section of the homepage to complete it.</p>
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
name: 'newGoalPopUp',

}

</script>