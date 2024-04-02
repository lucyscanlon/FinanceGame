<template>
    <FurnitureFundGoal></FurnitureFundGoal>
</template>
<script setup>

import FurnitureFundGoal from './GameGoals/FurnitureFund'

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