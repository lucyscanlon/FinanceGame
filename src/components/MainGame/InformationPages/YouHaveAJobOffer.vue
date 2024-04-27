<!-- Template for displaying the text information introducing salaries and taxes

The parent of this component:
- Main game

-->
<template>
    <div class="job-offer-padding">
    <div class="joboffer-mainwrapper">
        <div class="joboffer-title-wrapper">
            <h1>You have a job offer!</h1>
        </div>
        <div class="joboffer-description-wrapper">
            <p>Congratulations your hard work has paid off and you have received an exciting job offer. Here are the details of your offer:</p>
            <div class="joboffer-list">
                <ul>
                    <li>An annual salary of <span class="colour-green">£24,291</span> (aligning with the average starting salary in the UK)</li>
                    <li>You will be subjected to a <span class="colour-green">20%</span> tax rate</li>
                    <li><span class="colour-green">£12,750</span> of your income will not be taxed, as this called your 'Personal Allowance'.</li>
                </ul>
            </div>
            <table>
                <tr>
                    <th>Monthly pay (before tax)</th>
                    <th class="align-right">£2024.25</th>
                </tr>
                <tr>
                    <th>Monthly national insurance tax</th>
                    <th class="align-right">£117.21</th>
                </tr>
                <tr>
                    <th>Monthly income tax</th>
                    <th class="align-right">£195.20</th>
                </tr>
                <tr>
                    <th class="colour-green">Monthly take home pay (after tax)</th>
                    <th class="colour-green align-right">£1,711.84</th>
                </tr>
            </table>
            <div class="joboffer-button-wrapper">
                <!-- Call store method on click -->
                <button @click="manageSound.playClickSound(), manageMainGameNav.navigateToPage(2), manageBarometer.increaseScore(5)" class="joboffer-button">Accept job offer</button>
                <a href="https://www.tax.service.gov.uk/estimate-paye-take-home-pay/your-pay" target="blank">
                    <button class="joboffer-calculator">Check out the UK tax calculator</button>
                </a>
            </div>
        </div>
    </div>
</div>
</template>
<script setup>
    // import stores
    import { useMainGameplayNavigationStore } from '../../../store/MainGameChoicesStore'
    import { useBarometerStore } from '../../../store/MainGameChoicesStore'
    import { useSoundEffectsStore } from '../../../store/soundEffectsStore.js'
    const manageMainGameNav = useMainGameplayNavigationStore()
    const manageBarometer = useBarometerStore()
    const manageSound = useSoundEffectsStore()
</script>
<script>
    // export component data
    export default {
        name: 'salaryAndTaxInfoDisplay',
    }

</script>