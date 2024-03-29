<template>
    <div class="maingameplay-flex-container">
        <div class="pension-interactive-title-container">
            <h1><font-awesome-icon icon="fa-solid fa-chart-line" />Investments</h1>
        </div>
        <div class="investments-percentage-gainloss-container">
            <p class="colour-green">1.25%<font-awesome-icon icon="fa-solid fa-arrow-up" /></p>
        </div>
        <div class="investments-interactive-total-container">
            <div class="currentaccount-total-text-container">
                <p>Current Total:</p>
            </div>
            <div class="currentaccount-total-number-container">
                <p>£14,000</p>
            </div>
        </div>
        <div class="investments-openportfolio-button">
            <button>Open Trading Portfolio</button>
        </div>
    </div>
</template>
<script>

export default {
    name: 'InvestmentPortfolioInteractiveComponent',
}

</script>