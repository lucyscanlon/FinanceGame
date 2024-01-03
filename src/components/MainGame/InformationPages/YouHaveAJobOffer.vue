<!-- Template for displaying the text information introducing salaries and taxes

The parent of this component:
- Main game

-->
<template>
    <div class="joboffer-mainwrapper">
        <div class="joboffer-title-wrapper">
            <h1>You have a job offer!</h1>
        </div>
        <div class="joboffer-description-wrapper">
            <p>Congratulations your hard work has paid off and you have received an exciting job offer. You have been offered an annual salary of <span class="colour-green">£24,291</span>, aligning with the average starting salary in the UK. Here is a breakdown of your paycheque, the taxes and national insurance you will pay, as well as what you will take home at the end of each month.  </p>
            <p>As your income falls between £12,751 and £50,270, you will be subject to a <span class="colour-green">20%</span> tax rate. £12,750 of your income each year is classed as ‘Personal Allowance’ and will not be taxed, whilst the remaining portion will be.</p>
            <table>
                <tr>
                    <th>Annual salary</th>
                    <th class="align-right">£24,291.00</th>
                </tr>
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
                <button @click="livingOptions.livingOptionsNextStageOfGame()" class="joboffer-button">Accept job offer</button>
                <a href="https://www.tax.service.gov.uk/estimate-paye-take-home-pay/your-pay" target="blank">
                    <button class="joboffer-calculator">Check out the UK tax calculator</button>
                </a>
            </div>
        </div>
    </div>
</template>
<script setup>
    // import stores
    import { useLivingOptionsStore } from '../../../store/InitialGameChoicesStore'
    const livingOptions = useLivingOptionsStore()
</script>
<script>
    // export component data
    export default {
        name: 'salaryAndTaxInfoDisplay',
    }

</script>