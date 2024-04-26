<template>
    <div class="maingameplay-flex-container">
        <div v-if="manageMainGameNav.mainGameComponentsUnlocked > 3" class="incomestreams-content-container">
            <IncomeStreamsType v-if="manageIncomeStreams.chosenIncomeStreamChoice.ISidentifier === 1" :icon=1 type="Your Online Shop" :name=manageIncomeStreams.onlineStoreName :monthlyCost=250 :monthlyIncome=400></IncomeStreamsType>
            <IncomeStreamsType v-if="manageIncomeStreams.chosenIncomeStreamChoice.ISidentifier === 2" :icon=2 type="Your Podcast" :name=manageIncomeStreams.podcastName :monthlyIncome=250 :monthlyCost=50></IncomeStreamsType>
            <IncomeStreamsType v-if="manageIncomeStreams.chosenIncomeStreamChoice.ISidentifier === 4" :icon=4 type="Your Social Media" :name=manageIncomeStreams.socialMediaUsername :monthlyIncome=350 :monthlyCost=0></IncomeStreamsType>
            <IncomeStreamsType v-if="manageIncomeStreams.chosenIncomeStreamChoice.ISidentifier === 5" :icon=5 type="Freelance Work" :name=manageIncomeStreams.freelanceChosenSkill :monthlyIncome=500 :monthlyCost=100></IncomeStreamsType>
            <IncomeStreamsType v-if="manageIncomeStreams.chosenIncomeStreamChoice.ISidentifier === 3" :icon=3 type="Part Time Bar Work" :name=manageIncomeStreams.barChoiceName :monthlyIncome=250 :monthlyCost=0></IncomeStreamsType>
            <div v-if="manageIncomeStreams.chosenIncomeStreamChoice.ISidentifier === 6" class="noincomestreamchosen-component-container">
                <div class="incomestreams-interactive-title">
                    <h4>Secondary Income Stream</h4>
                </div>
                <div class="incomestreams-nochoice-icon">
                    <font-awesome-icon icon="fa-solid fa-ban" />
                </div>
                <div class="incomesteams-nochoice-desc">
                    <p>You have chosen to not set up a secondary income stream</p>
                </div>
                <div class="incomestreams-interactive-edit-choice setupincomestreams-button">
                    <button @click="manageMainGameNav.navigateToPage(14)">Set Up</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import IncomeStreamsType from './incomeStreamsType.vue'
    import { useIncomeStreamsChoicesStore } from '../../../store/MainGameChoicesStore.js'
    import { useMainGameplayNavigationStore } from '../../../store/MainGameChoicesStore.js'

    const manageMainGameNav = useMainGameplayNavigationStore()
    const manageIncomeStreams = useIncomeStreamsChoicesStore()
</script>
<script>

export default {
    name: 'IncomeStreamsInteractiveComponent',
    components: {
        IncomeStreamsType,
    },
    props: {
        type: String,
        name: String,
        monthlyIncome: Number,
        monthlyCost: Number,
        icon: Number,
    }
}

</script>