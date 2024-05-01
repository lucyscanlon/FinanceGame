<script setup>
    import { usePensionChoicesStore } from '../../../store/MainGameChoicesStore'
    import { useMainGameplayNavigationStore } from '../../../store/MainGameChoicesStore.js'
    import { useSoundEffectsStore } from '../../../store/soundEffectsStore'

    const managePension = usePensionChoicesStore()
    const manageMainGameNav = useMainGameplayNavigationStore()
    const manageSound = useSoundEffectsStore();

    console.log(manageMainGameNav.mainGameComponentsUnlocked);
</script>

<template>
    <div class="pension-interactive-component-container maingameplay-flex-container">
        <div v-if="manageMainGameNav.mainGameComponentsUnlocked > 1" class="pension-component-content">
            <div @click="manageMainGameNav.navigateToPage(23)" class="pension-info-button-container">
                <p><font-awesome-icon icon="fa-solid fa-question" /></p>
            </div>
            <div class="pension-interactive-title-container">
                <h1><font-awesome-icon icon="fa-solid fa-person-cane" />Pension</h1>
            </div>
        <div class="pension-interactive-contributions-container">
            <div class="pension-interactive-left">
                <p>Your contribution:</p>
                <p>Employer contribution:</p>
                <p>Investment Value: </p>
            </div>
            <div class="pension-interactive-right">
                <p>{{managePension.chosenPensionChoice.YContPercentage}}%</p>
                <p>{{managePension.chosenPensionChoice.EContPercentage}}%</p>
                <p>{{Number(managePension.investmentValue).toFixed(0) }}%</p>
            </div>
        </div>
        <div class="pension-interactive-total-container">
            <div class="pension-interactive-total-title-container">
                <p>Current Total:</p>
            </div>
            <div class="pension-interactive-money-container">
                <p>£{{Number(managePension.pensionCurrentTotal).toFixed(2)}}</p>
            </div>
        </div>
        <div class="pension-interactive-button-container">
            <span class="border-pink"><button @click="manageSound.playClickSound(), manageMainGameNav.navigateToPage(10)">Change contributions</button></span>
            <button @click="manageSound.playClickSound(), manageMainGameNav.navigateToPage(29)">See predictions</button>
        </div>
        </div>
        
    </div>
</template>
<script>

export default {
    name: 'PensionInteractionComponent',
}

</script>