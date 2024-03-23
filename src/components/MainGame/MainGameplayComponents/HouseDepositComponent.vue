<template>
    <div class="maingameplay-flex-container">
        <div class="housedeposit-interactive-title-container everydaysavings-title">
            <h1><font-awesome-icon icon="fa-solid fa-house" />House Deposit</h1>
        </div>
        <div class="home-dep-comp-goal">
            <p class="colour-red">Goal: £15,000</p>
        </div>
        <div class="home-dep-comp-desc">
            <p>Lifetime Isa: <span class="colour-green">25% bonus to be added yearly in April. £4000 limit a year.</span></p>
        </div>
        <div class="emergencyfund-interactive-info-total-container">
            <div class="currentaccount-total-text-container">
                <p>Current Total:</p>
            </div>
            <div class="currentaccount-total-number-container">
                <p>£{{manageMoney.houseDepositCurrentTotal}}</p>
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
        <div class="emergencyfund-add-withdraw-buttons housedeposit-buttons">
            <button @click="manageMoney.addToHouseDeposit(amountToChange), rerenderComponent()">Add</button>
            <span  @click="manageMoney.withdrawFromHouseDeposit(amountToChange), rerenderComponent()" class="emergencyfund-withdraw-button"><button>Withdraw</button></span>
        </div>

    </div>
</template>
<script setup>

    //import { useHouseDepositChoiceStore } from '../../../store/MainGameChoicesStore'
    import { useMoneyManageStore } from '../../../store/MoneyStore'

    const manageMoney = useMoneyManageStore()
    //const manageHouseDeposit = useHouseDepositChoiceStore()

</script>
<script>

export default {
    name: 'HouseDepositInteractiveComponent',
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