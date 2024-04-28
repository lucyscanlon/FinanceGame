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

        goalCompleted() {
            const audio = new Audio("./GoalCompleted.mp3");
            audio.play();
        },

        addButton() {
            const audio = new Audio("./AddButton.mp3");
            audio.play();
        },

        WithdrawButton() {
            const audio = new Audio("./WithdrawButton.mp3");
            audio.play();
        },

        EndOfGame() {
            const audio = new Audio("./EndOfGame.mp3");
            audio.play();
        },

        StartOfGame() {
            const audio = new Audio("./startGame.mp3");
            audio.play();
        },

        bellSound() {
            const audio = new Audio("./Bell.mp3");
            audio.play();
        },

    }

})