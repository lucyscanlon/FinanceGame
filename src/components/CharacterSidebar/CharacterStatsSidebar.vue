<!-- Template for the character statistics sidebar -->
<script setup>
  import { useLivingOptionsStore } from '../../store/LivingOptionsStore'

  const livingOptions = useLivingOptionsStore()

  import { useMoneyManageStore } from '../../store/store'

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
            <h5>£{{manageMoney.moneyInPocket}}</h5>
            <h6 :class="!pocketMoneyValueChangeActive && 'display-none'">-£{{manageMoney.increaseordecreaseofPocketMoney}})</h6>
            <hr />
          </div>
          <div v-if="livingOptions.livingOptionsGameStage > 0" class="characterstats-set">
            <h4>Monthly Salary Income:</h4>
            <h4 class="characterset-subheading">Before Tax:</h4>
            <h5>£{{manageMoney.monthlySalaryBeforeTax}}</h5>
            <h4 class="characterset-subheading">After Tax:</h4>
            <h5>£{{manageMoney.monthlySalaryAfterTax}}</h5>
            <hr />
          </div>
          <CurrentlyLivingDisplay v-if="livingOptions.livingOptionsGameStage >= 3"></CurrentlyLivingDisplay> 
          <CurrentlyShoppingAt v-if="livingOptions.livingOptionsGameStage >= 5"></CurrentlyShoppingAt>
        </div>

    </div>

    
  </template>

  

<script>

import CurrentlyLivingDisplay from './CurrentlyLiving.vue'
import CurrentlyShoppingAt from './CurrentlyShoppingAt.vue'

export default {
    name: 'CharacterStatsSidebarWrapper',
    components: {
      CurrentlyLivingDisplay,
      CurrentlyShoppingAt,
    },
    data() {
      return {
        pocketMoneyValueChangeActive: false,
        additionorsubtractiontoPocketMoney: 0,
      }
    }
}




</script>
<style>

.display-none {
  display: none;
}

</style>
