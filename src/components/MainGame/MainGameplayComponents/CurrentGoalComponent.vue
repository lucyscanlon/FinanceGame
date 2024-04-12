<template>
    <div v-if="useMainGameplayNav.mainGameComponentsUnlocked > 0" class="maingameplay-flex-container">
        <FurnitureFundGoal v-if="useMainGameplayNav.currentPage > 13"></FurnitureFundGoal>
        <PayBillsGoal></PayBillsGoal>
    </div>
</template>
<script setup>

import FurnitureFundGoal from './GameGoals/FurnitureFund'
import PayBillsGoal from './GameGoals/PayBillsGoal'
import { useMainGameplayNavigationStore } from '../../../store/MainGameChoicesStore.js'

const useMainGameplayNav = useMainGameplayNavigationStore();

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