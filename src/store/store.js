import { defineStore } from "pinia"

export const useMoneyManageStore = defineStore({
    id: 'moveMoney',
    state: () => ({
        moneyInBank: 2000,
        moneyInPocket: 1000,
    }),
    actions: {
        removeFromBank(val) {
            this.moneyInBank = this.moneyInBank - val;
            this.moneyInPocket = this.moneyInPocket + val;
        },

        addToBank(val) {
            this.moneyInBank = this.moneyInBank + val;
            this.moneyInPocket = this.moneyInPocket - val;
        }
    }

})