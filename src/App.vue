<template>
  <div class="startingpage-whole-container">
    <StartingPage v-if="manageMainGameNav.currentPage < 1"></StartingPage>
  </div>
  <div v-if="manageMainGameNav.currentPage >= 1" class="wholegame-wrapper">
    <CharacterStatsSidebarWrapper></CharacterStatsSidebarWrapper>
    <MainGameWrapper></MainGameWrapper>
  </div>
</template>
<script setup>
  import MainGameWrapper from './components/MainGame/MainGame.vue'
  import CharacterStatsSidebarWrapper from './components/CharacterSidebar/CharacterStatsSidebar.vue'
  import StartingPage from './components/StartEndPages/StartPage.vue'

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
  }
}
</script>

<style src="@/styles/style.css">

</style>
