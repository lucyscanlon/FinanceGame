<!-- Template for phone bill pop up

The parent of this component:
- Popupscomponent

The children of this component:
- None

-->
<template>
    <div class="popups-main-container-wrapper">
        <div class="popup-title-container">
            <h1><font-awesome-icon icon="fa-solid fa-phone" />Choose a phone plan</h1>
        </div> 
        <div class="popup-description-container">
            <p>Choose a phone plan from the options below. Charges will be added to your monthly outgoings.</p>
        </div>
        <div class="popup-phonebill-options-container">
            <div class="popup-phonebill-flex-container">
                <div class="popup-phonebill-padding">
                    <div class="popup-phonebill-option-container">
                        <h4>Option 1</h4>
                    </div>
                    <div class="popup-phonebill-desc-container">
                        <p>Monthly contract covers all costs</p>
                    </div>
                    <div class="popup-phonebill-costs-container">
                        <div class="popup-phonebill-upfront-title">
                            <h5>Up Front Cost:</h5>
                            <p class="colour-green">£0</p>
                        </div>
                        <div class="popup-phonebill-upfront-title">
                            <h5>Monthly Cost:</h5>
                            <p class="colour-green">£50</p>
                        </div>
                    </div>
                </div>
                <!-- play sound, register phone plan, navigate to main game, start countdown, increase score, start notification timeout -->
                <div class="popup-phonebill-button">
                    <button @click="manageSound.playClickSound(), managePopUps.choosePhonePlan(1), manageMainGameNav.navigateToPage(11), manageGameTimer.startCountdown(), manageBarometer.increaseScore(5), manageNotification.timeoutGameNotification()">Choose</button>
                </div>
            </div>
            <div class="popup-phonebill-flex-container">
                <div class="popup-phonebill-padding">
                    <div class="popup-phonebill-option-container">
                        <h4>Option 2</h4>
                    </div>
                    <div class="popup-phonebill-desc-container">
                        <p>Up front payment for second hand phone</p>
                    </div>
                    <div class="popup-phonebill-costs-container">
                        <div class="popup-phonebill-upfront-title">
                            <h5>Up Front Cost:</h5>
                            <p class="colour-green">£300</p>
                        </div>
                        <div class="popup-phonebill-upfront-title">
                            <h5>Monthly Cost:</h5>
                            <p class="colour-green">£15</p>
                        </div>
                    </div>
                </div>
                <!-- play sound, register phone plan, navigate to main game, start countdown, increase score, start notification timeout -->
                <div class="popup-phonebill-button">
                    <button @click="manageSound.playClickSound(), managePopUps.choosePhonePlan(2), manageMainGameNav.navigateToPage(11), manageGameTimer.startCountdown(), manageBarometer.increaseScore(10), manageNotification.timeoutGameNotification()">Choose</button>
                </div>
            </div>
            <div class="popup-phonebill-flex-container">
                <div class="popup-phonebill-padding">
                    <div class="popup-phonebill-option-container">
                        <h4>Option 3</h4>
                    </div>
                    <div class="popup-phonebill-desc-container">
                        <p>Up front payment for brand new phone</p>
                    </div>
                    <div class="popup-phonebill-costs-container">
                        <div class="popup-phonebill-upfront-title">
                            <h5>Up Front Cost:</h5>
                            <p class="colour-green">£800</p>
                        </div>
                        <div class="popup-phonebill-upfront-title">
                            <h5>Monthly Cost:</h5>
                            <p class="colour-green">£15</p>
                        </div>
                    </div>
                </div>
                <!-- play sound, register phone plan, navigate to main game, start countdown, decrease score, start notification timeout -->
                <div class="popup-phonebill-button">
                    <button @click="manageSound.playClickSound(), managePopUps.choosePhonePlan(3), manageMainGameNav.navigateToPage(11), manageGameTimer.startCountdown(), manageBarometer.decreaseScore(20), manageNotification.timeoutGameNotification()">Choose</button>
                </div>  
            </div>
        </div>
    </div>
</template>
<script setup>

import { usePopUpStore } from "../../../../store/MainGameChoicesStore.js";
import { useMainGameplayNavigationStore } from "../../../../store/MainGameChoicesStore.js";
import { useGameTimerStore } from "../../../../store/MoneyStore.js";
import { useBarometerStore } from "../../../../store/MainGameChoicesStore.js";
import { useNotificationStore } from "../../../../store/MainGameChoicesStore.js";
import { useSoundEffectsStore } from '../../../../store/soundEffectsStore.js'

const managePopUps = usePopUpStore();
const manageMainGameNav = useMainGameplayNavigationStore();
const manageGameTimer = useGameTimerStore();
const manageBarometer = useBarometerStore();
const manageNotification = useNotificationStore();
const manageSound = useSoundEffectsStore()

</script>
<script>

export default {
name: 'PhoneBillPopUp',

}

</script>