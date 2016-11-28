import Vue from 'vue'
import VueRouter from 'vue-router'

<template>
  <div id="bar">
    <h5 v-on:click="counter += 1">Click</h5>
    <h5>{{ counter }}</h5>
    <button v-on:click="wat">Button</button>
  </div>
</template>

<script>
export default {
  name: 'bar',
  data: function () {
    return {
      counter: 0,
      wat: () => console.log('ok then')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>