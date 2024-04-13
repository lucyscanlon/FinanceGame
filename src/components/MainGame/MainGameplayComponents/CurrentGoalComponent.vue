<template>
    <div v-if="useMainGameplayNav.mainGameComponentsUnlocked > 0" class="maingameplay-flex-container">
        <PayBillsGoal v-if="manageGameGoals.currentGoal === 1"></PayBillsGoal>
        <FurnitureFundGoal v-if="manageGameGoals.currentGoal === 2"></FurnitureFundGoal>
    </div>
</template>
<script setup>

import FurnitureFundGoal from './GameGoals/FurnitureFund'
import PayBillsGoal from './GameGoals/PayBillsGoal'
import { useMainGameplayNavigationStore } from '../../../store/MainGameChoicesStore.js'
import { useGoalsStore } from '../../../store/MainGameChoicesStore.js'

const useMainGameplayNav = useMainGameplayNavigationStore();
const manageGameGoals = useGoalsStore();

</script>
<script>

export default {
    name: 'CurrentGoalInteractiveComponent',
    components: {
        FurnitureFundGoal,
        PayBillsGoal,
    },
    data() {
        return {
            amountToChange: '',
        }
    }
   
}

</script>