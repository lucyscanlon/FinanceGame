<!-- Template for displaying the starting page 

The parent of this component:
- App.vue

-->
<template>
  <div class="startingpage-width-container">
    <div class="startingpage-logo-container">
      <img src="/GameLogo.PNG">
    </div>
    <div class="startingpage-title-container">
      <h4>Cash Course: An interactive Game</h4>
    </div>
    <div class="startingpage-description-container">
      <p>Develop your personal finance knowledge in a simulated, fun game environment. Experience a crash course in cash.</p>
      <p class="play-instructions">For the best experience play Cash Course on a laptop or computer.</p>
    </div>
    <div class="startingpage-buttons-container">
      <div class="startingpage-play-button">
        <div @click="manageSound.StartOfGame(), manageMainNav.navigateToPage(0)" class="startingpage-play-circle">
          <p><font-awesome-icon icon="fa-solid fa-play" /></p>
        </div>
        <div class="startingpage-play-text">
          <p @click="manageSound.StartOfGame()">Play new game</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>

  import {useMainGameplayNavigationStore} from '../../store/MainGameChoicesStore'
  import {useSoundEffectsStore} from '../../store/soundEffectsStore'

  const manageMainNav = useMainGameplayNavigationStore()
  const manageSound = useSoundEffectsStore()
    


</script>
<script>
    // export component data
    export default {
      name: 'StartingPage',
    }
</script>