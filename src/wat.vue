<template>
  <div>
    <h5>{{ name }}</h5>
    <p>{{ description }}</h5>
    <button v-on:click="destroyWat">X</button>
  </div>
</template>

<script>
  export default {
    name: 'watComponent',
    props: {
      name: {
        type: String,
        required: false
      },
      description: {
        type: String,
        required: false
      },
      destroyWat: {
        type: Function,
        required: true
      }
    }
  }
</script>