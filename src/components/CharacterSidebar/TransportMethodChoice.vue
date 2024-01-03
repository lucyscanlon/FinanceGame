<!-- Template for the currently living display component -->
<script setup>
import { transportChoiceStore } from '../../store/InitialGameChoicesStore.js';

const manageTransport = transportChoiceStore();

</script>

<template>
    <div className="characterstats-set currentlyshoppingatdisplay">
        <h4>Transport Method:</h4>
        <h5>{{manageTransport.chosenTransportChoice.TName}}</h5>
        <p>{{manageTransport.chosenTransportChoice.TDesc}}</p>
        <h5><span className="colour-pink">Cost: </span>£{{ manageTransport.chosenTransportChoice.TTotal }}</h5>
        <div class="currentlyshopping-wrap">
            <button className="moveout-button">Change</button>
        </div>
        <hr />
    </div>

</template>

<script>
export default {
    name: 'TransportMethodSidebar',
}
</script>