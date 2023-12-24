<!-- Template for the rent information page

Components that will be inside this container include:
- living options information display components

-->


<template>
    <div class="rentintro-mainwrapper">
        <div class="rentintro-title-wrapper">
            <h1>Choosing a place to rent</h1>
        </div>
        <div class="rentintro-description-wrapper">
            <p>Welcome to the next exciting chapter of your life—living independently! The UK government recommends allocating <span class="colour-green">30-35%</span> of your monthly income to be spent on rent. This guideline, often referred to as the 30% rule, ensures a healthy balance between housing expenses and overall financial well-being. </p>
            <p>Whilst the 30% rule is encouraged, every persons situation is unique and other factors such as marital status, having children or having family dependancies can effect how much you have available for rent each month. </p>
            <p>For this game, you are a new graduate, looking for a cozy one-bedroom space to call your new home. Stay mindful of their rent prices and the costs they will add to your monthly outgoings due to commute costs to work. In the UK it is expected of you to pay <span class="colour-green">5 weeks</span> of rent upfront as a deposit for your rented space.</p>
            <p class="colour-green rentintro-rentrecommendation">35% of your monthly income after tax is: £599.14</p>
            <div class="rentinfo-button-wrapper">
                <button @click="livingOptions.beginToChoseLivingOption()" class="rentinfo-button">Choose a new place to rent</button>
            </div>
        </div>
    </div>
   
</template>

<script setup>

import { useLivingOptionsStore } from '../../store/LivingOptionsStore'

const livingOptions = useLivingOptionsStore()

</script>

<script>

export default {
    name: 'RentInformationDisplay',
}

</script>