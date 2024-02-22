<!-- Template containing the layout and information for each supermarket choice

The parent of this component:
- Supermarket Choice

-->
<script setup>
    // import store 
    import { usePensionChoicesStore } from '../../../store/MainGameChoicesStore'
    const managePension = usePensionChoicesStore()
    
</script>
<template>
    <div v-bind:class="(managePension.SelectedActivePensionInvestmentChoice === PensionInvIndentifier) ? 'pension-active' : ''" @click="managePension.changeSelectedPensionInvestmentChoice(PensionInvIndentifier), managePension.updateCurrentlySelectedPensionInvestmentChoice(PensionInvIndentifier)" class="pension-investment-flex">
        <div class="pension-investment-padding">
            <div class="pension-investment-title">
                <h3>Option {{ PensionInvIndentifier }}:</h3>
            </div>
            <div class="pension-investment-description">
                <p>{{ PensionInvDesc }}</p>
            </div>
            <div v-if="PensionInvIndentifier === 2" class="pension-investment-share">
                <p>FTSC 100</p>
            </div>
        </div>
    </div>                   
                    
</template>
<script>
    // export component data
    export default {
        name: 'PensionInvestmentFlexbox', 
        props: {
            PensionInvIndentifier: Number,
            PensionInvDesc: String,

        }
   }
</script>