<template>
    <div v-if="useMainGameplayNav.mainGameComponentsUnlocked > 0" class="maingameplay-flex-container">
        <PayBillsGoal v-if="manageGameGoals.currentGoal === 1"></PayBillsGoal>
        <FurnitureFundGoal v-if="manageGameGoals.currentGoal === 2"></FurnitureFundGoal>
        <EmergencyFundGoal v-if="manageGameGoals.currentGoal === 3"></EmergencyFundGoal>
        <AppliancesFundGoal v-if="manageGameGoals.currentGoal === 4"></AppliancesFundGoal>
        <HolidayFundGoal v-if="manageGameGoals.currentGoal === 5"></HolidayFundGoal>
        <InvestmentGoal  v-if="manageGameGoals.currentGoal === 6"></InvestmentGoal>
        <HouseDepositGoal v-if="manageGameGoals.currentGoal === 7"></HouseDepositGoal>
    </div>
</template>
<script setup>

import FurnitureFundGoal from './GameGoals/FurnitureFund'
import PayBillsGoal from './GameGoals/PayBillsGoal'
import EmergencyFundGoal from './GameGoals/EmergencyFund.vue'
import AppliancesFundGoal from './GameGoals/AppliancesFund.vue'
import HolidayFundGoal from './GameGoals/HolidayFund.vue'
import InvestmentGoal from './GameGoals/InvestmentGoal.vue'
import HouseDepositGoal from './GameGoals/HouseDepositGoal.vue'

import { useMainGameplayNavigationStore } from '../../../store/MainGameChoicesStore.js'
import { useGoalsStore } from '../../../store/MainGameChoicesStore.js'

const useMainGameplayNav = useMainGameplayNavigationStore();
const manageGameGoals = useGoalsStore();

</script>
<script>

export default {
    name: 'CurrentGoalInteractiveComponent',
    components: {
        FurnitureFundGoal,
        PayBillsGoal,
        EmergencyFundGoal,
        AppliancesFundGoal,
        HolidayFundGoal,
        InvestmentGoal,
        HouseDepositGoal,
    }, 
}

</script>