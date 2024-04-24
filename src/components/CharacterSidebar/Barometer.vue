<template>
    <div :class="manageBarometer.glowColour" class="responsibility-barometer-wrapper">
            <div class="barometer-pie-container">
                <img class="wheelimage" src="/wheelColours.PNG"/>
                <div class="arrow-rotated-container">
                    <img :style="{ transform: 'rotate(' + manageBarometer.arrowRotation + 'deg)' }" class="arrow" src="/Arrow2.PNG">
                </div>
            </div> 
    </div>
    <div class="responsibility-score">
        <p>Responsibility Score: <span :class="manageBarometer.scoreColor">{{ manageBarometer.barometerScore }}%</span></p>
    </div>
</template>
<script setup>

    import { useBarometerStore } from '../../store/MainGameChoicesStore'
    const manageBarometer = useBarometerStore()


</script>
<script>

// export component data
export default {
    name: 'BarometerComponent',
}

</script>