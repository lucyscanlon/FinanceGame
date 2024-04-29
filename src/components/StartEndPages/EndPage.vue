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
            <div class="endpage-wheel-padding">
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
            <div class="endpage-button-padding">
                <div class="endpage-playagain-container">
                    <div class="endpage-playagain-button-container">
                        <div @click="manageSound.StartOfGame(), manageGameNav.navigateToPage(0)" class="endpage-playagain-circle">
                            <p><font-awesome-icon icon="fa-solid fa-play" /></p>
                        </div>
                        <div class="endpage-playagain-text">
                            <p @click="manageSound.StartOfGame(), manageGameNav.navigateToPage(0)">Play Again</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="endpage-stats-container">
            <div class="endpage-stats-panel">
                <div class="endpage-stats-title-container">
                    <h4>Your Game Statistics</h4>
                </div>
                <div class="endpage-stats-table-container">
                    <table>
                        <tr>
                            <th>In Game Time Span:</th>
                            <th class="align-right">{{manageGameTimer.TotalTimeSpanOfGame }}</th>
                        </tr>
                        <tr>
                            <th>Bills Paid:</th>
                            <th class="align-right">{{ manageMoney.billsPaid }}</th>
                        </tr>
                        <tr>
                            <th>Missed Bills</th>
                            <th class="align-right colour-red">{{ manageMoney.totalMissedBills }}</th>
                        </tr>
                        <tr>
                            <th>Current Pension Value:</th>
                            <th class="align-right colour-green">£{{ managePension.pensionCurrentTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2})}}</th>
                        </tr>
                        <tr>
                            <th>Predicted Pension Value:</th>
                            <th class="align-right colour-green">£{{ managePension.pensionPredictionsCondensed[29].toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2}) }}</th>
                        </tr>
                        <tr>
                            <th>Emergency Fund Total:</th>
                            <th class="align-right colour-green">£{{manageMoney.emergencyFundCurrentTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2})}}</th>
                        </tr>
                        <tr>
                            <th>Investment Portfolio Value:</th>
                            <th class="align-right colour-green">£{{manageMoney.InvestmentPortfolioCurrentValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2})}}</th>
                        </tr>
                    </table>
                </div>
            </div>

        </div>
        

    </div>
    
</template>

  <script setup>
  
    import {useBarometerStore, usePensionChoicesStore, useMainGameplayNavigationStore} from '../../store/MainGameChoicesStore'
    import {useMoneyManageStore, useGameTimerStore} from '../../store/MoneyStore'
    import {useSoundEffectsStore} from '../../store/soundEffectsStore'
  
    const manageBarometer = useBarometerStore()
    const manageMoney = useMoneyManageStore()
    const managePension = usePensionChoicesStore()
    const manageGameTimer = useGameTimerStore()
    const manageGameNav = useMainGameplayNavigationStore()
    const manageSound = useSoundEffectsStore()
      
  </script>
  <script>
      // export component data
      export default {
        name: 'EndingPage',
      }
  </script>