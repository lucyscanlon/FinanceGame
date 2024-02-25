<template>
    <div class="maingameplay-flex-container">
        <div class="pension-interactive-title-container everydaysavings-title">
            <h1><font-awesome-icon icon="fa-solid fa-piggy-bank" />Current Account</h1>
        </div>
        <div class="currentaccount-info-total-container">
            <div class="currentaccount-total-text-container">
                <p>Current Total:</p>
            </div>
            <div class="currentaccount-total-number-container">
                <p>£{{ manageMoney.currentAccountCurrentTotal }}</p>
            </div>
        </div>
        <div class="currentaccount-addwithdraw-title-container">
            <p>Change amount:</p>
        </div>
        <div class="currentaccount-addwithdraw-box-container">
            <div class="currentaccount-addwithdraw-change">
                <form>
                    <input type="number" placeholder="__" v-model="amountToChange">
                </form>
            </div>
        </div>
        <div class="currentaccount-add-withdraw-buttons">
            <button @click="manageMoney.addToCurrentAccountTotal(amountToChange), rerenderComponent()">Add</button>
            <span class="currentaccount-withdraw-button"><button @click="manageMoney.withdrawFromCurrentAccountTotal(amountToChange), rerenderComponent()">Withdraw</button></span>
        </div>

    </div>
</template>
<script setup>

    import { useMoneyManageStore } from '../../../store/MoneyStore.js'
    const manageMoney = useMoneyManageStore()

</script>
<script>

export default {
    name: 'EverydaySavingInteractiveComponent',
    data() {
        return {
            amountToChange: '',
        }
    }, methods: {
        rerenderComponent() {
            this.amountToChange = '';
            this.$forceUpdate();
        }
    }
}

</script>