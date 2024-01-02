<!-- Template for the main game container 

Elements that will be inside this container include:
- The map display

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

import { useLivingOptionsStore } from '../../store/LivingOptionsStore'

const livingOptions = useLivingOptionsStore()

import { useMoneyManageStore } from '../../store/store.js'

const manageMoney = useMoneyManageStore()

</script>

<script>

import MapDisplay from './MapLayout.vue';
import RentInformationDisplay from './RentIntroductionInfo.vue';
import salaryAndTaxInfoDisplay from './YouHaveAJobOffer.vue';
import SupermarketChoiceDisplay from './SupermarketChoice.vue';
import SupermarketInfoDisplay from './SupermarketInfo.vue';
import TransportMethodDisplay from './TransportOptionsDisplay.vue';

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