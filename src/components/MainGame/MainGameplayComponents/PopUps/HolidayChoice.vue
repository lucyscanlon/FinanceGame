<template>
    <div class="popup-title-container">
        <h1><font-awesome-icon icon="fa-solid fa-map-location-dot" />New Goal: You're going on holiday!</h1>
    </div> 
    <div class="popup-description-container">
        <p>You are going on holiday. Choose a holiday package that is appropriate for your budget from the options below and start saving to complete the goal.</p>
    </div>
    <div class="popup-phonebill-options-container holidaychoice-flex-wholecontainer">
        <div class="popup-phonebill-flex-container holidaychoice-flex">
            <div class="popup-holidaychoice-padding">
                <div class="popup-phonebill-option-container">
                    <h4>Option 1</h4>
                </div>
                <div class="popup-phonebill-desc-container">
                    <p>A luxury all inclusive holiday in the Caribbean</p>
                </div>
                <div class="popup-phonebill-costs-container">
                    <div class="popup-phonebill-upfront-title">
                        <h5>Cost:</h5>
                        <p class="colour-green">£6000</p>
                    </div>
                </div>
            </div>
            <div class="popup-phonebill-button">
                <button @click="managePopUps.HolidayBudgetChoice(1), manageMainGameNav.navigateToPage(11), manageGameTimer.startCountdown(), manageGameGoals.setUpSpecificGoal(5), manageBarometer.decreaseScore(30), manageNotifications.timeoutHolidayChoiceNotification()">Choose</button>
            </div>
        </div>
        <div class="popup-phonebill-flex-container holidaychoice-flex">
            <div class="popup-holidaychoice-padding">
                <div class="popup-phonebill-option-container">
                    <h4>Option 2</h4>
                </div>
                <div class="popup-phonebill-desc-container">
                    <p>A hotel package on a Greek Island</p>
                </div>
                <div class="popup-phonebill-costs-container">
                    <div class="popup-phonebill-upfront-title">
                        <h5>Cost:</h5>
                        <p class="colour-green">£2000</p>
                    </div>
                </div>
            </div>
            <div class="popup-phonebill-button">
                <button @click="managePopUps.HolidayBudgetChoice(2), manageMainGameNav.navigateToPage(11), manageGameTimer.startCountdown(), manageGameGoals.setUpSpecificGoal(5), manageBarometer.increaseScore(15), manageNotifications.timeoutHolidayChoiceNotification()">Choose</button>
            </div>
        </div>
        <div class="popup-phonebill-flex-container holidaychoice-flex">
            <div class="popup-holidaychoice-padding">
                <div class="popup-phonebill-option-container">
                    <h4>Option 3</h4>
                </div>
                <div class="popup-phonebill-desc-container">
                    <p>A cosy cottage stay in Cornwall</p>
                </div>
                <div class="popup-phonebill-costs-container">
                    <div class="popup-phonebill-upfront-title">
                        <h5>Cost:</h5>
                        <p class="colour-green">£900</p>
                    </div>
                </div>
            </div>
            <div class="popup-phonebill-button">
                <button @click="managePopUps.HolidayBudgetChoice(3), manageMainGameNav.navigateToPage(11), manageGameTimer.startCountdown(), manageGameGoals.setUpSpecificGoal(5), manageBarometer.increaseScore(20), manageNotifications.timeoutHolidayChoiceNotification()">Choose</button>
            </div>
        </div>
    </div>
</template>
<script setup>

import { useBarometerStore, usePopUpStore } from "../../../../store/MainGameChoicesStore.js";
import { useMainGameplayNavigationStore, useNotificationStore } from "../../../../store/MainGameChoicesStore.js";
import { useGameTimerStore } from "../../../../store/MoneyStore.js";
import { useGoalsStore } from "../../../../store/MainGameChoicesStore.js";

const managePopUps = usePopUpStore();
const manageMainGameNav = useMainGameplayNavigationStore();
const manageGameTimer = useGameTimerStore();
const manageGameGoals = useGoalsStore();
const manageBarometer = useBarometerStore();
const manageNotifications = useNotificationStore();

</script>
<script>

export default {
name: 'HolidayChoicePopUp',

}

</script>