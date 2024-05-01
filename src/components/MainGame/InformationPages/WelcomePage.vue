<!-- Template for displaying the text introduction to grocery shopping recommendations

The parent of this component:
- Main game

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
                    <li>Prepare for a journey towards independence as you are now ready to leave the comfort of your family home!</li>
                    <li>Equip yourself with the knowledge of personal finance to lay a solid foundation for your future.</li>
                    <li>In this game you will explore various topics of personal finance and then apply your new knowledge to make informed decisions.</li>
                    <li>Read each topic carefully and aim to make the correct choices.</li>
                    <li>Maintain a high responsibility score by choosing wisely.</li>
                </ul>
            </div>
            <div class="rentinfo-button-wrapper welcomepage-button">
                <!-- Call store method on click -->
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