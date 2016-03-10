<template>
  <div id="app">
    <spinner v-if="!hasData"></spinner>
    <weather v-if="hasData" :weather="weather" :location="location"></weather>
  </div>
</template>

<script>
import weather from './components/weather'
import spinner from './components/spinner'
export default {
  components: {
    weather,
    spinner
  },
  data () {
    return {
      weather: '',
      location: '',
      hasData: false
    }
  },
  methods: {
    getLocation: function () {
      if (navigator.geolocation) {
        console.log(navigator.geolocation.getCurrentPosition(this.updateData))
      }
    },
    updateData: function (position) {
      var latitude = position.coords.latitude
      var longitude = position.coords.longitude
      var endpoint = `http://www.mocky.io/v2/56e160e0260000e101eaa21c?latitude=${latitude}&longitude=${longitude}`

      this.hasData = true

      console.log(`${latitude}, ${longitude}`)

      window.fetch(endpoint).then(function (response) {
        return response.json()
      }).then(function (json) {
        this.weather = json.weather
        this.location = json.location
      }.bind(this))
    }
  },
  ready: function () {
    this.getLocation()
  }
}
</script>
