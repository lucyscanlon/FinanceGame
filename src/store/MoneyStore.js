import { defineStore } from "pinia"
import {useMainGameplayNavigationStore } from './MainGameChoicesStore'
import { usePensionChoicesStore } from './MainGameChoicesStore'
import { useInvestmentPortfolioChoiceStore } from './MainGameChoicesStore'
import { useGoalsStore } from './MainGameChoicesStore'
import { usePopUpStore } from './MainGameChoicesStore'
import { useHouseDepositChoiceStore } from './MainGameChoicesStore'
import { useEmergencyFundChoicesStore } from './MainGameChoicesStore'

export const useMoneyManageStore = defineStore({
    id: 'moveMoney',
    state: () => ({
        moneyInPocket: 3000,
        monthlySalaryBeforeTax: 2024.25, 
        monthlySalaryAfterTax: 1711.84,
        monthlyOutGoingsSum: 0,
        increaseordecreaseofPocketMoney: 0,
        currentAccountCurrentTotal: 0,
        emergencyFundCurrentTotal: 4999,
        daysUntilPayday: 30,
        decreaseTime: true,
        houseDepositCurrentTotal: 0,
        InvestmentPortfolioCurrentValue: 0,
        totalBalancePreviousValue: 0,
        totalBalancePercentageChange: 0,
        furnitureFundTotal: 0,
        billsPaid: 0,
        billsLate: false,
        appliancesFundTotal: 0,
        holidayFundTotal: 0,
        LISAYearlyAdditions: 0,
        HouseDepositFixedYearOpen: true,
        payRiseSalaryBeforeTax: 2328.00,
        payRiseSalaryAfterTax: 1969.61,
        incomeStreamProfit: 0,
        totalInvested: 0,
        totalProfitOrLoss: 0,
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

                if(this.emergencyFundCurrentTotal >= 5000) {
                    useGoalsStore().completedGoals = 3;
                }
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

                    if(this.houseDepositCurrentTotal >= 15000) {
                        useGoalsStore().completedGoals = 7;
                    }
    
                } else {
                    return;
                }
            
        },

        addToHouseDepositLISA(num) {
            if((this.LISAYearlyAdditions + num) <= 4000) {
                this.LISAYearlyAdditions = this.LISAYearlyAdditions + num;

                if(this.moneyInPocket >= num) {
                    this.moneyInPocket = this.moneyInPocket - num;
                    this.houseDepositCurrentTotal = this.houseDepositCurrentTotal + num;

                    if(this.houseDepositCurrentTotal >= 15000) {
                        useGoalsStore().completedGoals = 7;
                    }
                } else {
                    return
                }
            } else {
                return;
            }
        },

        addToFixedRateHouseDeposit(num) {
            console.log("house deposit added");
            if(this.HouseDepositFixedYearOpen === true) {
                console.log("house deposit added");
                if(this.moneyInPocket >= num) {
                    this.houseDepositCurrentTotal = this.houseDepositCurrentTotal + num;
                    this.moneyInPocket = this.moneyInPocket - num;

                    this.HouseDepositFixedYearOpen = false;

                    if(this.houseDepositCurrentTotal >= 15000) {
                        useGoalsStore().completedGoals = 7;
                    }
                } else {
                    return;
                }
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
        },

        withdrawFromHouseDepositLISA(num) {
            if(this.houseDepositCurrentTotal >= num) {
                this.houseDepositCurrentTotal = this.houseDepositCurrentTotal - num;
                this.moneyInPocket = this.moneyInPocket + num;

                this.LISAYearlyAdditions = this.LISAYearlyAdditions - num;

            } else {
                return;
            }
        },

        buyNumOfStocks(stockValue, amount) {
            let cost = stockValue * amount

            if(this.moneyInPocket >= cost) {
                this.moneyInPocket = this.moneyInPocket - cost;
                this.totalInvested = this.totalInvested + cost;

                console.log(useInvestmentPortfolioChoiceStore().ShareTotalAmounts);
            } else {
                return;
            }
        },

        sellNumOfStocks(stockValue, amount) {
            let cost = stockValue * amount

            this.moneyInPocket = this.moneyInPocket + cost;
            this.totalInvested = this.totalInvested - cost;
            
        },

        sellAllOfStock(stockValue, totalAmount) {
            let cost = stockValue * totalAmount

            Number(cost).toFixed(2)

            console.log(stockValue)
            console.log(totalAmount)
            console.log(cost)

            this.moneyInPocket = this.moneyInPocket + cost;
        },

        workOutPortfolioValue() {

            // stock one value 
            let stock1portfoliobalance = useGameTimerStore().stock1Value * useInvestmentPortfolioChoiceStore().ShareTotalAmounts[0]
            let stock2portfoliobalance = useGameTimerStore().stock2Value * useInvestmentPortfolioChoiceStore().ShareTotalAmounts[1]
            let stock3portfoliobalance = useGameTimerStore().stock3Value * useInvestmentPortfolioChoiceStore().ShareTotalAmounts[2]
            let stock4portfoliobalance = useGameTimerStore().stock4Value * useInvestmentPortfolioChoiceStore().ShareTotalAmounts[3]
            let stock5portfoliobalance = useGameTimerStore().stock5Value * useInvestmentPortfolioChoiceStore().ShareTotalAmounts[4]

            this.InvestmentPortfolioCurrentValue = stock1portfoliobalance + stock2portfoliobalance + stock3portfoliobalance + stock4portfoliobalance + stock5portfoliobalance

        },

        setTotalBalancePreviousPrice() {
            this.totalBalancePreviousValue = this.InvestmentPortfolioCurrentValue
        },

        workoutInvestmentTotalBalancePercentage() {
            this.totalBalancePercentageChange = ((this.InvestmentPortfolioCurrentValue - this.totalBalancePreviousValue) / this.totalBalancePreviousValue) * 100
            if((this.InvestmentPortfolioCurrentValue === 0) && (this.totalBalancePreviousValue === 0)) {
                this.totalBalancePercentageChange = 0
            }
        },

        addToFurnitureFund(num) {
            if(this.moneyInPocket >= num) {

                let amount = Number(num)
                this.furnitureFundTotal = this.furnitureFundTotal + amount;
                this.moneyInPocket = this.moneyInPocket - amount;

                if(this.furnitureFundTotal >= 1000) {
                    useGoalsStore().completedGoals = 2;
                }
            } else {
                return
            }
        },

        WithdrawFromFurnitureFund(num) {
            if(this.furnitureFundTotal >= num) {

                let amount = Number(num)
                this.furnitureFundTotal = this.furnitureFundTotal - amount;
                this.moneyInPocket = this.moneyInPocket + amount;

            } else {
                return
            }
        },

        payMonthlyOutgoings() {
            this.moneyInPocket = this.moneyInPocket - this.monthlyOutGoingsSum;
            this.billsPaid = this.billsPaid + 1;
        },

        payLateBill() {
            this.billsLate = false;
        },

        addToAppliancesFund(num) {
            if(this.moneyInPocket >= num) {
                this.appliancesFundTotal = this.appliancesFundTotal + num;
                this.moneyInPocket = this.moneyInPocket - num;

                if(this.appliancesFundTotal >= 2000) {
                    useGoalsStore().completedGoals = 4;
                }

            } else {
                return
            }
        },

        withdrawFromAppliancesFund(num) {
            if(this.appliancesFundTotal <= num) {
                this.moneyInPocket = this.moneyInPocket + num;
                this.appliancesFundTotal = this.appliancesFundTotal - num;
            } else {
                return
            }
        },

        addToHolidayFund(num) {
            if(this.moneyInPocket >= num) {
                this.holidayFundTotal = this.holidayFundTotal + num;
                this.moneyInPocket = this.moneyInPocket - num;

                if(this.holidayFundTotal >= useGoalsStore().holidayBudget) {
                    useGoalsStore().completedGoals = 5;
                }
            } else {
                return
            }
        },

        withdrawFromHolidayFund(num) {
            if(this.holidayFundTotal <= num) {
                this.moneyInPocket = this.moneyInPocket + num;
                this.holidayFundTotal = this.holidayFundTotal - num;
            } else {
                return
            }
        },

        increaseSalary() {
            this.monthlySalaryBeforeTax = this.payRiseSalaryBeforeTax;
            this.monthlySalaryAfterTax = this.payRiseSalaryAfterTax;
        },

        useEmergencyFund(num) {

            if( this.emergencyFundCurrentTotal >= num) {
                this.emergencyFundCurrentTotal = this.emergencyFundCurrentTotal - num;
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
        monthCounter: 1,
        monthsPassed: 0,
        currentMonth: 'January',
        currentYear: 2023,
        stock1Value: 25.50,
        stock2Value: 67.03,
        stock3Value: 50.51,
        stock4Value: 16.98,
        stock5Value: 35.67,
        stock1PreviousPrice: 25.22,
        stock2PreviousPrice: 64.56,
        stock3PreviousPrice: 47.08,
        stock4PreviousPrice: 16.23,
        stock5PreviousPrice: 33.23,
        stock1CrashProbability: 0.05,
        stock2CrashProbability: 0.05,
        stock3CrashProbability: 0.1,
        stock4CrashProbability: 0.02,
        stock5CrashProbability: 0.01,
        stock1ChangePerc: 1.12,
        stock2ChangePerc: 3.61,
        stock3ChangePerc: 7.29,
        stock4ChangePerc: 4.62,
        stock5ChangePerc: 7.34,
        stock1SixPrices: [22.12, 22.32, 22.83, 23.12, 25.22, 25.50],
        stock2SixPrices: [62.10, 63.21, 64.83, 66.78, 64.56, 67.03],
        stock3SixPrices: [42.54, 43.34, 47.87, 48.67, 47.08, 50.51],
        stock4SixPrices: [16.31, 16.38, 18.98, 17.78, 16.23, 16.98],
        stock5SixPrices: [28.03, 30.29, 31.67, 31.82, 33.23, 35.67],
        workDrinksLoopCounter: 0,
        workDrinksDisplayed: false,
        emergencyFundFixedRateUnlocked: false,
        queuePayRisePopUp: {},
        queueAfterInvestmentComponent: {},
        queueFinalGoalsAndPopUps: {},

    }),
    actions: {
        startCountdown() {
            if (this.timer) {
                clearInterval(this.timer)
            }

            this.timer = setInterval (() => {
                if(this.countdown > 0) {
                    if((useMainGameplayNavigationStore().currentPage === 11) || (useMainGameplayNavigationStore().currentPage === 17)) {
                        this.countdown = this.countdown - 1;
                        this.checkTheDate(this.countdown, this.currentMonth, this.currentYear, this.monthsPassed);

                        // flucuate prices of stocks
                        if(useMainGameplayNavigationStore().mainGameComponentsUnlocked > 5 ) {
                            if(this.countdown%5 === 0) {

                                // change the prices
                                this.flucuateStockPrices();
    
                                // store the previous balance as current balance
                                useMoneyManageStore().setTotalBalancePreviousPrice()
                                
                                // update the current balance with new price changes
                                useMoneyManageStore().workOutPortfolioValue()
    
                                // workout the value change percentage
                                useMoneyManageStore().workoutInvestmentTotalBalancePercentage()

                                console.log("Current Goal: " + useGoalsStore().currentGoal + ". Completed Goal: " + useGoalsStore().completedGoals);
                                
                            }
                        }

                        // add pension automatically with each payday
                        // pension total = pension total + (salary before tax * player tax contribution)
                    }
                } else {
                    useMoneyManageStore().increasePocketMoney((useMoneyManageStore().monthlySalaryAfterTax + useMoneyManageStore().incomeStreamProfit) - ((useMoneyManageStore().monthlySalaryBeforeTax) * (usePensionChoicesStore().chosenPensionChoice.YContPercentage / 100)))
                    usePensionChoicesStore().addContributionToPension(useMoneyManageStore().monthlySalaryBeforeTax, usePensionChoicesStore().chosenPensionChoice.YContPercentage)
                    usePensionChoicesStore().addContributionToPension(useMoneyManageStore().monthlySalaryBeforeTax, usePensionChoicesStore().chosenPensionChoice.EContPercentage)
                    this.monthsPassed = this.monthsPassed + 1;
                    this.increaseMonth()
                    this.checkIfBillsAreLate()
                    this.resetCountdown()
                }
            }, 200)
        }, 

        flucuateStockPrices() {

            // store the current price as the previous price
            this.stock1PreviousPrice = this.stock1Value
            this.stock2PreviousPrice = this.stock2Value
            this.stock3PreviousPrice = this.stock3Value
            this.stock4PreviousPrice = this.stock4Value
            this.stock5PreviousPrice = this.stock5Value


            // set the fluctuation of each stock
            let fluctuation1 = Math.random() * 0.1 - 0.04;
            let fluctuation2 = Math.random() * 0.2 - 0.03;
            let fluctuation3 = Math.random() * 2 - 0.5;
            let fluctuation4 = Math.random() * 5 - 1;
            let fluctuation5 = Math.random() * 0.2 - 0.2;

            if (Math.random() < this.stock1CrashProbability) {
                fluctuation1 = -Math.random() * 5; 
                console.log("Stock 1 crashed")
            }
            if (Math.random() < this.stock2CrashProbability) {
                fluctuation2 = -Math.random() * 3; 
                console.log("Stock 2 crashed")
            }
            if (Math.random() < this.stock3CrashProbability) {
                fluctuation3 = -Math.random() * 7; 
                console.log("Stock 3 crashed")
            }
            if (Math.random() < this.stock4CrashProbability) {
                fluctuation4 = -Math.random() * 4; 
                console.log("Stock 4 crashed")
            }
            if (Math.random() < this.stock5CrashProbability) {
                fluctuation5 = -Math.random() * 3;
                console.log("Stock 5 crashed") 
            }

            // add or minus fluctuation from the stock price
            this.stock1Value += fluctuation1;
            this.stock2Value += fluctuation2;
            this.stock3Value += fluctuation3;
            this.stock4Value += fluctuation4;
            this.stock5Value += fluctuation5;

            // update the values for the line graphs
            this.stock1SixPrices = [this.stock1SixPrices[1], this.stock1SixPrices[2], this.stock1SixPrices[3], this.stock1SixPrices[4], this.stock1SixPrices[5], this.stock1Value]
            this.stock2SixPrices = [this.stock2SixPrices[1], this.stock2SixPrices[2], this.stock2SixPrices[3], this.stock2SixPrices[4], this.stock2SixPrices[5], this.stock2Value]
            this.stock3SixPrices = [this.stock3SixPrices[1], this.stock3SixPrices[2], this.stock3SixPrices[3], this.stock3SixPrices[4], this.stock3SixPrices[5], this.stock3Value]
            this.stock4SixPrices = [this.stock4SixPrices[1], this.stock4SixPrices[2], this.stock4SixPrices[3], this.stock4SixPrices[4], this.stock4SixPrices[5], this.stock4Value]
            this.stock5SixPrices = [this.stock5SixPrices[1], this.stock5SixPrices[2], this.stock5SixPrices[3], this.stock5SixPrices[4], this.stock5SixPrices[5], this.stock5Value]

            // work out the percentage increase or decrease
            this.stock1ChangePerc = ((this.stock1Value - this.stock1PreviousPrice) / this.stock1PreviousPrice) * 100;
            this.stock2ChangePerc = ((this.stock2Value - this.stock2PreviousPrice) / this.stock2PreviousPrice) * 100;
            this.stock3ChangePerc = ((this.stock3Value - this.stock3PreviousPrice) / this.stock3PreviousPrice) * 100;
            this.stock4ChangePerc = ((this.stock4Value - this.stock4PreviousPrice) / this.stock4PreviousPrice) * 100;
            this.stock5ChangePerc = ((this.stock5Value - this.stock5PreviousPrice) / this.stock5PreviousPrice) * 100;

            // make sure the price doesnt go negative.
            this.stock1Value = Math.max(this.stock1Value, 1);
            this.stock2Value = Math.max(this.stock2Value, 1);
            this.stock3Value = Math.max(this.stock3Value, 1);
            this.stock4Value = Math.max(this.stock4Value, 1);
            this.stock5Value = Math.max(this.stock5Value, 1);

            // work out the total profit / loss from initial investment
            useMoneyManageStore().totalProfitOrLoss = useMoneyManageStore().InvestmentPortfolioCurrentValue - useMoneyManageStore().totalInvested;

            if(useMoneyManageStore().totalProfitOrLoss >= 3000) {
                useGoalsStore().completedGoals = 6;
            }

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
                this.financialYearPassed()
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

            console.log("Months Passed: " + this.monthsPassed);
            console.log("Month Counter: " + this.monthCounter);
            console.log("Current Month: " + this.currentMonth);

        },

        increaseYear() {
            this.currentYear = this.currentYear + 1
        },

        checkIfBillsAreLate() {
            if (useMoneyManageStore().billsPaid !== this.monthsPassed) {
                useMoneyManageStore().billsLate = true;

                console.log(useMoneyManageStore().billsLate);
            } else {
                return
            }
        },

        checkTheDate(countdown, currentMonth, currentYear, monthsPassed) {

            if((countdown === 15) && (currentMonth === 'January') && (currentYear === 2023)) {
                useMainGameplayNavigationStore().currentPage = 9;
            }

            if((useGoalsStore().completedGoals === 1) && (countdown === 25)) {
                useGoalsStore().currentGoal = 2;
            }

            if((useGoalsStore().completedGoals === 1) && (countdown === 20)) {
                useMainGameplayNavigationStore().currentPage = 18;
                usePopUpStore().currentPopUp = 1;

            }

            if((useGoalsStore().completedGoals === 2) && (countdown === 20) && (useMainGameplayNavigationStore().mainGameComponentsUnlocked === 2)) {
                useMainGameplayNavigationStore().currentPage = 12;
            }

            if((useGoalsStore().completedGoals === 2) && (useMainGameplayNavigationStore().mainGameComponentsUnlocked === 3)) {

                if(countdown === 25) {
                    this.workDrinksLoopCounter = this.workDrinksLoopCounter + 1;
                }

                if((this.workDrinksLoopCounter === 2) && (this.workDrinksDisplayed === false)) {
                    useMainGameplayNavigationStore().currentPage = 18;
                    usePopUpStore().currentPopUp = 2;
                    this.workDrinksDisplayed = true;
                }
            }

            if((useGoalsStore().completedGoals === 3) && (countdown === 25) && (useMainGameplayNavigationStore().mainGameComponentsUnlocked === 3)) {
                useMainGameplayNavigationStore().currentPage = 13;
                
            }

            if((useGoalsStore().completedGoals === 3) && (countdown === 20) && (useMainGameplayNavigationStore().mainGameComponentsUnlocked === 4)) {
                useGoalsStore().currentGoal = 4;
            }

            if((useGoalsStore().completedGoals === 4) && (countdown === 25) && (useMainGameplayNavigationStore().mainGameComponentsUnlocked === 4)) {
                useMainGameplayNavigationStore().currentPage = 15;
                this.queuePayRisePopUp = {day: countdown, monthsPassed: monthsPassed, year: currentYear};
                console.log(this.queuePayRisePopUp.day);
                console.log(this.queuePayRisePopUp.month);
                console.log(this.queuePayRisePopUp.year);
            }

            if((countdown === this.queuePayRisePopUp.day) && (monthsPassed === (this.queuePayRisePopUp.monthsPassed + 1)) && (currentYear === this.queuePayRisePopUp.year)) {
                useMainGameplayNavigationStore().currentPage = 18;
                usePopUpStore().currentPopUp = 7;
            }

            if((countdown === this.queuePayRisePopUp.day) && (monthsPassed === (this.queuePayRisePopUp.monthsPassed + 2)) && (currentYear === this.queuePayRisePopUp.year)) {
                useMainGameplayNavigationStore().currentPage = 18;
                usePopUpStore().currentPopUp = 6;

            }

            if((countdown === 25) && (useGoalsStore().completedGoals === 5) && (useMainGameplayNavigationStore().mainGameComponentsUnlocked === 5)) {
                useMainGameplayNavigationStore().currentPage = 16;
                this.queueAfterInvestmentComponent = {day: countdown, monthsPassed: monthsPassed, year: currentYear};
                console.log(this.queueAfterInvestmentComponent.day);
                console.log(this.queueAfterInvestmentComponent.month);
                console.log(this.queueAfterInvestmentComponent.year);
            }

            if ((countdown === this.queueAfterInvestmentComponent.day) && (monthsPassed === (this.queueAfterInvestmentComponent.monthsPassed + 2)) && (currentYear === this.queueAfterInvestmentComponent.year)){
                useMainGameplayNavigationStore().currentPage = 18;
                usePopUpStore().currentPopUp = 3;

            }

            if ((countdown === this.queueAfterInvestmentComponent.day) && (monthsPassed === (this.queueAfterInvestmentComponent.monthsPassed + 3)) && (currentYear === this.queueAfterInvestmentComponent.year)){
                useGoalsStore().currentGoal = 6;
                useMainGameplayNavigationStore().currentPage = 11;

            }

            if((countdown === 25) && (useGoalsStore().completedGoals === 6) && (useGoalsStore().currentGoal === 6)) {
                useGoalsStore().currentGoal = 7;
                this.queueFinalGoalsAndPopUps = {day: countdown, monthsPassed: monthsPassed, year: currentYear};
                console.log(this.queueFinalGoalsAndPopUps.day);
                console.log(this.queueFinalGoalsAndPopUps.monthsPassed);
                console.log(this.queueFinalGoalsAndPopUps.year);
            }

            if ((countdown === this.queueFinalGoalsAndPopUps.day) && (monthsPassed === (this.queueFinalGoalsAndPopUps.monthsPassed + 1)) && (currentYear === this.queueFinalGoalsAndPopUps.year)){
                useMainGameplayNavigationStore().currentPage = 18;
                
                let randomNum = Math.random(0, 10) * 10;

                if(randomNum <= 5) {
                    usePopUpStore().currentPopUp = 4;
                } else if (randomNum > 5) {
                    usePopUpStore().currentPopUp = 5;
                }

            }

            if ((countdown === this.queueFinalGoalsAndPopUps.day) && (monthsPassed === (this.queueFinalGoalsAndPopUps.monthsPassed + 4)) && (currentYear === this.queueFinalGoalsAndPopUps.year)){
                useMainGameplayNavigationStore().currentPage = 18;
                usePopUpStore().currentPopUp = 8;
            }

            if ((countdown === this.queueFinalGoalsAndPopUps.day) && (monthsPassed === (this.queueFinalGoalsAndPopUps.monthsPassed + 4)) && (currentYear === this.queueFinalGoalsAndPopUps.year)){
                useMainGameplayNavigationStore().currentPage = 18;
                usePopUpStore().currentPopUp = 8;
            }

            // emergency funds

            if(((currentMonth === 'April') && (currentYear === 2024)) || (currentYear > 2024)) {
                this.emergencyFundFixedRateUnlocked = true;
            }

            if(this.emergencyFundFixedRateUnlocked === true) {
                if(useEmergencyFundChoicesStore().chosenEmergencyFundChoice.EmergFInterest === 7) {
                    useEmergencyFundChoicesStore().chosenEmergencyFundChoice.EmergFInterest = 4;
                }
            }


        },

        financialYearPassed() {

            if(useHouseDepositChoiceStore().chosenHouseDepositChoice === 1) {
                useMoneyManageStore().houseDepositCurrentTotal = useMoneyManageStore().houseDepositCurrentTotal + (useMoneyManageStore().LISAYearlyAdditions * 0.25);
                useMoneyManageStore().LISAYearlyAdditions = 0;

            }

            useMoneyManageStore().HouseDepositFixedYearOpen = true;

            if(useHouseDepositChoiceStore().chosenHouseDepositChoice === 2) {
                useMoneyManageStore().houseDepositCurrentTotal = useMoneyManageStore().houseDepositCurrentTotal + (useMoneyManageStore().houseDepositCurrentTotal * 0.048);
            }

            if(useMoneyManageStore().houseDepositCurrentTotal >= 15000) {
                useGoalsStore().completedGoals = 7;
            }

            if(useEmergencyFundChoicesStore().chosenEmergencyFundChoice.EmergFName === 'High Interest Savings Account') {
                useMoneyManageStore().emergencyFundCurrentTotal = useMoneyManageStore().emergencyFundCurrentTotal + (useMoneyManageStore().emergencyFundCurrentTotal * 0.044);
            } else if((useEmergencyFundChoicesStore().chosenEmergencyFundChoice.EmergFName === '1 Year Fixed Rate Bond Account') && (this.currentYear < 2024))  {
                useMoneyManageStore().emergencyFundCurrentTotal = useMoneyManageStore().emergencyFundCurrentTotal + (useMoneyManageStore().emergencyFundCurrentTotal * 0.07);
            } else if ((useEmergencyFundChoicesStore().chosenEmergencyFundChoice.EmergFName === '1 Year Fixed Rate Bond Account') && (this.currentYear >= 2024)) {
                useMoneyManageStore().emergencyFundCurrentTotal = useMoneyManageStore().emergencyFundCurrentTotal + (useMoneyManageStore().emergencyFundCurrentTotal * 0.04);
            } else if (useEmergencyFundChoicesStore().chosenEmergencyFundChoice.EmergFName === 'Regular Savings Account') {
                useMoneyManageStore().emergencyFundCurrentTotal = useMoneyManageStore().emergencyFundCurrentTotal + (useMoneyManageStore().emergencyFundCurrentTotal * 0.028);
            }
        }
    }
})



