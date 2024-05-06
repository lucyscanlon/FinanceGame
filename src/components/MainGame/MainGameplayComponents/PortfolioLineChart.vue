<!-- Template for stock line chart 

The parent of this component:
- investing portfolio

The children of this component:
- None

-->
<template>
    <CChart
        type="line"
        :wrapper="false"
        :data="{
            labels: ['', '', '', '', '', ''],
            datasets: [{
            label: '',
            backgroundColor: 'rgba(160, 211, 235, 1)',
            borderColor: 'rgba(160, 211, 235, 1)',
            pointBackgroundColor: 'rgba(160, 211, 235, 0.8)',
            pointBorderColor: 'rgba(160, 211, 235, 1)',
            data: dataArray,
                                
        },
        ]}"
        :options="{
            plugins: {
                legend: {
                    display: false,
                }
            },
            scales: {
                alignToPixels: true,
                    x: {
                        display: false,
                    },
                    y: {
                        display: true,
                    }
            },
            animation: {
                duration: 0,
            }
    }"/>

</template>
<script setup>

    import { CChart } from '@coreui/vue-chartjs'

</script>
<script>

export default {
    name: 'PortfolioLineChart',
    props: {
        dataArray: Array,
    }
}

</script>