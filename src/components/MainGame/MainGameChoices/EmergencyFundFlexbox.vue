<!-- Template containing the layout and information for each supermarket choice

The parent of this component:
- Supermarket Choice

-->
<script setup>


</script>
<template>
    <div class="emergencyfund-box-container">
        <div class="ef-choice-optiontitle-container">
            <h2>Option {{ EFIdentifier }}</h2>
        </div>
        <div class="ef-choice-title-container">
            <h4>{{ EFName }}</h4>
        </div>
        <div class="ef-interest-title-container">
            <p>Interest:</p>
        </div>
        <div class="ef-interest-value">
            <p>{{ EFInterest }}%</p>
        </div>
        <div class="ef-choice-deposit-text-container">
            <p>Deposit required:</p>
        </div>
        <div class="ef-choice-deposit-value">
            <p>{{ EFDeposit }}</p>
        </div>
        <div class="ef-choice-access-title-container">
            <p>Withdrawal Time:</p>
        </div>
        <div class="ef-choice-access-value">
            <p>{{ EFWithdrawalTime }}</p>
        </div>
    </div>
</template>
<script>
    // export component data
    export default {
        name: 'EmergencyFundChoicesFlexbox', 
        props: {
            EFIdentifier: Number,
            EFName: String,
            EFInterest: Number,
            EFDeposit: String,
            EFWithdrawalTime: String,
        }
   }
</script>