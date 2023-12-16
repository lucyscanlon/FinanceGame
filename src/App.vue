<template>
  <div class="wholegame-wrapper">
    <CharacterStatsSidebarWrapper></CharacterStatsSidebarWrapper>
    <MainGameWrapper></MainGameWrapper>
  </div>
  <!--<TestComponent testMessage="This is a test heading" testDescription="This is a test description"></TestComponent>-->
  <!-- <bankComponent></bankComponent> -->
</template>

<script>
import TestComponent from './components/Test.vue'
import bankComponent from './components/Bank.vue'
import MainGameWrapper from './components/MainGame/MainGame.vue'
import CharacterStatsSidebarWrapper from './components/CharacterSidebar/CharacterStatsSidebar.vue'

export default {
  name: 'App',
  components: {
    TestComponent,
    bankComponent,
    MainGameWrapper,
    CharacterStatsSidebarWrapper,
  }
}
</script>

<style src="@/styles/style.css">

</style>
