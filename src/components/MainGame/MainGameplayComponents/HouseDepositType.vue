<template>
    <div class="housedeposit-interactive-title-container everydaysavings-title">
            <h1><font-awesome-icon icon="fa-solid fa-house" />House Deposit</h1>
        </div>
        <div class="home-dep-comp-goal">
            <p><span class="colour-red">Goal: £8,000</span><span v-if="manageHouseDeposit.chosenHouseDepositChoice === 1" class="LISA-yearly-additions">Added this year: £{{ manageMoney.LISAYearlyAdditions }}</span></p>
        </div>
        <div class="home-dep-comp-desc">
            <p>{{ name }}: <span class="colour-green">{{ Desc }}</span></p>
        </div>
        <div class="emergencyfund-interactive-info-total-container">
            <div class="currentaccount-total-text-container">
                <p>Current Total:</p>
            </div>
            <div class="currentaccount-total-number-container">
                <p>£{{manageMoney.houseDepositCurrentTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2})}}</p>
            </div>
        </div>
        <div class="currentaccount-addwithdraw-title-container">
            <p>Change amount:</p>
        </div>
        <div class="emergencyfund-addwithdraw-box-container">
            <div class="emergencyfund-addwithdraw-change">
                <form>
                    <input placeholder="Enter Number" v-model="amountToChange">
                </form>
            </div>
        </div>
        <div class="emergencyfund-add-withdraw-buttons housedeposit-buttons">
            <button v-if="manageHouseDeposit.chosenHouseDepositChoice === 1 && (manageMoney.LISAYearlyAdditions < 4000)" @click="manageSound.addButton(), manageMoney.addToHouseDepositLISA(amountToChange), rerenderComponent()">Add</button>
            <button v-if="manageHouseDeposit.chosenHouseDepositChoice === 1 && (manageMoney.LISAYearlyAdditions === 4000)" class="inactive-add-button">Add</button>
            <span v-if="manageHouseDeposit.chosenHouseDepositChoice === 1" @click="manageSound.WithdrawButton(), manageMoney.withdrawFromHouseDepositLISA(amountToChange), rerenderComponent()" class="emergencyfund-withdraw-button"><button>Withdraw</button></span>
            
            <button v-if="(manageHouseDeposit.chosenHouseDepositChoice === 2) && (manageGameTimer.fixedRateUnlocked === 0) && manageMoney.HouseDepositFixedYearOpen === true" @click="manageSound.addButton(), manageMoney.addToFixedRateHouseDeposit(amountToChange), rerenderComponent()">Add</button>
            <button v-if="(manageHouseDeposit.chosenHouseDepositChoice === 2) && manageGameTimer.fixedRateUnlocked === 1" @click="manageSound.addButton(), manageMoney.addToHouseDeposit(amountToChange), rerenderComponent()">Add</button>
            <span v-if="(manageHouseDeposit.chosenHouseDepositChoice === 2) && manageGameTimer.fixedRateUnlocked === 1" @click="manageSound.WithdrawButton(), manageMoney.withdrawFromHouseDeposit(amountToChange), rerenderComponent()" class="emergencyfund-withdraw-button"><button>Withdraw</button></span>
            <div v-if="(manageHouseDeposit.chosenHouseDepositChoice === 2) && (manageGameTimer.fixedRateUnlocked === 0) && manageMoney.HouseDepositFixedYearOpen === false" class="housedeposit-locked">
                <p><font-awesome-icon icon="fa-solid fa-lock" /></p>
            </div>
            <button v-if="manageHouseDeposit.chosenHouseDepositChoice === 3" @click="manageSound.addButton(), manageMoney.addToHouseDeposit(amountToChange), rerenderComponent()">Add</button>
            <span v-if="manageHouseDeposit.chosenHouseDepositChoice === 3" @click="manageSound.WithdrawButton(), manageMoney.withdrawFromHouseDeposit(amountToChange), rerenderComponent()" class="emergencyfund-withdraw-button"><button>Withdraw</button></span>
        </div>
</template>
<script setup>

    import { useMoneyManageStore, useGameTimerStore } from '../../../store/MoneyStore'
    import { useHouseDepositChoiceStore } from '../../../store/MainGameChoicesStore';
    import { useSoundEffectsStore } from '../../../store/soundEffectsStore'

    const manageMoney = useMoneyManageStore()
    const manageHouseDeposit = useHouseDepositChoiceStore();
    const manageSound = useSoundEffectsStore();
    const manageGameTimer = useGameTimerStore();

</script>
<script>

export default {
    name: 'HouseDepositType',
    data() {
        return {
            amountToChange: '',
        }
    }, 
    props: {
        name: String,
        Desc: String,

    },
    methods: {
        rerenderComponent() {
            this.amountToChange = '',
            this.$forceUpdate();
        }
    }
   
}

</script>