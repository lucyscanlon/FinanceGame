<template>
        <div class="pension-interactive-title-container current-goal-title">
            <h1><font-awesome-icon icon="fa-solid fa-bullseye" />Current Goal</h1>
        </div>
        <div class="currentgoal-status-container">
            <p>Status: <span class="colour-red">Uncompleted</span></p>
        </div>
        <div class="currentgoal-goal-container">
            <p><span class="colour-green">Goal:</span> Save £1000 for new furniture for your apartment</p>
        </div>
        <div class="currentgoal-info-total-container">
            <div class="currentgoal-total-text-container">
                <p>Furniture Fund Total:</p>
            </div>
            <div class="currentgoal-total-number-container">
                <p>£{{ manageMoney.furnitureFundTotal }}</p>
            </div>
        </div>
        <div class="currentgoal-addwithdraw-title-container">
            <p>Change amount:</p>
        </div>
        <div class="currentgoal-addwithdraw-box-container">
            <div class="currentgoal-addwithdraw-change">
                <form>
                    <input type="number" placeholder="__" v-model="amountToChange">
                </form>
            </div>
        </div>
        <div class="currentgoal-add-withdraw-buttons">
            <button @click="manageMoney.addToFurnitureFund(amountToChange)">Add</button>
            <span @click="manageMoney.WithdrawFromFurnitureFund(amountToChange)" class="currentgoal-withdraw-button"><button>Withdraw</button></span>
        </div>
</template>
<script setup>

    import { useMoneyManageStore } from '../../../../store/MoneyStore'

    const manageMoney = useMoneyManageStore()

</script>
<script>

export default {
    name: 'FurnitureFundGoal',
    data() {
        return {
            amountToChange: '',
        }
    }
   
}

</script>