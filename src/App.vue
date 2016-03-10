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
      console.log('2')
      var latitude = position.coords.latitude
      var longitude = position.coords.longitude
      var endpoint = `http://www.mocky.io/v2/56e160e0260000e101eaa21c?latitude=${latitude}&longitude=${longitude}`

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
    console.log('Hello')
    this.getLocation()
  }
}
</script>
