<template>
  <div class="hero is-info is-header">
    <div class="hero-header py3">
      <div class="container">
        <div class="weather-symbol">
          {{weatherAsEmoji}}
        </div>
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
    <b>61 people</b> are saying it's raining near you
  </div>

  <hr class="my0"/>
</template>

<script>
export default {
  props: ['weather', 'location'],
  computed: {
    weatherAsEmoji: function () {
      var emoji

      switch (this.weather) {
        case 'rain':
          emoji = '🌧'
          break
        case 'sun':
          emoji = '😎'
          break
        case 'fog':
          emoji = '🌫'
          break
        case 'wind':
          emoji = '🍃'
          break
        case 'cloud':
          emoji = '☁️'
          break
        case 'snow':
          emoji = '⛄️'
          break
        default:
          emoji = '😣'
      }

      return emoji
    }
  }
}
</script>

<style scoped>
  .is-header {
    background-image: linear-gradient(-270deg, #3A82EC 0%, #5438E3 100%);
  }

  .weather-symbol {
    font-size: 48px;
  }

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
