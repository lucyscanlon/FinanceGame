import { defineStore } from "pinia"

export const usePensionChoicesStore = defineStore({
    id: 'PensionChoicesStore',
    state: () => ({
        selectedActivePensionChoice: 0,
        currentlySelectedPensionChoice: [],
        chosenPensionChoice: []
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
        }
    }
    
})