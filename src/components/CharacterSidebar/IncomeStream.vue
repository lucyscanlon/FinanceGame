<!-- Template for displaying the home the player has chosen to live

The parent of this component:
- Character Stats Sidebar

-->
<script setup>
    // import stores
    import { useIncomeStreamsChoicesStore } from '../../store/InitialGameChoicesStore'
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
        <p>{{registerLivingChoice.selectedLivingOptionInfo.street}}, <br/> {{registerLivingChoice.selectedLivingOptionInfo.district}}</p>
        <div class="livingstats-display-rent-commute-cost-container">
            <div class="livingstats-rent-display">
                <p>Monthly Income:</p>
                <p>Monthly Costs:</p>
            </div>
            <div class="livingstats-commute-display">
                <p>£{{manageIncomeStream.chosenIncomeStreamChoice.ISmonthlyincome}}pm</p>
                <p>£{{manageIncomeStream.chosenIncomeStreamChoice.ISmonthlycost}}</p>
            </div>
        </div>
        <button @click="manageMainGameNav.navigateToPage(19), manageMoney.decreaseMonthlyOutGoings(Number(registerLivingChoice.selectedLivingOptionInfo.rentPrice)), manageMoney.increasePocketMoney(registerLivingChoice.selectedLivingOptionInfo.depositPrice)" className="moveout-button">Move Out</button>
        <hr />
    </div>
</template>
<script>
// Export component data
export default {
    name: 'CurrentlyLivingDisplay',
}
</script>