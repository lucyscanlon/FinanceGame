import { defineStore } from "pinia";

export const useMainGameplayNavigationStore = defineStore({
  id: "MainGameNavigationStore",
  state: () => ({
    mainGameComponentsUnlocked: 5,
    currentPage: 7,
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
