<template>
    <div class="pension-interactive-title-container current-goal-title pay-bills-title">
        <h1><font-awesome-icon icon="fa-solid fa-bullseye" />Current Goal</h1>
    </div>
    <div class="currentgoal-status-container">
        <p>Status: <span class="colour-red">Uncompleted</span></p>
    </div>
    <div class="currentgoal-goal-container pay-bills-goal">
        <p><span class="colour-green">Goal:</span> Pay your bills on time!</p>
    </div>
    <div class="currentgoal-tips-container">
        <ul>
            <li>When the end of the month approaches, press the 'Pay monthly outgoings' button in the sidebar to pay your bills.</li>
            <li>Bills can be paid up to five days before the end of the month.</li>
        </ul>
    </div>
    
</template>
<script setup>

</script>
<script>

export default {
name: 'PayBillsGoal',
data() {
    return {
        amountToChange: '',
    }
}

}

</script>