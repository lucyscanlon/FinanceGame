<template>
    <div class="current-goal-colour-container">
        <div :class="(manageGoals.completedGoals > 5) ? 'goal-completed-styling' : ''" class="pension-interactive-title-container current-goal-title pay-bills-title">
            <h1><font-awesome-icon icon="fa-solid fa-bullseye" />Current Goal</h1>
        </div>
        <div class="currentgoal-status-container">
            <p v-if="manageGoals.completedGoals < 6">Status: <span class="colour-red">Uncompleted</span></p>
            <p v-if="manageGoals.completedGoals > 5">Status: <span class="colour-green">Completed</span></p>
        </div>
        <div :class="(manageGoals.completedGoals > 5) ? 'currentgoal-completed-border' : ''" class="currentgoal-goal-container pay-bills-goal">
            <p><span class="colour-green">Goal:</span> Earn £3000 through the stock market!</p>
        </div>
        <div class="currentgoal-tips-container">
            <ul>
                <li>Invest in stocks on the portfolio page.</li>
                <li>Earn £5000 profit to achieve this goal!</li>
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
name: 'InvestmentGoal',

}

</script>