<template>
    <div class="current-goal-colour-container">
        <div :class="(manageGoals.completedGoals > 2) ? 'goal-completed-styling' : ''" class="pension-interactive-title-container current-goal-title pay-bills-title">
            <h1><font-awesome-icon icon="fa-solid fa-bullseye" />Current Goal</h1>
        </div>
        <div class="currentgoal-status-container">
            <p v-if="manageGoals.completedGoals <= 2">Status: <span class="colour-red">Uncompleted</span></p>
            <p v-if="manageGoals.completedGoals > 2">Status: <span class="colour-green">Completed</span></p>
        </div>
        <div class="currentgoal-goal-container pay-bills-goal">
            <p><span class="colour-green">Goal:</span> Save £5000 for your emergency fund</p>
        </div>
        <div class="currentgoal-tips-container">
            <ul>
                <li>Add money to your emergency fund account.</li>
                <li>Save £5000 to complete this goal!</li>
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
name: 'EmergencyFundGoal',
data() {
    return {
        amountToChange: '',
    }
}

}

</script>