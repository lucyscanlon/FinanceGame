<!-- Template for displaying the text information introducing rent to the player

The parent of this component:
- Main game

-->
<template>
  <div class="startingpage-width-container">
    <div class="startingpage-logo-container">
    </div>
    <div class="startingpage-title-container">
      <h4>Finance Simulator</h4>
    </div>
    <div class="startingpage-description-container">
      <p>Develop your personal finance knowledge in a simulated, fun game environment</p>
    </div>
    <div class="startingpage-buttons-container">
      <div class="startingpage-play-button">
        <div @click="manageMainNav.navigateToPage(0)" class="startingpage-play-circle">
          <p><font-awesome-icon icon="fa-solid fa-play" /></p>
        </div>
        <div class="startingpage-play-text">
          <p>Play new game</p>
        </div>

      </div>
      <div class="startingpage-howtoplay-button">
        <div class="startingpage-howtoplay-circle">
          <p><font-awesome-icon icon="fa-solid fa-question" /></p>
        </div>
        <div class="startingpage-howtoplay-text">
          <p>How to play</p>
        </div>
      </div>
    </div>
  </div>
   
</template>
<script setup>

  import {useMainGameplayNavigationStore} from '../../store/MainGameChoicesStore'

  const manageMainNav = useMainGameplayNavigationStore()
    


</script>
<script>
    // export component data
    export default {
      name: 'StartingPage',
    }
</script>