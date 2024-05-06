<!-- Template for display supermarket option display

The parent of this component:
- Supermarket Choice

The children of this component:
- None

-->
<script setup>
    // import stores
    import { transportChoiceStore } from '../../../store/InitialGameChoicesStore.js';
    import { useMoneyManageStore, useGameTimerStore } from '../../../store/MoneyStore.js'
    import { useMainGameplayNavigationStore } from '../../../store/MainGameChoicesStore.js'
    import { useSoundEffectsStore } from '../../../store/soundEffectsStore.js'

    const manageTransport = transportChoiceStore();
    const manageMoney = useMoneyManageStore()
    const useMainGameNav = useMainGameplayNavigationStore()
    const manageTimer = useGameTimerStore()
    const manageSound = useSoundEffectsStore()

</script>
<template>
    <div class="supermarketchoice-display-wrapper transportdisplay">
        <h1>Choose a method of transport</h1>
        <p class="supermarketchoice-description">Choose from one of the options below.</p>
        <div class="transportchoice-flexbox-wrap">
            <TransportChoicesFlex TransportName="Uber Driving Service" TransportDesc="A mobile app providing a private taxi service." TransportPerk="Private Driver" TransportCost="300" TransportCommuteCost="100" TransportGroceryCost="50" :TransportDiscount=0 :TransportIdentifier=1></TransportChoicesFlex>
            <TransportChoicesFlex TransportName="Public Transport" TransportDesc="A well connected public transport service." TransportPerk="Under 25s get 33% off" TransportCost="150" TransportCommuteCost="40" TransportGroceryCost="15" :TransportDiscount=33 :TransportIdentifier=2></TransportChoicesFlex>
        </div>
        <!-- play sound, confirm chosen transport choice, increase monthly outgoings  -->
        <div v-if="useMainGameNav.currentPage === 7" @click="manageSound.playClickSound(), manageTransport.confirmChosenTransport(), (manageTransport.currentlySelectedTransportChoice != '') ? (useMainGameNav.navigateToPage(8), manageMoney.increaseMonthlyOutGoings(manageTransport.chosenTransportChoice.TTotal)) : ''" class="supermarketchoice-button-wrap transport-choice-button">
                    <button>Choose this method</button>
        </div>
        <!-- play sound, confirm chosen transport choice, increase monthly outgoings, start countdown  -->
        <div v-if="useMainGameNav.currentPage === 21" @click="manageSound.playClickSound(), manageTransport.confirmChosenTransport(), (manageTransport.currentlySelectedTransportChoice != '') ? (useMainGameNav.navigateToPage(11), manageMoney.increaseMonthlyOutGoings(manageTransport.chosenTransportChoice.TTotal)) : '', manageTimer.startCountdown()" class="supermarketchoice-button-wrap transport-choice-button">
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