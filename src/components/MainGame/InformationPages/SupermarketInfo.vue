<!-- Template for the rent information page

Components that will be inside this container include:
- living options information display components

-->


<template>
    <div class="rentintro-mainwrapper supermarket-info-wrap">
        <div class="rentintro-title-wrapper supermarketinfo-title">
            <h1>Choosing a supermarket to shop at</h1>
        </div>
        <div class="rentintro-description-wrapper">
            <p>Your next task is to choose a place to shop for groceries!</p>
            <p>In the UK, you have a variety of supermarket options for your weekly grocery shopping. When choosing where to shop, consider factors such as location and accessibility. It's advisable to opt for a supermarket close to your home to save time and transportation costs. Keep an eye on price comparisons and make the most of <span class="colour-green">deals, discounts, memberships,</span> and <span class="colour-green">loyalty programs</span>. Joining loyalty programs can result in an average annual saving of £360 on your weekly shopping!</p>
            <p>It's recommended to minimise spending on fast food through delivery apps, as these expenses can accumulate rapidly. According to a 2015 survey by BBC's Good Food, individuals under 24 spend an average of £20 per week on fast food. Aim to reserve takeaways for special occasions or as a treat to maintain a more budget-conscious approach.</p>
            <div class="rentinfo-button-wrapper">
                <button @click="livingOptions.livingOptionsNextStageOfGame()" class="rentinfo-button">View Supermarket Options</button>
            </div>
        </div>
    </div>
   
</template>

<script setup>

import { useLivingOptionsStore } from '../../../store/LivingOptionsStore'

const livingOptions = useLivingOptionsStore()

</script>

<script>

export default {
    name: 'SupermarketInfoDisplay',
}

</script>