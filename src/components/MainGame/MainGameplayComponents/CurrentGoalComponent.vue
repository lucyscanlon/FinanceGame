<template>
    <div v-if="useMainGameplayNav.mainGameComponentsUnlocked > 0" class="maingameplay-flex-container">
        <FurnitureFundGoal></FurnitureFundGoal>
    </div>
</template>
<script setup>

import FurnitureFundGoal from './GameGoals/FurnitureFund'
import { useMainGameplayNavigationStore } from '../../../store/MainGameChoicesStore.js'

const useMainGameplayNav = useMainGameplayNavigationStore();

</script>
<script>

export default {
    name: 'CurrentGoalInteractiveComponent',
    components: {
        FurnitureFundGoal,
    },
    data() {
        return {
            amountToChange: '',
        }
    }
   
}

</script>