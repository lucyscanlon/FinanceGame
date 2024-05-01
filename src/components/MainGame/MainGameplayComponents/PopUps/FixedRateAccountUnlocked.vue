<template>
    <div class="popups-main-container-newgoal-container">
        <div class="newgoalpopup-title-container newyearpopuptitle">
            <h1><font-awesome-icon icon="fa-solid fa-house" />Fixed Rate Account</h1>
        </div>
        <div class="newgoalpopup-description-container">
            <p>It has been six months and your fixed rate account has now been unlocked. The interest rate will now reduce to 2.8% and you may add and withdraw from this account freely.</p>
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
name: 'FixedHouseDepositAccountUnlocked',

}

</script>