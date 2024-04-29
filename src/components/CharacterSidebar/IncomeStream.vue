<!-- Template for displaying the home the player has chosen to live

The parent of this component:
- Character Stats Sidebar

-->
<script setup>
    // import stores
    import { useIncomeStreamsChoicesStore } from '../../store/MainGameChoicesStore'
    import { useMainGameplayNavigationStore } from '../../store/MainGameChoicesStore.js'
    import { useMoneyManageStore } from '../../store/MoneyStore.js'
    const manageIncomeStream = useIncomeStreamsChoicesStore()
    const manageMainGameNav = useMainGameplayNavigationStore()
    const manageMoney = useMoneyManageStore()

    
</script>
<template>
    <div className="characterstats-set livingstatsdisplay">
        <h4>Extra Income Stream:</h4>
        <!--Use values from the store -->
        <div class="incomestream-sidebar-type">
            <p v-if="manageIncomeStream.chosenIncomeStreamChoice.ISidentifier === 1"><font-awesome-icon icon="fa-solid fa-shop" /> {{ manageIncomeStream.onlineStoreName }}</p>
            <p v-if="manageIncomeStream.chosenIncomeStreamChoice.ISidentifier === 2"><font-awesome-icon icon="fa-solid fa-microphone" /> {{ manageIncomeStream.podcastName }}</p>
            <p v-if="manageIncomeStream.chosenIncomeStreamChoice.ISidentifier === 3"><font-awesome-icon icon="fa-solid fa-martini-glass-citrus" /> {{ manageIncomeStream.barChoiceName }}</p>
            <p v-if="manageIncomeStream.chosenIncomeStreamChoice.ISidentifier === 4"><font-awesome-icon icon="fa-solid fa-at" /> {{ manageIncomeStream.socialMediaUsername }}</p>
            <p v-if="manageIncomeStream.chosenIncomeStreamChoice.ISidentifier === 5"><font-awesome-icon icon="fa-solid fa-computer" /> {{ manageIncomeStream.freelanceChosenSkill }}</p>
        </div>
        <div class="livingstats-display-rent-commute-cost-container">
            <div class="livingstats-rent-display">
                <p>Monthly Income:</p>
                <p>Monthly Costs:</p>
            </div>
            <div class="livingstats-commute-display">
                <p>£{{manageIncomeStream.chosenIncomeStreamChoice.ISmonthlyincome}}</p>
                <p>£{{manageIncomeStream.chosenIncomeStreamChoice.ISmonthlycost}}</p>
            </div>
        </div>
        <button @click="manageMainGameNav.navigateToPage(14), manageMoney.decreaseMonthlyOutGoings(Number(manageIncomeStream.chosenIncomeStreamChoice.ISmonthlycost))" className="moveout-button">Change</button>
        <hr />
    </div>
</template>
<script>
// Export component data
export default {
    name: 'IncomeStreamSidebar',
}
</script>