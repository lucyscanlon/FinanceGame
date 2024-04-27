<!-- Template for displaying the supermarket option the player has chosen

The parent of this component:
- Character Stats Sidebar

-->
<script setup>
    // import stores
    import { supermarketChoiceStore } from '../../store/InitialGameChoicesStore'
    import { useMainGameplayNavigationStore } from '../../store/MainGameChoicesStore.js'

    const manageSupermarket = supermarketChoiceStore()
    const manageMainGameNav = useMainGameplayNavigationStore()
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
        <div class="currentlyshopping-wrap">
            <button @click="manageMainGameNav.navigateToPage(20)" className="moveout-button">Change</button>
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