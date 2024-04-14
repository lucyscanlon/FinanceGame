<template>
    <div class="popups-main-container-wrapper">
        <PhoneBillPopUp></PhoneBillPopUp>
   
    </div>
</template>
<script setup>

import PhoneBillPopUp from '../MainGameplayComponents/PopUps/PhoneBill.vue'

</script>
<script>

export default {
    name: 'PopUpComponent',
    components: {
        PhoneBillPopUp,
    }
}

</script>