<template>
  <div id="app">
    <hello></hello>
    Clicked: {{ count }} times
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
import Hello from './components/Hello.vue'
import * as actions from './actions'

export default {
  components: {
    Hello
  },
  vuex: {
    getters: {
      count: state => state.count
    },
    actions: actions
  }
}
</script>
