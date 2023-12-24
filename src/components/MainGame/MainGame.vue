<!-- Template for the main game container 

Elements that will be inside this container include:
- The map display

-->


<template>
    <div class="maingame-wrapper">
        <div class="gameplay-topbanner-wrapper">
               <div class="current-date-wrapper">
                        <p>Current Date: <span class="colour-white">01/01/2023</span></p>
                    </div>
                    <div class="payday-date-wrapper">
                        <p>Payday: <span class="colour-white">The last day of the month</span></p>
                    </div>
            </div>
        <RentInformationDisplay v-if="livingOptions.livingOptionsGameStage === 0"></RentInformationDisplay>
        <MapDisplay v-if="livingOptions.livingOptionsGameStage === 1"></MapDisplay>
        <div className="gameplay-bottombanner-wrapper">
            <div className="monthly-outgoings-wrapper">
                <p>Total monthly outgoings: <span className="colour-white">£0</span></p>
             </div>
        </div>

    </div>

    
</template>

<script setup>

import { useLivingOptionsStore } from '../../store/LivingOptionsStore'

const livingOptions = useLivingOptionsStore()

</script>

<script>

import MapDisplay from './MapLayout.vue';
import RentInformationDisplay from './RentIntroductionInfo.vue';

export default {
    name: 'MainGameWrapper',
    components: {
        MapDisplay,
        RentInformationDisplay,
    }
}

</script>