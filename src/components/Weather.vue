<template>
  <div class="hero is-primary">
    <div class="hero-header py3">
      <div class="container">
        <h1 class="title">{{weather}}</h1>
        <h2 class="subtitle">{{location}}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['weather', 'location']
}
</script>
