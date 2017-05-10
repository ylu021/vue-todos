<template>
  <div id="app">
    <h1 v-text="title"></h1>
    <input v-model="newItem" @keyup.enter="addNew">
    <ul v-for="item in list">
      <li :class="{ finished: item.isFinished }" @click="toggleFinish(item)">
        {{ item.label }}
      </li>
    </ul>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => {
    return {
      title: 'this is a todo list',
      list: [
        // {
        //   label: 'eating',
        //   isFinished: true
        // },
        // {
        //   label: 'studying',
        //   isFinished: false
        // },
        // {
        //   label: 'practicing nodejs',
        //   isFinished: false
        // }
      ],
      newItem: ''
    }
  },
  methods: {
    toggleFinish: (item) => {
      item.isFinished = !item.isFinished
    },
    addNew: function () {
      console.log('enter pressed', this.newItem)
      this.list.push({ label: this.newItem, isFinished: false })
      this.newItem = ''
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
