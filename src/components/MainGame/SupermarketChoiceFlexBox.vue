<script setup>
import { supermarketChoiceStore } from '../../store/LivingOptionsStore'

const manageSupermarket = supermarketChoiceStore()

</script>

<template>
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
