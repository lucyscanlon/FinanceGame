<!-- Template for the you have a job offer info display

Components that will be inside this container include:
- living options information display components

-->


<template>
    <div class="supermarketchoice-display-wrapper">
        <h1>Choose a supermarket or food service to purchase your groceries</h1>
        <p class="supermarketchoice-description">Choose from one of the options below and press the 'confirm selection' button.</p>
        <div class="supermarketchoice-flex-wrapper">
            <SupermarketChoiceFlexBox SupermarketName="Saver Superstore" SupermarketDesc="An affordable supermarket with both budget and luxury products." SupermarketCost="80pm" SupermarketTransportCost="+"></SupermarketChoiceFlexBox>
            <SupermarketChoiceFlexBox SupermarketName="Gourmet Grove" SupermarketDesc="A luxury organic supermarket with high prices." SupermarketCost="150pm" SupermarketTransportCost="+"></SupermarketChoiceFlexBox>
            <SupermarketChoiceFlexBox SupermarketName="Swiftbite Delivery" SupermarketDesc="A food delivery app delivering from local restaurants." SupermarketCost="300pm" SupermarketTransportCost="0"></SupermarketChoiceFlexBox>
            <SupermarketChoiceFlexBox SupermarketName="Weekly Mart Deliveries" SupermarketDesc="A weekly grocery delivery service with budget prices." SupermarketCost="100pm" SupermarketTransportCost="0"></SupermarketChoiceFlexBox>
        </div>
        <div class="supermarketchoice-button-wrap">
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