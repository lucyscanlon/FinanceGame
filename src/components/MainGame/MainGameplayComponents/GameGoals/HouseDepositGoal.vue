<template>
    <div class="current-goal-colour-container">
        <div :class="(manageGoals.completedGoals === 8) ? 'goal-completed-styling' : ''" class="pension-interactive-title-container current-goal-title pay-bills-title">
            <h1><font-awesome-icon icon="fa-solid fa-bullseye" />Final Goal</h1>
        </div>
        <div class="currentgoal-status-container">
            <p v-if="manageGoals.completedGoals < 8">Status: <span class="colour-red">Uncompleted</span></p>
            <p v-if="manageGoals.completedGoals === 8">Status: <span class="colour-green">Completed</span></p>
        </div>
        <div class="currentgoal-goal-container pay-bills-goal">
            <p><span class="colour-green">Goal:</span> Save £15,000 for your house deposit!</p>
        </div>
        <div class="currentgoal-tips-container">
            <ul>
                <li>Add money to your house deposit fund.</li>
                <li>This is your final goal!</li>
            </ul>
        </div>
    </div>  
</template>
<script setup>

    import { useGoalsStore } from "../../../../store/MainGameChoicesStore.js";

    const manageGoals = useGoalsStore();

</script>
<script>

export default {
name: 'HouseDepositGoal',

}

</script>