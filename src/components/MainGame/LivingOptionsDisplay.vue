<!-- Template for the living options display

-->


<template>
    <div class="map-location-wrapper" :class="classtag">
                <div class="map-location-content-wrapper">
                    <h4>{{streetAddress}}</h4>
                    <p>{{districtDesc}}</p>
                    <p class="map-location-description">{{homeDesc}}</p>
                    <div class="map-location-rent-wrapper">
                        <div class="map-location-rent-label-wrapper">
                            <p>Rent: <span class="colour-white">£{{rent}}</span></p>
                            <p>Commute: <span class="colour-white">£{{ commuteDisplay(commute) }}</span></p>
                        </div>
                    </div>
                    <button class="map-location-livehere-button">
                        <p>Live Here</p>
                    </button>
                </div>
            </div>
    

    
</template>

<script>

export default {
    name: 'LivingOptionsDisplay',
    props: {
        streetAddress: String,
        districtDesc: String,
        homeDesc: String,
        rent: Number,
        commute: Number,
        classtag: String,
    }, methods: {
        commuteDisplay(c) {

            let commuteStat;

            if (c === 0) {
                commuteStat = '0'
            } else if (c === 1) {
                commuteStat = '+'
            } else {
                commuteStat = '++'
            }
            return commuteStat;
        }
    }
}

</script>