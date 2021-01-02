<template>
  <div class="flex-container">
    <div class="flex-item headline">
      Beantworte die Fragen, um herauszufinden, wann Du deine erste Million
      erreicht haben wirst...
    </div>
    <div class="flex-item parameters flex-container">
      <input class="input" placeholder="Startkapital in Euro" v-model="kapital" />
      <input class="input" placeholder="Sparrate in Euro p. M." v-model="sparrate" />
      <input class="input" placeholder="Zinssatz in Prozent" v-model="investment" />
      <button class="btn submit" @click="calculate">Rechnen</button>
    </div>
    <div class="flex-item result">
      Du bist Millionär in {{ jahre }} Jahren !
    </div>
  </div>
</template>

<script lang="js">
import Vue from "vue";
import Calculator from "@/repository/Calculator.js"

export default Vue.extend({
  data() {
    return {
      jahre: "...",
      kapital: null,
      sparrate: null,
      investment: null
    };
  },
  methods: {
    calculate: function () {
      this.jahre = Calculator.calculateYearsToMillion(this.kapital, this.sparrate, this.investment);
    }
  }
});
</script>

<style scoped>
.flex-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.flex-item {
  margin: 1rem;
}

.headline {
  font-size: 2rem;
  margin-top: 5rem;
  color: #fff;
}

.input {
  font-size: 2rem;
  padding: .7rem;
  margin: 1rem;
  border: .1rem solid #fff;
  border-radius: 1rem;
}

.submit {
  margin-top: 1rem;
}

.result {
  font-size: 4rem;
  margin-top: 10rem;
  color: #fff;
}
</style>
