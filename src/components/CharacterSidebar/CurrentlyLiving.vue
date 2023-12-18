<!-- Template for the currently living display component -->
<script setup>

import { registerLivingOptionChoiceStore } from '../../store/LivingOptionsStore'

const registerLivingChoice = registerLivingOptionChoiceStore()

</script>

<template>
    <div className="characterstats-set livingstatsdisplay">
        <h4>Currently Living:</h4>
        <p>{{registerLivingChoice.selectedLivingOptionInfo.street}}, <br/> {{registerLivingChoice.selectedLivingOptionInfo.district}}</p>
        <h5><span className="colour-pink">Rent: </span>£{{registerLivingChoice.selectedLivingOptionInfo.rentPrice}}</h5>
        <button className="moveout-button">Move Out</button>
        <hr />
    </div>

</template>

<script>
export default {
    name: 'CurrentlyLivingDisplay',
}
</script>