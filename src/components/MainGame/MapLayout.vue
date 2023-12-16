<!-- Template for the map layout

Components that will be inside this container include:
- living options information display components

-->


<template>
    <div class="map-display-wrapper">
        <LivingOptionsDisplay streetAddress="27 Poppy Drive" districtDesc="The Marble District" homeDesc="A standard apartment, not too far from work" rent=450 commute=1 classtag="poppy27"></LivingOptionsDisplay>
        <LivingOptionsDisplay streetAddress="19 Rodeo Avenue" districtDesc="The Glass District" homeDesc="A luxury apartment, the other side of town" rent=650 commute=2 classtag="rodeo19"></LivingOptionsDisplay>
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