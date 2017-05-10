<template>
  <div class="header">
    <h2>{{ msg }}</h2>
    <button @click="onClickme" >Clickme</button>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        msg: 'hello from header'
      }
    },
    props: ['msgtochild'],
    methods: {
      onClickme: function () {
        console.log('message from header tag', this.msgtochild)
        this.$emit('getChildMsg', this.msg) // like socket.io
      }
    }
  }
</script>
