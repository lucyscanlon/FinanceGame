<!-- Template for displaying the currently shopping at info in the sidebar

The parent of this component:
- CharacterStatsSidebar

The children of this component:
- None

-->
<script setup>
    // import stores
    import { supermarketChoiceStore } from '../../store/InitialGameChoicesStore'
    import { useMainGameplayNavigationStore } from '../../store/MainGameChoicesStore.js'
    import { useMoneyManageStore } from '../../store/MoneyStore.js'

    const manageSupermarket = supermarketChoiceStore()
    const manageMainGameNav = useMainGameplayNavigationStore()
    const manageMoney = useMoneyManageStore()
</script>
<template>
    <div className="characterstats-set currentlyshoppingatdisplay">
        <h4>Shopping At:</h4>
        <!-- Use values from store -->
        <h5>{{manageSupermarket.chosenSupermarketInfo.SMName}}</h5>
        <p>{{manageSupermarket.chosenSupermarketInfo.SMDesc}}</p>
        <div class="currentlyshopping-costs-container">
            <div class="currentlyshopping-shoppingcost">
                <p>Monthly Cost:</p>
                <p>Transport Costs:</p>
            </div>
            <div class="currentlyshopping-transportcosts">
                <p>£{{ manageSupermarket.chosenSupermarketInfo.SMCost }}</p>
                <p>£{{ manageSupermarket.chosenSupermarketInfo.SMTCost }}</p>
            </div>
        </div>
        <!-- If user changes where they shop, remove the current amount from their bills -->
        <div class="currentlyshopping-wrap">
            <button @click="manageMainGameNav.navigateToPage(20), manageMoney.decreaseMonthlyOutGoings(manageSupermarket.chosenSupermarketInfo.SMCost)" className="moveout-button">Change</button>
        </div>
        <hr />
    </div>
</template>
<script>
    // export component data
    export default {
        name: 'CurrentlyShoppingAt',
    }
</script>