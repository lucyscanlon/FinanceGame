import { defineStore } from "pinia"
import {useMainGameplayNavigationStore } from './MainGameChoicesStore'
import { usePensionChoicesStore } from './MainGameChoicesStore'

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
        daysUntilPayday: 30,
        decreaseTime: true,
        houseDepositCurrentTotal: 0,
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
            if(this.moneyInPocket >= num) {
                this.emergencyFundCurrentTotal = this.emergencyFundCurrentTotal + num;
                this.moneyInPocket = this.moneyInPocket - num;
            } else {
                return;
            }
            
        },

        withdrawFromEmergencyFundTotal(num) {
            if(this.emergencyFundCurrentTotal >= num) {
                this.emergencyFundCurrentTotal = this.emergencyFundCurrentTotal - num;
                this.moneyInPocket = this.moneyInPocket + num;
            } else {
                return;
            }
        },

        decreaseDaysUntilPayday() {
            this.daysUntilPayday = this.daysUntilPayday - 1;
            
        },

        addToHouseDeposit(num) {
            if(this.moneyInPocket >= num) {
                this.houseDepositCurrentTotal = this.houseDepositCurrentTotal + num;
                this.moneyInPocket = this.moneyInPocket - num;
            } else {
                return;
            }
        },

        withdrawFromHouseDeposit(num) {
            if(this.houseDepositCurrentTotal >= num) {
                this.houseDepositCurrentTotal = this.houseDepositCurrentTotal - num;
                this.moneyInPocket = this.moneyInPocket + num;
            } else {
                return;
            }
        }
    }
})

export const useGameTimerStore = defineStore({
    id: 'GameTimerStore',
    state: () => ({
        timer: null,
        countdown: 30,
        monthCounter: 0,
        monthsPassed: 0,
        currentMonth: 'January',
        currentYear: 2023,
    }),
    actions: {
        startCountdown() {
            if (this.timer) {
                clearInterval(this.timer)
            }

            this.timer = setInterval (() => {
                if(this.countdown > 0) {
                    if(useMainGameplayNavigationStore().currentPage === 1) {
                        this.countdown = this.countdown - 1;

                        // add pension automatically with each payday
                        // pension total = pension total + (salary before tax * player tax contribution)
                    }
                } else {
                    useMoneyManageStore().increasePocketMoney((useMoneyManageStore().monthlySalaryAfterTax) - (useMoneyManageStore().monthlySalaryBeforeTax) * (usePensionChoicesStore().chosenPensionChoice.YContPercentage / 100))
                    usePensionChoicesStore().addContributionToPension(useMoneyManageStore().monthlySalaryBeforeTax, usePensionChoicesStore().chosenPensionChoice.YContPercentage)
                    usePensionChoicesStore().addContributionToPension(useMoneyManageStore().monthlySalaryBeforeTax, usePensionChoicesStore().chosenPensionChoice.EContPercentage)
                    this.monthsPassed = this.monthsPassed + 1;
                    this.resetCountdown()
                    this.increaseMonth()
                }
            }, 1500)
        }, 

        resetCountdown() {
            this.countdown = 30
            clearInterval(this.timer)
            this.timer = null
            this.startCountdown()
        },

        increaseMonth() {

            if (this.monthCounter === 0 ) {
                this.currentMonth = 'January'
                if(this.monthsPassed > 1) {
                    this.increaseYear()
                }
                this.monthCounter = this.monthCounter + 1
            } else if (this.monthCounter === 1 ) {
                this.currentMonth = 'February'
                this.monthCounter = this.monthCounter + 1
            } else if (this.monthCounter === 2) {
                this.currentMonth = 'March'
                this.monthCounter = this.monthCounter + 1
            } else if (this.monthCounter === 3 ) {
                this.currentMonth = 'April'
                this.monthCounter = this.monthCounter + 1
            } else if (this.monthCounter === 4 ) {
                this.currentMonth = 'May'
                this.monthCounter = this.monthCounter + 1
            } else if (this.monthCounter === 5 ) {
                this.currentMonth = 'June'
                this.monthCounter = this.monthCounter + 1
            } else if (this.monthCounter === 6 ) {
                this.currentMonth = 'July'
                this.monthCounter = this.monthCounter + 1
            } else if (this.monthCounter === 7 ) {
                this.currentMonth = 'August'
                this.monthCounter = this.monthCounter + 1
            } else if (this.monthCounter === 8 ) {
                this.currentMonth = 'September'
                this.monthCounter = this.monthCounter + 1
            } else if (this.monthCounter === 9) {
                this.currentMonth = 'October'
                this.monthCounter = this.monthCounter + 1
            } else if (this.monthCounter === 10 ) {
                this.currentMonth = 'November'
                this.monthCounter = this.monthCounter + 1
            } else if (this.monthCounter === 11 ) {
                this.currentMonth = 'December'
                this.monthCounter = 0

            }

        },

        increaseYear() {
            this.currentYear = this.currentYear + 1
        }
    }
})



