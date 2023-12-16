<!-- Template for the map layout

Components that will be inside this container include:
- living options information display components

-->


<template>
    <div class="map-display-wrapper">
        <LivingOptionsDisplay streetAddress="27 Poppy Drive" districtDesc="The Marble District" homeDesc="A standard apartment, not too far from work" rent=450 commute=1></LivingOptionsDisplay>

    </div>
</template>

<script>

import LivingOptionsDisplay from './LivingOptionsDisplay.vue';

export default {
    name: 'MapDisplay',
    components: {
        LivingOptionsDisplay,
    }
}

</script>