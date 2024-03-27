<template>
    <div class="investing-port-full-container">
        <div class="investing-port-full-title">
            <h1>Your Investment Portfolio</h1>
        </div>
        <div class="investing-port-full-desc">
            <p>View and manage your stocks and shares. Trading open from <span class="colour-green">Monday-Friday.</span></p>
        </div>
        <div class="investing-port-full-stock-container">
            <div class="investing-port-stock-flex">
                <div class="investing-port-share-name gear-share">
                    <p><font-awesome-icon icon="fa-solid fa-gear" /> EWG <span class="stock-value colour-green">1.73% <font-awesome-icon icon="fa-solid fa-arrow-up" /></span></p>
                </div>
                <div class="investing-port-stock-visual">

                </div>
                <div class="investing-port-stockprice">
                    <h6>Price/Value:</h6>
                    <p>£11.72</p>
                </div>
            </div>
            <div class="investing-port-stock-flex">
                <div class="investing-port-share-name eye-share">
                    <p><font-awesome-icon icon="fa-solid fa-eye" /> FEU <span class="stock-value colour-red">1.23% <font-awesome-icon icon="fa-solid fa-arrow-down" /></span></p>
                </div>
                <div class="investing-port-stock-visual">
                    
                </div>
                <div class="investing-port-stockprice">
                    <h6>Price/Value:</h6>
                    <p>£11.72</p>
                </div>
            </div>
            <div class="investing-port-stock-flex">
                <div class="investing-port-share-name ghost-share">
                    <p><font-awesome-icon icon="fa-solid fa-ghost" /> GHU <span class="stock-value colour-green">1.59% <font-awesome-icon icon="fa-solid fa-arrow-up" /></span></p>
                </div>
                <div class="investing-port-stock-visual">

                </div>
                <div class="investing-port-stockprice">
                    <h6>Price/Value:</h6>
                    <p>£11.72</p>
                </div>
            </div>
            <div class="investing-port-stock-flex">
                <div class="investing-port-share-name wheat-share">
                    <p><font-awesome-icon icon="fa-solid fa-wheat-awn" /> WRF <span class="stock-value colour-red">1.98% <font-awesome-icon icon="fa-solid fa-arrow-down" /></span></p>
                </div>
                <div class="investing-port-stock-visual">

                </div>
                <div class="investing-port-stockprice">
                    <h6>Price/Value:</h6>
                    <p>£11.72</p>
                </div> 
            </div>
            <div class="investing-port-stock-flex">
                <div class="investing-port-share-name book-share">
                    <p><font-awesome-icon icon="fa-solid fa-book" /> PSW <span class="stock-value colour-red">1.13% <font-awesome-icon icon="fa-solid fa-arrow-down" /></span></p>
                </div>
                <div class="investing-port-stock-visual">

                </div>
                <div class="investing-port-stockprice">
                    <h6>Price/Value:</h6>
                    <p>£11.72</p>
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
                    <button @click="manageInvestmentPortfolio.buyMoreShare(0, EWGAmountToBuyOrSell), rerenderComponent()">Buy</button>
                    <span class="investing-port-sell-button"><button @click="manageInvestmentPortfolio.sellShare(0, EWGAmountToBuyOrSell), rerenderComponent()">Sell</button></span>
                    <span class="investing-port-sell-all-button"><button @click="manageInvestmentPortfolio.sellAllShare(0), rerenderComponent()">Sell All</button></span>
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
                    <button @click="manageInvestmentPortfolio.buyMoreShare(1, FEUAmountToBuyOrSell), rerenderComponent()">Buy</button>
                    <span class="investing-port-sell-button"><button @click="manageInvestmentPortfolio.sellShare(1, FEUAmountToBuyOrSell), rerenderComponent()">Sell</button></span>
                    <span class="investing-port-sell-all-button"><button @click="manageInvestmentPortfolio.sellAllShare(1), rerenderComponent()">Sell All</button></span>
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
                    <button @click="manageInvestmentPortfolio.buyMoreShare(2, GHUAmountToBuyOrSell), rerenderComponent()">Buy</button>
                    <span class="investing-port-sell-button"><button @click="manageInvestmentPortfolio.sellShare(2, GHUAmountToBuyOrSell), rerenderComponent()">Sell</button></span>
                    <span class="investing-port-sell-all-button"><button @click="manageInvestmentPortfolio.sellAllShare(2), rerenderComponent()">Sell All</button></span>
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
                    <button @click="manageInvestmentPortfolio.buyMoreShare(3, WRFAmountToBuyOrSell), rerenderComponent()">Buy</button>
                    <span class="investing-port-sell-button"><button @click="manageInvestmentPortfolio.sellShare(3, WRFAmountToBuyOrSell), rerenderComponent()">Sell</button></span>
                    <span class="investing-port-sell-all-button"><button @click="manageInvestmentPortfolio.sellAllShare(3), rerenderComponent()">Sell All</button></span>
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
                    <button @click="manageInvestmentPortfolio.buyMoreShare(4, PSWAmountToBuyOrSell), rerenderComponent()">Buy</button>
                    <span class="investing-port-sell-button"><button @click="manageInvestmentPortfolio.sellShare(4, PSWAmountToBuyOrSell), rerenderComponent()">Sell</button></span>
                    <span class="investing-port-sell-all-button"><button @click="manageInvestmentPortfolio.sellAllShare(4), rerenderComponent()">Sell All</button></span>
                </div>
                
            </div>
        </div>
        <div class="investing-port-total-visual-container">
            <div class="investing-port-total-number-container">
                <div class="investing-port-totalbalance-title">
                    <h5>Total Balance:</h5>
                </div>
                <div class="investing-port-totalbalance-figure">
                    <p>£14,000</p>
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
        <div class="investing-port-close-portfolio-button">
            <button @click="useMainGameplayNav.navigateToPage(1)">Close Portfolio</button>
        </div>
        

    </div>
   
</template>

<script setup>

    import { useInvestmentPortfolioChoiceStore } from '../../../store/MainGameChoicesStore.js'
    import { useMainGameplayNavigationStore } from '../../../store/MainGameChoicesStore.js'

    const manageInvestmentPortfolio = useInvestmentPortfolioChoiceStore()
    const useMainGameplayNav = useMainGameplayNavigationStore();

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
        }
    }
}

</script>