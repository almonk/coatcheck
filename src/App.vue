<template>
  <div id="app">
    <spinner v-if="!hasData"></spinner>
    <weather v-if="hasData" :weather="weather" :location="location"></weather>
  </div>
</template>

<script>
import weather from './components/Weather'
import spinner from './components/Spinner'
import $ from 'jquery'
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
        navigator.geolocation.getCurrentPosition(this.updateData)
      } else {
        window.alert('Can\'t get location')
      }
    },
    updateData: function (position) {
      var latitude = position.coords.latitude
      var longitude = position.coords.longitude
      var endpoint = `http://www.mocky.io/v2/56e17d60260000d502eaa255?latitude=${latitude}&longitude=${longitude}`

      console.log(`${latitude}, ${longitude}`)
      $.get(endpoint, function (data) {
        this.hasData = true
        console.log(data)

        this.weather = data.weather
        this.location = data.location
      }.bind(this))
    }
  },
  created: function () {
    this.getLocation()
  }
}
</script>
