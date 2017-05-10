<template>
  <div id="app">
    <h1 v-text="title"></h1>
    <ul v-for="item in list">
      <li :class="{ finished: item.isFinished }">{{ item.label }}</li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => {
    return {
      title: 'this is a todo list',
      list: [
        {
          label: 'eating',
          isFinished: true
        },
        {
          label: 'studying',
          isFinished: false
        },
        {
          label: 'practicing nodejs',
          isFinished: false
        }
      ]
    }
  }
}
</script>

<style>
.finished {
  text-decoration: underline;
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
