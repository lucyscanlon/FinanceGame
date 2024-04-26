<!-- Template for displaying the text information introducing rent to the player

The parent of this component:
- Main game

-->
<template>
    <div class="endpage-title-container">
        <h1>End of game!</h1>
        <p>Congratulations you have completed the game</p>
    </div>
    <div class="endpage-content-container">
        <div class="endpage-responsibilitywheel-container">
            <div class="endpage-wheel-panel">
                <div :class="manageBarometer.glowColour" class="responsibility-barometer-wrapper">
                    <div class="barometer-pie-container">
                        <img class="wheelimage" src="/wheelColours.PNG"/>
                        <div class="arrow-rotated-container">
                            <img :style="{ transform: 'rotate(' + manageBarometer.arrowRotation + 'deg)' }" class="arrow" src="/Arrow2.PNG">
                        </div>
                    </div> 
                    
    
            </div>
            <div class="responsibility-score">
                <p>Final Responsibility Score: <span :class="manageBarometer.scoreColor">{{ manageBarometer.barometerScore }}%</span></p>
            </div>
            
    </div>

        </div>
        <div class="endpage-stats-container">
            <div class="endpage-stats-panel">
                <div class="endpage-stats-title-container">
                    <h4>Your Game Statistics</h4>
                </div>
            </div>

        </div>

    </div>
</template>

  <script setup>
  
    import {useBarometerStore} from '../../store/MainGameChoicesStore'
  
    const manageBarometer = useBarometerStore()
      
  
  
  </script>
  <script>
      // export component data
      export default {
        name: 'EndingPage',
      }
  </script>