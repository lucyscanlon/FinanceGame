<!-- Template containing the layout and information for each supermarket choice

The parent of this component:
- Supermarket Choice

-->
<template>
    <div :class="(manageIncomeStream.selectedIncomeStreamChoice === Identifier) ? 'pension-active' : ''" @click="manageIncomeStream.changeSelectedIncomeStream(Identifier), manageIncomeStream.updateCurrentlySelectedIncomeStreamChoice(Identifier, Name, Hours, SetUpCost, MonthlyIncome, MonthlyCost, ExpansionPotential)" class="incomestreams-choice">
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
              <p v-if="Identifier < 6">{{ Hours }} hrs per month</p>
            </div>
            <div v-if="Identifier < 6" class="incomestreams-costs-container">
              <h6 class="incomestreams-costs-title">Costs:</h6>
              <div class="incomestreams-costs-table">
                <div class="incomestreams-label">
                  <p>Set up:</p>
                  <p>Monthly income:</p>
                  <p>Monthly costs:</p>
                  <p>Expansion potential:</p>
                </div>
                <div class="incomestreams-price">
                  <p>£{{ SetUpCost }}</p>
                  <p>£{{ MonthlyIncome }}</p>
                  <p>£{{ MonthlyCost }}</p>
                  <p>{{ ExpansionPotential }}</p>
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
            Hours: Number,
            SetUpCost: Number,
            MonthlyIncome: Number,
            MonthlyCost: String,
            ExpansionPotential: String,
        },
   }
</script>