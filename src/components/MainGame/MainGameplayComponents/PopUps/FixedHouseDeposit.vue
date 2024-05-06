<!-- Template for fixed house deposit pop up

The parent of this component:
- Popupscomponent

The children of this component:
- None

-->
<template>
    <div class="popups-main-container-newgoal-container">
        <div class="newgoalpopup-title-container newyearpopuptitle">
            <h1><font-awesome-icon icon="fa-solid fa-house" />Fixed Rate Account</h1>
        </div>
        <div class="newgoalpopup-description-container">
            <p>Add a large sum to your account to gain from the high interest rate. After six months this account will be unlocked and the interest rate reduced.</p>
        </div>
        <!-- play sound, navigate to main page, register choice, start countdown-->
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
name: 'FixedHouseDepositPopUp',

}

</script>