<template>
  <div id="app">
    <h1 v-text="title"></h1>
    <p v-if="isEmpty">No tasks free woohoo~</p>
    <p v-if="!isEmpty">Currently finished <span class="progress">{{ progress + '%'}}</span> </p>
    <ul class="list" >
      <div class="list-input">
        <input v-model="newItem" @keyup.enter="addNew" placeholder="what are you up to">
      </div>
      <li class="list-item" v-for="(item, index) in list">
        <button v-on:click="list.splice(index, 1)">X</button>
        <span :class="[{ finished: item.isFinished }]" @click="toggleFinish(item)">{{ item.label }}</span>
        <span class="duedate-hint" v-if="!item.dueDate" @click="loadDateField(item)">Add a due date</span>
        <input v-if="item.dueDate==='input'" v-model="newDueDate" @keyup.enter="addDue(item)" type="date">
        <span v-if="item.dueDate!=='input'" >{{ item.dueDate }}</span>
        <!-- <button @click="deleteForever(item)">X</button> -->
      </li>
    </ul>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import Store from './store' // getting default exported methods

const STORAGE_KEY = 'todo'

export default {
  name: 'app',
  data: () => {
    return {
      title: 'TODO',
      list: Store.fetch(STORAGE_KEY) || [],
      newItem: '',
      newDueDate: '',
      progress: 0,
      isEmpty: false,
      showDateField: false
    }
  },
  created: function () {
    this.updateProgress()
  },
  methods: {
    isEmpty () {
      console.log(this.list.length)
      return this.list.length === 0
    },
    toggleFinish (item) {
      item.isFinished = !item.isFinished
    },
    loadDateField (item) {
      console.log('at leaast im here')
      item.dueDate = 'input'
    },
    addNew () {
      this.list.push({
        label: this.newItem,
        isFinished: false,
        dueDate: ''
      })
      this.newItem = ''
      Store.save(this.list)
    },
    addDue (item) {
      item.dueDate = this.newDueDate
    },
    updateProgress () {
      if (this.list.length === 0) {
        this.progress = 0
      } else {
        this.progress = Math.floor(this.list.filter((item) => (item.isFinished)).length / this.list.length * 100)
      }
    }
  },
  watch: { // value change
    list: {
      handler: function (val, oldVal) {
        Store.save(STORAGE_KEY, this.list)
        this.updateProgress()
        console.log('i detect the change')
      },
      deep: true // remembers inner attribute
    }
  }
}
</script>

<style>
.duedate-hint {
  color: #41b883;
}

.finished {
  text-decoration: line-through;
}

.progress {
  color: #41b883;
  font-weight: bold;
}

.list {
  list-style: none;
  padding: 0;
  margin: 0 auto;
  width: 50%;
}

.list-input {
  border-bottom: 1px solid #41b883;
  margin-bottom: 1em;
}

.list-input > input {
  width: 100%;
  border: none;
  padding: 0.5em;
  font-size: medium;
}

.list-item {
  display: flex;
  width: 100%;
  padding: 0.5em;
  border-bottom: solid 1px #eee;
}

.list-item > span {
  width: 80%;
  text-align: left;
  margin-left: 1em;
}

.archive {
  visibility: hidden;
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
