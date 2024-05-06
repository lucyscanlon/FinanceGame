<!-- Template for displaying the responsibility barometer

The parent of this component:
- CharacterStatsSidebar

The children of this component:
- none

-->
<template>
    <!-- Binded class to display the correct glow colour of the barometer -->
    <div :class="manageBarometer.glowColour" class="responsibility-barometer-wrapper">
        <div class="barometer-pie-container">
            <!-- Image for the background of the barometer - segmented colours -->
            <img class="wheelimage" alt="A background image for the barometer displaying different colour segments" src="/wheelColours.PNG"/>
            <div class="arrow-rotated-container">
                <!-- Rotate the arrow as the pinia store value changes -->
                <img :style="{ transform: 'rotate(' + manageBarometer.arrowRotation + 'deg)' }" class="arrow" src="/Arrow2.PNG">
            </div>
        </div> 
    </div>
    <!-- Display the responsibility score - also with a binded colour class -->
    <div class="responsibility-score">
        <p>Responsibility Score: <span :class="manageBarometer.scoreColor">{{ manageBarometer.barometerScore }}%</span></p>
    </div>
</template>
<script setup>

    // import pinia stores
    import { useBarometerStore } from '../../store/MainGameChoicesStore'
    const manageBarometer = useBarometerStore()

</script>
<script>

// export component data
export default {
    name: 'BarometerComponent',
}

</script>