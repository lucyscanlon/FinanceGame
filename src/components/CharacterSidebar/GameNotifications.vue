<!-- Template for displaying the home the player has chosen to live

The parent of this component:
- Character Stats Sidebar

-->
<script setup>
    import { useMainGameplayNavigationStore } from '../../store/MainGameChoicesStore.js'
    import { useGameTimerStore } from '../../store/MoneyStore.js'
    import { useMoneyManageStore } from '../../store/MoneyStore.js'
    import { useGoalsStore } from '../../store/MainGameChoicesStore.js'
    import { useBarometerStore } from '../../store/MainGameChoicesStore.js'

    const manageMainGameNav = useMainGameplayNavigationStore()
    const manageGameTimer = useGameTimerStore()
    const manageMoney = useMoneyManageStore()
    const manageGoals = useGoalsStore()
    const manageBarometer = useBarometerStore()

</script>
<template>
    <div class="characterstats-set">
        <h4>Notifications</h4>
        <div class="characterstats-notifications-panel">
            <div v-if="manageMainGameNav.currentPage === 1" class="notifications-padding">
                        <div class="game-notification-container">
                            <p>Accept your job offer!</p>
                        </div>
                        <div class="game-notification-container">
                            <p>Use the UK Tax calculator to see tax contributions for different incomes</p>
                        </div>
            </div>
            <div v-if="manageMainGameNav.currentPage === 2" class="notifications-padding">
                        <div class="game-notification-container">
                            <p>Set up your bank account</p>
                        </div>
            </div>
            <div v-if="manageMainGameNav.currentPage === 4" class="notifications-padding">
                        <div class="game-notification-container">
                            <p>Choose a place to call home</p>
                        </div>
                        <div class="game-notification-container">
                            <p>Remember to stick to the 30-35% rule</p>
                        </div>
                        <div class="game-notification-container">
                            <p>35% of your income after tax is: <span class="colour-pink">£599.14</span></p>
                        </div>
            </div>
            <div v-if="manageMainGameNav.currentPage === 6" class="notifications-padding">
                        <div class="game-notification-container">
                            <p>Choose a supermarket to shop at from the available choices</p>
                        </div>
                        <div class="game-notification-container">
                            <p>Keep prices, perks and location in mind!</p>
                        </div>

            </div>
            <div v-if="manageMainGameNav.currentPage === 7" class="notifications-padding">
                        <div class="game-notification-container">
                            <p>Choose a method of transport to get around the city, including going to work if you don't live a walkable distance away.</p>
                        </div>

            </div>
            <div v-if="(manageMainGameNav.currentPage === 11) && (manageGameTimer.countdown <= 5) && (manageMoney.billsLate === false) && (manageMoney.billsPaid === manageGameTimer.monthsPassed)" class="notifications-padding">
                        <div class="game-notification-container">
                            <p>Your bills are due!</p>
                        </div>
            </div>
            <div v-if="(manageMainGameNav.currentPage === 11) && (manageMoney.billsLate === true)" class="notifications-padding">
                        <div class="game-notification-container">
                            <p>Your bills are late!</p>
                        </div>
            </div>
        </div>
        <!-- Buttons for the first goal - pay bills on time -->
        <div v-if="(manageGameTimer.countdown <= 5) && (manageMoney.billsPaid === manageGameTimer.monthsPassed) && (manageMoney.billsLate === false) && (manageGoals.currentGoal === 1)" class="pay-monthly-outgoings-container">
                <button @click="manageMoney.payMonthlyOutgoings(), manageGoals.completedGoal(), manageBarometer.increaseScore(3)">Pay monthly outgoings</button>
        </div>
        <div v-if="(manageMoney.billsLate === true) && (manageGoals.currentGoal === 1)" class="pay-monthly-outgoings-container bills-late-button">
                <button @click="manageMoney.payMonthlyOutgoings(), manageMoney.payLateBill()">Pay monthly outgoings</button>
        </div>
        <div v-if="(manageGameTimer.countdown > 5) && (manageMoney.billsPaid === manageGameTimer.monthsPassed) && (manageMoney.billsLate === false) && (manageGoals.currentGoal === 1)" class="pay-monthly-outgoings-container pay-monthly-inactive">
                <button>Pay monthly outgoings</button>
        </div>

        <!-- Buttons for the rest of gameplay-->
        <div v-if="(manageGameTimer.countdown <= 5) && (manageMoney.billsPaid === manageGameTimer.monthsPassed) && (manageMoney.billsLate === false) && (manageGoals.currentGoal > 1)" class="pay-monthly-outgoings-container">
                <button @click="manageMoney.payMonthlyOutgoings(), manageBarometer.increaseScore(2)">Pay monthly outgoings</button>
        </div>
        <div v-if="(manageMoney.billsLate === true) && (manageGoals.currentGoal > 1)" class="pay-monthly-outgoings-container bills-late-button">
                <button @click="manageMoney.payMonthlyOutgoings(), manageMoney.payLateBill()">Pay monthly outgoings</button>
        </div>
        <div v-if="(manageGameTimer.countdown > 5) && (manageMoney.billsPaid === manageGameTimer.monthsPassed) && (manageMoney.billsLate === false) && (manageGoals.currentGoal > 1)" class="pay-monthly-outgoings-container pay-monthly-inactive">
                <button>Pay monthly outgoings</button>
        </div>
        <hr>
    </div>
</template>
<script>
// Export component data
export default {
    name: 'GameNotificationPanel',
    data() {
        return {
            currentPageVar: useMainGameplayNavigationStore().currentPage,
        }
    },
    watch: {
        currentPageVar(newValue, oldValue) {
            if(newValue !== oldValue) {
                console.log("watched")
            }
        }
    }
}
</script>