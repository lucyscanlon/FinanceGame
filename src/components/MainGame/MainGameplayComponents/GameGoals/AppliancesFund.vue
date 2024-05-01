<template>
    <div :class="(manageGoals.completedGoals > 3) ? 'goal-completed-styling' : ''" class="pension-interactive-title-container current-goal-title">
        <h1><font-awesome-icon icon="fa-solid fa-bullseye" />Current Goal</h1>
    </div>
    <div class="currentgoal-status-container">
        <p v-if="manageMoney.appliancesFundTotal < 2000">Status: <span class="colour-red">Uncompleted</span></p>
        <p v-if="manageMoney.appliancesFundTotal >= 2000">Status: <span class="colour-green">Completed</span></p>
    </div>
    <div class="currentgoal-goal-container">
        <p><span class="colour-green">Goal:</span> Save £2000 for new appliances for your apartment</p>
    </div>
    <div class="currentgoal-info-total-container">
        <div class="currentgoal-total-text-container">
            <p>Appliances Fund Total:</p>
        </div>
        <div class="currentgoal-total-number-container">
            <p>£{{ manageMoney.appliancesFundTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2}) }}</p>
        </div>
    </div>
    <div class="currentgoal-addwithdraw-title-container">
        <p>Change amount:</p>
    </div>
    <div class="currentgoal-addwithdraw-box-container">
        <div class="currentgoal-addwithdraw-change">
            <form>
                <input placeholder="Enter Number" v-model="amountToChange">
            </form>
        </div>
    </div>
    <div class="currentgoal-add-withdraw-buttons">
        <button @click="manageSound.addButton(), manageMoney.addToAppliancesFund(amountToChange), rerenderComponent()">Add</button>
        <span @click="manageSound.WithdrawButton(), manageMoney.withdrawFromAppliancesFund(amountToChange), rerenderComponent()" class="currentgoal-withdraw-button"><button>Withdraw</button></span>
    </div>
</template>
<script setup>

import { useMoneyManageStore } from '../../../../store/MoneyStore'
import { useGoalsStore } from "../../../../store/MainGameChoicesStore.js";
import { useSoundEffectsStore } from '../../../../store/soundEffectsStore.js'

const manageMoney = useMoneyManageStore()
const manageGoals = useGoalsStore();
const manageSound = useSoundEffectsStore()

</script>
<script>

export default {
name: 'AppliancesFundGoal',
data() {
    return {
        amountToChange: '',
    }
}, methods: {
        rerenderComponent() {
            this.amountToChange = '',
            this.$forceUpdate();
        }
    }

}

</script>