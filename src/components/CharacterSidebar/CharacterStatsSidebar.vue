<!-- Template for the Character Statistics Sidebar

Components that will be inside this container include:
- Currently living 
- Currently Shopping at
- Current method of transport

-->
<script setup>
  // import stores 
  import { useMainGameplayNavigationStore } from '../../store/MainGameChoicesStore'
  import { useMoneyManageStore } from '../../store/MoneyStore'
  
  const manageMainGameNav = useMainGameplayNavigationStore()
  const manageMoney = useMoneyManageStore()
</script>
<template>
    <div class="characterstats-sidebar-wrapper">
        <div class="charactertstats-padding">
          <div class="responsibility-barometer-wrapper">
            <!-- This is where the responsibility barometer will go -->
          </div>
          <div class="characterstats-set">
            <h4 v-if="manageMainGameNav.currentPage >= 3"><font-awesome-icon icon="fa-solid fa-piggy-bank" />Current Account:</h4>
            <h4 v-if="manageMainGameNav.currentPage < 3"><font-awesome-icon icon="fa-solid fa-money-bill" />Money In Pocket:</h4>
            <!--Use values from moneyStore.js-->
            <div class="charactersidebar-pocketmoney-container">
              <h5>£{{Number(manageMoney.moneyInPocket).toFixed(2)}}</h5>
            </div>
            <hr />
          </div>
          <GameNotificationPanel></GameNotificationPanel>
          <!-- Display this component depending on the stage of the game e.g. if they have accepted the job offer -->
          <div v-if="manageMainGameNav.currentPage >= 2" class="characterstats-set">
            <h4>Monthly Salary Income:</h4>
            <div class="charactersidebar-salaryincome-container">
              <div class="charactersidebar-salarytype">
                <p>Before Tax:</p>
                <p>After Tax:</p>
              </div>
              <div class="charactersidebar-salaryamount">
                <p>£{{manageMoney.monthlySalaryBeforeTax}}</p>
                <p>£{{manageMoney.monthlySalaryAfterTax}}</p>
              </div>
            </div>
            <hr />
          </div>
          <!-- Display this component depending on the stage of the game e.g. if they have chosen a place to live -->
          <CurrentlyLivingDisplay v-if="manageMainGameNav.currentPage >= 5"></CurrentlyLivingDisplay> 
          <!-- Display this component depending on the stage of the game e.g. if they have chosen a supermarket option -->
          <CurrentlyShoppingAt v-if="manageMainGameNav.currentPage >= 7"></CurrentlyShoppingAt>
          <!-- Display this component depending on the stage of the game e.g. if they have chosen a transport method -->
          <TransportMethodSidebar v-if="manageMainGameNav.currentPage >= 8"></TransportMethodSidebar>
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
