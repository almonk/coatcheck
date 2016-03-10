<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Count is at {{count}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello World!'
    }
  },
  vuex: {
    getters: {
      count: state => state.count
    }
  }
}
</script>

<style scoped>
  h1 {
    color: red;
  }
</style>
