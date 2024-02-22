<!-- Template for displaying the text information introducing rent to the player

The parent of this component:
- Main game

-->
<template>
    <div class="rentintro-mainwrapper">
        <div class="pensionintro-title-wrapper">
            <h1>Setting up your pension</h1>
        </div>
        <div class="pensionintro-description-wrapper">
            <div :class="this.currentSlide !== 0 && 'pensionSlideInactive'" class="pension-slidecontainer">
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
            <div :class="this.currentSlide !== 1 && 'pensionSlideInactive'" class="pension-slidecontainer">
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
            <div :class="this.currentSlide !== 2 && 'pensionSlideInactive'" class="pension-slidecontainer">
                <p>What is a workplace pension?</p>
                <div class="rentintro-list pensionintro pensionslideactive">
                    <ul>
                        <li>You must be <span class="colour-green">aged 22</span> and earn over <span class="colour-green">£10,000</span> a year in the UK to benefit from a workplace pension.</li>
                        <li>You and your employer will contribute and you will also recieve a tax relief e.g. if you paid <span class="colour-green">£40</span>, your employer would pay <span class="colour-green">£30</span> and you would recieve a <span class="colour-green">£10</span> tax relief.</li>
                        <li>The minimum contribution you must make to your pension is <span class="colour-green">5%</span> of your salary, with your employer contributing <span class="colour-green">3%</span>.</li>
                        <li>It is generally recommended to contribute <span class="colour-green">12.5%</span> of your monthly salary.</li>
                    </ul>
                </div>
            </div>
            <div :class="this.currentSlide !== 3 && 'pensionSlideInactive'" class="pension-slidecontainer">
                <p>How much would you like to contribute each month?</p>
                <div class="pension-contributionchoices-container">
                    <div class="pension-contribution-box">
                        <div class="pension-contribution-padding">
                            <div class="pension-contribution-option-container">
                                <h2>Option One:</h2>
                            </div>
                        <div class="pension-contribution-title">
                            <h3>Your contribution:</h3>
                            <div class="pension-contribution-percentage-container">
                                <span class="colour-green"><p>5%</p></span>
                                <p class="pension-amount">(£101.21)</p>
                            </div>
                        </div>
                        <div class="pension-contribution-title">
                            <h3>Your employer contribution:</h3>
                            <div class="pension-contribution-percentage-container">
                                <span class="colour-green"><p>3%</p></span>
                                <p class="pension-amount">(£60.73)</p>
                            </div>
                        </div>
                        <div class="pension-contribution-title">
                            <h3>Total contribution:</h3>
                            <div class="pension-contribution-percentage-container">
                                <span class="colour-green"><p>8%</p></span>
                                <p class="pension-amount">(£161.94)</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="pension-contribution-box">
                        <div class="pension-contribution-padding">
                            <div class="pension-contribution-option-container">
                                <h2>Option Two:</h2>
                            </div>
                        <div class="pension-contribution-title">
                            <h3>Your contribution:</h3>
                            <div class="pension-contribution-percentage-container">
                                <span class="colour-green"><p>7%</p></span>
                                <p class="pension-amount">(£141.70)</p>
                            </div>
                        </div>
                        <div class="pension-contribution-title">
                            <h3>Your employer contribution:</h3>
                            <div class="pension-contribution-percentage-container">
                                <span class="colour-green"><p>4%</p></span>
                                <p class="pension-amount">(£80.97)</p>
                            </div>
                        </div>
                        <div class="pension-contribution-title">
                            <h3>Total contribution:</h3>
                            <div class="pension-contribution-percentage-container">
                                <span class="colour-green"><p>11%</p></span>
                                <p class="pension-amount">(£222.67)</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="pension-contribution-box">
                        <div class="pension-contribution-padding">
                            <div class="pension-contribution-option-container">
                                <h2>Option Two:</h2>
                            </div>
                        <div class="pension-contribution-title">
                            <h3>Your contribution:</h3>
                            <div class="pension-contribution-percentage-container">
                                <span class="colour-green"><p>8%</p></span>
                                <p class="pension-amount">(£161.94)</p>
                            </div>
                        </div>
                        <div class="pension-contribution-title">
                            <h3>Your employer contribution:</h3>
                            <div class="pension-contribution-percentage-container">
                                <span class="colour-green"><p>4.5%</p></span>
                                <p class="pension-amount">(£91.09)</p>
                            </div>
                        </div>
                        <div class="pension-contribution-title">
                            <h3>Total contribution:</h3>
                            <div class="pension-contribution-percentage-container">
                                <span class="colour-green"><p>12.5%</p></span>
                                <p class="pension-amount">(£253.03)</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="previous-next-container">
                <div class="previous-container">
                    <p @click="this.previousSlide()"><font-awesome-icon icon="fa-solid fa-arrow-left" /> Previous</p>
                </div>
                <div :class="this.removeNextButton && 'displaynone'" class="currentslide-circles-container">
                    <span :class="this.currentSlide === 0 && 'circleactive'"><font-awesome-icon icon="fa-solid fa-circle" /></span>
                    <span :class="this.currentSlide === 1 && 'circleactive'"><font-awesome-icon icon="fa-solid fa-circle" /></span>
                    <span :class="this.currentSlide === 2 && 'circleactive'"><font-awesome-icon icon="fa-solid fa-circle" /></span>
                    <span :class="this.currentSlide === 3 && 'circleactive'"><font-awesome-icon icon="fa-solid fa-circle" /></span>
                </div>
                <div :class="this.removeNextButton && 'displaynone'" class="next-container">
                    <p @click="this.nextSlide()">Next <font-awesome-icon icon="fa-solid fa-arrow-right" /></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>


</script>
<script>
    // export component data
    export default {
      name: 'PensionInformationDisplay',
      data() {
        return {
            currentSlide: 0, 
            removeNextButton: false,
        }
      }, methods: {
        nextSlide() {
            if(this.currentSlide < 4) {
                this.currentSlide = this.currentSlide + 1;
            }

            if (this.currentSlide === 3) {
                this.removeNextButton = true;
            }
        },
        previousSlide() {
            if(this.currentSlide > 0) {
                this.currentSlide = this.currentSlide - 1;
                
                if (this.currentSlide < 3) {
                    this.removeNextButton = false;
                }
            }
        }
      }
    }
</script>