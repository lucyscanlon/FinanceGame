<!-- Template for displaying the game notifications panel

The parent of this component:
- CharacterStatsSidebar

The children of this component:
- None

-->
<script setup>

    // import pinia stores
    import { useMainGameplayNavigationStore } from '../../store/MainGameChoicesStore.js'
    import { useGameTimerStore } from '../../store/MoneyStore.js'
    import { useMoneyManageStore } from '../../store/MoneyStore.js'
    import { useGoalsStore } from '../../store/MainGameChoicesStore.js'
    import { useBarometerStore } from '../../store/MainGameChoicesStore.js'
    import {registerLivingOptionChoiceStore} from '../../store/InitialGameChoicesStore.js'
    import {supermarketChoiceStore} from '../../store/InitialGameChoicesStore.js'
    import {transportChoiceStore} from '../../store/InitialGameChoicesStore.js'
    import {useNotificationStore } from '../../store/MainGameChoicesStore.js'
    import {usePopUpStore, useEmergencyFundChoicesStore, useIncomeStreamsChoicesStore, useHouseDepositChoiceStore } from '../../store/MainGameChoicesStore.js'
    import {useSoundEffectsStore} from '../../store/soundEffectsStore.js'

    const manageMainGameNav = useMainGameplayNavigationStore()
    const manageGameTimer = useGameTimerStore()
    const manageMoney = useMoneyManageStore()
    const manageGoals = useGoalsStore()
    const manageBarometer = useBarometerStore()
    const manageLiving = registerLivingOptionChoiceStore()
    const manageSupermarket = supermarketChoiceStore()
    const manageTransport = transportChoiceStore()
    const manageNotifications = useNotificationStore()
    const managePopUps = usePopUpStore()
    const manageEmergencyFund = useEmergencyFundChoicesStore()
    const manageIncomeStreams = useIncomeStreamsChoicesStore()
    const manageHouseDeposit = useHouseDepositChoiceStore()
    const manageSound = useSoundEffectsStore()

</script>
<template>
    <div class="characterstats-set">
        <h4>Notifications</h4>
        <div class="characterstats-notifications-panel">
            <!-- Notifications for if the player accepts the job -->
            <div v-if="manageMainGameNav.currentPage === 1" class="notifications-padding">
                <div class="game-notification-container">
                    <p>Accept your job offer!</p>
                </div>
                <div class="game-notification-container">
                    <p>Use the UK Tax calculator to see tax contributions for different incomes</p>
                </div>
            </div>
            <!-- Notifications for page 2 -->
            <div v-if="manageMainGameNav.currentPage === 2" class="notifications-padding">
                <div class="game-notification-container">
                    <p>Set up your bank account</p>
                </div>
            </div>
            <!-- Notifications for page 4 - when choosing a place to live -->
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
            <!-- Notifications for page 5 - Feedback on the players living choice -->
            <div v-if="manageMainGameNav.currentPage === 5" class="notifications-padding">
                <div v-if="manageLiving.selectedLivingOptionInfo.street === '27 Pinecrest Avenue'" class="game-notification-container">
                    <p>You chose an affordable apartment.</p>
                </div>
                <div v-if="manageLiving.selectedLivingOptionInfo.street === '19 Rodeo Square'" class="game-notification-container red-border">
                    <p>You chose the most expensive apartment, the furthest away from work!</p>
                </div>
                <div v-if="manageLiving.selectedLivingOptionInfo.street === 'Apt E1, Harmony Lane'" class="game-notification-container">
                    <p>You chose a location within walking distance to work.</p>
                </div>
                <div v-if="manageLiving.selectedLivingOptionInfo.street === '32 Brickyard Lane'" class="game-notification-container red-border">
                    <p>You chose an apartment far away from work!</p>
                </div>
            </div>
            <!-- Notifications for page 6 - instructions for choosing a supermarket -->
            <div v-if="manageMainGameNav.currentPage === 6" class="notifications-padding">
                <div class="game-notification-container">
                    <p>Choose a supermarket to shop at from the available choices</p>
                </div>
                <div class="game-notification-container">
                    <p>Keep prices, perks and location in mind!</p>
                </div>
            </div>
            <!-- Notifications for page 7 - Feedback for their supermarket choice -->
            <div v-if="manageMainGameNav.currentPage === 7" class="notifications-padding">
                <div v-if="manageSupermarket.chosenSupermarketInfo.SMName === 'Saver Superstore'" class="game-notification-container">
                    <p>You chose an affordable supermarket</p>
                </div>
                <div v-if="manageSupermarket.chosenSupermarketInfo.SMName === 'Gourmet Grove'" class="game-notification-container red-border">
                    <p>You chose an expensive supermarket</p>
                </div>
                <div v-if="manageSupermarket.chosenSupermarketInfo.SMName === 'Swiftbite Delivery'" class="game-notification-container red-border">
                    <p>You chose a very expensive fast food delivery service instead of a supermarket</p>
                </div>
                <div v-if="manageSupermarket.chosenSupermarketInfo.SMName === 'Weekly Mart Deliveries'" class="game-notification-container">
                    <p>You chose an affordable supermarket</p>
                </div>
                <div class="game-notification-container">
                    <p>Choose a method of transport to get around the city, including going to work if you don't live a walkable distance away.</p>
                </div>
            </div>
            <!-- Notifications for page 8 - feedback for their chosen transport choice -->
            <div v-if="manageMainGameNav.currentPage === 8" class="notifications-padding">
                <div v-if="manageTransport.chosenTransportChoice.TName === 'Uber Driving Service'" class="game-notification-container red-border">
                    <p>You chose a very expensive method of transport</p>
                </div>
                <div v-if="manageTransport.chosenTransportChoice.TName === 'Public Transport'" class="game-notification-container">
                    <p>You chose an affordable method of transport</p>
                </div>
            </div>
            <!-- phone plan choice notifications -->
            <div v-if="(manageMainGameNav.currentPage === 11) && manageNotifications.phonePlanNotificationShow === true && managePopUps.phonePlanChoice === 1" class="notifications-padding">
                <div class="game-notification-container">
                    <p>You chose a phone plan with no up front cost</p>
                </div>
            </div>
            <div v-if="(manageMainGameNav.currentPage === 11) && manageNotifications.phonePlanNotificationShow === true && managePopUps.phonePlanChoice === 2" class="notifications-padding">
                <div class="game-notification-container">
                    <p>You chose a phone plan with a low monthly cost</p>
                </div>
            </div>
            <div v-if="(manageMainGameNav.currentPage === 11) && manageNotifications.phonePlanNotificationShow === true && managePopUps.phonePlanChoice === 3" class="notifications-padding">
                <div class="game-notification-container red-border">
                    <p>You chose a phone plan with a high up front cost</p>
                </div>
            </div>
            <!-- Emergency fund notifications -->
            <div v-if="(manageMainGameNav.currentPage === 11) && manageNotifications.emergencyFundNotificationShow === true && manageEmergencyFund.chosenEmergencyFundChoice.EmergFName === 'High Interest Savings Account'" class="notifications-padding">
                <div class="game-notification-container">
                    <p>Your emergency fund is accessible and has a high interest rate</p>
                </div>
            </div>
            <div v-if="(manageMainGameNav.currentPage === 11) && manageNotifications.emergencyFundNotificationShow === true && manageEmergencyFund.chosenEmergencyFundChoice.EmergFName === '1 Year Fixed Rate Bond Account'" class="notifications-padding">
                <div class="game-notification-container red-border">
                    <p>Your emergency fund cannot be accessed for a year. You never know when an emergency will occur.</p>
                </div>
            </div>
            <div v-if="(manageMainGameNav.currentPage === 11) && manageNotifications.emergencyFundNotificationShow === true && manageEmergencyFund.chosenEmergencyFundChoice.EmergFName === 'Regular Savings Account'" class="notifications-padding">
                <div class="game-notification-container red-border">
                    <p>You missed out on an account for your emergency fund with a higher interest rate</p>
                </div>
            </div>
            <!-- income streams notifications -->
            <div v-if="(manageMainGameNav.currentPage === 11) && manageNotifications.incomeStreamsNotificationShow === true && manageIncomeStreams.chosenIncomeStreamChoice.ISname === 'Open Online Store'" class="notifications-padding">
                <div class="game-notification-container">
                    <p>You set up your online store '{{ manageIncomeStreams.onlineStoreName }}'</p>
                </div>
            </div>
            <div v-if="(manageMainGameNav.currentPage === 11) && manageNotifications.incomeStreamsNotificationShow === true && manageIncomeStreams.chosenIncomeStreamChoice.ISname === 'Start a podcast'" class="notifications-padding">
                <div class="game-notification-container">
                    <p>Your podcast '{{ manageIncomeStreams.podcastName }}' is now live</p>
                </div>
            </div>
            <div v-if="(manageMainGameNav.currentPage === 11) && manageNotifications.incomeStreamsNotificationShow === true && manageIncomeStreams.chosenIncomeStreamChoice.ISname === 'Part Time Bar Work'" class="notifications-padding">
                <div class="game-notification-container">
                    <p>You started part time bar work at {{ manageIncomeStreams.barChoiceName }}</p>
                </div>
            </div>
            <div v-if="(manageMainGameNav.currentPage === 11) && manageNotifications.incomeStreamsNotificationShow === true && manageIncomeStreams.chosenIncomeStreamChoice.ISname === 'Post on Social Media'" class="notifications-padding">
                <div class="game-notification-container">
                    <p>You started posting on social media on your account '@{{ manageIncomeStreams.socialMediaUsername }}'</p>
                </div>
            </div>
            <div v-if="(manageMainGameNav.currentPage === 11) && manageNotifications.incomeStreamsNotificationShow === true && manageIncomeStreams.chosenIncomeStreamChoice.ISname === 'Do freelance Work Online'" class="notifications-padding">
                <div class="game-notification-container">
                    <p>You started online {{ manageIncomeStreams.freelanceChosenSkill }} work</p>
                </div>
            </div>
            <!-- House Deposit Notifications -->
            <div v-if="(manageMainGameNav.currentPage === 11) && manageNotifications.houseDepositNotificationShow === true && manageHouseDeposit.chosenHouseDepositChoice === 1" class="notifications-padding">
                <div class="game-notification-container">
                    <p>You chose a house deposit option with a great bonus</p>
                </div>
            </div>
            <div v-if="(manageMainGameNav.currentPage === 11) && manageNotifications.houseDepositNotificationShow === true && manageHouseDeposit.chosenHouseDepositChoice === 2" class="notifications-padding">
                <div class="game-notification-container">
                    <p>You chose a house deposit option with a good bonus</p>
                </div>
            </div>
            <div v-if="(manageMainGameNav.currentPage === 11) && manageNotifications.houseDepositNotificationShow === true && manageHouseDeposit.chosenHouseDepositChoice === 3" class="notifications-padding">
                <div class="game-notification-container red-border">
                    <p>You missed out on great perks for your house deposit account</p>
                </div>
            </div>
            <!-- Investment portfolio notifications -->
            <div v-if="((manageMainGameNav.currentPage === 11) || (manageMainGameNav.currentPage === 17)) && manageNotifications.investmentBuyStockNotificationShow === true" class="notifications-padding">
                <div class="game-notification-container red-border">
                    <p>You invested in a stock which has been consistently declining in value</p>
                </div>
            </div>
            <!-- Holiday Choice Notifications -->
            <div v-if="(manageMainGameNav.currentPage === 11) && manageNotifications.holidayChoiceNotificationShow === true && managePopUps.holidayChoice === 1" class="notifications-padding">
                <div class="game-notification-container red-border">
                    <p>You chose a very expensive holiday</p>
                </div>
            </div>
            <div v-if="(manageMainGameNav.currentPage === 11) && manageNotifications.holidayChoiceNotificationShow === true && managePopUps.holidayChoice === 2" class="notifications-padding">
                <div class="game-notification-container">
                    <p>You chosen a cheaper option for your holiday</p>
                </div>
            </div>
            <div v-if="(manageMainGameNav.currentPage === 11) && manageNotifications.holidayChoiceNotificationShow === true && managePopUps.holidayChoice === 3" class="notifications-padding">
                <div class="game-notification-container">
                    <p>You chose an affordable holiday</p>
                </div>
            </div>
            <!-- Investment Opportunity Pop Ups -->
            <div v-if="manageNotifications.investmentOpNotificationShow === true && manageMoney.chosenToTakeInvestment === true" class="notifications-padding">
                <div class="game-notification-container red-border">
                    <p>That was a lot of money to spend on a situation with an unknown outcome</p>
                </div>
            </div>
            <div v-if="manageNotifications.investmentOpNotificationShow === true && manageMoney.chosenToTakeInvestment === false" class="notifications-padding">
                <div class="game-notification-container">
                    <p>You politely declined. You need to know more before giving away a large sum like that.</p>
                </div>
            </div>

            <!-- Broken Laptop Pop Up Notifications -->
            <div v-if="manageNotifications.brokenLaptopNotificationShow === true && managePopUps.brokenLaptopChoice === 1" class="notifications-padding">
                <div class="game-notification-container">
                    <p>Your emergency fund is for situations like this</p>
                </div>
            </div>
            <div v-if="manageNotifications.brokenLaptopNotificationShow === true && managePopUps.brokenLaptopChoice === 2" class="notifications-padding">
                <div class="game-notification-container red-border">
                    <p>Your emergency fund is for situations like this</p>
                </div>
            </div>
            <!-- Bank balance went below zero -->
            <div v-if="manageNotifications.negativeBalanceNotificationShow === true" class="notifications-padding">
                <div class="game-notification-container red-border">
                    <p>Your bank balance went below zero!</p>
                </div>
            </div>
            <!-- Bills payment notifications -->
            <div v-if="(manageGameTimer.countdown <= 10) && (manageMoney.billsLate === false) && (manageMoney.billsPaid === manageGameTimer.monthsPassed)" class="notifications-padding">
                <div class="game-notification-container">
                    <p>Your bill payment is coming up!</p>
                </div>
            </div>
            <div v-if="(manageMoney.billsLate === true)" class="notifications-padding">
                <div class="game-notification-container red-border">
                    <p>Your bills are late!</p>
                </div>
            </div>
            <div v-if="(manageMoney.billsPaidLateNotif === true)" class="notifications-padding">
                <div class="game-notification-container red-border">
                    <p>You paid your bills late!</p>
                </div>
            </div>
        </div>
        <!-- Buttons for the first goal - pay bills on time -->
        <div v-if="(manageGameTimer.countdown <= 10) && (manageMoney.billsPaid === manageGameTimer.monthsPassed) && (manageMoney.billsLate === false) && (manageGoals.currentGoal === 1)" class="pay-monthly-outgoings-container">
            <button @click="manageSound.goalCompleted(), manageMoney.payMonthlyOutgoings(), manageGoals.completedGoal(), manageBarometer.increaseScore(3), manageMoney.checkIfBankBalanceNegative()">Pay Bills</button>
        </div>
        <div v-if="(manageMoney.billsLate === true) && (manageGoals.currentGoal === 1)" class="pay-monthly-outgoings-container bills-late-button">
            <button @click="manageMoney.payMonthlyOutgoings(), manageMoney.payLateBill(), manageMoney.checkIfBankBalanceNegative()">Pay Bills</button>
        </div>
        <div v-if="(manageGameTimer.countdown > 10) && (manageMoney.billsPaid === manageGameTimer.monthsPassed) && (manageMoney.billsLate === false) && (manageGoals.currentGoal === 1)" class="pay-monthly-outgoings-container pay-monthly-inactive">
            <button>Pay Bills</button>
        </div>

        <!-- Buttons for the rest of gameplay - paying bills on time -->
        <div v-if="(manageGameTimer.countdown <= 10) && (manageMoney.billsPaid === manageGameTimer.monthsPassed) && (manageMoney.billsLate === false) && (manageGoals.currentGoal > 1)" class="pay-monthly-outgoings-container">
            <button @click="manageMoney.payMonthlyOutgoings(), manageBarometer.increaseScore(2), manageMoney.checkIfBankBalanceNegative()">Pay Bills</button>
        </div>
        <div v-if="(manageMoney.billsLate === true) && (manageGoals.currentGoal > 1)" class="pay-monthly-outgoings-container bills-late-button">
            <button @click="manageMoney.payMonthlyOutgoings(), manageMoney.payLateBill(), manageMoney.checkIfBankBalanceNegative()">Pay Bills</button>
        </div>
        <div v-if="(manageGameTimer.countdown > 10) && (manageMoney.billsPaid === manageGameTimer.monthsPassed) && (manageMoney.billsLate === false) && (manageGoals.currentGoal > 1)" class="pay-monthly-outgoings-container pay-monthly-inactive">
            <button>Pay Bills</button>
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
            showNotification: true,
        }
    },
    watch: {
        currentPageVar(newValue, oldValue) {
            if(newValue !== oldValue) {
                console.log("watched")
            }
        }
    },
}
</script>