<script setup>
    import { usePensionChoicesStore } from '../../../store/MainGameChoicesStore'
    import { useMainGameplayNavigationStore } from '../../../store/MainGameChoicesStore.js'

    const managePension = usePensionChoicesStore()
    const manageMainGameNav = useMainGameplayNavigationStore()
</script>

<template>
    <div class="pension-interactive-component-container maingameplay-flex-container">
        <div class="pension-interactive-title-container">
            <h1><font-awesome-icon icon="fa-solid fa-person-cane" />Pension</h1>
        </div>
        <div class="pension-interactive-contributions-container">
            <div class="pension-interactive-left">
                <p>Your contribution:</p>
                <p>Employer contribution:</p>
                <p>FTSE Value:</p>
            </div>
            <div class="pension-interactive-right">
                <p>{{managePension.chosenPensionChoice.YContPercentage}}%</p>
                <p>{{managePension.chosenPensionChoice.EContPercentage}}%</p>
                <p>{{managePension.chosenPensionChoice.FTSEValue}}</p>
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
            <span class="border-pink"><button @click="manageMainGameNav.navigateToPage(2)">Change contributions</button></span>
            <button>See predictions</button>
        </div>
    </div>
</template>
<script>

export default {
    name: 'PensionInteractionComponent',
}

</script>