<!-- Template for paying bills introduction

The parent of this component:
- MainGame

The children of this component:
- None

-->
<template>
    <!-- display close button only if the user has accessed this page throughout the info button on the interface component -->
    <div class="rentintro-mainwrapper supermarket-info-wrap">
        <div v-if="manageMainGameNav.currentPage === 28" @click="manageMainGameNav.navigateToPage(11), manageGameTimer.startCountdown()" class="exitout-introduction-button-container">
            <p><font-awesome-icon icon="fa-solid fa-rectangle-xmark" /></p>
        </div>
        <div class="rentintro-title-wrapper billsintro-title">
            <h1>Your monthly bills!</h1>
        </div>
        <!-- display slide depending on the value of currentSlide -->
        <div :class="currentSlide !== 0 && 'pensionSlideInactive'" class="pension-slidecontainer billsintro-slide">
            <div class="rentintro-description-wrapper">
                <p>How much are your bills?</p>
                <div class="supermarketinfo-list">
                    <ul>
                        <li>Your bills include monthly costs such as your <span class="colour-green">rent and grocery and transport costs.</span></li>
                        <li>You can view information about your monthly outgoings by scrolling down on the <span class="colour-green">main game sidebar.</span></li>
                        <li>You are also able to <span class="colour-green">change your previous decisions</span> that make up your bills sum by clicking the 'change' buttons found in the sidebar.</li>
                    </ul>
                </div>
                <div class="billsintro-billstotal-container payingbills-subheading">
                    <h4>Your current total bills amount:</h4>
                    <p>£{{ manageMoney.monthlyOutGoingsSum.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2}) }}</p>
                </div>
            </div>
        </div>
        <!-- display slide depending on the value of currentSlide -->
        <div :class="currentSlide !== 1 && 'pensionSlideInactive'" class="pension-slidecontainer billsintro-slide">
            <div class="rentintro-description-wrapper">
                <p>How to pay your bills</p>
                <div class="supermarketinfo-list">
                    <ul>
                        <li>Bills can be paid up to <span class="colour-green">10 days</span> before the end of the month.</li>
                        <li>Click the <span class="colour-green">'Pay Bills'</span> button to pay.</li>
                    </ul>
                </div>
                <div class="billsintro-diagram-container">
                    <img alt="An image displaying the pink pay bills button" src="/PayBillsScreenshot.png">
                </div>
            </div>
        </div>
        <!-- display slide depending on the value of currentSlide -->
        <div :class="currentSlide !== 2 && 'pensionSlideInactive'" class="pension-slidecontainer billsintro-slide">
            <div class="rentintro-description-wrapper">
                <p>How to pay your bills</p>
                <div class="supermarketinfo-list">
                    <ul>
                        <li>The 'Your Bills' section, displays the <span class="colour-green">total bill amount</span> and how many <span class="colour-green">days until it is due.</span></li>
                        <li>The 'Pay Bills' button will turn <span class="colour-green">pink</span> when bills are due, and <span class="colour-green">red</span> when bills are overdue.</li>
                    </ul>
                </div>
                <div class="billsintro-diagram-container">
                    <img alt="An image displaying the red pay bills button" src="/BillsLateScreenshot.png">
                </div>
            </div>
        </div>
        <!-- display slide depending on the value of currentSlide -->
        <div :class="currentSlide !== 3 && 'pensionSlideInactive'" class="pension-slidecontainer billsintro-slide">
            <div class="rentintro-description-wrapper">
                <p>Paying bills late</p>
                <div class="supermarketinfo-list">
                    <ul>
                        <li>Make sure to <span class="colour-green">save enough money</span> at the end of the month to pay your bills</li>
                        <li>Make sure your account balance does not go <span class="colour-green">negative.</span></li>
                        <li>Paying bills late and having a negative bank balance will have <span class="colour-green">consequences.</span></li>
                    </ul>
                </div>
                <div v-if="manageMainGameNav.currentPage === 27" class="rentinfo-button-wrapper billsintro-button">
                    <!-- Call store method on click -->
                    <button @click="manageSound.playClickSound(), manageMainGameNav.navigateToPage(11), manageMainGameNav.unlockComponent(), manageGameTimer.startCountdown()" class="rentinfo-button">Continue to main game</button>
                </div>
            </div>
        </div>
        <!-- Navigate through slides -->
            <div class="previous-next-container">
                <div class="previous-container">
                    <p v-if="currentSlide !== 0" @click="previousSlide()"><font-awesome-icon icon="fa-solid fa-arrow-left" /> Previous</p>
                </div>
                <div :class="removeNextButton && 'displaynone'" class="currentslide-circles-container">
                    <span :class="currentSlide === 0 && 'circleactive'"><font-awesome-icon icon="fa-solid fa-circle" /></span>
                    <span :class="currentSlide === 1 && 'circleactive'"><font-awesome-icon icon="fa-solid fa-circle" /></span>
                    <span :class="currentSlide === 2 && 'circleactive'"><font-awesome-icon icon="fa-solid fa-circle" /></span>
                    <span :class="currentSlide === 3 && 'circleactive'"><font-awesome-icon icon="fa-solid fa-circle" /></span>
                </div>
                <div :class="removeNextButton && 'displaynone'" class="next-container">
                    <p @click="nextSlide()">Next <font-awesome-icon icon="fa-solid fa-arrow-right" /></p>
                </div>
            </div>
        </div>
</template>
<script setup>
    // import stores
    import { useMainGameplayNavigationStore } from '../../../store/MainGameChoicesStore.js'
    import { useGameTimerStore,  useMoneyManageStore} from '../../../store/MoneyStore.js'
    import { useSoundEffectsStore } from '../../../store/soundEffectsStore.js'
    
    const manageMainGameNav = useMainGameplayNavigationStore()
    const manageGameTimer = useGameTimerStore()
    const manageSound = useSoundEffectsStore()
    const manageMoney = useMoneyManageStore()
    
</script>
<script>
    // export component data
    export default {
        name: 'payingBillsIntroduction',
        data() {
            return {
                currentSlide: 0,
                removeNextButton: false,
            }
        },
        methods: {
            nextSlide() {
                if(this.currentSlide < 3) {
                    this.currentSlide = this.currentSlide + 1;  
                }

                if (this.currentSlide === 3) {
                    this.removeNextButton = true;
                }

            },

            previousSlide() {

                if(this.currentSlide > 0) {
                    this.currentSlide = this.currentSlide - 1;
                }

                if (this.currentSlide !== 3) {
                    this.removeNextButton = false;
                }

            }
        }
    }
</script>