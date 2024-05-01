<!-- Template for displaying the text introduction to grocery shopping recommendations

The parent of this component:
- Main game

-->
<template>
    <div class="rentintro-mainwrapper supermarket-info-wrap">
        <div class="rentintro-title-wrapper supermarketinfo-title">
            <h1>Choosing a supermarket to shop at</h1>
        </div>
        <div class="rentintro-description-wrapper">
            <p>Your next task is to choose a place to shop for groceries. Heres some tips for how to choose the best supermarket for your budget!</p>
            <div class="supermarketinfo-list">
                <ul>
                    <li>Keep factors such as <span class="colour-green">location</span> and <span class="colour-green">accessibility</span> in mind as these can increase overall costs.</li>
                    <li>Take advantage of <span class="colour-green">deals, discounts, memberships</span> and <span class="colour-green">loyalty programmes</span>. Joining a loyalty scheme can save you an average of <span class="colour-green">£360</span> a year!</li>
                    <li>Minimise spending on fast food delivery apps. A survey from BBC Good Food found that under 24s spend an average of <span class="colour-green">£20</span> a week using these services.</li>
                </ul>
            </div>
            <div class="rentinfo-button-wrapper">
                <!-- Call store method on click -->
                <button @click="manageSound.playClickSound(), manageMainGameNav.navigateToPage(6)" class="rentinfo-button">View Supermarket Options</button>
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
        name: 'SupermarketInfoDisplay',
    }
</script>