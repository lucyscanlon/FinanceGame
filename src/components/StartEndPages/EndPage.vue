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
                            <th class="align-right">{{ manageMoney.totalMissedBills }}</th>
                        </tr>
                        <tr>
                            <th>Current Pension Value:</th>
                            <th class="align-right colour-green">£{{ Number(managePension.pensionCurrentTotal).toFixed(2)}}</th>
                        </tr>
                        <tr>
                            <th>Predicted Pension Value:</th>
                            <th class="align-right colour-green">£1,711.84</th>
                        </tr>
                        <tr>
                            <th>Emergency Fund Total:</th>
                            <th class="align-right colour-green">£{{ Number(manageMoney.emergencyFundCurrentTotal).toFixed(2) }}</th>
                        </tr>
                        <tr>
                            <th>Investment Portfolio Value:</th>
                            <th class="align-right colour-green">£{{ Number(manageMoney.InvestmentPortfolioCurrentValue).toFixed(2) }}</th>
                        </tr>
                    </table>
                </div>
            </div>

        </div>

    </div>
</template>

  <script setup>
  
    import {useBarometerStore, usePensionChoicesStore} from '../../store/MainGameChoicesStore'
    import {useMoneyManageStore, useGameTimerStore} from '../../store/MoneyStore'
  
    const manageBarometer = useBarometerStore()
    const manageMoney = useMoneyManageStore()
    const managePension = usePensionChoicesStore()
    const manageGameTimer = useGameTimerStore()
      
  </script>
  <script>
      // export component data
      export default {
        name: 'EndingPage',
      }
  </script>