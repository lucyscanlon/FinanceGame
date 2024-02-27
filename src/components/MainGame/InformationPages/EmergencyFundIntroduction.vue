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
            <p>What is an emergency fund and why is it important?</p>
            <div class="rentintro-list">
                <ul>
                    <li>An emergency fund is an amount of money that is set aside to deal with <span class="colour-green">unexpected</span> or <span class="colour-green">unplanned financial circumstances</span>.</li>
                    <li>These circumstances can range from <span class="colour-green">unexpected bills</span>, <span class="colour-green">home or car repairs</span>, or <span class="colour-green">replacement of essential electronics</span>.</li>
                    <li>Your emergency fund can be used for large or small payments which are not normally part of your monthly outgoings.</li>
                    <li>Emergency funds can protect you from building up <span class="colour-green">debt</span>.</li>
                </ul>
            </div>
            <div class="rentinfo-button-wrapper">
                <!-- Call store method on click -->
                <button @click="manageMainGameNav.navigateToPage(1)" class="currentaccount-button">Open current account</button>
            </div>
        </div>
    </div>
</template>
<script setup>
    // import stores
    import { useMainGameplayNavigationStore } from '../../../store/MainGameChoicesStore.js'
    const manageMainGameNav = useMainGameplayNavigationStore()

</script>
<script>
    // export component data
    export default {
      name: 'EmergencyFundIntroduction',
    }
</script>