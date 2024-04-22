<template>
    <div class="investing-port-full-container">
        <div class="investing-close-portfolio-button">
            <button @click="useMainGameplayNav.navigateToPage(11)"><font-awesome-icon icon="fa-solid fa-rectangle-xmark" /></button>
        </div>
        <div class="investing-port-full-title">
            <h1>Your Investment Portfolio</h1>
        </div>
        <div class="investing-port-full-desc">
            <p>View and manage your stocks and shares.</p>
        </div>
        <div class="investing-port-full-stock-container">
            <div class="investing-port-stock-flex">
                <div class="investing-port-share-name gear-share">
                    <p><font-awesome-icon icon="fa-solid fa-gear" /> EWG <span :class="(manageGameTimer.stock1ChangePerc >= 0) ? 'colour-green' : 'colour-red'" class="stock-value">{{manageGameTimer.stock1ChangePerc.toFixed(2)}}% <font-awesome-icon v-if="manageGameTimer.stock1ChangePerc > 0" icon="fa-solid fa-arrow-up" /><font-awesome-icon v-if="manageGameTimer.stock1ChangePerc <= 0" icon="fa-solid fa-arrow-down" /></span></p>
                </div>
                <div class="investing-port-stock-visual">
                    <PortfolioLineChart :dataArray="manageGameTimer.stock1SixPrices"></PortfolioLineChart>
                </div>
                <div class="investing-port-stockprice">
                    <h6>Price/Value:</h6>
                    <p>£{{ manageGameTimer.stock1Value.toFixed(2) }}</p>
                </div>
            </div>
            <div class="investing-port-stock-flex">
                <div class="investing-port-share-name eye-share">
                    <p><font-awesome-icon icon="fa-solid fa-eye" /> FEU <span :class="(manageGameTimer.stock2ChangePerc >= 0) ? 'colour-green' : 'colour-red'" class="stock-value">{{manageGameTimer.stock2ChangePerc.toFixed(2)}}% <font-awesome-icon v-if="manageGameTimer.stock2ChangePerc > 0" icon="fa-solid fa-arrow-up" /><font-awesome-icon v-if="manageGameTimer.stock2ChangePerc <= 0" icon="fa-solid fa-arrow-down" /></span></p>
                </div>
                <div class="investing-port-stock-visual">
                    <PortfolioLineChart :dataArray="manageGameTimer.stock2SixPrices"></PortfolioLineChart>
                    
                </div>
                <div class="investing-port-stockprice">
                    <h6>Price/Value:</h6>
                    <p>£{{ manageGameTimer.stock2Value.toFixed(2) }}</p>
                </div>
            </div>
            <div class="investing-port-stock-flex">
                <div class="investing-port-share-name ghost-share">
                    <p><font-awesome-icon icon="fa-solid fa-ghost" /> GHU <span :class="(manageGameTimer.stock3ChangePerc >= 0) ? 'colour-green' : 'colour-red'" class="stock-value">{{manageGameTimer.stock3ChangePerc.toFixed(2)}}% <font-awesome-icon v-if="manageGameTimer.stock3ChangePerc > 0" icon="fa-solid fa-arrow-up" /><font-awesome-icon v-if="manageGameTimer.stock3ChangePerc <= 0" icon="fa-solid fa-arrow-down" /></span></p>
                </div>
                <div class="investing-port-stock-visual">
                    <PortfolioLineChart :dataArray="manageGameTimer.stock3SixPrices"></PortfolioLineChart>

                </div>
                <div class="investing-port-stockprice">
                    <h6>Price/Value:</h6>
                    <p>£{{ manageGameTimer.stock3Value.toFixed(2) }}</p>
                </div>
            </div>
            <div class="investing-port-stock-flex">
                <div class="investing-port-share-name wheat-share">
                    <p><font-awesome-icon icon="fa-solid fa-wheat-awn" /> WRF <span :class="(manageGameTimer.stock4ChangePerc >= 0) ? 'colour-green' : 'colour-red'" class="stock-value">{{manageGameTimer.stock4ChangePerc.toFixed(2)}}% <font-awesome-icon v-if="manageGameTimer.stock4ChangePerc > 0" icon="fa-solid fa-arrow-up" /><font-awesome-icon v-if="manageGameTimer.stock4ChangePerc <= 0" icon="fa-solid fa-arrow-down" /></span></p>
                </div>
                <div class="investing-port-stock-visual">
                    <PortfolioLineChart :dataArray="manageGameTimer.stock4SixPrices"></PortfolioLineChart>

                </div>
                <div class="investing-port-stockprice">
                    <h6>Price/Value:</h6>
                    <p>£{{ manageGameTimer.stock4Value.toFixed(2) }}</p>
                </div> 
            </div>
            <div class="investing-port-stock-flex">
                <div class="investing-port-share-name book-share">
                    <p><font-awesome-icon icon="fa-solid fa-book" /> PSW <span :class="(manageGameTimer.stock5ChangePerc >= 0) ? 'colour-green' : 'colour-red'" class="stock-value">{{manageGameTimer.stock5ChangePerc.toFixed(2)}}% <font-awesome-icon v-if="manageGameTimer.stock5ChangePerc > 0" icon="fa-solid fa-arrow-up" /><font-awesome-icon v-if="manageGameTimer.stock5ChangePerc <= 0" icon="fa-solid fa-arrow-down" /></span></p>
                </div>
                <div class="investing-port-stock-visual">
                    <PortfolioLineChart :dataArray="manageGameTimer.stock5SixPrices"></PortfolioLineChart>

                </div>
                <div class="investing-port-stockprice">
                    <h6>Price/Value:</h6>
                    <p>£{{ manageGameTimer.stock5Value.toFixed(2) }}</p>
                </div>
            </div>
        </div>
        <div class="investing-port-buy-sell-buttons-container">
            <div class="investing-port-buy-sell-flex">
                <div class="investing-port-stocks-owned">
                    <p>Owned Shares: <span class="shares-owned colour-green">{{ manageInvestmentPortfolio.ShareTotalAmounts[0] }}</span></p>
                </div>
                <form>
                    <input type="number" placeholder="__" v-model="EWGAmountToBuyOrSell">
                </form>
                <div class="investingport-buy-sell-buttons">
                    <button @click="manageInvestmentPortfolio.buyMoreShare(0, EWGAmountToBuyOrSell), manageMoney.buyNumOfStocks(manageGameTimer.stock1Value, EWGAmountToBuyOrSell), rerenderComponent()">Buy</button>
                    <span class="investing-port-sell-button"><button @click="manageMoney.sellNumOfStocks(manageGameTimer.stock1Value, EWGAmountToBuyOrSell), manageInvestmentPortfolio.sellShare(0, EWGAmountToBuyOrSell), rerenderComponent()">Sell</button></span>
                    <span class="investing-port-sell-all-button"><button @click="manageMoney.sellAllOfStock(manageGameTimer.stock1Value, manageInvestmentPortfolio.ShareTotalAmounts[0]), manageInvestmentPortfolio.sellAllShare(0), rerenderComponent()">Sell All</button></span>
                </div>
            </div>
            <div class="investing-port-buy-sell-flex">
                <div class="investing-port-stocks-owned">
                    <p>Owned Shares: <span class="shares-owned colour-green">{{ manageInvestmentPortfolio.ShareTotalAmounts[1] }}</span></p>
                </div>
                <form>
                    <input type="number" placeholder="__" v-model="FEUAmountToBuyOrSell">
                </form>
                <div class="investingport-buy-sell-buttons">
                    <button @click="manageInvestmentPortfolio.buyMoreShare(1, FEUAmountToBuyOrSell), manageMoney.buyNumOfStocks(manageGameTimer.stock2Value, FEUAmountToBuyOrSell), rerenderComponent()">Buy</button>
                    <span class="investing-port-sell-button"><button @click="manageInvestmentPortfolio.sellShare(1, FEUAmountToBuyOrSell), manageMoney.sellNumOfStocks(manageGameTimer.stock2Value, FEUAmountToBuyOrSell), rerenderComponent()">Sell</button></span>
                    <span class="investing-port-sell-all-button"><button @click="manageMoney.sellAllOfStock(manageGameTimer.stock2Value, manageInvestmentPortfolio.ShareTotalAmounts[1]), manageInvestmentPortfolio.sellAllShare(1), rerenderComponent()">Sell All</button></span>
                </div>
                
            </div>
            <div class="investing-port-buy-sell-flex">
                <div class="investing-port-stocks-owned">
                    <p>Owned Shares: <span class="shares-owned colour-green">{{ manageInvestmentPortfolio.ShareTotalAmounts[2] }}</span></p>
                </div>
                <form>
                    <input type="number" placeholder="__" v-model="GHUAmountToBuyOrSell">
                </form>
                <div class="investingport-buy-sell-buttons">
                    <button @click="manageInvestmentPortfolio.buyMoreShare(2, GHUAmountToBuyOrSell), manageMoney.buyNumOfStocks(manageGameTimer.stock3Value, GHUAmountToBuyOrSell), rerenderComponent()">Buy</button>
                    <span class="investing-port-sell-button"><button @click="manageInvestmentPortfolio.sellShare(2, GHUAmountToBuyOrSell), manageMoney.sellNumOfStocks(manageGameTimer.stock3Value, GHUAmountToBuyOrSell), rerenderComponent()">Sell</button></span>
                    <span class="investing-port-sell-all-button"><button @click="manageMoney.sellAllOfStock(manageGameTimer.stock3Value, manageInvestmentPortfolio.ShareTotalAmounts[2]), manageInvestmentPortfolio.sellAllShare(2), rerenderComponent()">Sell All</button></span>
                </div>
                
            </div>
            <div class="investing-port-buy-sell-flex">
                <div class="investing-port-stocks-owned">
                    <p>Owned Shares: <span class="shares-owned colour-green">{{ manageInvestmentPortfolio.ShareTotalAmounts[3] }}</span></p>
                </div>
                <form>
                    <input type="number" placeholder="__" v-model="WRFAmountToBuyOrSell">
                </form>
                <div class="investingport-buy-sell-buttons">
                    <button @click="manageInvestmentPortfolio.buyMoreShare(3, WRFAmountToBuyOrSell), manageMoney.buyNumOfStocks(manageGameTimer.stock4Value, WRFAmountToBuyOrSell), rerenderComponent()">Buy</button>
                    <span class="investing-port-sell-button"><button @click="manageInvestmentPortfolio.sellShare(3, WRFAmountToBuyOrSell), manageMoney.sellNumOfStocks(manageGameTimer.stock4Value, WRFAmountToBuyOrSell), rerenderComponent()">Sell</button></span>
                    <span class="investing-port-sell-all-button"><button @click="manageMoney.sellAllOfStock(manageGameTimer.stock4Value, manageInvestmentPortfolio.ShareTotalAmounts[3]), manageInvestmentPortfolio.sellAllShare(3), rerenderComponent()">Sell All</button></span>
                </div>
                
            </div>
            <div class="investing-port-buy-sell-flex">
                <div class="investing-port-stocks-owned">
                    <p>Owned Shares: <span class="shares-owned colour-green">{{ manageInvestmentPortfolio.ShareTotalAmounts[4] }}</span></p>
                </div>
                <form>
                    <input type="number" placeholder="__" v-model="PSWAmountToBuyOrSell">
                </form>
                <div class="investingport-buy-sell-buttons">
                    <button @click="manageInvestmentPortfolio.buyMoreShare(4, PSWAmountToBuyOrSell), manageMoney.buyNumOfStocks(manageGameTimer.stock5Value, PSWAmountToBuyOrSell), rerenderComponent()">Buy</button>
                    <span class="investing-port-sell-button"><button @click="manageInvestmentPortfolio.sellShare(4, PSWAmountToBuyOrSell), manageMoney.sellNumOfStocks(manageGameTimer.stock5Value, PSWAmountToBuyOrSell), rerenderComponent()">Sell</button></span>
                    <span class="investing-port-sell-all-button"><button @click="manageMoney.sellAllOfStock(manageGameTimer.stock5Value, manageInvestmentPortfolio.ShareTotalAmounts[4]), manageInvestmentPortfolio.sellAllShare(4), rerenderComponent()">Sell All</button></span>
                </div>
                
            </div>
        </div>
        <div class="investing-port-total-visual-container">
            <div class="investing-port-total-number-container">
                <div class="investing-port-totalbalance-title">
                    <h5>Total Balance: <span :class="(manageMoney.totalBalancePercentageChange >= 0) ? 'colour-green' : 'colour-red'">({{ Number(manageMoney.totalBalancePercentageChange).toFixed(2)}}%)<font-awesome-icon v-if="manageMoney.totalBalancePercentageChange > 0" icon="fa-solid fa-arrow-up" /><font-awesome-icon v-if="manageMoney.totalBalancePercentageChange < 0" icon="fa-solid fa-arrow-down" /></span></h5>
                </div>
                <div class="investing-port-totalbalance-figure">
                    <p>£{{ manageMoney.InvestmentPortfolioCurrentValue.toFixed(2) }}</p>
                </div>
            </div>
            <div class="investing-port-visual-container">
                <div class="investing-port-percentage-split-title">
                    <h5>Investment Portfolio Split:</h5>
                </div>
                <div class="investing-port-bar-container">
                    <div :style="{ width: manageInvestmentPortfolio.Share1BarPercentage + '%' }" class="investment1-bar stock-bar">

                    </div>
                    <div :style="{ width: manageInvestmentPortfolio.Share2BarPercentage + '%' }" class="investment2-bar stock-bar">
                        
                    </div>
                    <div :style="{ width: manageInvestmentPortfolio.Share3BarPercentage + '%' }" class="investment3-bar stock-bar">
                        
                    </div>
                    <div :style="{ width: manageInvestmentPortfolio.Share4BarPercentage + '%' }" class="investment4-bar stock-bar">
                        
                    </div>
                    <div :style="{ width: manageInvestmentPortfolio.Share5BarPercentage + '%' }" class="investment5-bar stock-bar">
                        
                    </div>
                    
                </div>

            </div>
        </div>
        <div class="investmentport-total-profitloss-container">
                <div class="investmentport-invested-amount">
                    <div class="investment-port-total-invested">
                        <p>Total Invested: <span class="colour-green right-align">£{{ Number(manageMoney.totalInvested).toFixed(2) }}</span></p>
                    </div>
                </div>
                <div class="investmentport-lossprof-container">
                    <div class="investment-port-total-invested">
                        <p v-if="manageMoney.totalProfitOrLoss >= 0">Total Profit/Loss: <span class="colour-green right-align">£{{ Number(manageMoney.totalProfitOrLoss).toFixed(2) }} <font-awesome-icon icon="fa-solid fa-arrow-up" /></span></p>
                        <p v-if="manageMoney.totalProfitOrLoss < 0">Total Profit/Loss: <span class="colour-red right-align">£{{ Number(manageMoney.totalProfitOrLoss).toFixed(2) }} <font-awesome-icon icon="fa-solid fa-arrow-down" /></span></p>
                    </div>
                </div>
            </div>
        <!--<div class="investing-port-close-portfolio-button">
            <button @click="useMainGameplayNav.navigateToPage(11)">Close Portfolio</button>
        </div>-->
        

    </div>
   
</template>

<script setup>

    import PortfolioLineChart from './PortfolioLineChart.vue'
    import { useInvestmentPortfolioChoiceStore } from '../../../store/MainGameChoicesStore.js'
    import { useMainGameplayNavigationStore } from '../../../store/MainGameChoicesStore.js'
    import {useGameTimerStore} from '../../../store/MoneyStore.js'
    import { useMoneyManageStore } from '../../../store/MoneyStore'
    
    const manageInvestmentPortfolio = useInvestmentPortfolioChoiceStore()
    const useMainGameplayNav = useMainGameplayNavigationStore();
    const manageGameTimer = useGameTimerStore()
    const manageMoney = useMoneyManageStore()

</script>
<script>

export default {
    name: 'InvestmentPortfolioFull',
    data() {
        return {
            EWGAmountToBuyOrSell: '',
            FEUAmountToBuyOrSell: '',
            GHUAmountToBuyOrSell: '',
            WRFAmountToBuyOrSell: '',
            PSWAmountToBuyOrSell: '',
        }
    },
    methods: {
        rerenderComponent() {
            this.EWGAmountToBuyOrSell = '';
            this.FEUAmountToBuyOrSell = '';
            this.GHUAmountToBuyOrSell = '';
            this.WRFAmountToBuyOrSell = '';
            this.PSWAmountToBuyOrSell = '';
            this.$forceUpdate();
        },
    }, 
    
}

</script>