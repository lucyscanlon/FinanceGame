<!-- Template for a reuseable component that displays the locations available on the map and their information

The parent of this component:
- Map Layout

-->
<template>
    <div class="map-location-wrapper" :class="classtag">
                <div class="map-location-content-wrapper">
                    <!-- Use values from props -->
                    <h4>{{streetAddress}}</h4>
                    <p>{{districtDesc}}</p>
                    <p class="map-location-description">{{homeDesc}}</p>
                    <div class="map-location-rent-wrapper">
                        <div class="map-location-rent-label-wrapper">
                            <p>Rent: <span class="colour-white">£{{rent}}pm</span></p>
                            <!-- Call component method -->
                            <p>Commute: <span class="colour-white">£{{ commuteDisplay(commute)}}</span></p>
                            <p>Deposit: <span class="colour-white">£{{deposit}}</span></p>
                        </div>
                    </div>
                    <!-- Call store methods on click -->
                    <button @click="livingOptions.livingOptionsNextStageOfGame(), registerLivingChoice.addLivingOptionInfo(streetAddress, districtDesc, rent, commuteDisplay(commute)), manageMoney.decreasePocketMoney(deposit), manageMoney.increaseMonthlyOutGoings(rent), manageMoney.increaseOrDecreasePocketMoneyAnimation(deposit)" class="map-location-livehere-button">
                        <p>Live Here</p>
                    </button>

                </div>
            </div>
    

    
</template>
<script setup>
    //import stores
    import { useLivingOptionsStore } from '../../../store/InitialGameChoicesStore'
    const livingOptions = useLivingOptionsStore()

    import { registerLivingOptionChoiceStore } from '../../../store/InitialGameChoicesStore'
    const registerLivingChoice = registerLivingOptionChoiceStore()

    import { useMoneyManageStore } from '../../../store/MoneyStore.js'
    const manageMoney = useMoneyManageStore()
</script>
<script>
export default {
    // export component data
    name: 'LivingOptionsDisplay',
    props: {
        streetAddress: String,
        districtDesc: String,
        homeDesc: String,
        rent: Number,
        commute: Number,
        classtag: String,
        deposit: String,
    }, methods: {
        commuteDisplay(c) {

            if (c === 0) {
                return '0'
            } else if (c === 1) {
                return '+'
            } else if (c === 2) {
                return '++'
            }
        }
    }
}
</script>