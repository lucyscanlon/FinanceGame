<!-- Template for displaying the text introduction to grocery shopping recommendations

The parent of this component:
- Main game

-->
<template>
    <div class="rentintro-mainwrapper supermarket-info-wrap">
        <div class="rentintro-title-wrapper">
            <h1>Your first goal!</h1>
        </div>
        <div class="rentintro-description-wrapper">
            <p>Your first goal is to pay your bills on time.</p>
            <div class="supermarketinfo-list first-goal-padding">
                <ul>
                    <li>Goals will appear on your <span class="colour-green">game homepage.</span></li>
                    <li><span class="colour-green">Complete the tasks</span> to complete the goal</li>
                </ul>
                <div class="billsintro-diagram-container">
                    <img src="/GoalScreenshot.png">
                </div>
            </div>
            <div class="rentinfo-button-wrapper first-goal-button-padding">
                <!-- Call store method on click -->
                <button @click="manageSound.playClickSound(), manageMainGameNav.navigateToPage(27), manageMainGameNav.unlockComponent()" class="rentinfo-button">Continue</button>
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
        name: 'CurrentGoalIntroduction',
    }
</script>