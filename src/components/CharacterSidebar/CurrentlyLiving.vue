<!-- Template for displaying the home the player has chosen to live

The parent of this component:
- Character Stats Sidebar

-->
<script setup>
    // import stores
    import { registerLivingOptionChoiceStore } from '../../store/InitialGameChoicesStore'
    import { useMainGameplayNavigationStore } from '../../store/MainGameChoicesStore.js'
    const registerLivingChoice = registerLivingOptionChoiceStore()
    const manageMainGameNav = useMainGameplayNavigationStore()

    
</script>
<template>
    <div className="characterstats-set livingstatsdisplay">
        <h4>Living:</h4>
        <!--Use values from the store -->
        <p>{{registerLivingChoice.selectedLivingOptionInfo.street}}, <br/> {{registerLivingChoice.selectedLivingOptionInfo.district}}</p>
        <div class="livingstats-display-rent-commute-cost-container">
            <div class="livingstats-rent-display">
                <p>Rent:</p>
                <p>Commute Costs:</p>
            </div>
            <div class="livingstats-commute-display">
                <p>£{{registerLivingChoice.selectedLivingOptionInfo.rentPrice}}pm</p>
                <p>£{{registerLivingChoice.selectedLivingOptionInfo.commutePrice}}</p>
            </div>
        </div>
        <button @click="manageMainGameNav.navigateToPage(19)" className="moveout-button">Move Out</button>
        <hr />
    </div>
</template>
<script>
// Export component data
export default {
    name: 'CurrentlyLivingDisplay',
}
</script>