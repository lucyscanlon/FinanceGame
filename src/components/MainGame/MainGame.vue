<!-- Template for the main game container 

Elements that will be inside this container include:
- The map display

-->


<template>
    <div class="maingame-wrapper">
        <div className="gameplay-topbanner-wrapper">
               <div className="current-date-wrapper">
                        <p>Current Date: <span className="colour-white">01/01/2023</span></p>
                    </div>
                    <div className="payday-date-wrapper">
                        <p>Payday: <span className="colour-white">The last day of the month</span></p>
                    </div>
            </div>
        <MapDisplay></MapDisplay>
        <div className="gameplay-topbanner-wrapper">
               <div className="current-date-wrapper">
                        <p>Current Date: <span className="colour-white">01/01/2023</span></p>
                    </div>
                    <div className="payday-date-wrapper">
                        <p>Payday: <span className="colour-white">The last day of the month</span></p>
                    </div>
            </div>

    </div>

    
</template>

<script>

import MapDisplay from './MapLayout.vue';

export default {
    name: 'MainGameWrapper',
    components: {
        MapDisplay,
    }
}

</script>