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
        <LivingOptionsDisplay streetAddress="27 Pinecrest Avenue" districtDesc="Riverside District" homeDesc="A room in a shared house, not too far from work" :rent=450 :commute=1 classtag="pinecrest27" deposit="562.50"></LivingOptionsDisplay>
        <LivingOptionsDisplay streetAddress="19 Rodeo Square" districtDesc="Nebula Plaza" homeDesc="A luxury apartment, the other side of town" :rent=650 :commute=2 classtag="rodeo19" deposit="812.50"></LivingOptionsDisplay>
        <LivingOptionsDisplay streetAddress="Apt E1, Harmony Lane" districtDesc="Arts Quarter" homeDesc="A standard apartment, a walkable distance to work" :rent=550 :commute=0 classtag="harmonyE1" deposit="687.50"></LivingOptionsDisplay>
        <LivingOptionsDisplay streetAddress="32 Brickyard Lane" districtDesc="Industrial Quarter" homeDesc="A standard apartment, the other side of town" :rent=500 :commute=2 classtag="brickyard32" deposit="625"></LivingOptionsDisplay>
        <div class="mapdisplay-gametips-wrapper">
            <marquee>
                <span class="marquee-padding">Choose a place to call your new home.</span>
                <span class="marquee-padding">Remember to stick to the 30-35% rule.</span>
                <span class="marquee-padding">35% of your monthly income after tax is: £599.14</span> 
            </marquee>
        </div>
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