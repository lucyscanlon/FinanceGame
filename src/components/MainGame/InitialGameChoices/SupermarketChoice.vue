<!-- Template containing the four supermarket options and the button for the player to confirm their choice

The parent of this component:
- Main Game

Components:
- Supermarket Choice Flexbox

-->
<script setup>
    // import stores 
    import { supermarketChoiceStore } from '../../../store/InitialGameChoicesStore'
    import { useMainGameplayNavigationStore } from '../../../store/MainGameChoicesStore.js'
    import { useMoneyManageStore } from '../../../store/MoneyStore.js'
    
    const manageMainGameNav = useMainGameplayNavigationStore()
    const manageSupermarket = supermarketChoiceStore()
    const manageMoney = useMoneyManageStore()
</script>
<template>
    <div class="supermarketchoice-display-wrapper">
        <h1>Choose a supermarket or food service to purchase your groceries</h1>
        <p class="supermarketchoice-description">Choose from one of the options below and press the 'shop here' button to confirm your choice.</p>
        <div class="supermarketchoice-flex-wrapper">
            <!-- Use props to pass data to the component -->
            <SupermarketChoiceFlexBox :SupermarketIdentifier=1 SupermarketName="Saver Superstore" SupermarketDesc="An affordable supermarket with both budget and luxury products." :SupermarketCost=80 SupermarketTransportCost="+" SupermarketPerk="10% off with loyalty card."></SupermarketChoiceFlexBox>
            <SupermarketChoiceFlexBox :SupermarketIdentifier=2 SupermarketName="Gourmet Grove" SupermarketDesc="A luxury organic supermarket with high prices." :SupermarketCost=150 SupermarketTransportCost="+" SupermarketPerk="Specialises in luxury cuisine."></SupermarketChoiceFlexBox>
            <SupermarketChoiceFlexBox :SupermarketIdentifier=3 SupermarketName="Swiftbite Delivery" SupermarketDesc="A food delivery app delivering from local restaurants." :SupermarketCost=300 SupermarketTransportCost="0" SupermarketPerk="Offers a wide range of cuisines."></SupermarketChoiceFlexBox>
            <SupermarketChoiceFlexBox :SupermarketIdentifier=4 SupermarketName="Weekly Mart Deliveries" SupermarketDesc="A weekly grocery delivery service with budget prices." :SupermarketCost=100 SupermarketTransportCost="0" SupermarketPerk="Free delivery for members."></SupermarketChoiceFlexBox>
        </div>
        <!-- Call methods from store on click -->
        <div @click="(manageSupermarket.currentlySelectedSupermarketInfo != '') ? manageMainGameNav.navigateToPage(7) : '', manageSupermarket.confirmSupermarketChoice(), manageMoney.increaseMonthlyOutGoings(manageSupermarket.chosenSupermarketInfo.SMCost)" class="supermarketchoice-button-wrap">
                    <button>Shop here</button>
         </div>
    </div>
</template>
<script>
    // import stores
    import SupermarketChoiceFlexBox from './SupermarketChoiceFlexBox.vue';

    // export component data
    export default {
        name: 'SupermarketChoiceDisplay', 
        components: {
            SupermarketChoiceFlexBox,
        }
}

</script>