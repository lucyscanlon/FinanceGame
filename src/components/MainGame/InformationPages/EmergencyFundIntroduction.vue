<!-- Template for displaying the text information introducing rent to the player

The parent of this component:
- Main game

-->
<template>
    <div class="rentintro-mainwrapper">
        <div class="rentintro-title-wrapper everydayaccount-info-title">
            <h1>Creating an emergency fund</h1>
        </div>
        <div class="rentintro-description-wrapper">
            <div :class="currentSlide !== 0 && 'pensionSlideInactive'" class="pension-slidecontainer">
                <p>What is an emergency fund and why is it important?</p>
                <div class="rentintro-list emergencyfund-list-intro pensionslideactive">
                    <ul>
                        <li>An emergency fund is an amount of money that is set aside to deal with <span class="colour-green">unexpected</span> or <span class="colour-green">unplanned financial circumstances</span>.</li>
                        <li>These circumstances can range from <span class="colour-green">unexpected bills</span>, <span class="colour-green">home or car repairs</span>, or <span class="colour-green">replacement of essential electronics</span>.</li>
                        <li>Your emergency fund can be used for large or small payments which are not normally part of your monthly outgoings.</li>
                        <li>Emergency funds can protect you from building up <span class="colour-green">debt</span>.</li>
                    </ul>
                </div>
            </div>
            <div :class="currentSlide !== 1 && 'pensionSlideInactive'" class="pension-slidecontainer">
                <p>Tips for creating and using an emergency fund:</p>
                <div class="rentintro-list emergencyfund-list-intro pensionslideactive">
                    <ul>
                        <li>Keep the money in a place that is <span class="colour-green">easily accessible</span> - you never know when you will need it!</li>
                        <li>You can choose to store your fund in a <span class="colour-green">high interest savings account</span>, meaning your money can grow over time from interest. Some accounts may need an <span class="colour-green">initial deposit</span> to set up, always check the requirements.</li>
                        <li>Don't invest the money in stocks and shares - This way the value of your emergency fund will not be subject to market fluctuations.</li>
                        <li>Only use the fund for <span class="colour-green">true emergnecies</span> and remember to replenish your emergency fund as soon as possible after using it.</li>
                    </ul>
                </div>
            </div>
            <div :class="currentSlide !== 2 && 'pensionSlideInactive'" class="pension-slidecontainer">
                <p>Choose an account to hold your emergency fund</p>
                <div class="rentintro-list emergencyfund-list-intro pensionslideactive">
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
                </div>
                <div :class="removeNextButton && 'displaynone'" class="next-container">
                    <p @click="nextSlide()">Next <font-awesome-icon icon="fa-solid fa-arrow-right" /></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    // import stores
    //import { useMainGameplayNavigationStore } from '../../../store/MainGameChoicesStore.js'
    //const manageMainGameNav = useMainGameplayNavigationStore()

</script>
<script>
    // export component data
    export default {
      name: 'EmergencyFundIntroduction',
      data() {
        return {
            currentSlide: 0,
        }
      }, methods: {
        nextSlide() {
            this.currentSlide = this.currentSlide + 1;
        },

        previousSlide() {
            this.currentSlide = this.currentSlide - 1;
        }
      }
    }
</script>