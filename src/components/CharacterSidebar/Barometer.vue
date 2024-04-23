<template>
    <div class="responsibility-barometer-wrapper">
            <div class="barometer-pie-container">
                <img src="/BarometerPieChart.PNG"/>
                <div class="arrow-container">
                    <img :style="{ transform: 'rotate(' + manageBarometer.arrowRotation + 'deg)' }" src="/Arrow.PNG"/>
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