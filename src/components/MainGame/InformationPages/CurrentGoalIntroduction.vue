<!-- Template for displaying the current goal introduction 

The parent of this component:
- MainGame

The children of this component:
- None

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
                    <li><span class="colour-green">Complete the tasks</span> to complete the goal.</li>
                </ul>
                <div class="billsintro-diagram-container">
                    <img alt="image of the current goal component" src="/GoalScreenshot.png">
                </div>
            </div>
            <div class="rentinfo-button-wrapper first-goal-button-padding">
                <!-- play sound effect, navigate to next page -->
                <button @click="manageSound.playClickSound(), manageMainGameNav.navigateToPage(27)" class="rentinfo-button">Continue</button>
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