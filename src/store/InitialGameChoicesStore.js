// stores that hold values and methods for the initial stage of the game
// in which must make a series of decisions that affect their monthly outgoings

import { defineStore } from "pinia"

// This controls which stage of the game the player is in
// It is increased each time a user confirms their decision 
// taking them to next game stage
export const useLivingOptionsStore = defineStore({
    id: 'pickLivingOption',
    state: () => ({
        livingOptionsGameStage: 0,
    }),
    actions: {
        livingOptionsNextStageOfGame() {
            this.livingOptionsGameStage = this.livingOptionsGameStage + 1;
        }
    }
})

// This holds the information of the chosen living option to be used for the sidebar
export const registerLivingOptionChoiceStore = defineStore({
    id: 'registerLivingOption',
    state: () => ({
        selectedLivingOptionInfo: [],
    }),
    actions: {
        addLivingOptionInfo(streetAd, districtInfo, rent, commute) {
            this.selectedLivingOptionInfo = {
                street: streetAd,
                district: districtInfo,
                rentPrice: rent,
                commutePrice: commute,

            }

        }
    }
})


// This store holds values to add functionality to the supermarket choices section
// SelectedActiveSupermarket adds an active class to the clicked supermarket choice. 
// When a choice is clicked it adds it to currentlySelectedSupermarketInfo
// When the user presses the button to confirm their choice, this info is passed to 
// chosenSupermarketInfo
export const supermarketChoiceStore = defineStore({
    id: 'supermarketChoiceOptionsStore',
    state: () => ({
        selectedActiveSupermarket: 0,
        currentlySelectedSupermarketInfo: [],
        chosenSupermarketInfo: []
    }),
    actions: {
        changeSelectedSupermarketNumber(num) {
            this.selectedActiveSupermarket = num;
        },

        updateCurrentlyChosenSupermarket(SName, SDesc, SCost, STCost) {
            this.currentlySelectedSupermarketInfo = {
                SMName: SName,
                SMDesc: SDesc,
                SMCost: SCost,
                SMTCost: STCost,
            }
        },

        confirmSupermarketChoice() {
            this.chosenSupermarketInfo = this.currentlySelectedSupermarketInfo;

            console.log(this.chosenSupermarketInfo);
            
        }
    }

})

// holds values for the players transport method choice.
// selectedActiveTransportChoice adds an active class to a clicked transport option.
// the clicked components info is passed to currentlySelectedTransportChoice. 
// The transport info is then passed to ChosenTransportChoice when the user presses the button to
// confirm their selection.
// this info is used for the sidebar
export const transportChoiceStore = defineStore({
    id: 'transportChoiceOptionsStore',
    state: () => ({
        selectedActiveTransportChoice: 0,
        currentlySelectedTransportChoice: [],
        chosenTransportChoice: [],
        totalTransportCost: 0,
    }),
    actions: {
        changedSelectedTransportChoice(num) {
            this.selectedActiveTransportChoice = num;
        },

        updatedCurrentlyChosenTransport(name, desc, total) {
            this.currentlySelectedTransportChoice = {
                TName: name,
                TDesc: desc,
                TTotal: total,

            }

        }, 

        confirmChosenTransport() {
            this.chosenTransportChoice = this.currentlySelectedTransportChoice;

        },


    }
})