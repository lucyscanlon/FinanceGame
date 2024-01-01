<!-- Template for the you have a job offer info display

Components that will be inside this container include:
- living options information display components

-->


<template>
    <div class="supermarketchoice-display-wrapper">
        <h1>Choose a supermarket or food service to purchase your groceries</h1>
        <p class="supermarketchoice-description">Choose from one of the options below and press the 'confirm selection' button.</p>
        <div class="supermarketchoice-flex-wrapper">
            <div class="supermarketchoice-box">
                <div class="supermarketchoice-heading-wrap">
                    <h4>Saver Superstore</h4>
                </div>
            </div>
             <div class="supermarketchoice-box">
                <div class="supermarketchoice-heading-wrap">
                    <h4>Gourmet Grove</h4>
                </div>
            
             </div>
             <div class="supermarketchoice-box">
                <div class="supermarketchoice-heading-wrap">
                    <h4>Swiftbite Delivery</h4>
                </div>
            
            </div>
            <div class="supermarketchoice-box">
                <div class="supermarketchoice-heading-wrap">
                    <h4>Weekly Mart Deliveries</h4>
                </div>
            
            </div>
        </div>
        <div class="supermarketchoice-button-wrap">
            <button>Confirm selection</button>
        </div>
    </div>
    
   
</template>

<script>

export default {
    name: 'SupermarketChoiceDisplay',
}

</script>