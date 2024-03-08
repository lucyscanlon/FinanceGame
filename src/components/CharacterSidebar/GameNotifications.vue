<!-- Template for displaying the home the player has chosen to live

The parent of this component:
- Character Stats Sidebar

-->
<script setup>
    import { useLivingOptionsStore } from '../../store/InitialGameChoicesStore'

    const livingOptions = useLivingOptionsStore()

</script>
<template>
    <div class="characterstats-set">
        <h4>Notifications</h4>
        <div class="characterstats-notifications-panel">
            <div class="notifications-padding">
                        <div :class="(livingOptions.livingOptionsGameStage > 0) ? 'goal-notif-completed' : 'game-notification-container'" class=" notifications-current-focus">
                            <p><span class="current-goal-notif">Current Goal:</span> Accept your job offer!</p>
                        </div>
                        <div class="game-notification-container">
                            <p>Use the UK Tax calculator to see tax contributions for different incomes</p>
                        </div>
                        <div :class="(livingOptions.livingOptionsGameStage > 1) ? 'goal-notif-completed' : 'game-notification-container'" class="game-notification-container">
                            <p>Your bills are due</p>
                        </div>
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
}
</script>