<!-- Template for displaying the text information introducing rent to the player

The parent of this component:
- Main game

-->
<template>
    <div class="rentintro-mainwrapper choseplacetolive-wrapper">
        <div class="rentintro-title-wrapper">
            <h1>Choosing a place to rent</h1>
        </div>
        <div class="rentintro-description-wrapper">
            <p>Welcome to the next exciting chapter of your life—living independently! Here are some tips to help you choose a place to live:</p>
            <div class="rentintro-list">
                <ul>
                    <li>The UK government recommends allocating <span class="colour-green">30-35%</span> of your monthly income to be spent on rent. (This is known as the 30% rule).</li>
                    <li>You are expected to pay <span class="colour-green">5 weeks</span> worth of rent upfront as a deposit.</li>
                    <li>For this game, you are a new graduate, looking for a cozy one bedroom space to call home!</li>
                </ul>
            </div>
            <p class="colour-green rentintro-rentrecommendation">35% of your monthly income after tax is: £599.14</p>
            <div class="rentinfo-button-wrapper">
                <!-- Call store method on click -->
                <button @click="manageSound.playClickSound(), manageMainGameNav.navigateToPage(4)" class="rentinfo-button">Choose a new place to rent</button>
            </div>
        </div>
    </div>
</template>
<script setup>
    // import stores
    import { useMainGameplayNavigationStore } from '../../../store/MainGameChoicesStore.js'
    import { useSoundEffectsStore } from '../../../store/soundEffectsStore.js'
    const manageMainGameNav = useMainGameplayNavigationStore()
    const manageSound = useSoundEffectsStore()

</script>
<script>
    // export component data
    export default {
      name: 'RentInformationDisplay',
    }
</script>