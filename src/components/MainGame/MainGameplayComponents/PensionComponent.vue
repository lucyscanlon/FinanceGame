<template>
    <div class="pension-interactive-component-container maingameplay-flex-container">
        <div class="pension-interactive-title-container">
            <h1><font-awesome-icon icon="fa-solid fa-person-cane" />Your pension</h1>
        </div>
        <div class="pension-interactive-contributions-container">
            <div class="pension-interactive-left">
                <p>Your contribution:</p>
                <p>Employer contribution:</p>
            </div>
            <div class="pension-interactive-right">
                <p>5%</p>
                <p>3%</p>
            </div>
        </div>
        <div class="pension-interactive-total-container">
            <div class="pension-interactive-total-title-container">
                <p>Current Total:</p>
            </div>
            <div class="pension-interactive-money-container">
                <p>£6000.00</p>
            </div>
        </div>
        <div class="pension-interactive-button-container">
            <span class="border-pink"><button>Change contributions</button></span>
            <button>See predictions</button>
        </div>
    </div>
</template>
<script>

export default {
    name: 'PensionInteractionComponent',
}

</script>