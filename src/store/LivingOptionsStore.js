
import { defineStore } from "pinia"

export const useLivingOptionsStore = defineStore({
    id: 'pickLivingOption',
    state: () => ({
        livingLocationChosen: false,
    }),
    actions: {
        confirmLivingOptionChosen() {
            this.livingLocationChosen = true;
        }
    }
})


export const registerLivingOptionChoiceStore = defineStore({
    id: 'registerLivingOption',
    state: () => ({
        selectedLivingOptionInfo: [],
    }),
    actions: {
        addLivingOptionInfo(streetAd, districtInfo, rent) {
            this.selectedLivingOptionInfo = {
                street: streetAd,
                district: districtInfo,
                rentPrice: rent,
            }
        }
    }
})