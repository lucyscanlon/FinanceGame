
<template>
  <div class="rentintro-mainwrapper">
    <div class="rentintro-title-wrapper everydayaccount-info-title">
      <h1>Setting up a secondary income stream</h1>
    </div>
    <div class="rentintro-description-wrapper">
      <div :class="currentSlide !== 0 && 'pensionSlideInactive'"
        class="incomestreams-slidecontainer">
        <p>Here are some benefits of diversifying your income:</p>
        <div class="rentintro-list">
          <ul>
            <li>
              You are able to be a step closer to achieving <span class="colour-green">financial independance</span>. You are
              able to rely less on one job to pay your bills each month.
            </li>
            <li>
              You will have more money each month to put towards things that are important to you.
            </li>
            <li>
              You are able to <span class="colour-green">develop skills outside of your job </span>in areas that you are interested in. This can lead to unexpected opportunities in the future.
            </li>
          </ul>
        </div>
      </div>
      <div :class="currentSlide !== 1 && 'pensionSlideInactive'" class="incomestreams-slidecontainer">
        <p>Part time employment vs side hustles, which is right for you?</p>
        <div class="rentintro-list">
          <ul>
            <li>It's important to first decide if setting up a secondary income stream is an avenue that you are interested in and whether it would be feasible with your current lifestyle.</li>
            <li>It's completely down to each individuals <span class="colour-green">circumstances</span> and <span class="colour-green">preferences</span> to determine this decision.</li>
            <li><span class="colour-green">Part time jobs:</span> These can provide stability, socialisation, a regular income and regular hours. However they can be limiting in their potential for development and expansion.</li>
            <li><span class="colour-green">Self Started Side Hustles:</span> Can be a creative outlet, a chance to build something bigger. However can have large start up costs and unpredictable earnings.</li>
            
          </ul>
        </div>
      </div>
      <div :class="currentSlide !== 2 && 'pensionSlideInactive'" class="incomestreams-slidecontainer">
        <p>Would you like to set up a secondary income stream?</p>
        <div class="incomestreams-choices-container">
          <IncomeStreamsFlexbox :Identifier=1  Name="Open Online Store" :Hours=20 :SetUpCost=20 :MonthlyIncome=250 MonthlyCost="10-200" ExpansionPotential="+ +"></IncomeStreamsFlexbox>
          <IncomeStreamsFlexbox :Identifier=2  Name="Start a podcast" :Hours=10 :SetUpCost=200 :MonthlyIncome=150 MonthlyCost="50" ExpansionPotential="+ +"></IncomeStreamsFlexbox>
        </div>
        <div class="incomestreams-choices-container">
          <IncomeStreamsFlexbox :Identifier=3  Name="Part Time Bar Work" :Hours=30 :SetUpCost=0 :MonthlyIncome=300 MonthlyCost="0" ExpansionPotential="+"></IncomeStreamsFlexbox>
          <IncomeStreamsFlexbox :Identifier=4  Name="Post on Social Media" :Hours=20 :SetUpCost=0 :MonthlyIncome=200 MonthlyCost="0" ExpansionPotential="+ +"></IncomeStreamsFlexbox>
      </div>
      <div class="incomestreams-choices-container">
        <IncomeStreamsFlexbox :Identifier=5  Name="Do freelance Work Online" :Hours=20 :SetUpCost=0 :MonthlyIncome=200 MonthlyCost="30" ExpansionPotential="+ +"></IncomeStreamsFlexbox>
        <IncomeStreamsFlexbox :Identifier=6  Name="Do not set up a secondary income stream" :Hours=0 :SetUpCost=0 :MonthlyIncome=0 MonthlyCost="0" ExpansionPotential=""></IncomeStreamsFlexbox>
      </div>
      <div class="emergencyfundchoice-button-container">
            <button
              @click="
                manageIncomeStream.confirmIncomeStreamChoice(),
                  useMainGameplayNav.navigateToPage(1)"
            >
              Confirm Choice
            </button>
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
          class="currentslide-circles-container"
        >
          <span :class="currentSlide === 0 && 'circleactive'"
            ><font-awesome-icon icon="fa-solid fa-circle"
          /></span>
          <span :class="currentSlide === 1 && 'circleactive'"
            ><font-awesome-icon icon="fa-solid fa-circle"
          /></span>
          <span :class="currentSlide === 2 && 'circleactive'"
            ><font-awesome-icon icon="fa-solid fa-circle"
          /></span>
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
import IncomeStreamsFlexbox from "../MainGameChoices/IncomeStreamsFlexbox";
import { useMainGameplayNavigationStore } from "../../../store/MainGameChoicesStore.js";

import { useIncomeStreamsChoicesStore } from '../../../store/MainGameChoicesStore.js'
    const manageIncomeStream = useIncomeStreamsChoicesStore()
    const useMainGameplayNav = useMainGameplayNavigationStore();

</script>
<script>
// export component data
export default {
  name: "incomeStreamsIntroduction",
  components: {
    IncomeStreamsFlexbox,
  },
  data() {
    return {
      currentSlide: 1,
    };
  },
  methods: {
    nextSlide() {
      this.currentSlide = this.currentSlide + 1;
    },

    previousSlide() {
      this.currentSlide = this.currentSlide - 1;
    },
  },
};
</script>
