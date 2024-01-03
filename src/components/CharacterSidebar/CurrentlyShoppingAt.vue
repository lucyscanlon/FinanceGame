<!-- Template for displaying the supermarket option the player has chosen

The parent of this component:
- Character Stats Sidebar

-->
<script setup>
    // import stores
    import { supermarketChoiceStore } from '../../store/InitialGameChoicesStore'
    const manageSupermarket = supermarketChoiceStore()
</script>
<template>
    <div className="characterstats-set currentlyshoppingatdisplay">
        <h4>Shopping At:</h4>
        <!-- Use values from store -->
        <h5>{{manageSupermarket.chosenSupermarketInfo.SMName}}</h5>
        <p>{{manageSupermarket.chosenSupermarketInfo.SMDesc}}</p>
        <h5><span className="colour-pink">Cost: </span>£{{ manageSupermarket.chosenSupermarketInfo.SMCost }}</h5>
        <h5 class="commute-cost"><span className="colour-pink">Transport Cost: </span>£{{ manageSupermarket.chosenSupermarketInfo.SMTCost }}</h5>
        <div class="currentlyshopping-wrap">
            <button className="moveout-button">Change</button>
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