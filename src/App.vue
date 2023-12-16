<template>
  <!--<HelloWorld msg="Hello There!"/> -->
  <TestComponent testMessage="This is a test heading" testDescription="This is a test description"></TestComponent>
  
</template>

<script>
import TestComponent from './components/Test.vue'

export default {
  name: 'App',
  components: {
    TestComponent,
  }
}
</script>

<style>

</style>
