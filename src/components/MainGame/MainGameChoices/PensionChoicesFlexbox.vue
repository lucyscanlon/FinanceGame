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
    <div v-bind:class="(managePension.selectedActivePensionChoice === PensionIdentifier) ? 'pension-active' : ''" @click="managePension.changeSelectedPensionChoice(PensionIdentifier), managePension.updateCurrentlySelectedPensionChoice(PensionYCPerc, PensionYCAmount, PensionECPerc, PensionECAmount, PensionTCPerc, PensionTCAmount)" class="pension-contribution-box">
                        <div class="pension-contribution-padding">
                            <div class="pension-contribution-option-container">
                                <h2>Option {{ PensionIdentifier }}:</h2>
                            </div>
                        <div class="pension-contribution-title">
                            <h3>Your contribution:</h3>
                            <div class="pension-contribution-percentage-container">
                                <span class="colour-green"><p>{{ PensionYCPerc }}%</p></span>
                                <p class="pension-amount">(£{{ PensionYCAmount }})</p>
                            </div>
                        </div>
                        <div class="pension-contribution-title">
                            <h3>Your employer contribution:</h3>
                            <div class="pension-contribution-percentage-container">
                                <span class="colour-green"><p>{{ PensionECPerc }}%</p></span>
                                <p class="pension-amount">(£{{ PensionECAmount }})</p>
                            </div>
                        </div>
                        <div class="pension-contribution-title">
                            <h3>Total contribution:</h3>
                            <div class="pension-contribution-percentage-container">
                                <span class="colour-green"><p>{{ PensionTCPerc }}%</p></span>
                                <p class="pension-amount">(£{{ PensionTCAmount }})</p>
                            </div>
                        </div>
                    </div>
                    </div>
</template>
<script>
    // export component data
    export default {
        name: 'PensionChoiceFlexbox', 
        props: {
            PensionIdentifier: Number,
            PensionYCPerc: Number,
            PensionYCAmount: Number,
            PensionECPerc: Number,
            PensionECAmount: Number,
            PensionTCPerc: Number,
            PensionTCAmount: Number,
        }
   }
</script>