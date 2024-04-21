<template>
    <div class="maingameplay-flex-container">
        <div v-if="useMainGameplayNav.mainGameComponentsUnlocked > 2" class="emergencyfund-content-container">
            <div class="pension-interactive-title-container emergencyfund-interactive-title">
            <h1><font-awesome-icon icon="fa-solid fa-triangle-exclamation" />Emergency Fund</h1>
            <p>{{ manageEmergencyFund.chosenEmergencyFundChoice.EmergFName }}</p>
            <p>Interest: {{manageEmergencyFund.chosenEmergencyFundChoice.EmergFInterest}}% <span v-bind:class="(manageEmergencyFund.emergencyFundGoal > manageMoney.emergencyFundCurrentTotal) ? 'colour-red' : 'colour-green'" class="emergencyfund-goal-container">Goal: £{{ manageEmergencyFund.emergencyFundGoal}}</span></p>
        </div>
        <div class="emergencyfund-interactive-info-total-container">
            <div class="currentaccount-total-text-container">
                <p>Current Total:</p>
            </div>
            <div class="currentaccount-total-number-container">
                <p>£{{ Number(manageMoney.emergencyFundCurrentTotal).toFixed(2) }}</p>
            </div>
        </div>
        <div class="currentaccount-addwithdraw-title-container">
            <p>Change amount:</p>
        </div>
        <div class="emergencyfund-addwithdraw-box-container">
            <div class="emergencyfund-addwithdraw-change">
                <form>
                    <input type="number" placeholder="__" v-model="amountToChange">
                </form>
            </div>
        </div>
        <div class="emergencyfund-add-withdraw-buttons">
            <button @click="manageMoney.addToEmergencyFundTotal(amountToChange), rerenderComponent()">Add</button>
            <span v-if="(manageEmergencyFund.chosenEmergencyFundChoice.EmergFDeposit !== '1000')" class="emergencyfund-withdraw-button"><button @click="manageMoney.withdrawFromEmergencyFundTotal(amountToChange), rerenderComponent()">Withdraw</button></span>
            <span v-if="(manageEmergencyFund.chosenEmergencyFundChoice.EmergFDeposit === '1000') && (manageGameTimer.emergencyFundFixedRateUnlocked === false)" class="emergencyfund-withdraw-button-inactive"><button>Withdraw</button></span>
            <span v-if="(manageEmergencyFund.chosenEmergencyFundChoice.EmergFDeposit === '1000') && (manageGameTimer.emergencyFundFixedRateUnlocked === true)" class="emergencyfund-withdraw-button"><button @click="manageMoney.withdrawFromEmergencyFundTotal(amountToChange), rerenderComponent()">Withdraw</button></span>
        </div>
        </div>

    </div>
</template>
<script setup>

    import { useMoneyManageStore } from '../../../store/MoneyStore'
    import {useEmergencyFundChoicesStore} from '../../../store/MainGameChoicesStore'
    import { useMainGameplayNavigationStore } from '../../../store/MainGameChoicesStore.js'
    import { useGameTimerStore } from '../../../store/MoneyStore'

const useMainGameplayNav = useMainGameplayNavigationStore();

    const manageMoney = useMoneyManageStore()
    const manageEmergencyFund = useEmergencyFundChoicesStore()
    const manageGameTimer = useGameTimerStore();

</script>
<script>

export default {
    name: 'EmergencyFundsInteractiveComponent',
    data() {
        return {
            amountToChange: '',
        }
    }, methods: {
        rerenderComponent() {
            this.amountToChange = '',
            this.$forceUpdate();
        }
    }
   
}

</script>