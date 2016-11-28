<template>
  <div>
  <div class="hello" v-if="ok">
    <h1>{{ msg }}</h1>
    <h2>{{ other }}</h2>
  </div>
  <button v-on:click="toggle">Toggle</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      ok: true,
      msg: 'Preamp is cool',
      other: 'Wat boi'
    }
  },
  computed: {
    toggle: function () {
      this.ok = !this.ok
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
