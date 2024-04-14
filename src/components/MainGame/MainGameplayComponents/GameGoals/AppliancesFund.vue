<template>
    <div :class="(manageGoals.completedGoals > 1) ? 'goal-completed-styling' : ''" class="pension-interactive-title-container current-goal-title">
        <h1><font-awesome-icon icon="fa-solid fa-bullseye" />Current Goal</h1>
    </div>
    <div class="currentgoal-status-container">
        <p v-if="manageMoney.furnitureFundTotal < 1000">Status: <span class="colour-red">Uncompleted</span></p>
        <p v-if="manageMoney.furnitureFundTotal >= 1000">Status: <span class="colour-green">Completed</span></p>
    </div>
    <div :class="(manageGoals.completedGoals > 0) ? 'currentgoal-completed-border' : ''" class="currentgoal-goal-container">
        <p><span class="colour-green">Goal:</span> Save £2000 for new appliances for your apartment</p>
    </div>
    <div class="currentgoal-info-total-container">
        <div class="currentgoal-total-text-container">
            <p>Appliances Fund Total:</p>
        </div>
        <div class="currentgoal-total-number-container">
            <p>£{{ manageMoney.appliancesFundTotal }}</p>
        </div>
    </div>
    <div class="currentgoal-addwithdraw-title-container">
        <p>Change amount:</p>
    </div>
    <div class="currentgoal-addwithdraw-box-container">
        <div class="currentgoal-addwithdraw-change">
            <form>
                <input type="number" placeholder="__" v-model="amountToChange">
            </form>
        </div>
    </div>
    <div class="currentgoal-add-withdraw-buttons">
        <button @click="manageMoney.addToAppliancesFund(amountToChange)">Add</button>
        <span @click="manageMoney.withdrawFromAppliancesFund(amountToChange)" class="currentgoal-withdraw-button"><button>Withdraw</button></span>
    </div>
</template>
<script setup>

import { useMoneyManageStore } from '../../../../store/MoneyStore'
import { useGoalsStore } from "../../../../store/MainGameChoicesStore.js";

const manageMoney = useMoneyManageStore()
const manageGoals = useGoalsStore();

</script>
<script>

export default {
name: 'AppliancesFundGoal',
data() {
    return {
        amountToChange: '',
    }
}

}

</script>