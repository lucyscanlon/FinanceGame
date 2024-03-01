import { defineStore } from "pinia"

export const useMoneyManageStore = defineStore({
    id: 'moveMoney',
    state: () => ({
        moneyInPocket: 3000,
        monthlySalaryBeforeTax: 2024.25, 
        monthlySalaryAfterTax: 1711.84,
        monthlyOutGoingsSum: 0,
        increaseordecreaseofPocketMoney: 0,
        currentAccountCurrentTotal: 0,
        emergencyFundCurrentTotal: 0,
    }),
    actions: {
        increasePocketMoney(val) {
            this.moneyInPocket = this.moneyInPocket + val;
        },

        decreasePocketMoney(val) {
            this.moneyInPocket = this.moneyInPocket - val;
        },

        increaseMonthlyOutGoings(val) {
            this.monthlyOutGoingsSum = this.monthlyOutGoingsSum + val;
        },

        decreaseMonthlyOutGoings(val) {
            this.monthlyOutGoingsSum = this.monthlyOutGoingsSum - val;
        },

        increaseOrDecreasePocketMoneyAnimation(val) {
            this.increaseordecreaseofPocketMoney = val;
        },

        resetPocketMoneyAnimation() {
            this.increaseordecreaseofPocketMoney = 0;
        },

        addToCurrentAccountTotal(num) {
            if(this.moneyInPocket > num) {
                this.currentAccountCurrentTotal = this.currentAccountCurrentTotal + num;
                this.moneyInPocket = this.moneyInPocket - num;
            } else {
                return;
            }
        },

        withdrawFromCurrentAccountTotal(num) {
            if(this.currentAccountCurrentTotal > num) {
                this.currentAccountCurrentTotal = this.currentAccountCurrentTotal - num;
                this.moneyInPocket = this.moneyInPocket + num;
            } else {
                return;
            }
        },

        addToEmergencyFundTotal(num) {
            if(this.moneyInPocket > num) {
                this.emergencyFundCurrentTotal = this.emergencyFundCurrentTotal + num;
                this.moneyInPocket = this.moneyInPocket - num;
            } else {
                return;
            }
            
        },

        withdrawFromEmergencyFundTotal(num) {
            if(this.emergencyFundCurrentTotal > num) {
                this.emergencyFundCurrentTotal = this.emergencyFundCurrentTotal - num;
                this.moneyInPocket = this.moneyInPocket + num;
            } else {
                return;
            }
        },
    }
})



