<!-- Template for display income streams choice info

The parent of this component:
- income streams introduction

The children of this component:
- None

-->
<template>
    <div :class="(manageIncomeStream.selectedIncomeStreamChoice === Identifier) ? 'pension-active' : ''" @click="manageIncomeStream.changeSelectedIncomeStream(Identifier), manageIncomeStream.updateCurrentlySelectedIncomeStreamChoice(Identifier, Name, SetUpCost, MonthlyIncome, MonthlyCost)" class="incomestreams-choice">
            <div v-if="Identifier === 1" class="incomestreams-icon-container">
                <font-awesome-icon icon="fa-solid fa-shop" />
            </div>
            <div v-if="Identifier === 2" class="incomestreams-icon-container">
                <font-awesome-icon icon="fa-solid fa-microphone" />
            </div>
            <div v-if="Identifier === 3" class="incomestreams-icon-container">
                <font-awesome-icon icon="fa-solid fa-martini-glass-citrus" />
            </div>
            <div v-if="Identifier === 4" class="incomestreams-icon-container">
                <font-awesome-icon icon="fa-solid fa-hashtag" />
            </div>
            <div v-if="Identifier === 5" class="incomestreams-icon-container">
                <font-awesome-icon icon="fa-solid fa-computer" />
            </div>
            <div v-if="Identifier === 6" class="incomestreams-icon-container no-incomestream-padding">
                <font-awesome-icon icon="fa-solid fa-ban" />
            </div>
            <div class="incomestreams-title-container">
              <h4>{{ Name }}</h4>
            </div>
            <div v-if="Identifier < 6" class="incomestreams-costs-container">
              <h6 class="incomestreams-costs-title">Costs:</h6>
              <div class="incomestreams-costs-table">
                <div class="incomestreams-label">
                  <p>Set up:</p>
                  <p>Monthly income:</p>
                  <p>Monthly costs:</p>
                </div>
                <div class="incomestreams-price">
                  <p>£{{ SetUpCost }}</p>
                  <p>£{{ MonthlyIncome }}</p>
                  <p>£{{ MonthlyCost }}</p>
                </div>
              </div>
            </div>
          </div>
</template>
<script setup>
    import { useIncomeStreamsChoicesStore } from '../../../store/MainGameChoicesStore.js'
    const manageIncomeStream = useIncomeStreamsChoicesStore()

</script>
<script>
    // export component data
    export default {
        name: 'IncomeStreamsFlexbox', 
        props: {
            Identifier: Number,
            Name: String,
            SetUpCost: Number,
            MonthlyIncome: Number,
            MonthlyCost: String,
        },
   }
</script>