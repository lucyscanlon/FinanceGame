<!-- Template for the Character Statistics Sidebar

Components that will be inside this container include:
- Currently living 
- Currently Shopping at
- Current method of transport

-->
<script setup>
  // import stores 
  import { useLivingOptionsStore } from '../../store/InitialGameChoicesStore'
  import { useMoneyManageStore } from '../../store/MoneyStore'
  
  const livingOptions = useLivingOptionsStore()
  const manageMoney = useMoneyManageStore()
</script>
<template>
    <div class="characterstats-sidebar-wrapper">
        <div class="charactertstats-padding">
          <div class="responsibility-barometer-wrapper">
            <!-- This is where the responsibility barometer will go -->
          </div>
          <div class="characterstats-set">
            <h4>Money In Pocket:</h4>
            <!--Use values from moneyStore.js-->
            <div class="charactersidebar-pocketmoney-container">
              <h5>£{{Number(manageMoney.moneyInPocket).toFixed(2)}}</h5>
            </div>
            <hr />
          </div>
          <GameNotificationPanel></GameNotificationPanel>
          <!-- Display this component depending on the stage of the game e.g. if they have accepted the job offer -->
          <div v-if="livingOptions.livingOptionsGameStage > 0" class="characterstats-set">
            <h4>Monthly Salary Income:</h4>
            <h4 class="characterset-subheading">Before Tax:</h4>
            <h5>£{{manageMoney.monthlySalaryBeforeTax}}</h5>
            <h4 class="characterset-subheading">After Tax:</h4>
            <h5>£{{manageMoney.monthlySalaryAfterTax}}</h5>
            <hr />
          </div>
          <!-- Display this component depending on the stage of the game e.g. if they have chosen a place to live -->
          <CurrentlyLivingDisplay v-if="livingOptions.livingOptionsGameStage >= 3"></CurrentlyLivingDisplay> 
          <!-- Display this component depending on the stage of the game e.g. if they have chosen a supermarket option -->
          <CurrentlyShoppingAt v-if="livingOptions.livingOptionsGameStage >= 5"></CurrentlyShoppingAt>
          <!-- Display this component depending on the stage of the game e.g. if they have chosen a transport method -->
          <TransportMethodSidebar v-if="livingOptions.livingOptionsGameStage >= 6"></TransportMethodSidebar>
        </div>
    </div>
  </template>
<script>

// import components

import CurrentlyLivingDisplay from './CurrentlyLiving.vue'
import CurrentlyShoppingAt from './CurrentlyShoppingAt.vue'
import TransportMethodSidebar from './TransportMethodChoice.vue'
import GameNotificationPanel from './GameNotifications.vue'

// export component data
export default {
    name: 'CharacterStatsSidebarWrapper',
    components: {
      CurrentlyLivingDisplay,
      CurrentlyShoppingAt,
      TransportMethodSidebar,
      GameNotificationPanel,
    },
    data() {
      return {

      }
    }
}




</script>
<style>

.display-none {
  display: none;
}

</style>
