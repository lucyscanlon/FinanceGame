<template>
    <div class="maingameplay-flex-container">
        <div @click="useMainGameplayNav.navigateToPage(26)" class="pension-info-button-container">
            <p><font-awesome-icon icon="fa-solid fa-question" /></p>
        </div>
        <div v-if="useMainGameplayNav.mainGameComponentsUnlocked > 5" class="investingcomponent-content-container">
            <div class="pension-interactive-title-container investment-interactive-title">
            <h1><font-awesome-icon icon="fa-solid fa-chart-line" />Investments</h1>
        </div>
        <div class="investments-percentage-gainloss-container">
            <p :class="(manageMoney.totalBalancePercentageChange >= 0) ? 'colour-green' : 'colour-red'">{{ Number(manageMoney.totalBalancePercentageChange).toFixed(2)}}%<font-awesome-icon v-if="manageMoney.totalBalancePercentageChange > 0" icon="fa-solid fa-arrow-up" /><font-awesome-icon v-if="manageMoney.totalBalancePercentageChange <= 0" icon="fa-solid fa-arrow-down" /></p>
        </div>
        <div class="investments-interactive-total-container">
            <div class="currentaccount-total-text-container">
                <p>Current Total:</p>
            </div>
            <div class="currentaccount-total-number-container">
                <p>£{{ Number(manageMoney.InvestmentPortfolioCurrentValue).toFixed(2) }}</p>
            </div>
        </div>
        <div class="investments-openportfolio-button">
            <button @click="manageSound.playClickSound(), useMainGameplayNav.navigateToPage(17)">Open Trading Portfolio</button>
        </div>
        <div class="investments-stock-bar">
            <div class="investments-bar-overflow">
                <ul>
                    <li><span class="investments-moving-banner"><font-awesome-icon icon="fa-solid fa-gear" /> EWG <span :class="(manageGameTimer.stock1ChangePerc >= 0) ? 'colour-green' : 'colour-red'">{{ Number(manageGameTimer.stock1ChangePerc).toFixed(2) }}%<font-awesome-icon v-if="manageGameTimer.stock1ChangePerc > 0" icon="fa-solid fa-arrow-up" /><font-awesome-icon v-if="manageGameTimer.stock1ChangePerc <= 0" icon="fa-solid fa-arrow-down" /></span></span></li>
                    <li><span class="investments-moving-banner"><font-awesome-icon icon="fa-solid fa-eye" /> FEU <span :class="(manageGameTimer.stock2ChangePerc >= 0) ? 'colour-green' : 'colour-red'">{{ Number(manageGameTimer.stock2ChangePerc).toFixed(2) }}%<font-awesome-icon v-if="manageGameTimer.stock2ChangePerc > 0" icon="fa-solid fa-arrow-up" /><font-awesome-icon v-if="manageGameTimer.stock2ChangePerc <= 0" icon="fa-solid fa-arrow-down" /></span></span></li>
                    <li><span class="investments-moving-banner"><font-awesome-icon icon="fa-solid fa-ghost" /> GHU <span :class="(manageGameTimer.stock3ChangePerc >= 0) ? 'colour-green' : 'colour-red'">{{ Number(manageGameTimer.stock3ChangePerc).toFixed(2) }}%<font-awesome-icon v-if="manageGameTimer.stock3ChangePerc > 0" icon="fa-solid fa-arrow-up" /><font-awesome-icon v-if="manageGameTimer.stock3ChangePerc <= 0" icon="fa-solid fa-arrow-down" /></span></span></li>
                    <li><span class="investments-moving-banner"><font-awesome-icon icon="fa-solid fa-wheat-awn" /> WRF <span :class="(manageGameTimer.stock4ChangePerc >= 0) ? 'colour-green' : 'colour-red'">{{ Number(manageGameTimer.stock4ChangePerc).toFixed(2) }}%<font-awesome-icon v-if="manageGameTimer.stock4ChangePerc > 0" icon="fa-solid fa-arrow-up" /><font-awesome-icon v-if="manageGameTimer.stock4ChangePerc <= 0" icon="fa-solid fa-arrow-down" /></span></span></li>
                    <li><span class="investments-moving-banner"><font-awesome-icon icon="fa-solid fa-book" /> PSW <span :class="(manageGameTimer.stock5ChangePerc >= 0) ? 'colour-green' : 'colour-red'">{{ Number(manageGameTimer.stock5ChangePerc).toFixed(2) }}%<font-awesome-icon v-if="manageGameTimer.stock5ChangePerc > 0" icon="fa-solid fa-arrow-up" /><font-awesome-icon v-if="manageGameTimer.stock5ChangePerc <= 0" icon="fa-solid fa-arrow-down" /></span></span></li>
                </ul>
            </div>
        </div>
        </div>
        
    </div>
</template>
<script setup>
    import { useMainGameplayNavigationStore } from "../../../store/MainGameChoicesStore.js";
    import {useGameTimerStore} from '../../../store/MoneyStore.js'
    import { useMoneyManageStore } from '../../../store/MoneyStore'
    import { useSoundEffectsStore } from '../../../store/soundEffectsStore'

    const useMainGameplayNav = useMainGameplayNavigationStore();
    const manageGameTimer = useGameTimerStore()
    const manageMoney = useMoneyManageStore()
    const manageSound = useSoundEffectsStore();

</script>
<script>

export default {
    name: 'InvestmentPortfolioInteractiveComponent',
}

</script>