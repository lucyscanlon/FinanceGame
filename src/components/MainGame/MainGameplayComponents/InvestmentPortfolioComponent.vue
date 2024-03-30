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
        <div class="investments-stock-bar">
            <div class="investments-bar-overflow">
                <ul>
                    <li><span class="investments-moving-banner"><font-awesome-icon icon="fa-solid fa-gear" /> EWG <span class="colour-green">1.73%<font-awesome-icon icon="fa-solid fa-arrow-up" /></span></span></li>
                    <li><span class="investments-moving-banner"><font-awesome-icon icon="fa-solid fa-eye" /> FEU <span class="colour-red">1.23%<font-awesome-icon icon="fa-solid fa-arrow-down" /></span></span></li>
                    <li><span class="investments-moving-banner"><font-awesome-icon icon="fa-solid fa-ghost" /> GHU <span class="colour-green">1.59%<font-awesome-icon icon="fa-solid fa-arrow-up" /></span></span></li>
                    <li><span class="investments-moving-banner"><font-awesome-icon icon="fa-solid fa-wheat-awn" /> WRF <span class="colour-red">1.98%<font-awesome-icon icon="fa-solid fa-arrow-down" /></span></span></li>
                    <li><span class="investments-moving-banner"><font-awesome-icon icon="fa-solid fa-book" /> PSW <span class="colour-red">1.13%<font-awesome-icon icon="fa-solid fa-arrow-down" /></span></span></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'InvestmentPortfolioInteractiveComponent',
}

</script>