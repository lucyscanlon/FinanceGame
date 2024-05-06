<!-- Template for display the four living options on a map

The parent of this component:
- MainGame

The children of this component:
- LivingOptionsDisplay

-->
<template>
    <div class="map-display-wrapper">
        <div class="map-work-location-wrapper">
            <div className="map-mapicon"><font-awesome-icon icon="fa-solid fa-map-pin" /></div>
            <div className="map-work-location-circle">
                <p>You work here</p>
            </div>
        </div>
        <div class="mapdisplay-flex-container">
            <!-- Use props to display each choice with the template -->
            <LivingOptionsDisplay streetAddress="Apt E1, Harmony Lane" districtDesc="Arts Quarter" homeDesc="A standard apartment, a walkable distance to work" :rent=600 :commute=0 classtag="harmonyE1" :deposit=750.00 :increasePerc=10 :decreasePerc=0></LivingOptionsDisplay>
            <LivingOptionsDisplay streetAddress="32 Brickyard Lane" districtDesc="Industrial Quarter" homeDesc="A standard apartment, the other side of town" :rent=580 :commute=2 classtag="brickyard32" :deposit=725 :increasePerc=0 :decreasePerc=20></LivingOptionsDisplay>
            <LivingOptionsDisplay streetAddress="27 Pinecrest Avenue" districtDesc="Riverside District" homeDesc="A room in a shared house, not too far from work" :rent=500 :commute=1 classtag="pinecrest27" :deposit=625.00 :increasePerc=10 :decreasePerc=0></LivingOptionsDisplay>
            <LivingOptionsDisplay streetAddress="19 Rodeo Square" districtDesc="Nebula Plaza" homeDesc="A luxury apartment, the other side of town" :rent=700 :commute=2 classtag="rodeo19" :deposit=812.50 :increasePerc=0 :decreasePerc=30></LivingOptionsDisplay>
        </div>
    </div>
</template>
<script>
    // import stores
    import LivingOptionsDisplay from './LivingOptionsDisplay.vue';

    // export component data
    export default {
        name: 'MapDisplay',
        components: {
             LivingOptionsDisplay,
        }
    }
</script>