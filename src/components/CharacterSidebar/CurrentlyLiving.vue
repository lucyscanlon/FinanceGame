<!-- Template for the currently living display component -->

<template>
    <div className="characterstats-set livingstatsdisplay">
        <h4>Currently Living:</h4>
        <p>27 Poppy Drive, <br/> The Marble District</p>
        <h5><span className="colour-pink">Rent: </span>£450</h5>
        <button className="moveout-button">Move Out</button>
        <hr />
    </div>

</template>

<script>
export default {
    name: 'CurrentlyLivingDisplay',
}

</script>