<template>
  <div id="app">
    <spinner v-if="!hasData"></spinner>
    <weather v-if="hasData" :weather="weather" :location="location" :tweets="tweets" :reloading="!hasData"
    ></weather>
    <div class="flex flex-wrap m1">
      <div v-for="tweet in tweets" class="flex m1">
        <a href="https://twitter.com/{{tweet.user.name}}" target="_blank">
          <img height="46" class="circle avatar" v-bind:src="tweet.user.profile_image_url_https"/>
        </a>
      </div>
    </div>

    <hr class="my0"/>

    <div class="p1">
      <template v-for="tweet in tweets">
        <span v-for="hashtag in tweet.entities.hashtags">
          <a target="_blank" href="https://twitter.com/search?q={{hashtag.text}}" class="hashtag">#{{hashtag.text}}</a>
        </span>
      </template>
    </div>
  </div>

  <hr class="my0"/>

  <a class="m2 button share is-medium is-info" href="https://twitter.com/intent/tweet?text={{tweetText}}" target="_blank">
    Share this thing
  </a>

  <div class="p2 center">
    <p>A thing by <a href="https://twitter.com/appltn">@appltn</a> &amp; <a href="https://twitter.com/almonk">@almonk</a> 💃</p>
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
  computed: {
    tweetText: function () {
      return encodeURIComponent(`${this.tweets.length} people near me are tweeting the weather #${this.weather} – https://coatcheck.me`)
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
a {
  color: #3B7FEB;
}

a.hashtag {
  box-shadow: 0px 1px 2px rgba(0,0,0,0.2);
  display: inline-block;
  margin-right: 2px;
  border-radius: 20px;
  padding: 4px 10px;
  font-size: 16px;
  margin-bottom: 5px;
}

.share {
  display: block;
  background-color: #3B7FEB;
  margin-bottom: 0px;
}

.avatar {
  box-shadow: 0px 1px 2px rgba(0,0,0,0.2);
  height: 46px;
  width: 46px;
  background-color: #ccc;
  overflow: hidden;
}
</style>
