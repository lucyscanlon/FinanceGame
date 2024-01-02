<!-- Template for the currently living display component -->
<script setup>
import { supermarketChoiceStore } from '../../store/LivingOptionsStore'

const manageSupermarket = supermarketChoiceStore()

</script>

<template>
    <div className="characterstats-set currentlyshoppingatdisplay">
        <h4>Shopping At:</h4>
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
export default {
    name: 'CurrentlyShoppingAt',
}
</script>