<template>
    <div class="maingameplay-flex-container">
        <div class="pension-interactive-title-container everydaysavings-title">
            <h1><font-awesome-icon icon="fa-solid fa-piggy-bank" />Everyday Savings Account</h1>
        </div>
        <div class="currentaccount-info-total-container">
            <div class="currentaccount-total-text-container">
                <p>Current Total:</p>
            </div>
            <div class="currentaccount-total-number-container">
                <p>£100.00</p>
            </div>
        </div>
        <div class="currentaccount-addwithdraw-title-container">
            <p>Change amount:</p>
        </div>
        <div class="currentaccount-addwithdraw-box-container">
            <div class="currentaccount-addwithdraw-change">
                <p>__</p>
            </div>
        </div>
        <div class="currentaccount-add-withdraw-buttons">
            <button>Add</button>
            <span class="currentaccount-withdraw-button"><button>Withdraw</button></span>
        </div>

    </div>
</template>
<script>

export default {
    name: 'EverydaySavingInteractiveComponent',
}

</script>