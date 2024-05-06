<!-- Template for pop ups component

The parent of this component:
- Main Game

The children of this component:
- PhoneBillPopUp,
- WorkDrinksPopUp,
- InvestmentOpportunityPopUp,
- InvestmentOpportunitySuccessfulPopUp,
- InvestmentOpportunityFailedPopUp,
- HolidayChoicePopUp,
- PayRisePopUp,
- brokenLaptopPopUp,
- AprilPopUp,
- newGoalPopUp,
- LISAReminderPopUp,
- FixedHouseDepositPopUp,
- FixedHouseDepositAccountUnlocked,

-->
<template>
        <PhoneBillPopUp v-if="managePopUps.currentPopUp === 1"></PhoneBillPopUp>
        <WorkDrinksPopUp v-if="managePopUps.currentPopUp === 2"></WorkDrinksPopUp>
        <InvestmentOpportunityPopUp v-if="managePopUps.currentPopUp === 3"></InvestmentOpportunityPopUp>
        <InvestmentOpportunitySuccessfulPopUp v-if="managePopUps.currentPopUp === 4"></InvestmentOpportunitySuccessfulPopUp>
        <InvestmentOpportunityFailedPopUp v-if="managePopUps.currentPopUp === 5"></InvestmentOpportunityFailedPopUp>
        <HolidayChoicePopUp v-if="managePopUps.currentPopUp === 6"></HolidayChoicePopUp>
        <PayRisePopUp v-if="managePopUps.currentPopUp === 7"></PayRisePopUp>
        <brokenLaptopPopUp v-if="managePopUps.currentPopUp === 8"></brokenLaptopPopUp>
        <newGoalPopUp v-if="managePopUps.currentPopUp === 9"></newGoalPopUp>
        <AprilPopUp v-if="managePopUps.currentPopUp === 10"></AprilPopUp>
        <LISAReminderPopUp v-if="managePopUps.currentPopUp === 11"></LISAReminderPopUp>
        <FixedHouseDepositPopUp v-if="managePopUps.currentPopUp === 12"></FixedHouseDepositPopUp>
        <FixedHouseDepositAccountUnlocked v-if="managePopUps.currentPopUp === 13"></FixedHouseDepositAccountUnlocked>
</template>
<script setup>

import PhoneBillPopUp from '../MainGameplayComponents/PopUps/PhoneBill.vue'
import WorkDrinksPopUp from '../MainGameplayComponents/PopUps/WorkDrinks.vue'
import InvestmentOpportunityPopUp from '../MainGameplayComponents/PopUps/InvestmentOpportunity.vue'
import InvestmentOpportunitySuccessfulPopUp from '../MainGameplayComponents/PopUps/InvestmentOpportunitySuccessful.vue'
import InvestmentOpportunityFailedPopUp from '../MainGameplayComponents/PopUps/InvestmentOpportunityFailed.vue'
import HolidayChoicePopUp from '../MainGameplayComponents/PopUps/HolidayChoice.vue'
import PayRisePopUp from '../MainGameplayComponents/PopUps/PayRise.vue'
import brokenLaptopPopUp from '../MainGameplayComponents/PopUps/BrokenLaptop.vue'
import AprilPopUp from '../MainGameplayComponents/PopUps/newFinancialYear.vue'
import newGoalPopUp from '../MainGameplayComponents/PopUps/NewGoalPopUp.vue'
import LISAReminderPopUp from '../MainGameplayComponents/PopUps/NewYear.vue'
import FixedHouseDepositPopUp from '../MainGameplayComponents/PopUps/FixedHouseDeposit.vue'
import FixedHouseDepositAccountUnlocked from '../MainGameplayComponents/PopUps/FixedRateAccountUnlocked.vue'
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
        InvestmentOpportunitySuccessfulPopUp,
        InvestmentOpportunityFailedPopUp,
        HolidayChoicePopUp,
        PayRisePopUp,
        brokenLaptopPopUp,
        //NewGoalPopUp,
        AprilPopUp,
        newGoalPopUp,
        LISAReminderPopUp,
        FixedHouseDepositPopUp,
        FixedHouseDepositAccountUnlocked,
    }
}

</script>