import github from './github'

<template>
  <div id="container">
  <div class="row">
    <h5>{{ username }}</h5>
      <div class="col-md-6 col-md-offset-3">
          <form id="changeRepoForm" @submit.prevent="changeRepo()" class="form-inline">
              <div class="form-group">
                  <label for="fullRepoName">Full Repo Name</label>
                  <input type="text" name="fullRepoName" v-model="fullRepoName" class="form-control">
              </div>
              <input type="submit" class="btn btn-default" value="Get repo filesystem!">
          </form>
          <hr>
      </div>
      <h4>{{ corn }}</h4>
      <button v-on:click="swapsies">Switch It Back</button>
      <github :username="username" :repo="repo"></github>
  </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    github: require('./github.vue')
  },
  data: function () {
    return {
      fullRepoName: '',
      username: '',
      repo: ''
    }
  },
  methods: {
    changeRepo: function () {
      var splitData = this.fullRepoName.split('/')
      this.username = splitData[0]
      this.repo = splitData[1]
      console.group('Vue Data')
      console.log('fullRepoName:', this.fullRepoName)
      console.log('username:', this.username)
      console.log('repo:', this.repo)
      console.groupEnd('Vue Data')
    },
    swapsies: function () {
      console.log('narf')
      this.username = this.username.split('').reverse().join('')
    }
  },
  computed: {
    corn: function () {
      return this.username.split('').reverse().join('')
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
