<template>
    <div class="maingameplay-flex-container">
        <IncomeStreamsType v-if="manageIncomeStreams.chosenIncomeStreamChoice.ISidentifier === 1" :icon=1 type="Your Online Shop" :name=manageIncomeStreams.onlineStoreName :monthlyCost=250 :monthlyIncome=400></IncomeStreamsType>
        <IncomeStreamsType v-if="manageIncomeStreams.chosenIncomeStreamChoice.ISidentifier === 2" :icon=2 type="Your Podcast" :name=manageIncomeStreams.podcastName :monthlyIncome=200 :monthlyCost=50></IncomeStreamsType>
        <IncomeStreamsType v-if="manageIncomeStreams.chosenIncomeStreamChoice.ISidentifier === 4" :icon=4 type="Your Social Media" :name=manageIncomeStreams.socialMediaUsername :monthlyIncome=200 :monthlyCost=50></IncomeStreamsType>
        <IncomeStreamsType v-if="manageIncomeStreams.chosenIncomeStreamChoice.ISidentifier === 5" :icon=5 type="Freelance Work" :name=manageIncomeStreams.freelanceChosenSkill :monthlyIncome=200 :monthlyCost=50></IncomeStreamsType>
        <IncomeStreamsType v-if="manageIncomeStreams.chosenIncomeStreamChoice.ISidentifier === 3" :icon=3 type="Part Time Bar Work" :name=manageIncomeStreams.barChoiceName :monthlyIncome=200 :monthlyCost=50></IncomeStreamsType>
    </div>
</template>
<script setup>
    import IncomeStreamsType from './incomeStreamsType.vue'
    import { useIncomeStreamsChoicesStore } from '../../../store/MainGameChoicesStore.js'

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