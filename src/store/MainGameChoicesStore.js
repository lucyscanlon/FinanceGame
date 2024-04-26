import { defineStore } from "pinia";
import { useMoneyManageStore } from './MoneyStore'

export const useMainGameplayNavigationStore = defineStore({
  id: "MainGameNavigationStore",
  state: () => ({
    mainGameComponentsUnlocked: 5,
    currentPage: 15,
  }),
  actions: {
    navigateToPage(num) {
      this.currentPage = num;
      //console.log(this.currentPage);
    },

    unlockComponent() {
      this.mainGameComponentsUnlocked = this.mainGameComponentsUnlocked + 1;
      //console.log(this.mainGameComponentsUnlocked);
    },
  },
});

export const usePensionChoicesStore = defineStore({
  id: "PensionChoicesStore",
  state: () => ({
    selectedActivePensionChoice: 0,
    currentlySelectedPensionChoice: [],
    chosenPensionChoice: [],

    SelectedActivePensionInvestmentChoice: 0,
    currentlySelectedPensionInvestmentChoice: 0,
    chosenPensionInvestmentChoice: 0,

    pensionCurrentTotal: 0,
    FTSEValue: 1.73,
  }),
  actions: {
    changeSelectedPensionChoice(num) {
      this.selectedActivePensionChoice = num;
    },

    updateCurrentlySelectedPensionChoice(
      YCPerc,
      YCAmount,
      ECPerc,
      ECAmount,
      TCPerc,
      TCAmount
    ) {
      this.currentlySelectedPensionChoice = {
        YContPercentage: YCPerc,
        YContAmount: YCAmount,
        EContPercentage: ECPerc,
        EContAmount: ECAmount,
        TContPercentage: TCPerc,
        TContAmount: TCAmount,
      };

      //console.log(YCPerc);
    },

    confirmCurrentlySelectedPensionChoice() {
      this.chosenPensionChoice = this.currentlySelectedPensionChoice;

      //console.log(this.chosenPensionChoice);

      if(this.chosenPensionChoice.YContPercentage === 5) {
        useBarometerStore().increaseScore(5);
      } else if (this.chosenPensionChoice.YContPercentage === 7) {
        useBarometerStore().increaseScore(8);
      } else if (this.chosenPensionChoice.YContPercentage === 8) {
        useBarometerStore().increaseScore(12);
      }
    },

    changeSelectedPensionInvestmentChoice(num) {
      this.SelectedActivePensionInvestmentChoice = num;
    },

    updateCurrentlySelectedPensionInvestmentChoice(PIIdentifier) {
      this.currentlySelectedPensionInvestmentChoice = PIIdentifier;
    },

    confirmCurrentlySelectedPensionInvestmentChoice() {
      this.chosenPensionInvestmentChoice =
        this.currentlySelectedPensionInvestmentChoice;

      //console.log("Chosen pension choice: " + this.chosenPensionInvestmentChoice);
    },

    addContributionToPension(salaryBeforeTax, contributionPerc) {
      var amountToAdd =
        Number(salaryBeforeTax) * Number(contributionPerc / 100);
      this.pensionCurrentTotal = this.pensionCurrentTotal + amountToAdd;
    },
  },
});

export const useEmergencyFundChoicesStore = defineStore({
  id: "EmergencyFundChoicesStore",
  state: () => ({
    selectedEmergencyFundChoice: 0,
    currentlySelectedEmergencyFundChoice: [],
    chosenEmergencyFundChoice: [],
    emergencyFundGoal: 5000,
  }),
  actions: {
    changeSelectedEmergencyFundChoice(num) {
      this.selectedEmergencyFundChoice = num;
    },

    updateCurrentlySelectedEmergencyFundChoice(
      EFName,
      EFInterest,
      EFDeposit,
      EFAccess
    ) {
      this.currentlySelectedEmergencyFundChoice = {
        EmergFName: EFName,
        EmergFInterest: EFInterest,
        EmergFDeposit: EFDeposit,
        EmergFAccess: EFAccess,
      };

      //console.log(this.currentlySelectedEmergencyFundChoice);
    },

    confirmCurrentlySelectedEmergencyFundChoice() {
      this.chosenEmergencyFundChoice =
        this.currentlySelectedEmergencyFundChoice;

      //console.log(this.chosenEmergencyFundChoice);

      if(this.chosenEmergencyFundChoice.EmergFName === 'High Interest Savings Account') {
        useBarometerStore().increaseScore(15);
      } else if (this.chosenEmergencyFundChoice.EmergFName === '1 Year Fixed Rate Bond Account') {
        useBarometerStore().decreaseScore(25);
      } else if (this.chosenEmergencyFundChoice.EmergFName === 'Regular Savings Account') {
        useBarometerStore().decreaseScore(10);
      }

    },
  },
});

export const useIncomeStreamsChoicesStore = defineStore({
  id: 'IncomeStreamsStore',
  state: () => ({
    selectedIncomeStreamChoice: 0,
    currentlySelectedIncomeStreamChoice: [],
    chosenIncomeStreamChoice: [],
    onlineStoreName: '',
    podcastName: '',
    socialMediaUsername: '',
    barChoiceName: '',
    freelanceChosenSkill: '',
    IncomeStreamMonthlyCost: 0,
    IncomeStreamMonthlyProfit: 0,
  }),
  actions: {
    changeSelectedIncomeStream(num) {
      this.selectedIncomeStreamChoice = num;
    },

    updateCurrentlySelectedIncomeStreamChoice(identifier, name, hours, setupcost, monthlyincome, monthlycost, expansionpotential) {
      this.currentlySelectedIncomeStreamChoice = {
        ISidentifier: identifier,
        ISname: name, 
        IShours: hours,
        ISsetupcost: setupcost,
        ISmonthlyincome: monthlyincome,
        ISmonthlycost: monthlycost,
        ISexpansionpotential: expansionpotential,
      }

      console.log(this.currentlySelectedIncomeStreamChoice)
    },

    confirmIncomeStreamChoice() {
      this.chosenIncomeStreamChoice = this.currentlySelectedIncomeStreamChoice;

      console.log(this.chosenIncomeStreamChoice)
    },

    confirmOnlineStoreName(string) {
        this.onlineStoreName = string;
        useNotificationStore().timeoutIncomeStreamsNotification();
    },

    confirmPodcastName(string) {
        this.podcastName = string;
        useNotificationStore().timeoutIncomeStreamsNotification();
    },

    confirmBarChoiceName(string) {
        this.barChoiceName = string;
        //console.log(this.barChoiceName)
        useNotificationStore().timeoutIncomeStreamsNotification();
    },

    confirmSocialMediaUsername(string) {
        this.socialMediaUsername = string;
        useNotificationStore().timeoutIncomeStreamsNotification();
    },

    confirmFreelanceSkill(string) {
        this.freelanceChosenSkill = string;
        //console.log(this.freelanceChosenSkill)
        useNotificationStore().timeoutIncomeStreamsNotification();
    },

    declareMonthlyCostProfit(num, val) {
      this.IncomeStreamMonthlyCost = num;

      this.IncomeStreamMonthlyProfit = val;
      useMoneyManageStore().incomeStreamProfit = val;
    },


  },
});

export const useHouseDepositChoiceStore = defineStore({
    id: 'HouseDepositStore',
    state: () => ({
        selectedHouseDepositChoice: 0,
        currentlySelectedHouseDepositChoice: '',
        chosenHouseDepositChoice: '',
        houseDepositGoal: 15000,

    }),
    actions: {
        changeSelectedHouseDepositChoice(num) {
            this.selectedHouseDepositChoice = num;
        },

        updateCurrentlySelectedHouseDepositChoice(num) {
            this.currentlySelectedHouseDepositChoice = num;
            //console.log(this.currentlySelectedHouseDepositChoice);
        },

        confirmHouseDepositChoice() {
            this.chosenHouseDepositChoice = this.currentlySelectedHouseDepositChoice;
            //console.log(this.chosenHouseDepositChoice);

            if(this.chosenHouseDepositChoice === 1) {
              useBarometerStore().increaseScore(10);
            } else if (this.chosenHouseDepositChoice === 2) {
              useBarometerStore().increaseScore(10);
            } else if (this.chosenHouseDepositChoice === 3) {
              useBarometerStore().decreaseScore(20);
            }

            useNotificationStore().timeoutHouseDepositNotification();

            
        }
    }
})

export const useInvestmentPortfolioChoiceStore = defineStore({
    id: 'InvestmentPortfolioStore',
    state: () => ({
        ShareTotalAmounts: [0, 0, 0, 0, 0],
        TotalNumberOfShares: 0,
        ShareBarPercentages: [0, 0, 0, 0, 0],
        Share1BarPercentage: 0,
        Share2BarPercentage: 0,
        Share3BarPercentage: 0,
        Share4BarPercentage: 0,
        Share5BarPercentage: 0,
        totalInvested: 0,
    }),
    actions: {
        buyMoreShare(num, amount) {
            this.ShareTotalAmounts[num] = this.ShareTotalAmounts[num] + amount;
            this.TotalNumberOfShares = this.TotalNumberOfShares + amount;

            this.Share1BarPercentage = ((this.ShareTotalAmounts[0] / this.TotalNumberOfShares) * 100);
            this.Share2BarPercentage = ((this.ShareTotalAmounts[1] / this.TotalNumberOfShares) * 100);
            this.Share3BarPercentage = ((this.ShareTotalAmounts[2] / this.TotalNumberOfShares) * 100);
            this.Share4BarPercentage = ((this.ShareTotalAmounts[3] / this.TotalNumberOfShares) * 100);
            this.Share5BarPercentage = ((this.ShareTotalAmounts[4] / this.TotalNumberOfShares) * 100);

            //console.log(this.Share1BarPercentage, this.Share2BarPercentage, this.Share3BarPercentage, this.Share4BarPercentage, this.Share5BarPercentage);

            if(useGoalsStore().currentGoal === 6) {
              if(this.TotalNumberOfShares >= 10) {
                useGoalsStore().completedGoals = 6;
              }
            }
            

            useMoneyManageStore().workOutPortfolioValue()

        },

        sellShare(num, amount) {
            this.ShareTotalAmounts[num] = this.ShareTotalAmounts[num] - amount;
            this.TotalNumberOfShares = this.TotalNumberOfShares - amount;

            this.Share1BarPercentage = ((this.ShareTotalAmounts[0] / this.TotalNumberOfShares) * 100);
            this.Share2BarPercentage = ((this.ShareTotalAmounts[1] / this.TotalNumberOfShares) * 100);
            this.Share3BarPercentage = ((this.ShareTotalAmounts[2] / this.TotalNumberOfShares) * 100);
            this.Share4BarPercentage = ((this.ShareTotalAmounts[3] / this.TotalNumberOfShares) * 100);
            this.Share5BarPercentage = ((this.ShareTotalAmounts[4] / this.TotalNumberOfShares) * 100);

            useMoneyManageStore().workOutPortfolioValue()
        },

        sellAllShare(num) {
            this.TotalNumberOfShares = this.TotalNumberOfShares - this.ShareTotalAmounts[num];
            this.ShareTotalAmounts[num] = 0;

            this.Share1BarPercentage = ((this.ShareTotalAmounts[0] / this.TotalNumberOfShares) * 100);
            this.Share2BarPercentage = ((this.ShareTotalAmounts[1] / this.TotalNumberOfShares) * 100);
            this.Share3BarPercentage = ((this.ShareTotalAmounts[2] / this.TotalNumberOfShares) * 100);
            this.Share4BarPercentage = ((this.ShareTotalAmounts[3] / this.TotalNumberOfShares) * 100);
            this.Share5BarPercentage = ((this.ShareTotalAmounts[4] / this.TotalNumberOfShares) * 100);

            useMoneyManageStore().workOutPortfolioValue()
 
        }

    }
})


export const useGoalsStore = defineStore({
  id: "CurrentGoalsStore",
  state: () => ({
    currentGoal: 1,
    completedGoals: 0,
    holidayBudget: 0,
  }),
  actions: {
    completedGoal() {
      this.completedGoals = this.completedGoals + 1;
    },
    nextGoal() {
      this.currentGoal = this.currentGoal + 1;
      //console.log("current Goal: " + this.currentGoal);
    },

    setUpSpecificGoal(num) {
      this.currentGoal = num;
    },

    completeSpecificGoal(num) {
      this.completedGoals = num;
    }
  }
})

export const usePopUpStore = defineStore({
  id: 'PopUpStore',
  state: () => ({
    currentPopUp: 0,
    phonePlanChoice: 0,
  }),
  actions: {
    choosePhonePlan(num) {
      if(num === 1) {
        this.phonePlanChoice = 1;
        useMoneyManageStore().moneyInPocket = useMoneyManageStore().moneyInPocket - 0;
        useMoneyManageStore().monthlyOutGoingsSum = useMoneyManageStore().monthlyOutGoingsSum + 50;
        
      } else if (num === 2) {
        this.phonePlanChoice = 2;
        useMoneyManageStore().moneyInPocket = useMoneyManageStore().moneyInPocket - 300;
        useMoneyManageStore().monthlyOutGoingsSum = useMoneyManageStore().monthlyOutGoingsSum + 15;
      } else if (num === 3) {
        this.phonePlanChoice = 3;
        useMoneyManageStore().moneyInPocket = useMoneyManageStore().moneyInPocket - 800;
        useMoneyManageStore().monthlyOutGoingsSum = useMoneyManageStore().monthlyOutGoingsSum + 15;
      }
    }, 

    workDrinksChoice(num) {
      if(num === 1) {
        useMoneyManageStore().moneyInPocket = useMoneyManageStore().moneyInPocket - 100;
      } else if (num === 2) {
        useMoneyManageStore().moneyInPocket = useMoneyManageStore().moneyInPocket - 0;
      }
    },

    investmentOpportunityChoice(num) {
      if(num === 1) {
        useMoneyManageStore().moneyInPocket = useMoneyManageStore().moneyInPocket - 1500;
        useMoneyManageStore().chosenToTakeInvestment = true;
        console.log("Investment Choice yes: " + useMoneyManageStore().chosenToTakeInvestment);
      } else if (num === 2) {
        useMoneyManageStore().moneyInPocket = useMoneyManageStore().moneyInPocket - 0;
      }
    },

    InvestmentOpportunitySuccessful() {
      useMoneyManageStore().moneyInPocket = useMoneyManageStore().moneyInPocket + 4500;
    },

    HolidayBudgetChoice(num) {
      if(num === 1) {
        useGoalsStore().holidayBudget = 6000;
      } else if (num === 2) {
        useGoalsStore().holidayBudget = 2000;
      } else if (num === 3) {
        useGoalsStore().holidayBudget = 900;
      }
    },

    brokenLaptopChoice(num) {
      if(num === 1) {
        useMoneyManageStore().useEmergencyFund(1500);
      } else if(num === 2) {
        useMoneyManageStore().moneyInPocket = useMoneyManageStore().moneyInPocket = 1500;
      }
    }
  }
})


export const useBarometerStore = defineStore({
  id: 'barometerStore',
  state: () => ({
    arrowRotation: 180,
    barometerScore: 50,
    modulatedAngle: 0,
    glowColour: 'orange-glow',
    scoreColor: 'orange-score',
  }),
  actions: {
    decreaseScore(num) {
      let dec = num/100;
      let angle = 360 * dec;

      if((this.arrowRotation - angle) < 0) {
        let difference = (0 - angle) + this.arrowRotation;

        this.arrowRotation = this.arrowRotation - (angle + difference);

        //console.log("Difference:" + difference);
        //console.log("Angle:" + angle);
        //console.log("total:" + this.arrowRotation);
      } else {
        this.arrowRotation = this.arrowRotation - angle;
      }

      // work out responsibility score
      if((this.barometerScore - (100 * dec)) < 0) {
        let scoreDifference = (0 - (100 * dec)) + this.barometerScore;
        this.barometerScore = this.barometerScore - ((100 * dec) + scoreDifference);
      } else {
        this.barometerScore = this.barometerScore - (100 * dec);
      }
    
      //this.barometerScore = this.barometerScore + num;
      this.modulatedAngle = this.arrowRotation % 360;
      // work out the glow colour based on the segment
      this.workOutGlowColour(this.modulatedAngle);
    },

    increaseScore(num) {
      // work out the angle that the arrow needs to move based on the percentage given
      let dec = num/100;
      let angle = 360 * dec;

      if((this.arrowRotation + angle) > 360) {
        let difference = (this.arrowRotation + angle) - 360;

        this.arrowRotation = this.arrowRotation + (angle - difference);

        //console.log("Difference:" + difference);
        //console.log("Angle:" + angle);
        //console.log("total:" + this.arrowRotation);
      } else {
        this.arrowRotation = this.arrowRotation + angle;
      }

      // work out responsibility score
      if((this.barometerScore + (100 * dec)) > 100) {
        let scoreDifference = (this.barometerScore + (100 * dec)) - 100;
        this.barometerScore = this.barometerScore + ((100 * dec) - scoreDifference);
      } else {
        this.barometerScore = this.barometerScore + (100 * dec);
      }
    
      //this.barometerScore = this.barometerScore + num;
      this.modulatedAngle = this.arrowRotation % 361;
      // work out the glow colour based on the segment
      this.workOutGlowColour(this.modulatedAngle);

      console.log(this.modulatedAngle)
    },

    workOutGlowColour(posOfArrow) {
      if (posOfArrow === 360) {
        this.glowColour = 'green-glow'
        this.scoreColor = 'green-score'
      } else if (posOfArrow === 0) {
        this.glowColour = 'red-glow'
        this.scoreColor = 'red-score'
      } else if ((posOfArrow >= 0) && (posOfArrow < 130))  {
        this.glowColour = 'red-glow'
        this.scoreColor = 'red-score'
      } else if ((posOfArrow >= 130) && (posOfArrow < 281)) {
        this.glowColour = 'orange-glow'
        this.scoreColor = 'orange-score'
      } else if ((posOfArrow >= 281) && (posOfArrow <= 360)) {
        this.glowColour = 'green-glow'
        this.scoreColor = 'green-score'
      }

    }

  }
})

export const useNotificationStore = defineStore({
  id: "notificationStore",
  state: () => ({
    phonePlanNotificationShow: false, 
    emergencyFundNotificationShow: false,
    incomeStreamsNotificationShow: false,
    houseDepositNotificationShow: false,
  }),
  actions: {
    timeoutGameNotification() {
      this.phonePlanNotificationShow = true;

      setTimeout(() => {
        this.phonePlanNotificationShow = false;
      }, 5000);
      
    },

    timeoutEmergencyFundNotification() {
      this.emergencyFundNotificationShow = true;

      setTimeout(() => {
        this.emergencyFundNotificationShow = false;
      }, 5000);
      
    },

    timeoutIncomeStreamsNotification() {
      this.incomeStreamsNotificationShow = true;

      setTimeout(() => {
        this.incomeStreamsNotificationShow = false;
      }, 5000);
      
    },

    timeoutHouseDepositNotification() {
      this.houseDepositNotificationShow = true;

      setTimeout(() => {
        this.houseDepositNotificationShow = false;
      }, 5000);
      
    },
  }
})
