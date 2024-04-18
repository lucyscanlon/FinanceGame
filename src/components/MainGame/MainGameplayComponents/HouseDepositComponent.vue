<template>
    <div class="maingameplay-flex-container">
        <div v-if="useMainGameplayNav.mainGameComponentsUnlocked > 4" class="housedeposit-content-container">
            <HouseDepositType v-if="manageHouseDeposit.chosenHouseDepositChoice === 1" name="Lifetime Isa" Desc="25% bonus to be added yearly in April. £4000 limit a year."></HouseDepositType>
            <HouseDepositType v-if="manageHouseDeposit.chosenHouseDepositChoice === 2" name="Fixed Rate Account" Desc="4.8% interest, locked for a year. Resets in April."></HouseDepositType>
            <HouseDepositType v-if="manageHouseDeposit.chosenHouseDepositChoice === 3" name="Regular Savings Account" Desc="No withdraw or contribution limits."></HouseDepositType>
        </div>
    </div>
</template>
<script setup>

    import HouseDepositType from './HouseDepositType.vue'

    import { useHouseDepositChoiceStore } from '../../../store/MainGameChoicesStore'
    import { useMainGameplayNavigationStore } from '../../../store/MainGameChoicesStore.js'

    const useMainGameplayNav = useMainGameplayNavigationStore();

    const manageHouseDeposit = useHouseDepositChoiceStore()

</script>
<script>

export default {
    name: 'HouseDepositInteractiveComponent',
    components: {
        HouseDepositType,
    }
}

</script>