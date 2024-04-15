import { defineStore } from "pinia";
import { useMoneyManageStore } from './MoneyStore'

export const useMainGameplayNavigationStore = defineStore({
  id: "MainGameNavigationStore",
  state: () => ({
    mainGameComponentsUnlocked: 7,
    currentPage: 18,
  }),
  actions: {
    navigateToPage(num) {
      this.currentPage = num;
      console.log(this.currentPage);
    },

    unlockComponent() {
      this.mainGameComponentsUnlocked = this.mainGameComponentsUnlocked + 1;
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

      console.log(YCPerc);
    },

    confirmCurrentlySelectedPensionChoice() {
      this.chosenPensionChoice = this.currentlySelectedPensionChoice;

      console.log(this.chosenPensionChoice);
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

      console.log(
        "Chosen pension choice: " + this.chosenPensionInvestmentChoice
      );
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

      console.log(this.currentlySelectedEmergencyFundChoice);
    },

    confirmCurrentlySelectedEmergencyFundChoice() {
      this.chosenEmergencyFundChoice =
        this.currentlySelectedEmergencyFundChoice;

      console.log(this.chosenEmergencyFundChoice);
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
    },

    confirmIncomeStreamChoice() {
      this.chosenIncomeStreamChoice = this.currentlySelectedIncomeStreamChoice;

      console.log(this.chosenIncomeStreamChoice)
    },

    confirmOnlineStoreName(string) {
        this.onlineStoreName = string;
    },

    confirmPodcastName(string) {
        this.podcastName = string;
    },

    confirmBarChoiceName(string) {
        this.barChoiceName = string;
        console.log(this.barChoiceName)
    },

    confirmSocialMediaUsername(string) {
        this.socialMediaUsername = string;
    },

    confirmFreelanceSkill(string) {
        this.freelanceChosenSkill = string;
        console.log(this.freelanceChosenSkill)
    }
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

        updateCurrentlySelectedHouseDepositChoice(name) {
            this.currentlySelectedHouseDepositChoice = name;
            console.log(this.currentlySelectedHouseDepositChoice);
        },

        confirmHouseDepositChoice() {
            this.chosenHouseDepositChoice = this.currentlySelectedHouseDepositChoice;
            console.log(this.chosenHouseDepositChoice);
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

            console.log(this.Share1BarPercentage, this.Share2BarPercentage, this.Share3BarPercentage, this.Share4BarPercentage, this.Share5BarPercentage);

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
      console.log(this.currentGoal);
    },
  }
})

export const usePopUpStore = defineStore({
  id: 'PopUpStore',
  state: () => ({
    currentPopUp: 6,
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
      } else if (num === 2) {
        useMoneyManageStore().moneyInPocket = useMoneyManageStore().moneyInPocket - 0;
      }
    },

    InvestmentOpportunitySuccessful() {
      useMoneyManageStore().moneyInPocket = useMoneyManageStore().moneyInPocket + 4500;
    },

    HolidayBudgetChoice(num) {
      if(num === 1) {
        useGoalsStore().holidayBudget = 4000;
      } else if (num === 2) {
        useGoalsStore().holidayBudget = 1000;
      } else if (num === 3) {
        useGoalsStore().holidayBudget = 300;
      }
    }
  }
})
