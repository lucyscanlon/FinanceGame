import { defineStore } from "pinia"

export const useMainGameplayNavigationStore = defineStore({
    id: 'MainGameNavigationStore',
    state: () => ({
        mainGameComponentsUnlocked: 2,
        currentPage: 3,
    }),
    actions: {
        navigateToPage(num) {
            this.currentPage = num;
            console.log(this.currentPage);
        },

        unlockComponent() {
            this.mainGameComponentsUnlocked = this.mainGameComponentsUnlocked + 1;

        },
    }
})






export const usePensionChoicesStore = defineStore({
    id: 'PensionChoicesStore',
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

        updateCurrentlySelectedPensionChoice(YCPerc, YCAmount, ECPerc, ECAmount, TCPerc, TCAmount) {
            this.currentlySelectedPensionChoice = {
                YContPercentage: YCPerc,
                YContAmount: YCAmount,
                EContPercentage: ECPerc,
                EContAmount: ECAmount,
                TContPercentage: TCPerc,
                TContAmount: TCAmount,
            }

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
            this.chosenPensionInvestmentChoice = this.currentlySelectedPensionInvestmentChoice;

            console.log("Chosen pension choice: " + this.chosenPensionInvestmentChoice);
        }
    }
    
})