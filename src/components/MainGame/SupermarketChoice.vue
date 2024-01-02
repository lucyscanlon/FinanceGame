<!-- Template for the you have a job offer info display

Components that will be inside this container include:
- living options information display components

-->

<script setup>
    import { supermarketChoiceStore } from '../../store/LivingOptionsStore'

    const manageSupermarket = supermarketChoiceStore()

    import { useLivingOptionsStore } from '../../store/LivingOptionsStore'

    const livingOptions = useLivingOptionsStore()

    import { useMoneyManageStore } from '../../store/store.js'

    const manageMoney = useMoneyManageStore()

</script>
<template>
    <div class="supermarketchoice-display-wrapper">
        <h1>Choose a supermarket or food service to purchase your groceries</h1>
        <p class="supermarketchoice-description">Choose from one of the options below and press the 'shop here' button to confirm your choice.</p>
        <div class="supermarketchoice-flex-wrapper">
            <SupermarketChoiceFlexBox :SupermarketIdentifier=1 SupermarketName="Saver Superstore" SupermarketDesc="An affordable supermarket with both budget and luxury products." :SupermarketCost=80 SupermarketTransportCost="+" SupermarketPerk="10% off with loyalty card."></SupermarketChoiceFlexBox>
            <SupermarketChoiceFlexBox :SupermarketIdentifier=2 SupermarketName="Gourmet Grove" SupermarketDesc="A luxury organic supermarket with high prices." :SupermarketCost=150 SupermarketTransportCost="+" SupermarketPerk="Specialises in luxury cuisine."></SupermarketChoiceFlexBox>
            <SupermarketChoiceFlexBox :SupermarketIdentifier=3 SupermarketName="Swiftbite Delivery" SupermarketDesc="A food delivery app delivering from local restaurants." :SupermarketCost=300 SupermarketTransportCost="0" SupermarketPerk="Offers a wide range of cuisines."></SupermarketChoiceFlexBox>
            <SupermarketChoiceFlexBox :SupermarketIdentifier=4 SupermarketName="Weekly Mart Deliveries" SupermarketDesc="A weekly grocery delivery service with budget prices." :SupermarketCost=100 SupermarketTransportCost="0" SupermarketPerk="Free delivery for members."></SupermarketChoiceFlexBox>
        </div>
        <div @click="(manageSupermarket.currentlySelectedSupermarketInfo != '') ? livingOptions.livingOptionsNextStageOfGame() : '', manageSupermarket.confirmSupermarketChoice(), manageMoney.increaseMonthlyOutGoings(manageSupermarket.chosenSupermarketInfo.SMCost)" class="supermarketchoice-button-wrap">
                    <button>Shop here</button>
         </div>
    </div>
    
   
</template>

<script>

import SupermarketChoiceFlexBox from './SupermarketChoiceFlexBox.vue';

export default {
    name: 'SupermarketChoiceDisplay', 
    components: {
        SupermarketChoiceFlexBox,
    }
   
}

</script>