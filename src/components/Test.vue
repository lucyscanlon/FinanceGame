<template>
    <div class="test-container">
        <h1>{{testMessage}}</h1>
        <p>{{testDescription}}</p>
        <p>You currently have £{{ moneyStore.moneyInPocket }}</p>
       
    </div>

    
  </template>

<script setup>

    import { useMoneyManageStore } from '../store/store'

    const moneyStore = useMoneyManageStore()

</script>
  
  <script>
  export default {
    name: 'TestComponent',
    props: {
      testMessage: String,
      testDescription: String,
    }, methods: {
        sayHello() {
            this.$global.currentmoney = this.$global.currentmoney + 200;
            console.log(this.$global.currentmoney);
            this.$forceUpdate(); 
        },
    }, mounted() {
        this.$global.currentmoney;

    }

   
  }

  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style>
 

  </style>