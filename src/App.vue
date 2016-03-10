<template>
  <div id="app">
    <spinner v-if="!hasData"></spinner>
    <weather v-if="hasData" :weather="weather" :location="location" :tweets="tweets" :reloading="!hasData"
    ></weather>
    <div class="flex flex-wrap m1">
      <div v-for="tweet in tweets" class="flex-none m1">
        <img height="46" class="rounded avatar" v-bind:src="tweet.user.profile_image_url_https"/>
      </div>
    <div>
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
      hasData: false,
      tweets: []
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
      var endpoint = `https://coatcheck-api.herokuapp.com/search?latitude=${latitude}&longitude=${longitude}`

      this.hasData = false

      console.log(`${latitude}, ${longitude}`)
      $.get(endpoint, function (data) {
        this.hasData = true
        console.log(data)

        this.weather = data.weather
        this.location = data.location
        this.tweets = data.supporting_tweets
      }.bind(this))
    }
  },
  created: function () {
    this.getLocation()
  }
}
</script>

<style scoped>
.avatar {
  box-shadow: 0px 2px 3px rgba(0,0,0,0.1);
  height: 46px;
  width: 46px;
  overflow: hidden;
}
</style>
