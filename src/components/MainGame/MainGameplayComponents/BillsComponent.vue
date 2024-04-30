<template>
    <div class="maingameplay-flex-container">
        <div @click="manageMainGameNav.navigateToPage(28)" class="pension-info-button-container">
            <p><font-awesome-icon icon="fa-solid fa-question" /></p>
        </div>
        <div v-if="manageMainGameNav.mainGameComponentsUnlocked > 0" class="housedeposit-content-container">
            <div class="pension-interactive-title-container everydaysavings-title bills-interactive">
                <h1><font-awesome-icon icon="fa-solid fa-money-check-dollar" />Your Bills</h1>
                <p>Pay your bills here. Bills can be paid up to 10 days before the end of the month.</p>
            </div>
            <div class="billsinteractive-total-title-container">
                <p>Total Bills Amount:</p>
            </div>
            <div class="billsinteractive-total-container">
                <p>£{{ manageMoney.monthlyOutGoingsSum }}</p>
            </div>
            <div class="billsinteractive-total-title-container">
                <p>Days until bills are due:</p>
            </div>
            <div class="billsinteractive-total-container">
                <p>{{ manageGameTimer.countdown }}</p>
            </div>
            <!-- Buttons for the first goal - pay bills on time -->
            <div v-if="(manageGameTimer.countdown <= 10) && (manageMoney.billsPaid === manageGameTimer.monthsPassed) && (manageMoney.billsLate === false) && (manageGoals.currentGoal === 1)" class="pay-monthly-outgoings-container">
                <button @click="manageSound.goalCompleted(), manageMoney.payMonthlyOutgoings(), manageGoals.completedGoal(), manageBarometer.increaseScore(3)">Pay Bills</button>
            </div>
            <div v-if="(manageMoney.billsLate === true) && (manageGoals.currentGoal === 1)" class="pay-monthly-outgoings-container bills-late-button">
                <button @click="manageMoney.payMonthlyOutgoings(), manageMoney.payLateBill()">Pay Bills</button>
            </div>
            <div v-if="(manageGameTimer.countdown > 10) && (manageMoney.billsPaid === manageGameTimer.monthsPassed) && (manageMoney.billsLate === false) && (manageGoals.currentGoal === 1)" class="pay-monthly-outgoings-container pay-monthly-inactive">
                <button>Pay Bills</button>
            </div>
            <!-- Buttons for the rest of gameplay - paying bills on time -->
            <div v-if="(manageGameTimer.countdown <= 10) && (manageMoney.billsPaid === manageGameTimer.monthsPassed) && (manageMoney.billsLate === false) && (manageGoals.currentGoal > 1)" class="pay-monthly-outgoings-container">
                <button @click="manageMoney.payMonthlyOutgoings(), manageBarometer.increaseScore(2)">Pay Bills</button>
            </div>
            <div v-if="(manageMoney.billsLate === true) && (manageGoals.currentGoal > 1)" class="pay-monthly-outgoings-container bills-late-button">
                <button @click="manageMoney.payMonthlyOutgoings(), manageMoney.payLateBill()">Pay Bills</button>
            </div>
            <div v-if="(manageGameTimer.countdown > 10) && (manageMoney.billsPaid === manageGameTimer.monthsPassed) && (manageMoney.billsLate === false) && (manageGoals.currentGoal > 1)" class="pay-monthly-outgoings-container pay-monthly-inactive">
                <button>Pay Bills</button>
            </div>
        </div>
    </div>
</template>
<script setup>

    import { useMoneyManageStore, useGameTimerStore} from '../../../store/MoneyStore'
    import { useGoalsStore, useMainGameplayNavigationStore, useBarometerStore } from '../../../store/MainGameChoicesStore'
    import { useSoundEffectsStore } from '../../../store/soundEffectsStore'
    const manageMoney = useMoneyManageStore()
    const manageGameTimer = useGameTimerStore()
    const manageGoals = useGoalsStore()
    const manageMainGameNav = useMainGameplayNavigationStore()
    const manageSound = useSoundEffectsStore()
    const manageBarometer = useBarometerStore()

</script>
<script>

export default {
    name: 'PayBillsComponent',
}

</script>