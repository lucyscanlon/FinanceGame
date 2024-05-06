<!-- Template for display welcome page

The parent of this component:
- Main Game

The children of this component:
- None

-->
<template>
    <div class="rentintro-mainwrapper supermarket-info-wrap">
        <div class="rentintro-title-wrapper supermarketinfo-title">
            <h1>Welcome!</h1>
        </div>
        <div class="rentintro-description-wrapper">
            <p class="colour-green">It's time to prepare for financial independence.</p>
            <div class="supermarketinfo-list first-goal-padding welcomepage-padding">
                <ul>
                    <li>Prepare for a journey towards financial independence as you prepare to move out of your family home!</li>
                    <li>Learn about topics within personal finance and lay a solid foundation for your financial future.</li>
                    <li>Apply your new knowledge to make informed decisions in scenario.</li>
                    <li>Read each topic carefully and aim to make the correct choices.</li>
                    <li>Maintain a high responsibility score by choosing wisely.</li>
                </ul>
            </div>
            <div class="rentinfo-button-wrapper welcomepage-button">
                <!-- Play sound, navigate to next page -->
                <button @click="manageSound.playClickSound(), manageMainGameNav.navigateToPage(1)" class="rentinfo-button">Start Game</button>
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
        name: 'WelcomePage',
    }
</script>