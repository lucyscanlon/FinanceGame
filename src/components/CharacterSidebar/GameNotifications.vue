<!-- Template for displaying the home the player has chosen to live

The parent of this component:
- Character Stats Sidebar

-->
<script setup>

</script>
<template>
    <div class="characterstats-set">
        <h4>Notifications</h4>
        <div class="characterstats-notifications-panel">
            <div class="notifications-padding">
                <div class="game-notification-container notifications-current-focus">
                    <p><span class="colour-pink">Current Goal:</span> Pay your bills on time!</p>
                </div>
                <div class="game-notification-container">
                    <p>Your rent and bills are due</p>
                </div>
            </div>
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