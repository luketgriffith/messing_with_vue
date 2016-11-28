<template>
  <div>
    <h4>This is a cray cray template {{ username }} dude</h4>
    <form @submit.prevent="addWat()">
      <input type="text" v-model="singleWat.name">
      <input type="text" v-model="singleWat.description">
      <button>ok</button>
    </form>
    <ul>
      <watComponent v-for="(wat, i) in theseWats" :destroyWat="removeWat(wat, i)" :name="wat.name" :description="wat.description"></watComponent>
    </ul>
    <ul>
      <li v-for="todo in todos">{{ todo.text }}</li>
    </ul>
    
    <h4>done</h4>
    <ul>
      <li v-for="todo in done">{{ todo.text }}</li>
    </ul>
  </div>  
</template>

<script>
export default {
  name: 'github',
  components: {
    watComponent: require('./wat')
  },
  data: function () {
    return {
      path: '/',
      files: [],
      singleWat: {
        name: '',
        description: ''
      },
      theseWats: [
        {
          name: 'wat',
          description: 'asdlfasdf'
        }
      ]
    }
  },
  props: {
    username: {
      type: String,
      required: true
    },
    repo: {
      type: String,
      required: true
    }
  },
  methods: {
    getFiles: function () {
      this.$http.get('https://api.github.com/repos/' + this.fullRepoUrl + '/contents' + this.path,
        function (data) {
          console.log('got some data...', data)
          this.files = data
        }
      )
    },
    removeWat: function (wat, i) {
      return () => {
        this.theseWats.splice(i, 1)
      }
    },
    addWat: function () {
      console.log('nerf herders')
      this.theseWats.push(this.singleWat)
      this.singleWat = {
        name: '',
        description: ''
      }
    },
    increment: function () {
    }
  },
  computed: {
    fullRepoUrl: function () {
      return this.username + '/' + this.repo
    },
    todos: function () {
      let todos = this.$store.state.todos
      return todos
    },
    done: function () {
      let todos = this.$store.getters.doneTodos
      return todos
    }
  },
  created: function () {
    console.log('junk wagon: ', this.username)
    if (this.username && this.repo) this.getFiles()
  }
}
</script>