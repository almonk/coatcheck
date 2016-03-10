<template>
  <div class="hero is-info">
    <div class="hero-header py3">
      <div class="container">
        <h1 class="title">☔️</h1>
        <h1 class="title">{{weather}}</h1>
        <h2 class="subtitle">
          <span class="icon icon-map">
            <i class="fa fa-map-marker"></i>
          </span>
          {{location}}
        </h2>
      </div>
    </div>
  </div>

  <div class="py2 center">
    <p><b>61 people</b> are saying it's raining near you 😭</p>
  </div>
</template>

<script>
export default {
  props: ['weather', 'location']
}
</script>

<style scoped>
  b {
    font-weight: bold;
  }

  .icon-map {
    width: 12px;
    font-size: 18px;
    position: relative;
    top: -2px;
  }
</style>
