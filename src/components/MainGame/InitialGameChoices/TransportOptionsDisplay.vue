<!-- Template containing the two transports options and the button for the player to confirm their choice

The parent of this component:
- Main Game

Components:
- Transport Options Flexbox

-->
<script setup>
    // import stores
    import { useLivingOptionsStore } from '../../../store/InitialGameChoicesStore'
    const livingOptions = useLivingOptionsStore()

    import { transportChoiceStore } from '../../../store/InitialGameChoicesStore.js';
    const manageTransport = transportChoiceStore();

    import { useMoneyManageStore } from '../../../store/MoneyStore.js'
    const manageMoney = useMoneyManageStore()

    import { useMainGameplayNavigationStore } from '../../../store/MainGameChoicesStore.js'
    const useMainGameNav = useMainGameplayNavigationStore()

</script>
<template>
    <div class="supermarketchoice-display-wrapper">
        <h1>Choose a method of transport</h1>
        <p class="supermarketchoice-description">Choose from one of the options below and press the 'choose this method' button to confirm your choice</p>
        <div class="transportchoice-flexbox-wrap">
            <TransportChoicesFlex TransportName="Uber Driving Service" TransportDesc="A mobile app providing a private taxi service." TransportPerk="Private Driver" TransportCost="300" TransportCommuteCost="100" TransportGroceryCost="50" :TransportDiscount=0 :TransportIdentifier=1></TransportChoicesFlex>
            <TransportChoicesFlex TransportName="Public Transport" TransportDesc="A well connected public transport service." TransportPerk="Under 25s get 33% off" TransportCost="150" TransportCommuteCost="40" TransportGroceryCost="15" :TransportDiscount=33 :TransportIdentifier=2></TransportChoicesFlex>
        </div>
        <!-- call store methods on click -->
        <div @click="(manageTransport.currentlySelectedTransportChoice != '') ? livingOptions.livingOptionsNextStageOfGame() : '', manageTransport.confirmChosenTransport(), manageMoney.increaseMonthlyOutGoings(manageTransport.chosenTransportChoice.TTotal), useMainGameNav.navigateToPage(1), useMainGameNav.unlockComponent()" class="supermarketchoice-button-wrap transport-choice-button">
                    <button>Choose this method</button>
         </div>
    </div> 
</template>
<script>
    // import stores
    import TransportChoicesFlex from './TransportOptionsFlexbox.vue';
    // export component data
    export default {
        name: 'TransportMethodDisplay', 
        components: {
            TransportChoicesFlex,
        }
    }
</script>