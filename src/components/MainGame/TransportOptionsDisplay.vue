<!-- Template for the you have a job offer info display

Components that will be inside this container include:
- living options information display components

-->

<script setup>

    import { useLivingOptionsStore } from '../../store/LivingOptionsStore'

const livingOptions = useLivingOptionsStore()

</script>
<template>
    <div class="supermarketchoice-display-wrapper">
        <h1>Choose a method of transport</h1>
        <p class="supermarketchoice-description">Choose from one of the options below and press the 'choose this method' button to confirm your choice</p>
        <div class="transportchoice-flexbox-wrap">
            <div class="transport-choice-box">

            </div>
            <div class="transport-choice-box">
                
            </div>
        </div>
        <div @click="livingOptions.livingOptionsNextStageOfGame()" class="supermarketchoice-button-wrap">
                    <button>Shop here</button>
         </div>
    </div>
    
   
</template>

<script>


export default {
    name: 'TransportMethodDisplay', 
    components: {
    }
   
}

</script>