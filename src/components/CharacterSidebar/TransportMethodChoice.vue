<!-- Template for displaying the method of transport the player has chosen

The parent of this component:
- Character Stats Sidebar

-->
<script setup>
    //import stores 
    import { transportChoiceStore } from '../../store/InitialGameChoicesStore.js';
    import { useMainGameplayNavigationStore } from '../../store/MainGameChoicesStore.js'
    import { useMoneyManageStore } from '../../store/MoneyStore.js'

    const manageTransport = transportChoiceStore();
    const manageMainGameNav = useMainGameplayNavigationStore()
    const manageMoney = useMoneyManageStore()

</script>
<template>
    <div className="characterstats-set currentlyshoppingatdisplay">
        <h4>Transport Method:</h4>
        <!-- Use values from store -->
        <h5>{{manageTransport.chosenTransportChoice.TName}}</h5>
        <p>{{manageTransport.chosenTransportChoice.TDesc}}</p>
        <div class="transport-cost-container-sidebar">
            <h5>Cost: <span class="colour-green">£{{ manageTransport.chosenTransportChoice.TTotal }}</span></h5>
        </div>
        <div class="currentlyshopping-wrap">
            <button @click="manageMainGameNav.navigateToPage(21), manageMoney.decreaseMonthlyOutGoings(manageTransport.chosenTransportChoice.TTotal)" className="moveout-button">Change</button>
        </div>
        <hr />
    </div>
</template>
<script>
    // export component data
    export default {
        name: 'TransportMethodSidebar',
    }
</script>