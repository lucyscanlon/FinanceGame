<template>
    <div class="popups-main-container-wrapper">
        <PhoneBillPopUp v-if="managePopUps.currentPopUp === 1"></PhoneBillPopUp>
   
    </div>
</template>
<script setup>

import PhoneBillPopUp from '../MainGameplayComponents/PopUps/PhoneBill.vue'
import {usePopUpStore} from '../../../store/MainGameChoicesStore';

const managePopUps = usePopUpStore();

</script>
<script>

export default {
    name: 'PopUpComponent',
    components: {
        PhoneBillPopUp,
    }
}

</script>