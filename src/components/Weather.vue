<template>
  <div class="fixed fixed-header">
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

    <div class="container">
      <div class="flex refresh-bar p2" v-on:click="this.$parent.getLocation()">
        <div class="flex-auto">
          <b>{{tweets.length }} {{tweets.length | pluralize 'person' 'people'}}</b> tweeted there's {{weather}} near you
        </div>
        <div>
          <span class="icon icon-refresh">
            <i class="fa fa-refresh"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['weather', 'location', 'reloading', 'tweets'],
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

  .fixed-header {
    width: 100%;
    z-index: 1;
    top: 0px;
    background-color: white;
    box-shadow: 0px 1px 3px rgba(0,0,0,0.1);
  }

  .fixed-header.is-compact .weather-symbol {
    -webkit-transform: scale(0);
    margin-bottom: -12px;
    height:0;
    opacity: 0;
  }

  .columns {
    margin-bottom: 0;
    padding-top:12px;
  }

  .weather-symbol {
    -webkit-transform: scale(5);
    position: relative;
    top: 90px;
    height:58px;
    opacity: 1;
    margin-bottom: 30px;
    -webkit-transition: all 300ms cubic-bezier(0.215, 0.61, 0.355, 1);
    transition:         all 300ms cubic-bezier(0.215, 0.61, 0.355, 1);
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
