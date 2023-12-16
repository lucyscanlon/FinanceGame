<template>
    <div class="test-container">
        <h1>{{testMessage}}</h1>
        <p>{{testDescription}}</p>
        <p>You currently have £{{ state.currentPocketMoney }}</p>
    </div>

    
  </template>
  
  <script>
  export default {
    name: 'TestComponent',
    props: {
      testMessage: String,
      testDescription: String,
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style>
 

  </style>