<template>
  <div class="flex-container-column">
    <div class="flex-item">
        <canvas ref="chart" id="myChart" width="400" height="400"></canvas>
    </div>
    <div class="flex-item">
        <button v-on:click="addAsset('new Asset', 10)" class="btn btn-add-asset">+</button>
    </div>
    <div class="flex-container-row">
        <div v-for="asset in assets" :key="asset.id" class="flex-item asset">
            <p>{{asset.name}}</p>
            <p>{{asset.units}} $</p>
        </div>
    </div>
  </div>
</template>

<script lang="js">
import Vue from "vue";
import Calculator from "@/repository/Calculator.js"
import Chart from "chart.js";

export default Vue.extend({
    data() {
        return {
            assets: [],
            chart: null
        }
    },
    mounted() {
        var ctx = this.$refs.chart;
            this.chart = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: [],
                    datasets: [
                        {
                            data: [],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                            ],
                            borderWidth: 3
                        }
                    ]
                },
                options: {

                }
            });
        },
        methods: {
            addAsset(name, units) {

                this.assets.push({"name": name, "units": units});

                this.chart.data.labels.push(name);
                this.chart.data.datasets.forEach((dataset) => {
                dataset.data.push(units);
                });
                this.chart.update();
            }
        }
    });
</script>

<style scoped>
.flex-container-column {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.flex-container-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.flex-item {
  margin: 1rem;
}

.btn {
    width: 100px;
    height: 100px;
    transition: width 1s, height 1s;
    border-radius: 50%;
    font-size: 5rem;
}

.btn:hover {
    width: 120px;
    height: 120px;
}

.asset {
    background-color:rgba(54, 162, 235, 0.2);
    padding: 1rem;
    color: #fff;
    border: 3px solid rgba(54, 162, 235, 1);
    width: 400px;
    height: 100px;
    border-radius: 10px;
    transition: width 1.2s;
    font-size: 2rem;
}

.asset p:first-of-type {
    font-size: 2rem;
}

.asset:hover {
    width: 500px;
}

</style>