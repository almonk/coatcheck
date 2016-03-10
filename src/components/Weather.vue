<template>
  <div>
    <h1>{{weather}}</h1>
    <h2>{{location}}</h2>
  </div>
</template>

<script>
export default {
  props: ['weather', 'location']
}
</script>
