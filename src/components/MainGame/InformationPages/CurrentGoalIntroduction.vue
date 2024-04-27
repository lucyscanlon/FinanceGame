<!-- Template for displaying the text introduction to grocery shopping recommendations

The parent of this component:
- Main game

-->
<template>
    <div class="rentintro-mainwrapper supermarket-info-wrap">
        <div class="rentintro-title-wrapper supermarketinfo-title">
            <h1>Your first goal!</h1>
        </div>
        <div class="rentintro-description-wrapper">
            <p>Your first goal is to pay your bills on time.</p>
            <div class="supermarketinfo-list first-goal-padding">
                <ul>
                    <li>Goals will appear on your <span class="colour-green">game homepage.</span></li>
                    <li><span class="colour-green">Complete the tasks</span> to complete the goal</li>
                    <li>When the end of the month approaches, press the <span class="colour-green">'Pay monthly outgoings'</span> button to pay your bills.</li>
                    <li>Bills can be paid up to <span class="colour-green">five days</span> before the end of the month.</li>
                    <li>Not paying bills can have <span class="colour-green">consequences.</span></li>
                </ul>
            </div>
            <div class="rentinfo-button-wrapper first-goal-button-padding">
                <!-- Call store method on click -->
                <button @click="manageSound.playClickSound(), manageMainGameNav.navigateToPage(11), manageMainGameNav.unlockComponent(), manageGameTimer.startCountdown()" class="rentinfo-button">Continue to main game</button>
            </div>
        </div>
    </div>
</template>
<script setup>
    // import stores
    import { useMainGameplayNavigationStore } from '../../../store/MainGameChoicesStore.js'
    import { useGameTimerStore } from '../../../store/MoneyStore.js'
    import { useSoundEffectsStore } from '../../../store/soundEffectsStore.js'
    
    const manageMainGameNav = useMainGameplayNavigationStore()
    const manageGameTimer = useGameTimerStore()
    const manageSound = useSoundEffectsStore()

</script>
<script>
    // export component data
    export default {
        name: 'CurrentGoalIntroduction',
    }
</script>