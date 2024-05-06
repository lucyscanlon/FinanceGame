<!-- Template for displaying the barometer, notification panel, money in pocket / current account value

The parent of this component:
- MainGame

The children of this component:
- CurrentlyLiving
- TransportMethodChoice
- GameNotifications
- Barometer 
- IncomeMethodChoice

-->
<script setup>
  // import pinia stores
  import { useMainGameplayNavigationStore } from '../../store/MainGameChoicesStore'
  import { useMoneyManageStore } from '../../store/MoneyStore'
  
  const manageMainGameNav = useMainGameplayNavigationStore()
  const manageMoney = useMoneyManageStore()
</script>
<template>
   <!-- Classes added for responsive styling - makes into a sidebar with slides in from the left -->
    <div :class="(manageMainGameNav.menuOpen === false) ? 'charactersidebar-closed' : 'charactersidebar-open'" class="characterstats-sidebar-wrapper">
        <div class="mobilemenu-closesidebar-container">
          <!-- Close sidebar button -->
          <p @click="manageMainGameNav.toggleMenu()"><font-awesome-icon icon="fa-solid fa-rectangle-xmark" /></p>
        </div>
        <div class="charactertstats-padding">
          <!-- Display Responsibility barometer -->
          <BarometerComponent></BarometerComponent>
          <div class="characterstats-set">
            <!-- Displays Money In Pocket or Current Account depending on whether the player has opened a bank account yet -->
            <h4 v-if="manageMainGameNav.currentPage >= 3"><font-awesome-icon icon="fa-solid fa-piggy-bank" />Current Account:</h4>
            <h4 v-if="manageMainGameNav.currentPage < 3"><font-awesome-icon icon="fa-solid fa-money-bill" />Money In Pocket:</h4>
             <!-- Bind colour to number, if its negative it displays red, green if positive -->
            <div class="charactersidebar-pocketmoney-container">
              <h5 :class="(manageMoney.moneyInPocket < 0) ? 'colour-red' : ''">£{{manageMoney.moneyInPocket.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2})}}</h5>
            </div>
            <div class="pocketmoney-hr">
              <hr/>
            </div>
          </div>
           <!-- Display game notification panel -->
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
                <p>£{{manageMoney.monthlySalaryBeforeTax.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2}) }}</p>
                <p>£{{manageMoney.monthlySalaryAfterTax.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2}) }}</p>
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
          <IncomeStreamSidebar></IncomeStreamSidebar>
        </div>
    </div>
  </template>
<script>

// import components
import CurrentlyLivingDisplay from './CurrentlyLiving.vue'
import CurrentlyShoppingAt from './CurrentlyShoppingAt.vue'
import TransportMethodSidebar from './TransportMethodChoice.vue'
import GameNotificationPanel from './GameNotifications.vue'
import BarometerComponent from './Barometer.vue'
import IncomeStreamSidebar from './IncomeStream.vue'

// export component data
export default {
    name: 'CharacterStatsSidebarWrapper',
    components: {
      CurrentlyLivingDisplay,
      CurrentlyShoppingAt,
      TransportMethodSidebar,
      GameNotificationPanel,
      BarometerComponent,
      IncomeStreamSidebar,
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
