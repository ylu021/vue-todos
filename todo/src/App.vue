<template>
  <div id="app">
    <header-a msgtochild="I am your father" @getChildMsg="jotDownRequest"></header-a>
    <h1 v-text="title"></h1>
    <p v-if="childWords">
      Tell me: {{ childWords }}
    </p>
    <input v-model="newItem" @keyup.enter="addNew">
    <ul v-for="item in list">
      <li :class="{ finished: item.isFinished }" @click="toggleFinish(item)">
        {{ item.label }}
      </li>
    </ul>
    <!-- <router-view></router-view> -->
    <!-- <footer-a></footer-a> -->
  </div>
</template>

<script>
import HeaderA from './headerA'
import FooterA from './footerA'
import Store from './store' // getting default exported methods

export default {
  name: 'app',
  components: { HeaderA, FooterA },
  data: () => {
    return {
      title: 'this is a todo list',
      list: Store.fetch(),
      newItem: '',
      childWords: ''
    }
  },
  methods: {
    toggleFinish: (item) => {
      item.isFinished = !item.isFinished
    },
    addNew: function () {
      this.list.push({
        label: this.newItem,
        isFinished: false
      })
      this.newItem = ''
      Store.save(this.list)
    },
    jotDownRequest: function (msg) {
      this.childWords = msg
    }
  },
  watch: { // value change
    list: {
      handler: function (val, oldVal) {
        Store.save(this.list)
      },
      deep: true // remembers inner attribute
    }
  }
}
</script>

<style>
.finished {
  text-decoration: line-through;

}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
