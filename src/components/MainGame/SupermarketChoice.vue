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
                    <p>An affordable supermarket with budget and luxury products.</p>
                </div>
                <div class="supermarketchoice-costs-wrap">
                    <p><span class="colour-pink">Cost:</span> £80pm</p>
                    <p><span class="colour-pink">Transport Cost:</span> £+</p>
                    
                </div>
            </div>
             <div class="supermarketchoice-box">
                <div class="supermarketchoice-heading-wrap">
                    <h4>Gourmet Grove</h4>
                    <p>A luxury organic supermarket with high prices.</p>
                </div>
                <div class="supermarketchoice-costs-wrap">
                    <p><span class="colour-pink">Cost:</span> £150pm</p>
                    <p><span class="colour-pink">Transport Cost:</span> £+</p>
                    
                </div>
            
             </div>
             <div class="supermarketchoice-box">
                <div class="supermarketchoice-heading-wrap">
                    <h4>Swiftbite Delivery</h4>
                    <p>A food delivery app delivering from local restaurants.</p>
                </div>
                <div class="supermarketchoice-costs-wrap">
                    <p><span class="colour-pink">Cost:</span> £300pm</p>
                    <p><span class="colour-pink">Transport Cost:</span> £0</p>
                    
                </div>
            
            </div>
            <div class="supermarketchoice-box">
                <div class="supermarketchoice-heading-wrap">
                    <h4>Weekly Mart Deliveries</h4>
                    <p>A weekly grocery delivery service with budget prices.</p>
                </div>
                <div class="supermarketchoice-costs-wrap">
                    <p><span class="colour-pink">Cost:</span> £100pm</p>
                    <p><span class="colour-pink">Transport Cost:</span> £0</p>
                    
                </div>
            
            </div>
        </div>
        <div class="supermarketchoice-button-wrap">
            <button>Shop here</button>
        </div>
    </div>
    
   
</template>

<script>

export default {
    name: 'SupermarketChoiceDisplay',
}

</script>