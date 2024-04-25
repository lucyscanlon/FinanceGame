<template>
    <div class="current-goal-colour-container">
        <div :class="(manageGoals.completedGoals >= 6) ? 'goal-completed-styling' : ''" class="pension-interactive-title-container current-goal-title pay-bills-title">
            <h1><font-awesome-icon icon="fa-solid fa-bullseye" />Current Goal</h1>
        </div>
        <div class="currentgoal-status-container">
            <p v-if="manageGoals.completedGoals < 6">Status: <span class="colour-red">Uncompleted</span></p>
            <p v-if="manageGoals.completedGoals >= 6">Status: <span class="colour-green">Completed</span></p>
        </div>
        <div :class="(manageGoals.completedGoals >= 6) ? 'currentgoal-completed-border' : ''" class="currentgoal-goal-container pay-bills-goal">
            <p><span class="colour-green">Goal:</span> Buy 10 stocks!</p>
        </div>
        <div class="currentgoal-tips-container">
            <ul>
                <li>Go onto the investment portfolio panel</li>
                <li>Purchase your first 10 stocks!</li>
                <li>Try to invest in stocks with stable positive growth</li>
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
name: 'BuyStocksGoal',

}

</script>