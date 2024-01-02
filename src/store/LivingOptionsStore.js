
import { defineStore } from "pinia"

export const useLivingOptionsStore = defineStore({
    id: 'pickLivingOption',
    state: () => ({
        livingOptionsGameStage: 0,
    }),
    actions: {
        livingOptionsNextStageOfGame() {
            this.livingOptionsGameStage = this.livingOptionsGameStage + 1;
            console.log(this.livingOptionsGameStage);
        }
    }
})


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

            console.log(this.selectedLivingOptionInfo.commutePrice);
        }
    }
})

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
            
        }
    }

})

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

            console.log(this.currentlySelectedTransportChoice);
        }, 

        confirmChosenTransport() {
            this.chosenTransportChoice = this.currentlySelectedTransportChoice;

            console.log(this.chosenTransportChoice);
        },

        confirmTotalTransportCost(val) {
            this.totalTransportCost = val;
        }

    }
})