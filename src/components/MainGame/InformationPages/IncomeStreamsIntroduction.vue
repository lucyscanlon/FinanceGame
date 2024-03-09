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
        <p>Would you like to set up a secondary income stream?</p>
        <div class="incomestreams-choices-container">
          <div class="incomestreams-choice">
            <div class="incomestreams-icon-container">
              <font-awesome-icon icon="fa-solid fa-shop" />
            </div>
            <div class="incomestreams-title-container">
              <h4>Open Online Store</h4>
              <p>20 hrs per month</p>
            </div>
            <div class="incomestreams-costs-container">
              <h6 class="incomestreams-costs-title">Costs:</h6>
              <div class="incomestreams-costs-table">
                <div class="incomestreams-label">
                  <p>Set up:</p>
                  <p>Monthly income:</p>
                  <p>Monthly costs:</p>
                  <p>Expansion potential:</p>
                </div>
                <div class="incomestreams-price">
                  <p>£150</p>
                  <p>£250</p>
                  <p>£10-£200</p>
                  <p>£++</p>
                </div>
              </div>
            </div>
          </div>
          <div class="incomestreams-choice">
            
          </div>

        </div>
      </div>
      <div class="previous-next-container">
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
          v-if="currentSlide < 2"
          :class="removeNextButton && 'displaynone'"
          class="next-container"
        >
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
</script>
<script>
// export component data
export default {
  name: "incomeStreamsIntroduction",
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
