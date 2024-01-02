<script setup>


</script>

<template>
    <div class="transport-choice-box">
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
                            <th>+{{ TransportCommuteCost }}</th>
                        </tr>
                        <tr>
                            <th>Grocery Transport:</th>
                            <th>+{{ TransportGroceryCost }}</th>
                        </tr>
                        <tr>
                            <th>Discount:</th>
                            <th>-{{ TransportDiscount }}</th>
                        </tr>
                        <tr>
                            <th class="colour-green">Total Cost:</th>
                            <th class="colour-green">£450</th>
                        </tr>
                    </table>
                </div>
            </div>
</template>

<script>



export default {
    name: 'TransportChoicesFlex', 
    props: {
        TransportName: String,
        TransportDesc: String,
        TransportPerk: String,
        TransportCost: String,
        TransportCommuteCost: String,
        TransportGroceryCost: String,
        TransportDiscount: String,
        
    }
   
   
}

</script>