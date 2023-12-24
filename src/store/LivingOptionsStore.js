
import { defineStore } from "pinia"

export const useLivingOptionsStore = defineStore({
    id: 'pickLivingOption',
    state: () => ({
        livingLocationChosen: false,
        beginChoosingLivingOptions: false,
    }),
    actions: {
        confirmLivingOptionChosen() {
            this.livingLocationChosen = true;
        },
        
        beginToChoseLivingOption() {
            this.beginChoosingLivingOptions = true;
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