import { defineStore } from "pinia"

export const useSoundEffectsStore = defineStore({
    id: 'SoundEffectsStore',
    state: () => ({

    }),
    actions: {
        playGotPaidSound() {
            const audio = new Audio("./GotPaid.mp3");
            audio.play();
        },
        playClickSound() {
            const audio = new Audio("./click4.mp3");
            audio.play();
        },

        playBillsDue() {
            const audio = new Audio("./BillsDue.mp3");
            audio.play();
        },
    }

})