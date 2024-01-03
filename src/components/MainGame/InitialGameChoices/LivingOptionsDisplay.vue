<!-- Template for the living options display

-->


<template>
    <div class="map-location-wrapper" :class="classtag">
                <div class="map-location-content-wrapper">
                    <h4>{{streetAddress}}</h4>
                    <p>{{districtDesc}}</p>
                    <p class="map-location-description">{{homeDesc}}</p>
                    <div class="map-location-rent-wrapper">
                        <div class="map-location-rent-label-wrapper">
                            <p>Rent: <span class="colour-white">£{{rent}}pm</span></p>
                            <p>Commute: <span class="colour-white">£{{ commuteDisplay(commute)}}</span></p>
                            <p>Deposit: <span class="colour-white">£{{deposit}}</span></p>
                        </div>
                    </div>
                    <button @click="livingOptions.livingOptionsNextStageOfGame(), registerLivingChoice.addLivingOptionInfo(streetAddress, districtDesc, rent, commuteDisplay(commute)), manageMoney.decreasePocketMoney(deposit), manageMoney.increaseMonthlyOutGoings(rent), manageMoney.increaseOrDecreasePocketMoneyAnimation(deposit)" class="map-location-livehere-button">
                        <p>Live Here</p>
                    </button>

                </div>
            </div>
    

    
</template>

<script setup>

import { useLivingOptionsStore } from '../../../store/LivingOptionsStore'

const livingOptions = useLivingOptionsStore()

import { registerLivingOptionChoiceStore } from '../../../store/LivingOptionsStore'

const registerLivingChoice = registerLivingOptionChoiceStore()

import { useMoneyManageStore } from '../../../store/store.js'

const manageMoney = useMoneyManageStore()

</script>

<script>

export default {
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