<!-- Template for holiday choice pop up

The parent of this component:
- Popupscomponent

The children of this component:
- None

-->
<template>
    <div class="popups-main-container-wrapper">
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
                <!-- play sound, navigate to main page, register choice, start countdown, increase or decrease score, queue next pop up, queue specific goal, start timeout for holiday choice notification -->
                <div class="popup-phonebill-button">
                    <button @click="manageSound.playClickSound(), managePopUps.HolidayBudgetChoice(1), manageMainGameNav.navigateToPage(18), managePopUps.setSpecificPopup(9), manageGameGoals.setUpSpecificGoal(5), manageBarometer.decreaseScore(30), manageNotifications.timeoutHolidayChoiceNotification()">Choose</button>
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
                <!-- play sound, navigate to main page, register choice, start countdown, increase or decrease score, queue next pop up, queue specific goal, start timeout for holiday choice notification -->
                <div class="popup-phonebill-button">
                    <button @click="manageSound.playClickSound(), managePopUps.HolidayBudgetChoice(2), manageMainGameNav.navigateToPage(18), managePopUps.setSpecificPopup(9), manageGameGoals.setUpSpecificGoal(5), manageBarometer.increaseScore(15), manageNotifications.timeoutHolidayChoiceNotification()">Choose</button>
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
                <!-- play sound, navigate to main page, register choice, start countdown, increase or decrease score, queue next pop up, queue specific goal, start timeout for holiday choice notification -->
                <div class="popup-phonebill-button">
                    <button @click="manageSound.playClickSound(), managePopUps.HolidayBudgetChoice(3), manageMainGameNav.navigateToPage(18), managePopUps.setSpecificPopup(9), manageGameGoals.setUpSpecificGoal(5), manageBarometer.increaseScore(20), manageNotifications.timeoutHolidayChoiceNotification()">Choose</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>

import { useBarometerStore, usePopUpStore } from "../../../../store/MainGameChoicesStore.js";
import { useMainGameplayNavigationStore, useNotificationStore } from "../../../../store/MainGameChoicesStore.js";
import { useGoalsStore } from "../../../../store/MainGameChoicesStore.js";
import { useSoundEffectsStore } from '../../../../store/soundEffectsStore.js'

const managePopUps = usePopUpStore();
const manageMainGameNav = useMainGameplayNavigationStore();
const manageGameGoals = useGoalsStore();
const manageBarometer = useBarometerStore();
const manageNotifications = useNotificationStore();
const manageSound = useSoundEffectsStore()

</script>
<script>

export default {
name: 'HolidayChoicePopUp',

}

</script>