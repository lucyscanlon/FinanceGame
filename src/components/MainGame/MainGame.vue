<!-- Component which holds all main elements of game play. 

Components:

- You have a job offer
- Rent information display
- Map layout
- Supermarket Choice 
- Transports Options Display

-->
<template>
    <div class="maingame-wrapper">
        <div class="gameplay-topbanner-wrapper">
            <div class="current-date-wrapper">
                <p>Current Date: <span class="colour-white">01/01/2023</span></p>
            </div>
            <div class="payday-date-wrapper">
                <p>Payday: <span class="colour-white">The last day of the month</span></p>
            </div>
        </div>
        <!-- display component dependant on the stage of game - located in the initialgamechoicesstore-->
        <salaryAndTaxInfoDisplay v-if="livingOptions.livingOptionsGameStage === 0"></salaryAndTaxInfoDisplay>
        <RentInformationDisplay v-if="livingOptions.livingOptionsGameStage === 1"></RentInformationDisplay>
        <MapDisplay v-if="livingOptions.livingOptionsGameStage === 2"></MapDisplay>
        <SupermarketInfoDisplay v-if="livingOptions.livingOptionsGameStage === 3"></SupermarketInfoDisplay>
        <SupermarketChoiceDisplay v-if="livingOptions.livingOptionsGameStage === 4"></SupermarketChoiceDisplay>
        <TransportMethodDisplay v-if="livingOptions.livingOptionsGameStage === 5"></TransportMethodDisplay>
        <div className="gameplay-bottombanner-wrapper">
            <div className="monthly-outgoings-wrapper">
                <p>Total monthly outgoings: <span className="colour-white">£{{ manageMoney.monthlyOutGoingsSum }}</span></p>
             </div>
        </div>
    </div>
</template>
<script setup>
    // import stores
    import { useLivingOptionsStore } from '../../store/InitialGameChoicesStore'
    const livingOptions = useLivingOptionsStore()

    import { useMoneyManageStore } from '../../store/MoneyStore.js'
    const manageMoney = useMoneyManageStore()
</script>
<script>
    // import components
    import MapDisplay from './InitialGameChoices/MapLayout.vue'
    import RentInformationDisplay from './InformationPages/RentIntroductionInfo.vue'
    import salaryAndTaxInfoDisplay from './InformationPages/YouHaveAJobOffer.vue';
    import SupermarketChoiceDisplay from './InitialGameChoices/SupermarketChoice.vue';
    import SupermarketInfoDisplay from './InformationPages/SupermarketInfo.vue';
    import TransportMethodDisplay from './InitialGameChoices/TransportOptionsDisplay.vue';

// export component data
export default {
    name: 'MainGameWrapper',
    components: {
        MapDisplay,
        RentInformationDisplay,
        salaryAndTaxInfoDisplay,
        SupermarketChoiceDisplay,
        SupermarketInfoDisplay,
        TransportMethodDisplay,
    }
}
</script>