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
            <hr />
          </div>
          <div class="characterstats-set">
            <h4>Monthly Salary Income:</h4>
            <h4 class="characterset-subheading">Before Tax:</h4>
            <h5>£{{manageMoney.monthlySalaryBeforeTax}}</h5>
            <h4 class="characterset-subheading">After Tax:</h4>
            <h5>£{{manageMoney.monthlySalaryAfterTax}}</h5>
            <hr />
          </div>
          <CurrentlyLivingDisplay v-if="livingOptions.livingLocationChosen"></CurrentlyLivingDisplay> 
        </div>

    </div>

    
  </template>

  

<script>

import CurrentlyLivingDisplay from './CurrentlyLiving.vue'

export default {
    name: 'CharacterStatsSidebarWrapper',
    components: {
      CurrentlyLivingDisplay,
    } 
}

</script>
