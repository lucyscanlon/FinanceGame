<!-- Template for the you have a job offer info display

Components that will be inside this container include:
- living options information display components

-->

<script setup>

    import { useLivingOptionsStore } from '../../store/LivingOptionsStore'

const livingOptions = useLivingOptionsStore()

</script>
<template>
    <div class="supermarketchoice-display-wrapper">
        <h1>Choose a method of transport</h1>
        <p class="supermarketchoice-description">Choose from one of the options below and press the 'choose this method' button to confirm your choice</p>
        <div class="transportchoice-flexbox-wrap">
            <TransportChoicesFlex TransportName="Uber Driving Service" TransportDesc="A mobile app providing a private taxi service." TransportPerk="Private Driver" TransportCost="300" TransportCommuteCost="100" TransportGroceryCost="50" TransportDiscount="0"></TransportChoicesFlex>
            <TransportChoicesFlex TransportName="Public Transport" TransportDesc="A well connected public transport service." TransportPerk="Under 25s get 33% off" TransportCost="150" TransportCommuteCost="40" TransportGroceryCost="15" TransportDiscount="50"></TransportChoicesFlex>
        </div>
        <div @click="livingOptions.livingOptionsNextStageOfGame()" class="supermarketchoice-button-wrap transport-choice-button">
                    <button>Choose this method</button>
         </div>
    </div>
    
   
</template>

<script>

import TransportChoicesFlex from './TransportOptionsFlexbox.vue';

export default {
    name: 'TransportMethodDisplay', 
    components: {
        TransportChoicesFlex,
    }
   
}

</script>