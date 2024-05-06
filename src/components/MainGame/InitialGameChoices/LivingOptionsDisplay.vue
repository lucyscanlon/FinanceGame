<!-- Template for display the info of each living option

The parent of this component:
- MapLayout

The children of this component:
- None

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
                            <p>Deposit: <span class="colour-white">£{{Number(deposit).toFixed(2)}}</span></p>
                        </div>
                    </div>
                    <!-- display different buttons depending on whether its the first time user is on this page or if they have decided to change where they live in the middle of the game -->
                    <!-- play sound, navigate to next page, register chosen living option, minus deposit amount, increase bills, increase or decrease score -->
                    <button v-if="manageMainGameNav.currentPage === 4" @click="manageSound.playClickSound(), manageMainGameNav.navigateToPage(5), registerLivingChoice.addLivingOptionInfo(streetAddress, districtDesc, rent, commuteDisplay(commute), deposit), manageMoney.decreasePocketMoney(deposit), manageMoney.increaseMonthlyOutGoings(rent), manageBarometer.increaseScore(increasePerc), manageBarometer.decreaseScore(decreasePerc)" class="map-location-livehere-button">
                        <p>Live Here</p>
                    </button>
                    <!-- play sound, navigate to next page, register chosen living option, minus deposit amount, increase bills, increase or decrease score, start countdown -->
                    <button v-if="manageMainGameNav.currentPage === 19" @click="manageSound.playClickSound(),manageMainGameNav.navigateToPage(11), registerLivingChoice.addLivingOptionInfo(streetAddress, districtDesc, rent, commuteDisplay(commute), deposit), manageMoney.decreasePocketMoney(deposit), manageMoney.increaseMonthlyOutGoings(rent), manageBarometer.increaseScore(increasePerc), manageBarometer.decreaseScore(decreasePerc), manageGameTimer.startCountdown()" class="map-location-livehere-button">
                        <p>Live Here</p>
                    </button>

                </div>
            </div>
    

    
</template>
<script setup>
    //import stores
    import { registerLivingOptionChoiceStore } from '../../../store/InitialGameChoicesStore'
    import { useMoneyManageStore,  useGameTimerStore} from '../../../store/MoneyStore.js'
    import { useMainGameplayNavigationStore } from '../../../store/MainGameChoicesStore.js'
    import { useBarometerStore } from '../../../store/MainGameChoicesStore'
    import { useSoundEffectsStore } from '../../../store/soundEffectsStore.js'
    
    const manageMainGameNav = useMainGameplayNavigationStore()
    const registerLivingChoice = registerLivingOptionChoiceStore()
    const manageMoney = useMoneyManageStore()
    const manageBarometer = useBarometerStore()
    const manageGameTimer = useGameTimerStore()
    const manageSound = useSoundEffectsStore()
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
        deposit: Number,
        increasePerc: Number,
        decreasePerc: Number,
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