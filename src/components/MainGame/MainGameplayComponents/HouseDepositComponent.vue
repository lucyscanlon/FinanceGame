<template>
    <div class="maingameplay-flex-container">
        <HouseDepositType v-if="manageHouseDeposit.chosenHouseDepositChoice === 1" name="Lifetime Isa" Desc="25% bonus to be added yearly in April. £4000 limit a year."></HouseDepositType>
        <HouseDepositType v-if="manageHouseDeposit.chosenHouseDepositChoice === 2" name="Fixed Rate Account" Desc="A high interest account. Locked for 3 years."></HouseDepositType>
        <HouseDepositType v-if="manageHouseDeposit.chosenHouseDepositChoice === 3" name="Regular Savings Account" Desc="No withdraw or contribution limits."></HouseDepositType>
    </div>
</template>
<script setup>

    import HouseDepositType from './HouseDepositType.vue'

    import { useHouseDepositChoiceStore } from '../../../store/MainGameChoicesStore'

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