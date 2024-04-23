<template>
    <div class="responsibility-barometer-wrapper">
            <div class="barometer-pie-container">
                <img src="/BarometerPieChart.PNG"/>
                <div class="arrow-container">
                    <img :style="{ transform: 'rotate(' + arrowRotation + 'deg)' }" src="/Arrow.PNG"/>
                </div>
            </div> 
    </div>
    <div class="responsibility-score">
        <p>Responsibility Score: {{ responsibilityScore }}%</p>
    </div>
</template>
<script setup>


</script>
<script>

// export component data
export default {
    name: 'BarometerComponent',
    data() {
      return {
        arrowRotation: 300,
        responsibilityScore: 50,
      }
    }
}

</script>