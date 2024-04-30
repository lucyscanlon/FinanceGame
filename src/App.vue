<template>
  <div v-if="manageMainGameNav.currentPage === -1" class="startingpage-whole-container">
    <StartingPage></StartingPage>
  </div>
  <div v-if="(manageMainGameNav.currentPage >= 0) && (manageMainGameNav.currentPage < 29)" class="wholegame-wrapper">
    <CharacterStatsSidebarWrapper></CharacterStatsSidebarWrapper>
    <MainGameWrapper></MainGameWrapper>
  </div>
  <div v-if="manageMainGameNav.currentPage === 29" class="startingpage-whole-container">
    <EndingPage></EndingPage>
  </div>
</template>
<script setup>
  import MainGameWrapper from './components/MainGame/MainGame.vue'
  import CharacterStatsSidebarWrapper from './components/CharacterSidebar/CharacterStatsSidebar.vue'
  import StartingPage from './components/StartEndPages/StartPage.vue'
  import EndingPage from './components/StartEndPages/EndPage.vue'

  import {useMainGameplayNavigationStore} from './store/MainGameChoicesStore'

  const manageMainGameNav = useMainGameplayNavigationStore();
</script>
<script>


export default {
  name: 'App',
  components: {
    MainGameWrapper,
    CharacterStatsSidebarWrapper,
    StartingPage,
    EndingPage,
  }
}
</script>

<style src="@/styles/style.css">

</style>
