<!-- Component which holds all main elements of game play. 

Components:

- You have a job offer
- Rent information display
- Map layout
- Supermarket Choice 
- Transports Options Display

-->
<template>
  <div class="maingame-wrapper">
    <div class="gameplay-topbanner-wrapper">
      <div class="current-date-wrapper">
        <p>
          Days until payday:
          <span class="colour-white">{{ manageGameTimer.countdown }}</span>
        </p>
      </div>
      <div class="payday-date-wrapper">
        <p>
          Current Month and Year:
          <span class="colour-white">{{ manageGameTimer.currentMonth }} {{ manageGameTimer.currentYear }}</span>
        </p>
      </div>
    </div>
    <WelcomePage v-if="manageMainGameNav.currentPage === 0"></WelcomePage>
    <!-- display component dependant on the stage of game - located in the initialgamechoicesstore-->
    <salaryAndTaxInfoDisplay v-if="manageMainGameNav.currentPage === 1"></salaryAndTaxInfoDisplay>
    <currentAccountIntroduction v-if="manageMainGameNav.currentPage === 2"></currentAccountIntroduction>
    <RentInformationDisplay v-if="manageMainGameNav.currentPage === 3"></RentInformationDisplay>
    <MapDisplay v-if="manageMainGameNav.currentPage === 4"></MapDisplay>
    <SupermarketInfoDisplay v-if="manageMainGameNav.currentPage === 5"></SupermarketInfoDisplay>
    <SupermarketChoiceDisplay v-if="(manageMainGameNav.currentPage === 6)"></SupermarketChoiceDisplay>
    <TransportMethodDisplay v-if="manageMainGameNav.currentPage === 7"></TransportMethodDisplay>
    <!--current goal info --> 
    <CurrentGoalIntroduction v-if="manageMainGameNav.currentPage === 8"></CurrentGoalIntroduction>
    <PensionInformationDisplay v-if="manageMainGameNav.currentPage === 9" :startingSlide="0"></PensionInformationDisplay>
    <PensionInformationDisplay v-if="manageMainGameNav.currentPage === 10" :startingSlide="4"></PensionInformationDisplay>
    <EmergencyFundIntroduction v-if="manageMainGameNav.currentPage === 12"></EmergencyFundIntroduction>
    <incomeStreamsIntroduction v-if="manageMainGameNav.currentPage === 13" :startingSlide="0"></incomeStreamsIntroduction>
    <incomeStreamsIntroduction v-if="manageMainGameNav.currentPage === 14" :startingSlide="2"></incomeStreamsIntroduction>
    <HouseDepositIntroduction v-if="manageMainGameNav.currentPage === 15"></HouseDepositIntroduction>
    <InvestingIntroduction v-if="manageMainGameNav.currentPage === 16"></InvestingIntroduction>
    <InvestmentPortfolioFull v-if="manageMainGameNav.currentPage === 17"></InvestmentPortfolioFull>
    <PopUpComponent v-if="manageMainGameNav.currentPage === 18"></PopUpComponent>
    <MapDisplay v-if="manageMainGameNav.currentPage === 19"></MapDisplay>
    <SupermarketChoiceDisplay v-if="manageMainGameNav.currentPage === 20"></SupermarketChoiceDisplay>
    <TransportMethodDisplay v-if="manageMainGameNav.currentPage === 21"></TransportMethodDisplay>
    <PensionPredictions v-if="manageMainGameNav.currentPage === 22"></PensionPredictions>
    <div v-if="(manageMainGameNav.currentPage === 11) || (manageMainGameNav.currentPage === 18)" class="maingameplay-interaction-container">
      <div class="maingameplay-top-row-container">
        <CurrentGoalInteractiveComponent></CurrentGoalInteractiveComponent>
        <PensionInteractionComponent></PensionInteractionComponent>
        <EmergencyFundsInteractiveComponent></EmergencyFundsInteractiveComponent>
      </div>
      <div class="maingameplay-bottom-row-container">
        <!--<IncomeStreamsInteractiveComponent></IncomeStreamsInteractiveComponent>-->
        <PayBillsComponent></PayBillsComponent>
        <HouseDepositInteractiveComponent></HouseDepositInteractiveComponent>
        <InvestmentPortfolioInteractiveComponent></InvestmentPortfolioInteractiveComponent>
      </div>
    </div>
    <div className="gameplay-bottombanner-wrapper">
      <div className="monthly-outgoings-wrapper">
        <p>
          Total monthly outgoings:
          <span className="colour-white">£{{ Number(manageMoney.monthlyOutGoingsSum).toFixed(2) }}</span>
        </p>
      </div>
    </div>
    <div v-if="manageMainGameNav.currentPage === 18" class="popups-maingameplay-black-overlay">
        <!-- Black overlay for popups-->
    </div>
  </div>
</template>
<script setup>
// import stores
//import { useLivingOptionsStore } from "../../store/InitialGameChoicesStore";
import { useMoneyManageStore } from "../../store/MoneyStore.js";
import { useMainGameplayNavigationStore } from "../../store/MainGameChoicesStore.js";
import { useGameTimerStore } from "../../store/MoneyStore.js";

//const livingOptions = useLivingOptionsStore();
const manageMoney = useMoneyManageStore();
const manageMainGameNav = useMainGameplayNavigationStore();
const manageGameTimer = useGameTimerStore();

</script>
<script>
// import components
import MapDisplay from "./InitialGameChoices/MapLayout.vue";
import RentInformationDisplay from "./InformationPages/RentIntroductionInfo.vue";
import salaryAndTaxInfoDisplay from "./InformationPages/YouHaveAJobOffer.vue";
import SupermarketChoiceDisplay from "./InitialGameChoices/SupermarketChoice.vue";
import SupermarketInfoDisplay from "./InformationPages/SupermarketInfo.vue";
import TransportMethodDisplay from "./InitialGameChoices/TransportOptionsDisplay.vue";
import PensionInformationDisplay from "./InformationPages/PensionIntroduction.vue";
import PensionInteractionComponent from "./MainGameplayComponents/PensionComponent.vue";
//import EverydaySavingInteractiveComponent from "./MainGameplayComponents/EverydaySavingsComponent.vue";
import EmergencyFundsInteractiveComponent from "./MainGameplayComponents/EmergencyFundsComponent.vue";
import HouseDepositInteractiveComponent from "./MainGameplayComponents/HouseDepositComponent.vue";
//import IncomeStreamsInteractiveComponent from "./MainGameplayComponents/IncomeStreamsComponent.vue";
import InvestmentPortfolioInteractiveComponent from "./MainGameplayComponents/InvestmentPortfolioComponent.vue";
import currentAccountIntroduction from "./InformationPages/CurrentAccountIntroduction.vue";
import EmergencyFundIntroduction from "./InformationPages/EmergencyFundIntroduction.vue";
import incomeStreamsIntroduction from "./InformationPages/IncomeStreamsIntroduction.vue";
import HouseDepositIntroduction from "./InformationPages/HouseDepositIntroduction.vue";
import InvestingIntroduction from "./InformationPages/InvestingIntroduction.vue";
import InvestmentPortfolioFull from "./MainGameplayComponents/InvestingPortfolio.vue";
import CurrentGoalInteractiveComponent from "./MainGameplayComponents/CurrentGoalComponent.vue";
import CurrentGoalIntroduction from "./InformationPages/CurrentGoalIntroduction.vue";
import PopUpComponent from "./MainGameplayComponents/PopUpsComponent.vue";
import WelcomePage from "./InformationPages/WelcomePage.vue";
import PensionPredictions from './InformationPages/PensionPrediction.vue';
import PayBillsComponent from "./MainGameplayComponents/BillsComponent.vue";
// export component data
export default {
  name: "MainGameWrapper",
  components: {
    MapDisplay,
    RentInformationDisplay,
    salaryAndTaxInfoDisplay,
    SupermarketChoiceDisplay,
    SupermarketInfoDisplay,
    TransportMethodDisplay,
    PensionInformationDisplay,
    PensionInteractionComponent,
    //EverydaySavingInteractiveComponent,
    EmergencyFundsInteractiveComponent,
    HouseDepositInteractiveComponent,
    //IncomeStreamsInteractiveComponent,
    InvestmentPortfolioInteractiveComponent,
    currentAccountIntroduction,
    EmergencyFundIntroduction,
    incomeStreamsIntroduction,
    HouseDepositIntroduction,
    InvestingIntroduction,
    InvestmentPortfolioFull,
    CurrentGoalInteractiveComponent,
    CurrentGoalIntroduction,
    PopUpComponent,
    PayBillsComponent,
  },
};
</script>
