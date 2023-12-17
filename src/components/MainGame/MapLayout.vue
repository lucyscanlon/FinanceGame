<!-- Template for the map layout

Components that will be inside this container include:
- living options information display components

-->


<template>
    <div class="map-display-wrapper">
        <div class="map-work-location-wrapper">
            <div className="map-mapicon"><font-awesome-icon icon="fa-solid fa-map-pin" /></div>
            <div className="map-work-location-circle">
                <p>You work here</p>
            </div>
        </div>
        <LivingOptionsDisplay streetAddress="27 Pinecrest Avenue" districtDesc="Riverside District" homeDesc="A standard apartment, not too far from work" :rent=450 :commute=1 classtag="pinecrest27"></LivingOptionsDisplay>
        <LivingOptionsDisplay streetAddress="19 Rodeo Square" districtDesc="Nebula Plaza" homeDesc="A luxury apartment, the other side of town" :rent=650 :commute=2 classtag="rodeo19"></LivingOptionsDisplay>
        <LivingOptionsDisplay streetAddress="Apt E1, Harmony Lane" districtDesc="Arts Quarter" homeDesc="A standard apartment, a walkable distance to work" :rent=550 :commute=0 classtag="harmonyE1"></LivingOptionsDisplay>
        <LivingOptionsDisplay streetAddress="32 Brickyard Lane" districtDesc="Industrial Quarter" homeDesc="A standard apartment, the other side of town" :rent=500 :commute=2 classtag="brickyard32"></LivingOptionsDisplay>
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