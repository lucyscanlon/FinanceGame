<!-- Template for displaying the text information introducing rent to the player

The parent of this component:
- Main game

-->
<script setup>
    import { usePensionChoicesStore } from '../../../store/MainGameChoicesStore'
    import { useLivingOptionsStore } from '../../../store/InitialGameChoicesStore'
    import { useMainGameplayNavigationStore } from '../../../store/MainGameChoicesStore.js'
    import {useGameTimerStore} from '../../../store/MoneyStore.js'

    const managePension = usePensionChoicesStore()
    const livingOptions = useLivingOptionsStore()
    const manageMainGameNav = useMainGameplayNavigationStore()
    const manageGameTimer = useGameTimerStore()

</script>
<template>
    <div class="rentintro-mainwrapper">
        <div class="pensionintro-title-wrapper">
            <h1>Setting up your pension</h1>
        </div>
        <div class="pensionintro-description-wrapper">
            <div :class="currentSlide !== 0 && 'pensionSlideInactive'" class="pension-slidecontainer">
                <p>What is a pension?</p>
                <div class="rentintro-list pensionintro pensionslideactive">
                    <ul>
                        <li>A pension is a way to put money aside for when you <span class="colour-green">retire</span>.</li>
                        <li>You can then have access to this money when you reach <span class="colour-green">55 years old</span> or you retire from work. </li>
                        <li>You can pay into <span class="colour-green">multiple pensions</span> during your life.</li>
                        <li>Pensions are usually invested in <span class="colour-green">stocks and shares</span>.</li>
                    </ul>
                </div>
            </div>
            <div :class="currentSlide !== 1 && 'pensionSlideInactive'" class="pension-slidecontainer">
                <p>What different types of pensions are there?</p>
                <div class="rentintro-list pensionintro pensionslideactive">
                    <ul>
                        <li><span class="colour-green">Workplace pensions:</span> A pension set up by your employer.</li>
                        <li><span class="colour-green">Personal Pension or private pension</span> A type of pension you can set up yourself.</li>
                        <li><span class="colour-green">A state pension: </span> The pension you will recieve from the government when you reach retirement age, if you have paid at least ten years of national insurance contributions.</li>
                        <li>It is often recommended to set up a workplace or personal pension alongside your state pension so you can retire more comfortably.</li>
                    </ul>
                </div>
            </div>
            <div :class="currentSlide !== 2 && 'pensionSlideInactive'" class="pension-slidecontainer">
                <p>What is a workplace pension?</p>
                <div class="rentintro-list pensionintro pensionslideactive">
                    <ul>
                        <li>You must be <span class="colour-green">aged 22</span> and earn over <span class="colour-green">£10,000</span> a year in the UK to benefit from a workplace pension.</li>
                        <li>You and your employer will contribute. The minimum contribution you must make to your pension is <span class="colour-green">5%</span> of your salary, with your employer contributing <span class="colour-green">3%</span>.</li>
                        <li>It is generally recommended to contribute a total of <span class="colour-green">12.5%</span> of your monthly salary if you are able to.</li>
                    </ul>
                </div>
            </div>
            <div :class="currentSlide !== 3 && 'pensionSlideInactive'" class="pension-slidecontainer">
                <p>What are the benefits of investing your pension?</p>
                <div class="rentintro-list pensionintro pensionslideactive">
                    <ul>
                        <li>Investing is a great way to help counteract the impact of <span class="colour-green">inflation</span> (the increase of prices and costs) over time on your savings.</li>
                        <li>You are also able to benefit from <span class="colour-green">compound interest</span>. When you recieve a return from an investment, this is then able to be reinvested to continue making more money. Compound interest can have a large effect on your pension over your life.</li>
                        <li>If investment values fall, they do tend to increase again over time.</li>
                        <li>Whilst investment value can <span class="colour-green">never be guaranteed</span>, there are investment options which are deemed as safer options such as the <span class="colour-green">FTSE 100</span>, a share index of the top 100 companies listed in the UK in terms of their value.</li>
                    </ul>
                </div>
            </div>
            <div :class="currentSlide !== 4 && 'pensionSlideInactive'" class="pension-slidecontainer">
                <p>How much would you like to contribute each month?</p>
                <div class="pension-contribution-choices-padding">
                <div class="pension-contributionchoices-container">
                    <PensionChoiceFlexbox :PensionIdentifier=1 :PensionYCPerc=5 :PensionYCAmount=101.21 :PensionECPerc=3 :PensionECAmount=60.73 :PensionTCPerc=8 :PensionTCAmount=161.94></PensionChoiceFlexbox>
                    <PensionChoiceFlexbox :PensionIdentifier=2 :PensionYCPerc=7 :PensionYCAmount=141.70 :PensionECPerc=4 :PensionECAmount=80.97 :PensionTCPerc=11 :PensionTCAmount=222.67></PensionChoiceFlexbox>
                    <PensionChoiceFlexbox :PensionIdentifier=3 :PensionYCPerc=8 :PensionYCAmount=161.94 :PensionECPerc=4.5 :PensionECAmount=91.09 :PensionTCPerc=12.5 :PensionTCAmount=253.03></PensionChoiceFlexbox>
                </div>
                <div class="pension-contribution-button-container">
                        <button v-if="livingOptions.livingOptionsGameStage === 6" @click="managePension.confirmCurrentlySelectedPensionChoice(), nextSlide()">Confirm Choice</button>
                        <button v-if="manageMainGameNav.currentPage === 2" @click="managePension.confirmCurrentlySelectedPensionChoice(), nextSlide()">Confirm Choice</button>
                 </div>
                </div>
            </div>
            <div :class="currentSlide !== 5 && 'pensionSlideInactive'" class="pension-slidecontainer">
                <p>Would you like to invest your pension in stocks and shares?</p>
                <div class="pension-investment-container-padding">
                <div class="pension-investment-container">
                    <PensionInvestmentFlexbox :PensionInvIndentifier=1 PensionInvDesc="Do not invest pension."></PensionInvestmentFlexbox>
                    <PensionInvestmentFlexbox :PensionInvIndentifier=2 PensionInvDesc="Invest pension in:"></PensionInvestmentFlexbox>
                </div>
                <div class="pension-contribution-button-container">
                        <button v-if="livingOptions.livingOptionsGameStage === 6" @click="managePension.confirmCurrentlySelectedPensionInvestmentChoice(), nextSlide(), livingOptions.livingOptionsNextStageOfGame(), manageGameTimer.startCountdown()">Confirm Choice</button>
                        <button v-if="manageMainGameNav.currentPage === 2" @click="managePension.confirmCurrentlySelectedPensionInvestmentChoice(), manageMainGameNav.navigateToPage(1), manageGameTimer.startCountdown()">Confirm Choice</button>
                 </div>
            </div>
            </div>
            <div class="previous-next-container">
                <div class="previous-container">
                    <p @click="previousSlide()"><font-awesome-icon icon="fa-solid fa-arrow-left" /> Previous</p>
                </div>
                <div :class="removeNextButton && 'displaynone'" class="currentslide-circles-container">
                    <span :class="currentSlide === 0 && 'circleactive'"><font-awesome-icon icon="fa-solid fa-circle" /></span>
                    <span :class="currentSlide === 1 && 'circleactive'"><font-awesome-icon icon="fa-solid fa-circle" /></span>
                    <span :class="currentSlide === 2 && 'circleactive'"><font-awesome-icon icon="fa-solid fa-circle" /></span>
                    <span :class="currentSlide === 3 && 'circleactive'"><font-awesome-icon icon="fa-solid fa-circle" /></span>
                    <span :class="currentSlide === 4 && 'circleactive'"><font-awesome-icon icon="fa-solid fa-circle" /></span>
                </div>
                <div :class="removeNextButton && 'displaynone'" class="next-container">
                    <p @click="nextSlide()">Next <font-awesome-icon icon="fa-solid fa-arrow-right" /></p>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>

    import PensionChoiceFlexbox from '../MainGameChoices/PensionChoicesFlexbox';
    import PensionInvestmentFlexbox from '../MainGameChoices/PensionInvestmentChoiceFlexbox';
    // export component data
    export default {
      name: 'PensionInformationDisplay',
      components: {
        PensionChoiceFlexbox,
        PensionInvestmentFlexbox,
      },
      props: {
        startingSlide: Number,
      },
      data() {
        return {
            currentSlide: this.startingSlide, 
            removeNextButton: false,
        }
      }, methods: {
        nextSlide() {
            if(this.currentSlide < 6) {
                this.currentSlide = this.currentSlide + 1;
            }

            if (this.currentSlide === 4) {
                this.removeNextButton = true;
            }
        },
        previousSlide() {
            if(this.currentSlide > 0) {
                this.currentSlide = this.currentSlide - 1;
                
                if (this.currentSlide < 4) {
                    this.removeNextButton = false;
                }
            }
        }
      }
    }
</script>