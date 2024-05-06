<!-- Template for income streams type component

Not used

-->
<template>
        <div class="incomestreams-interactive-title">
            <h4>Secondary Income Stream</h4>
        </div>
        <div class="incomestream-type-container">
            <p>{{ type }}</p>
        </div>
        <div class="incomestream-name-container">
            <p>
                <font-awesome-icon v-if="icon === 1" icon="fa-solid fa-shop" />
                <font-awesome-icon v-if="icon === 2" icon="fa-solid fa-microphone" />
                <font-awesome-icon v-if="icon === 3" icon="fa-solid fa-martini-glass-citrus" />
                <font-awesome-icon v-if="icon === 4" icon="fa-solid fa-at" />
                <font-awesome-icon v-if="icon === 5" icon="fa-solid fa-computer" />
                {{ name }}</p>
        </div>
        <div class="incomestreams-info-container">
            <div class="incomestreams-interactive-labels">
                <p>Montly Income:</p>
                <p>Monthly Costs:</p>
            </div>
            <div class="incomestreams-interactive-costs">
                <p>£{{ monthlyIncome }}</p>
                <p>£{{ monthlyCost }}</p>
            </div>
        </div>
        <div class="incomestreams-interactive-edit-choice">
            <button @click="manageSound.playClickSound(), manageMainGameNav.navigateToPage(14)">Change income stream</button>
        </div>
</template>
<script setup>
    
    import { useMainGameplayNavigationStore } from '../../../store/MainGameChoicesStore.js'
    import { useSoundEffectsStore } from '../../../store/soundEffectsStore'

    const manageMainGameNav = useMainGameplayNavigationStore()
    const manageSound = useSoundEffectsStore();

</script>
<script>

export default {
    name: 'IncomeStreamsType',
    props: {
        type: String,
        name: String,
        monthlyIncome: Number,
        monthlyCost: Number,
        icon: Number,
    }
}

</script>