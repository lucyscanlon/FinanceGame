<template>
    <div class="popup-title-container">
        <h1><font-awesome-icon icon="fa-solid fa-money-bills" />You got a pay rise!</h1>
    </div> 
    <div class="popup-description-container workdrinks-desc investmentop-popup-desc">
        <p>You have been working hard at your job and your effort has been recognised. You have been promoted and will now recieve a salary of <span class="colour-green">£{{ Number(manageMoney.payRiseSalaryBeforeTax).toFixed(2)}}</span> per month before tax. </p>
    </div>
    <div class="popup-investmentsuccessful-flex-container payrise-container">
        <div class="popup-investsucc-title-container">
            <h4>Your new salary:</h4>
        </div>
        <div class="popup-investsucc-desc-container">
            <p>You will be paid monthly (After Tax):</p>
            <p class="colour-green investsucc-amount">£{{ Number(manageMoney.payRiseSalaryAfterTax).toFixed(2)}}</p>
        </div>
        <div class="popup-investsucc-button-container">
            <button @click="manageSound.playClickSound(), manageMainGameNav.navigateToPage(11), manageGameTimer.startCountdown(), manageMoney.increaseSalary(), manageBarometer.increaseScore(10)">Accept pay rise</button>
        </div>
    </div>
</template>
<script setup>

//import { usePopUpStore } from "../../../../store/MainGameChoicesStore.js";
import { useMainGameplayNavigationStore } from "../../../../store/MainGameChoicesStore.js";
import { useMoneyManageStore } from "../../../../store/MoneyStore.js";
import { useGameTimerStore } from "../../../../store/MoneyStore.js";
import { useBarometerStore } from "../../../../store/MainGameChoicesStore.js";
import { useSoundEffectsStore } from '../../../../store/soundEffectsStore.js'

//const managePopUps = usePopUpStore();
const manageMainGameNav = useMainGameplayNavigationStore();
const manageGameTimer = useGameTimerStore();
const manageMoney = useMoneyManageStore();
const manageBarometer = useBarometerStore();
const manageSound = useSoundEffectsStore()

</script>
<script>

export default {
name: 'PayRisePopUp',

}

</script>