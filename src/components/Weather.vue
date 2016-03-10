<template>
  <div class="hero is-info pt2 is-header">
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

  <div class="flex refresh-bar p1" v-on:click="refreshData()">
    <div class="flex-auto">
      <b>{{tweets.length}} people</b> tweeted there's {{weather}} near you
    </div>
    <div>
      <span class="icon icon-refresh">
        <i class="fa fa-refresh"></i>
      </span>
    </div>
  </div>

  <hr class="my0"/>
</template>

<script>
export default {
  props: ['weather', 'location', 'reloading', 'tweets'],
  methods: {
    refreshData: function () {
      this.$parent.getLocation()
    }
  },
  computed: {
    weatherAsEmoji: function () {
      var emoji

      switch (this.weather) {
        case 'rain':
          emoji = '🌧'
          break
        case 'sun':
          emoji = '☀️'
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
  a {
    color: #3B7FEB;
  }

  .is-header {
    background-image: linear-gradient(-270deg, #3A82EC 0%, #5438E3 100%);
    overflow: hidden;
  }

  .columns {
    margin-bottom: 0;
    padding-top:12px;
  }

  .weather-symbol {
    -webkit-transform: scale(5);
    position: relative;
    top: 110px;
    height:58px;
    margin-bottom: 30px;
  }

  .title {
    text-transform: capitalize;
  }

  b {
    font-weight: bold;
  }

  .refresh-bar {
    cursor: pointer;
  }

  .icon-map {
    width: 12px;
    font-size: 18px;
    position: relative;
    top: -2px;
  }

  .icon-refresh {
    font-size: 16px;
    position: relative;
    top: -1px;
  }
</style>
