<!-- Template for displaying the text introduction to grocery shopping recommendations

The parent of this component:
- Main game

-->
<template>
    <div class="rentintro-mainwrapper supermarket-info-wrap">
        <div v-if="useMainGameplayNav.currentPage === 27" @click="useMainGameplayNav.navigateToPage(11), manageGameTimer.startCountdown()" class="exitout-introduction-button-container">
            <p><font-awesome-icon icon="fa-solid fa-rectangle-xmark" /></p>
        </div>
        <div class="rentintro-title-wrapper housedepositinfo-title">
            <h1>Investing in the Stock Market</h1>
        </div>
        <div class="homedeposit-description-wrapper">
            <div :class="currentSlide !== 0 && 'pensionSlideInactive'" class="housedepositslide-container">
                <p>What is the stock market?</p>
                <div class="supermarketinfo-list">
                <ul>
                    <li>The ‘stock market’ or ‘stock exchange’ is a place where you can <span class="colour-green">buy or sell shares or stocks</span> of public companies.</li>
                    <li>Companies sell shares of their companies to <span class="colour-green">raise funds from investors</span> in the public.</li>
                    <li>Investors will own a share in a company with the hopes that its <span class="colour-green">value will rise over time</span>, as well as that they will receive <span class="colour-green">dividend payments</span> every 3 months. </li>
                    <li>The stock market is open for trading <span class="colour-green">Monday-Friday 8am-4.30pm.</span></li>
                </ul>
                </div>
            </div>
            <div :class="currentSlide !== 1 && 'pensionSlideInactive'" class="housedepositslide-container">
                <p>What are the benefits to investing in the stock market?</p>
                <div class="supermarketinfo-list">
                <ul>
                    <li>Owning stocks can help you <span class="colour-green">build your savings</span> over time.</li>
                    <li>It can <span class="colour-green">protect your money from inflation</span> as the value of a stock can increase.</li>
                    <li>As the price of a stock can rise and fall over time. When it rises you can sell a <span class="colour-green">share at a profit.</span></li>
                    <li>You can earn <span class="colour-green">dividends,</span> a portion of company profits, which are paid on a quarterly basis.</li>
                </ul>
                </div>
            </div>
            <div :class="currentSlide !== 2 && 'pensionSlideInactive'" class="housedepositslide-container">
                <p>What are the risks of investing in the stock market?</p>
                <div class="supermarketinfo-list">
                <ul>
                    <li>The stock market can be <span class="colour-green">unpredictable</span> and share values can <span class="colour-green">fluctuate unexpectedly.</span></li>
                    <li>Stocks may fall in value, meaning if you cash out on that stock you may get <span class="colour-green">less money than your initial investment back.</span></li>
                    <li>Stock Market crashes such as the <span class="colour-green">2008 global financial crisis</span> can negatively affect the value of all stocks.</li>
                    <li>The rate of inflation can affect your investment return. If the <span class="colour-green">inflation rate exceeds</span> the rate of return for your investment you may lose out overall.</li>
                </ul>
                </div>
            </div>
            <div :class="currentSlide !== 3 && 'pensionSlideInactive'" class="housedepositslide-container">
                <p>How to manage the risk of investing in the stock market</p>
                <div class="supermarketinfo-list">
                <ul>
                    <li>Invest in the stock market <span class="colour-green">for the long run.</span> This is a marathon not a sprint!</li>
                    <li>Determine <span class="colour-green">how much you can afford to invest</span> and how regularly by accessing your financial circumstances.</li>
                    <li>Invest in stable stocks with a <span class="colour-green">steady forecasted growth</span> such as the FTSE 100.</li>
                    <li>Avoid investing in <span class="colour-green">volatile and unpredictable</span> stocks which rise and fall in value rapidly.</li>
                </ul>
                </div>
                <div class="investingintro-portfoliolink-button-container">
                    <button @click="manageSound.playClickSound(), useMainGameplayNav.navigateToPage(17), manageGameTimer.startCountdown(), useMainGameplayNav.unlockComponent()">View Investment Portfolio</button>
                </div>
            </div>
            <div class="previous-next-container incomestreams-slide3">
                <div class="previous-container">
                    <p v-if="currentSlide !== 0" @click="previousSlide()">
                        <font-awesome-icon icon="fa-solid fa-arrow-left" /> Previous
                    </p>
                </div>
            <div
                v-if="currentSlide < 4"
                :class="removeNextButton && 'displaynone'"
                class="currentslide-circles-container">
                <span :class="currentSlide === 0 && 'circleactive'">
                    <font-awesome-icon icon="fa-solid fa-circle"/>
                </span>
                <span :class="currentSlide === 1 && 'circleactive'">
                    <font-awesome-icon icon="fa-solid fa-circle"/>
                </span>
                <span :class="currentSlide === 2 && 'circleactive'">
                    <font-awesome-icon icon="fa-solid fa-circle"/>
                </span>
                <span :class="currentSlide === 3 && 'circleactive'">
                    <font-awesome-icon icon="fa-solid fa-circle"/>
                </span>
            </div>
        <div
          v-if="currentSlide < 3" :class="removeNextButton && 'displaynone'" class="next-container">
          <p @click="nextSlide()">
            Next <font-awesome-icon icon="fa-solid fa-arrow-right" />
          </p>
        </div>
      </div>
            
        </div>
    </div>
</template>
<script setup>
    // import stores
    import { useMainGameplayNavigationStore } from "../../../store/MainGameChoicesStore.js";
    import {useGameTimerStore} from '../../../store/MoneyStore.js'
    import { useSoundEffectsStore } from '../../../store/soundEffectsStore.js'

    const useMainGameplayNav = useMainGameplayNavigationStore();
    const manageGameTimer = useGameTimerStore()
    const manageSound = useSoundEffectsStore()

</script>
<script>
    // export component data
    export default {
        name: 'InvestingIntroduction',
        props: {
            NumOfSlides: Number,
        },
        data() {
            return {
                currentSlide: 0,
                removeNextButton: false,
            }
        },
        methods: {
            nextSlide() {
                this.currentSlide = this.currentSlide + 1;

                if (this.currentSlide === (this.NumOfSlides -1)) {
                    this.removeNextButton = true;
                }
            },

            previousSlide() {
                this.currentSlide = this.currentSlide - 1;

                if (this.currentSlide !== (this.NumOfSlides -1)) {
                    this.removeNextButton = false;
                }
            },
        },
    }
</script>