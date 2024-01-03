<!-- Template containing the layout and information for each transport choice

The parent of this component:
- Transport Options Display

-->
<template>
    <!-- Add an active class if the component is clicked, pass transport choice clicked info to store -->
    <div v-bind:class="(manageTransport.selectedActiveTransportChoice === TransportIdentifier) ? 'supermarket-active' : ''" @click="manageTransport.changedSelectedTransportChoice(TransportIdentifier), manageTransport.updatedCurrentlyChosenTransport(TransportName, TransportDesc, (calculateMonthlyTotal(TransportCost, calculateCost(registerLivingChoice.selectedLivingOptionInfo.commutePrice, TransportCommuteCost), calculateCost(manageSupermarket.chosenSupermarketInfo.SMTCost, TransportGroceryCost), calculateDiscount(TransportCost, calculateCost(manageSupermarket.chosenSupermarketInfo.SMTCost, TransportGroceryCost), calculateCost(registerLivingChoice.selectedLivingOptionInfo.commutePrice, TransportCommuteCost), TransportDiscount))))" class="transport-choice-box">
                <div class="transport-name-desc-wrap">
                    <h4>{{ TransportName }}</h4>
                    <p>{{ TransportDesc }}</p>
                </div>
                <div class="transport-perk-wrap">
                    <p><span class="colour-pink">Perk:</span> {{ TransportPerk }}</p>
                </div>
                <div class="transport-total-cost-wrap">
                    <p>Costs:</p>
                    <table>
                        <tr>
                            <th>Cost:</th>
                            <th>+{{ TransportCost }}</th>
                        </tr>
                        <tr>
                            <th>Commute Cost:</th>
                            <!-- Call component methods to determine the costs as these change dynamically based upon what choices the player has previously made -->
                            <th>+{{ calculateCost(registerLivingChoice.selectedLivingOptionInfo.commutePrice, TransportCommuteCost) }}</th>
                        </tr>
                        <tr>
                            <th>Grocery Transport:</th>
                            <th>+{{ calculateCost(manageSupermarket.chosenSupermarketInfo.SMTCost, TransportGroceryCost) }}</th>
                        </tr>
                        <tr>
                            <th>Discount:</th>
                            <th>-{{ calculateDiscount(TransportCost, calculateCost(manageSupermarket.chosenSupermarketInfo.SMTCost, TransportGroceryCost), calculateCost(registerLivingChoice.selectedLivingOptionInfo.commutePrice, TransportCommuteCost), TransportDiscount) }}</th>
                        </tr>
                        <tr>
                            <th class="colour-green">Monthly Total Cost:</th>
                            <th class="colour-green">£{{ calculateMonthlyTotal(TransportCost, calculateCost(registerLivingChoice.selectedLivingOptionInfo.commutePrice, TransportCommuteCost), calculateCost(manageSupermarket.chosenSupermarketInfo.SMTCost, TransportGroceryCost), calculateDiscount(TransportCost, calculateCost(manageSupermarket.chosenSupermarketInfo.SMTCost, TransportGroceryCost), calculateCost(registerLivingChoice.selectedLivingOptionInfo.commutePrice, TransportCommuteCost), TransportDiscount)) }}</th>
                        </tr>
                    </table>
                </div>
            </div>
</template>

<script setup>
    // import stores
    import { transportChoiceStore } from '../../../store/InitialGameChoicesStore.js';
    const manageTransport = transportChoiceStore();

    import { supermarketChoiceStore } from '../../../store/InitialGameChoicesStore.js'
    const manageSupermarket = supermarketChoiceStore()

    import { registerLivingOptionChoiceStore } from '../../../store/InitialGameChoicesStore'
    const registerLivingChoice = registerLivingOptionChoiceStore()
</script>
<script>
// export component data
export default {
    name: 'TransportChoicesFlex', 
    props: {
        TransportName: String,
        TransportDesc: String,
        TransportPerk: String,
        TransportCost: String,
        TransportCommuteCost: String,
        TransportGroceryCost: String,
        TransportDiscount: Number,
        TransportIdentifier: Number,
        
    },
    methods: {
        calculateMonthlyTotal(cost, commuteCost, groceryCost, discount) {
            // Turn string values into numbers
            this.newCost = Number(cost);
            this.numberCommuteCost = Number(commuteCost);
            this.numberGroceryCost = Number(groceryCost);
            this.numberDiscount = Number(discount);
            
            // determine calculation
            this.totalCost = ((this.newCost + this.numberCommuteCost + this.numberGroceryCost) - this.numberDiscount);

            // return result
            return this.totalCost;
        },

        calculateCost(amountOfIncrease, normalCharge) {
            if (amountOfIncrease === '0') {
                this.supermarketTravelIncrease = 0;
            } else if (amountOfIncrease === '+') {
                this.supermarketTravelIncrease = 1;
            } else if (amountOfIncrease === '++') {
                this.supermarketTravelIncrease = 2;
            }

            this.totalSupermarketCost = normalCharge * this.supermarketTravelIncrease;

            return this.totalSupermarketCost;
        },

        calculateDiscount(cost, transportcost, commutecost, discount) {

            this.newcost = Number(cost);

            this.newDiscount = discount / 100;

            this.sum = this.newcost + transportcost + commutecost;
            this.discountedAmount = this.sum * this.newDiscount;

            console.log(this.sum);

            return this.discountedAmount;
        }
    }
}
</script>