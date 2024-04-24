<template>
    <div :class="manageBarometer.glowColour" class="responsibility-barometer-wrapper">
            <div class="barometer-pie-container">
                <img src="/wheelColours.PNG"/>
                <div class="arrow-rotated-container">
                    <img :style="{ transform: 'rotate(' + manageBarometer.arrowRotation + 'deg)' }" class="arrow" src="/Arrow.PNG">
                </div>
            </div> 
    </div>
    <div class="responsibility-score">
        <p>Responsibility Score: {{ manageBarometer.barometerScore }}%</p>
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