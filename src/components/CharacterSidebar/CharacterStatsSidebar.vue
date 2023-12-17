<!-- Template for the character statistics sidebar -->

<template>
    <div class="characterstats-sidebar-wrapper">
        <div class="charactertstats-padding">
          <div class="responsibility-barometer-wrapper">
            <!-- This is where the responsibility barometer will go -->
          </div>
          <div class="characterstats-set">
            <h4>Money In Pocket:</h4>
            <h5>£2,500.00</h5>
            <hr />
          </div>
          <div class="characterstats-set">
            <h4>Monthly Salary Income:</h4>
            <h5>£2,105.00</h5>
            <hr />
          </div>
          <CurrentlyLivingDisplay></CurrentlyLivingDisplay>

            
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
