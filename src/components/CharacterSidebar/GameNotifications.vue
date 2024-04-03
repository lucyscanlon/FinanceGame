<!-- Template for displaying the home the player has chosen to live

The parent of this component:
- Character Stats Sidebar

-->
<script setup>
import { useLivingOptionsStore } from '../../store/InitialGameChoicesStore'
    import { useMainGameplayNavigationStore } from '../../store/MainGameChoicesStore.js'

    const livingOptions = useLivingOptionsStore()
    const manageMainGameNav = useMainGameplayNavigationStore()

</script>
<template>
    <div class="characterstats-set">
        <h4>Notifications</h4>
        <div class="characterstats-notifications-panel">
            <div v-if="manageMainGameNav.currentPage === 1" class="notifications-padding">
                        <div :class="(manageMainGameNav.currentPage > 1) ? 'goal-notif-completed' : 'game-notification-container'" class="game-notification-container">
                            <p>Accept your job offer!</p>
                        </div>
                        <div :class="(manageMainGameNav.currentPage > 1) ? 'goal-notif-completed' : 'game-notification-container'" class="game-notification-container">
                            <p>Use the UK Tax calculator to see tax contributions for different incomes</p>
                        </div>
                        <!--<div :class="(manageMainGameNav.currentPage > 1) ? 'goal-notif-completed' : 'game-notification-container'" class="game-notification-container">
                            <p>Your bills are due</p>
                        </div>-->
            </div>
            <div v-if="manageMainGameNav.currentPage === 2" class="notifications-padding">
                        <div :class="(manageMainGameNav.currentPage > 2) ? 'goal-notif-completed' : 'game-notification-container'" class="game-notification-container">
                            <p>Set up a bank account</p>
                        </div>
                        <!--<div :class="(manageMainGameNav.currentPage > 1) ? 'goal-notif-completed' : 'game-notification-container'" class="game-notification-container">
                            <p>Your bills are due</p>
                        </div>-->
            </div>
            <div v-if="manageMainGameNav.currentPage === 4" class="notifications-padding">
                        <div :class="(manageMainGameNav.currentPage > 4) ? 'goal-notif-completed' : 'game-notification-container'" class="game-notification-container">
                            <p>Choose a place to call home</p>
                        </div>
                        <div :class="(manageMainGameNav.currentPage > 4) ? 'goal-notif-completed' : 'game-notification-container'" class="game-notification-container">
                            <p>Remember to stick to the 30-35% rule</p>
                        </div>
                        <div :class="(manageMainGameNav.currentPage > 4) ? 'goal-notif-completed' : 'game-notification-container'" class="game-notification-container">
                            <p>35% of your income after tax is: £599.14</p>
                        </div>
                        <!--<div :class="(manageMainGameNav.currentPage > 1) ? 'goal-notif-completed' : 'game-notification-container'" class="game-notification-container">
                            <p>Your bills are due</p>
                        </div>-->
            </div>
        </div>
        <div v-if="livingOptions.livingOptionsGameStage > 6" class="pay-monthly-outgoings-container pay-monthly-inactive">
                <button>Pay monthly outgoings</button>
            </div>
        <hr>
    </div>
</template>
<script>
// Export component data
export default {
    name: 'GameNotificationPanel',
    data() {
        return {
            currentPageVar: useMainGameplayNavigationStore().currentPage,
        }
    },
    watch: {
        currentPageVar(newValue, oldValue) {
            if(newValue !== oldValue) {
                console.log("watched")
            }
        }
    }
}
</script>