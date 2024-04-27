
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
          <IncomeStreamsFlexbox :Identifier=1  Name="Open Online Store" :SetUpCost=50 :MonthlyIncome=400 :MonthlyCost=250></IncomeStreamsFlexbox>
          <IncomeStreamsFlexbox :Identifier=2  Name="Start a podcast" :SetUpCost=200 :MonthlyIncome=150 :MonthlyCost=50></IncomeStreamsFlexbox>
        </div>
        <div class="incomestreams-choices-container">
          <IncomeStreamsFlexbox :Identifier=3  Name="Part Time Bar Work" :SetUpCost=0 :MonthlyIncome=250 :MonthlyCost=0></IncomeStreamsFlexbox>
          <IncomeStreamsFlexbox :Identifier=4  Name="Post on Social Media" :SetUpCost=0 :MonthlyIncome=350 :MonthlyCost=0></IncomeStreamsFlexbox>
      </div>
      <div class="incomestreams-choices-container">
        <IncomeStreamsFlexbox :Identifier=5  Name="Do freelance Work Online" :SetUpCost=0 :MonthlyIncome=500 :MonthlyCost=100></IncomeStreamsFlexbox>
        <IncomeStreamsFlexbox :Identifier=6  Name="Do not set up a secondary income stream" :SetUpCost=0 :MonthlyIncome=0 :MonthlyCost=0></IncomeStreamsFlexbox>
      </div>
      <div class="emergencyfundchoice-button-container">
            <button v-if="manageIncomeStream.currentlySelectedIncomeStreamChoice.ISname === 'Do not set up a secondary income stream'"
              @click="manageSound.playClickSound(), manageIncomeStream.confirmIncomeStreamChoice(), useMainGameplayNav.navigateToPage(11) ">
              Confirm Choice
            </button>
            <button v-if="manageIncomeStream.currentlySelectedIncomeStreamChoice.ISname !== 'Do not set up a secondary income stream'"
              @click="manageSound.playClickSound(), manageIncomeStream.confirmIncomeStreamChoice(), nextSlide(), (manageIncomeStream.currentlySelectedIncomeStreamChoice.ISidentifier === 6) ? useMainGameplayNav.navigateToPage(11) : '' ">
              Confirm Choice
            </button>
          </div>
      </div>
      <div :class="currentSlide !== 3 && 'pensionSlideInactive'" class="incomestreams-slidecontainer">
        <div v-if="manageIncomeStream.chosenIncomeStreamChoice.ISidentifier === 1" class="onlinestore-choosename-slide">
          <p>Choose a name for your online shop</p>
          <div class="incomestreams-editinfo-container">
            <div class="incomestreams-input-container">
              <form>
                <input type="text" placeholder="Enter name" v-model="onlineStoreName">
              </form>
              <div class="incomestreams-namechoice-button-container">
               <button @click="manageSound.playClickSound(), useMainGameplayNav.navigateToPage(11), manageIncomeStream.confirmOnlineStoreName(onlineStoreName), manageGameTimer.startCountdown(), useMainGameplayNav.unlockComponent(), manageIncomeStream.declareMonthlyCostProfit(250, 400), manageMoney.increaseMonthlyOutGoings(manageIncomeStream.IncomeStreamMonthlyCost), manageMoney.decreasePocketMoney(Number(manageIncomeStream.chosenIncomeStreamChoice.ISsetupcost))">Confirm Name</button>
              </div>
            </div>
          </div>
        </div>
        <div v-if="manageIncomeStream.chosenIncomeStreamChoice.ISidentifier === 2" class="onlinestore-choosename-slide">
          <p>Choose a name for your podcast</p>
          <div class="incomestreams-editinfo-container">
            <div class="incomestreams-input-container">
              <form>
                <input type="text" placeholder="Enter name" v-model="podcastName">
              </form>
              <div class="incomestreams-namechoice-button-container">
               <button @click="manageSound.playClickSound(), useMainGameplayNav.navigateToPage(11), manageIncomeStream.confirmPodcastName(podcastName), manageGameTimer.startCountdown(), useMainGameplayNav.unlockComponent(), manageIncomeStream.declareMonthlyCostProfit(50, 250), manageMoney.increaseMonthlyOutGoings(manageIncomeStream.IncomeStreamMonthlyCost), manageMoney.decreasePocketMoney(Number(manageIncomeStream.chosenIncomeStreamChoice.ISsetupcost))">Confirm Name</button>
              </div>
            </div>
          </div>
        </div>
        <div v-if="manageIncomeStream.chosenIncomeStreamChoice.ISidentifier === 3" class="onlinestore-choosename-slide">
          <p>Choose where you would like to work</p>
          <div class="incomestreams-editinfo-container barwork-container">
            <div class="barwork-buttons">
              <span :class="(barChoice === 'The White Horse') ? 'barwork-button-active' : ''"><button @click="barChoice = 'The White Horse'">The White Horse Pub</button></span>
              <span :class="(barChoice === 'Cornerstone Spirits') ? 'barwork-button-active' : ''"><button class="barwork-button-active" @click="barChoice = 'Cornerstone Spirits'">Cornerstone Spirits</button></span>
              <span :class="(barChoice === 'Bullet Bar') ? 'barwork-button-active' : ''"><button @click="barChoice = 'Bullet Bar'">Bullet Bar</button></span>
              <span :class="(barChoice === 'Martins Martini Bar') ? 'barwork-button-active' : ''"><button @click="barChoice = 'Martins Martini Bar'">Martin's Martini Bar</button></span>
            </div>
            <div class="barwork-confirm-container">
               <button @click="manageSound.playClickSound(), useMainGameplayNav.navigateToPage(11), manageIncomeStream.confirmBarChoiceName(barChoice), manageGameTimer.startCountdown(), useMainGameplayNav.unlockComponent(), manageIncomeStream.declareMonthlyCostProfit(0, 250), manageMoney.increaseMonthlyOutGoings(manageIncomeStream.IncomeStreamMonthlyCost), manageMoney.decreasePocketMoney(Number(manageIncomeStream.chosenIncomeStreamChoice.ISsetupcost))">Confirm Name</button>
              </div>
          </div>
        </div>
        <div v-if="manageIncomeStream.chosenIncomeStreamChoice.ISidentifier === 4" class="onlinestore-choosename-slide">
          <p>Choose your social media username</p>
          <div class="incomestreams-editinfo-container">
            <div class="incomestreams-input-container">
              <form>
                <input type="text" placeholder="Enter username" v-model="socialMediaUsername">
              </form>
              <div class="incomestreams-namechoice-button-container">
               <button @click="manageSound.playClickSound(), useMainGameplayNav.navigateToPage(11), manageIncomeStream.confirmSocialMediaUsername(socialMediaUsername), manageGameTimer.startCountdown(), useMainGameplayNav.unlockComponent(), manageIncomeStream.declareMonthlyCostProfit(0, 350), manageMoney.decreasePocketMoney(Number(manageIncomeStream.chosenIncomeStreamChoice.ISsetupcost))">Confirm Name</button>
              </div>
            </div>
          </div>
        </div>
        <div v-if="manageIncomeStream.chosenIncomeStreamChoice.ISidentifier === 5" class="onlinestore-choosename-slide">
          <p>Choose a skill for your freelance work</p>
          <div class="incomestreams-editinfo-container barwork-container">
            <div class="barwork-buttons">
              <span :class="(freelanceChosenSkill === 'Web Development') ? 'barwork-button-active' : ''"><button @click="freelanceChosenSkill = 'Web Development'">Web Development</button></span>
              <span :class="(freelanceChosenSkill === 'Video Editing') ? 'barwork-button-active' : ''"><button class="barwork-button-active" @click="freelanceChosenSkill = 'Video Editing'">Video Editing</button></span>
              <span :class="(freelanceChosenSkill === 'Social Media Management') ? 'barwork-button-active' : ''"><button @click="freelanceChosenSkill = 'Social Media Management'">Social Media Management</button></span>
              <span :class="(freelanceChosenSkill === 'Digital Marketing') ? 'barwork-button-active' : ''"><button @click="freelanceChosenSkill = 'Digital Marketing'">Digital Marketing</button></span>
            </div>
            <div class="barwork-confirm-container">
               <button @click="manageSound.playClickSound(), useMainGameplayNav.navigateToPage(11), manageIncomeStream.confirmFreelanceSkill(freelanceChosenSkill), manageGameTimer.startCountdown(), useMainGameplayNav.unlockComponent(), manageIncomeStream.declareMonthlyCostProfit(100, 500), manageMoney.increaseMonthlyOutGoings(manageIncomeStream.IncomeStreamMonthlyCost), manageMoney.decreasePocketMoney(Number(manageIncomeStream.chosenIncomeStreamChoice.ISsetupcost))">Confirm Name</button>
              </div>
          </div>
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
          <span :class="currentSlide === 0 && 'circleactive'"
            ><font-awesome-icon icon="fa-solid fa-circle"
          /></span>
          <span :class="currentSlide === 1 && 'circleactive'"
            ><font-awesome-icon icon="fa-solid fa-circle"
          /></span>
          <span :class="currentSlide === 2 && 'circleactive'"
            ><font-awesome-icon icon="fa-solid fa-circle"
          /></span>
          <span :class="currentSlide === 3 && 'circleactive'"
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
import { useGameTimerStore } from "../../../store/MoneyStore.js";
//import { useGoalsStore } from '../../../store/MainGameChoicesStore.js'
import { useMoneyManageStore } from "../../../store/MoneyStore.js";
import { useSoundEffectsStore } from '../../../store/soundEffectsStore.js'

    const manageIncomeStream = useIncomeStreamsChoicesStore()
    const useMainGameplayNav = useMainGameplayNavigationStore();
    const manageGameTimer = useGameTimerStore();
    //const manageGoals = useGoalsStore();
    const manageMoney = useMoneyManageStore();
    const manageSound = useSoundEffectsStore()

</script>
<script>
// export component data
export default {
  name: "incomeStreamsIntroduction",
  components: {
    IncomeStreamsFlexbox,
  },
  props: {
    startingSlide: Number,
  },
  data() {
    return {
      currentSlide: this.startingSlide,
      onlineStoreName: '',
      podcastName: '',
      socialMediaUsername: '',
      barChoice: '',
      freelanceChosenSkill: '',
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
