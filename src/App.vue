<template>
  <!--<HelloWorld msg="Hello There!"/> -->
  <TestComponent testMessage="This is a test heading" testDescription="This is a test description"></TestComponent>
  <bankComponent></bankComponent>
</template>

<script>
import TestComponent from './components/Test.vue'
import bankComponent from './components/Bank.vue'

export default {
  name: 'App',
  components: {
    TestComponent,
    bankComponent,
  }, data() {
    return { 
    
    };
  }
}
</script>

<style src="@/styles/style.css">

</style>
