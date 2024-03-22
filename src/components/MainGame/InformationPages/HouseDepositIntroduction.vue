<!-- Template for displaying the text introduction to grocery shopping recommendations

The parent of this component:
- Main game

-->
<template>
    <div class="rentintro-mainwrapper supermarket-info-wrap">
        <div class="rentintro-title-wrapper housedepositinfo-title">
            <h1>Saving for a house deposit</h1>
        </div>
        <div class="rentintro-description-wrapper">
            <div :class="currentSlide !== 0 && 'pensionSlideInactive'" class="housedepositslide-container">
                <p>Your career has been going well and you feel its time to start saving for a house! The first step is to save for a house deposit</p>
                <div class="supermarketinfo-list">
                <ul>
                    <li>The average first time buyer puts down a <span class="colour-green">20% upfront deposit payment</span> when buying a new home. The exact figure will vary depending on which home you want to buy.</li>
                    <li>The government provides <span class="colour-green">schemes to first time buyers</span> to help you get on the property ladder.</li>
                    <li>It's great to get on the property ladder early as houses normally hold or increase in value, meaning you can sell it for more than you bought it when you are ready to move.</li>
                    <li><span class="colour-green">Stay realistic</span> about what you can afford and what space will be suitable for your needs.</li>
                </ul>
                </div>
            </div>
            <div :class="currentSlide !== 1 && 'pensionSlideInactive'" class="housedepositslide-container">
                <p>What is the process for buying a home for the first time?</p>
                <div class="supermarketinfo-list">
                <ul>
                    <li><span class="colour-green">Start saving your deposit.</span> The larger your deposit, the more varied mortgage options will be available to you.</li>
                    <li><span class="colour-green">Check your credit score,</span> a good credit score will be beneficial when applying for mortgages.</li>
                    <li>Consider all your options and opportunities:</li>
                    <ul>
                        <li class="housedeposit-list-tab"><span class="colour-green">Shared Ownership</span> - this allows you to purchase a portion of the property and pay rent on the remaining portion.</li>
                        <li class="housedeposit-list-tab"><span class="colour-green">First Homes Scheme</span> - this scheme offers new builds to first time buyers at a discounted rate of up to 30% compared to the market value.</li>
                        <li class="housedeposit-list-tab"><span class="colour-green">Lifetime ISA</span> - this scheme helps you save a deposit for your first time. Contribute up to £4000 a year and recieve a 25% bonus from the government to use for your deposit.</li>
                    </ul>
                </ul>
                </div>
            </div>
            <div :class="currentSlide !== 2 && 'pensionSlideInactive'" class="housedepositslide-container">
                <p>What schemes are available to help first time buyers?</p>
                <div class="supermarketinfo-list">
                <ul>
                    <li>A Lifetime ISA - Allows up to £4000 a year to be added into the account. Each year the government will automatically add a 25% bonus to your total. This means if you contribute £4000 in a year, the government will grant you £1000 making your total £5000 for the year.</li>
                    <li></li>
                </ul>
                </div>
            </div>
            <div class="previous-next-container incomestreams-slide3">
                <div class="previous-container">
                    <p @click="previousSlide()">
                        <font-awesome-icon icon="fa-solid fa-arrow-left" /> Previous
                    </p>
                </div>
            <div
                v-if="currentSlide < 2"
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
          v-if="currentSlide < 2" class="next-container">
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
    //import { useLivingOptionsStore } from '../../../store/InitialGameChoicesStore'
    //const livingOptions = useLivingOptionsStore()
</script>
<script>
    // export component data
    export default {
        name: 'HouseDepositIntroduction',
        data() {
            return {
                currentSlide: 0,
            }
        },
        methods: {
            nextSlide() {
                this.currentSlide = this.currentSlide + 1;
            },

            previousSlide() {
                this.currentSlide = this.currentSlide - 1;
            }
        }
    }
</script>