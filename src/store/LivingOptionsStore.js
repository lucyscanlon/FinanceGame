
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