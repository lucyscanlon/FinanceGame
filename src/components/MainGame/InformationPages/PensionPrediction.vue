<!-- Template for displaying the text information introducing rent to the player

The parent of this component:
- Main game

-->
<template>
    <div class="rentintro-mainwrapper">
        <div class="rentintro-title-wrapper everydayaccount-info-title">
            <h1>Your Predicted Pension</h1>
        </div>
        <div class="rentintro-description-wrapper">
            <p>Here is what your pension is predicted to look like when you retire at 50 years old.</p>
            <div class="rentintro-list">
                <PensionLineChart :dataArray="managePension.pensionPredictionsCondensed"></PensionLineChart>
            </div>
            <div class="pensionpredictions-text-container">
                <p>Total predicted pension value after 30 years: <span class="colour-green">£{{ managePension.pensionPredictionsCondensed[29].toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2}) }}</span></p>
            </div>
            <div v-if="manageMainGameNav.currentPage === 22" class="rentinfo-button-wrapper pension-predictions">
                <!-- Call store method on click -->
                <button @click="manageSound.playClickSound(), manageMainGameNav.navigateToPage(11), manageGameTimer.startCountdown(), manageMainGameNav.unlockComponent()" class="currentaccount-button">Continue to game</button>
            </div>
            <div v-if="manageMainGameNav.currentPage === 29" class="rentinfo-button-wrapper pension-predictions">
                <!-- Call store method on click -->
                <button @click="manageSound.playClickSound(), manageMainGameNav.navigateToPage(11), manageGameTimer.startCountdown()" class="currentaccount-button">Back to game</button>
            </div>
        </div>
    </div>
</template>
<script setup>
    import PensionLineChart from './PensionLineChart.vue';

    import { usePensionChoicesStore } from '../../../store/MainGameChoicesStore'
    import { useSoundEffectsStore } from '../../../store/soundEffectsStore'
    import { useMainGameplayNavigationStore } from '../../../store/MainGameChoicesStore.js'
    import {useGameTimerStore} from '../../../store/MoneyStore.js'


    const managePension = usePensionChoicesStore()
    const manageSound = useSoundEffectsStore()
    const manageMainGameNav = useMainGameplayNavigationStore()
    const manageGameTimer = useGameTimerStore()


</script>
<script>
    // export component data
    export default {
      name: 'PensionPredictions',
      components: {
        PensionLineChart,
      }
    }
</script>