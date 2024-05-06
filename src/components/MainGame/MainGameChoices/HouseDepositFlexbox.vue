<!-- Template for display house deposit choice info 

The parent of this component:
-  house deposit intro

The children of this component:
- None

-->
<template>
    <div :class="(manageHouseDeposit.currentlySelectedHouseDepositChoice === Identifier) ? 'pension-active' : ''" @click="manageHouseDeposit.updateCurrentlySelectedHouseDepositChoice(Identifier)" class="housedeposit-choice-flex">
        <div class="housedep-title">
            <h4>{{ Name }}</h4>
        </div>
        <div class="housedep-desc">
            <p>{{ Desc }}</p>
        </div>
        <div class="housedep-padding">
            <div class="housedep-perks-container">
                <h4>Perks:</h4>
                <p>{{ Perk }}</p>
            </div>
            <div class="housedep-perks-container">
                <h4>Deposit:</h4>
                <p>{{ Deposit }}</p>
            </div>
            <div class="housedep-perks-container">
                <h4>Yearly Contribution Limit:</h4>
                <p>{{ ContLimit }}</p>
            </div>
        </div>
    </div>
</template>
<script setup>

    import { useHouseDepositChoiceStore } from '../../../store/MainGameChoicesStore'
    const manageHouseDeposit = useHouseDepositChoiceStore()


</script>
<script>
    // export component data
    export default {
        name: 'HouseDepositChoiceFlexbox', 
        props: {
            Identifier: Number,
            Name: String,
            Desc: String,
            Perk: String,
            Deposit: String,
            ContLimit: String,
        },
   }
</script>