<!-- Template for displaying the current account introduction page

The parent of this component:
- MainGame

The children of this component:
- None

-->
<template>
    <div class="rentintro-mainwrapper currentaccount-wrapper">
        <div class="rentintro-title-wrapper everydayaccount-info-title">
            <h1>Setting up an everyday bank account</h1>
        </div>
        <div class="rentintro-description-wrapper">
            <p>Now it's time to set up an everyday bank account to store your savings. Current accounts are beneficial because:</p>
            <div class="rentintro-list">
                <ul>
                    <li>Employers can pay your wages directly into your account.</li>
                    <li>Access your money using <span class="colour-green">debit cards</span>, <span class="colour-green">online banking</span> and <span class="colour-green">bank transfers.</span></li>
                    <li>Ability to withdraw money at <span class="colour-green">cash machines.</span></li>
                    <li>Keep your money secure. Using a UK Bank provides you protection under the <span class="colour-green">Financial Services Compensation Scheme (FSCS)</span> which provides protection up to <span class="colour-green">£85,000</span>.</li>
                </ul>
            </div>
            <div class="rentinfo-button-wrapper">
                <!-- play sound effect, navigate to next page, increase score -->
                <button @click="manageSound.playClickSound(), manageMainGameNav.navigateToPage(3), manageBarometer.increaseScore(5)" class="currentaccount-button">Open current account</button>
            </div>
        </div>
    </div>
</template>
<script setup>
    // import stores
    import { useMainGameplayNavigationStore } from '../../../store/MainGameChoicesStore.js'
    import { useBarometerStore } from '../../../store/MainGameChoicesStore'
    import { useSoundEffectsStore } from '../../../store/soundEffectsStore.js'

    const manageMainGameNav = useMainGameplayNavigationStore()
    const manageBarometer = useBarometerStore()
    const manageSound = useSoundEffectsStore()

</script>
<script>
    // export component data
    export default {
      name: 'currentAccountIntroduction',
    }
</script>