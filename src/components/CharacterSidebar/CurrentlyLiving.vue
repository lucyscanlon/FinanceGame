<!-- Template for displaying the currently living information in the sidebar

The parent of this component:
- CharacterStatsSidebar

The children of this component:
- None

-->
<script setup>
    // import stores
    import { registerLivingOptionChoiceStore } from '../../store/InitialGameChoicesStore'
    import { useMainGameplayNavigationStore } from '../../store/MainGameChoicesStore.js'
    import { useMoneyManageStore } from '../../store/MoneyStore.js'
    const registerLivingChoice = registerLivingOptionChoiceStore()
    const manageMainGameNav = useMainGameplayNavigationStore()
    const manageMoney = useMoneyManageStore()
    
</script>
<template>
    <div className="characterstats-set livingstatsdisplay">
        <h4>Living:</h4>
        <!--Display values from pinia store -->
        <p>{{registerLivingChoice.selectedLivingOptionInfo.street}}, <br/> {{registerLivingChoice.selectedLivingOptionInfo.district}}</p>
        <div class="livingstats-display-rent-commute-cost-container">
            <div class="livingstats-rent-display">
                <p>Rent:</p>
                <p>Commute Costs:</p>
            </div>
            <div class="livingstats-commute-display">
                <p>£{{registerLivingChoice.selectedLivingOptionInfo.rentPrice}}pm</p>
                <p>£{{registerLivingChoice.selectedLivingOptionInfo.commutePrice}}</p>
            </div>
        </div>
        <!-- If players move out then their deposit is given back, takes user back to map choice display, decreases bills until they next decide where to live -->
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