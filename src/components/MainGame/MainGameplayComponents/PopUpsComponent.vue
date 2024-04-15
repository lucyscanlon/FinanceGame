<template>
    <div class="popups-main-container-wrapper">
        <PhoneBillPopUp v-if="managePopUps.currentPopUp === 1"></PhoneBillPopUp>
        <WorkDrinksPopUp v-if="managePopUps.currentPopUp === 2"></WorkDrinksPopUp>
        <InvestmentOpportunityPopUp v-if="managePopUps.currentPopUp === 3"></InvestmentOpportunityPopUp>
   
    </div>
</template>
<script setup>

import PhoneBillPopUp from '../MainGameplayComponents/PopUps/PhoneBill.vue'
import WorkDrinksPopUp from '../MainGameplayComponents/PopUps/WorkDrinks.vue'
import InvestmentOpportunityPopUp from '../MainGameplayComponents/PopUps/InvestmentOpportunity.vue'
import {usePopUpStore} from '../../../store/MainGameChoicesStore';

const managePopUps = usePopUpStore();

</script>
<script>

export default {
    name: 'PopUpComponent',
    components: {
        PhoneBillPopUp,
        WorkDrinksPopUp,
        InvestmentOpportunityPopUp,
    }
}

</script>