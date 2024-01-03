<!-- Template for displaying the home the player has chosen to live

The parent of this component:
- Character Stats Sidebar

-->
<script setup>
    // import stores
    import { registerLivingOptionChoiceStore } from '../../store/InitialGameChoicesStore'
    const registerLivingChoice = registerLivingOptionChoiceStore()
</script>
<template>
    <div className="characterstats-set livingstatsdisplay">
        <h4>Living:</h4>
        <!--Use values from the store -->
        <p>{{registerLivingChoice.selectedLivingOptionInfo.street}}, <br/> {{registerLivingChoice.selectedLivingOptionInfo.district}}</p>
        <h5><span className="colour-pink">Rent: </span>£{{registerLivingChoice.selectedLivingOptionInfo.rentPrice}}pm</h5>
        <h5 class="commute-cost"><span className="colour-pink">Commute Cost: </span>£{{registerLivingChoice.selectedLivingOptionInfo.commutePrice}}</h5>
        <button className="moveout-button">Move Out</button>
        <hr />
    </div>
</template>
<script>
// Export component data
export default {
    name: 'CurrentlyLivingDisplay',
}
</script>