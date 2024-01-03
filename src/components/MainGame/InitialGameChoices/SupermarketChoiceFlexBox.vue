<!-- Template containing the layout and information for each supermarket choice

The parent of this component:
- Supermarket Choice

-->
<script setup>
    // import store 
    import { supermarketChoiceStore } from '../../../store/InitialGameChoicesStore'
    const manageSupermarket = supermarketChoiceStore()
</script>
<template>
    <!-- Add a class if clicked, pass supermarket info to the store -->
    <div v-bind:class="(manageSupermarket.selectedActiveSupermarket === SupermarketIdentifier) ? 'supermarket-active' : ''" @click="manageSupermarket.changeSelectedSupermarketNumber(SupermarketIdentifier), manageSupermarket.updateCurrentlyChosenSupermarket(SupermarketName, SupermarketDesc, SupermarketCost, SupermarketTransportCost)" class="supermarketchoice-box">
                <div class="supermarketchoice-heading-wrap">
                    <h4>{{ SupermarketName }}</h4>
                    <p>{{SupermarketDesc}}</p>
                </div>
                <div class="supermarket-choice-perk">
                    <p><span class="colour-pink">Perk: </span>{{ SupermarketPerk }}</p>
                </div>
                <div class="supermarketchoice-costs-wrap">
                    <p><span class="colour-pink">Cost:</span> £{{SupermarketCost}}pm</p>
                    <p><span class="colour-pink">Transport Cost:</span> £{{ SupermarketTransportCost }}</p>
                </div>
            </div>
</template>
<script>
    // export component data
    export default {
        name: 'SupermarketChoiceFlexBox', 
        props: {
            SupermarketName: String,
            SupermarketDesc: String,
            SupermarketCost: Number,
            SupermarketTransportCost: String,
            SupermarketIdentifier: Number,
            SupermarketPerk: String,
        }
   }
</script>
