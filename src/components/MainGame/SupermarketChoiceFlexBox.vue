<template>
    <div class="supermarketchoice-box">
                <div class="supermarketchoice-heading-wrap">
                    <h4>{{ SupermarketName }}</h4>
                    <p>{{SupermarketDesc}}</p>
                </div>
                <div class="supermarketchoice-costs-wrap">
                    <p><span class="colour-pink">Cost:</span> £{{SupermarketCost}}</p>
                    <p><span class="colour-pink">Transport Cost:</span> £{{ SupermarketTransportCost }}</p>
                    
                </div>
            </div>
</template>

<script>

export default {
    name: 'SupermarketChoiceFlexBox', 
    props: {
        SupermarketName: String,
        SupermarketDesc: String,
        SupermarketCost: String,
        SupermarketTransportCost: String,
    }
   
}

</script>