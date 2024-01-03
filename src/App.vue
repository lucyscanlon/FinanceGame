<template>
  <div class="wholegame-wrapper">
    <CharacterStatsSidebarWrapper></CharacterStatsSidebarWrapper>
    <MainGameWrapper></MainGameWrapper>
  </div>
</template>

<script>
import MainGameWrapper from './components/MainGame/MainGame.vue'
import CharacterStatsSidebarWrapper from './components/CharacterSidebar/CharacterStatsSidebar.vue'

export default {
  name: 'App',
  components: {
    MainGameWrapper,
    CharacterStatsSidebarWrapper,
  }
}
</script>

<style src="@/styles/style.css">

</style>
