<template>
    <div class="test-container">
        <h1>Bank</h1>
        <p>Bank Money: {{ moneyStore.moneyInBank }}</p>
        <button @click="moneyStore.addToBank(200)">Click to add to bank</button>
        <button @click="moneyStore.removeFromBank(300)">Click to remove from bank</button>
    </div>

    
  </template>

<script setup>

import { useMoneyManageStore } from '../store/store'

    const moneyStore = useMoneyManageStore()

</script>
<script>
export default {
    name: 'bankComponent',
    props: {

    }, 

}
</script>
  

  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style>

 

  </style>