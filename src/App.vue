<template>
  <div id="app">
    <spinner v-if="!hasData"></spinner>
    <weather v-if="hasData" :weather="weather" :location="location" :tweets="tweets" :reloading="!hasData"
    ></weather>

    <div class="container content">
      <div class="flex flex-wrap m1">
        <div v-for="tweet in tweets" class="flex m1">
          <a href="https://twitter.com/{{tweet.user.screen_name}}/status/{{tweet.id_str}}" target="_blank">
            <img class="circle avatar" v-bind:src="tweet.user.profile_image_url_https"/>
          </a>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="p2">
        <template v-for="tweet in tweets">
          <span v-for="hashtag in tweet.entities.hashtags">
            <hashtag :tweet="tweet" :hashtag="hashtag"></hashtag>
          </span>
        </template>
      </div>
    </div>

    <hr>

    <div class="container mt2">
      <a v-if="hasData" class="m2 button share is-medium is-info" href="https://twitter.com/intent/tweet?text={{tweetText}}" target="_blank">
        Share this thing
      </a>

      <div class="p2 center">
        <p>A thing by <a href="https://twitter.com/appltn" class="hashtag">@appltn</a> &amp; <a href="https://twitter.com/almonk" class="hashtag">@almonk</a> 💃</p>
      </div>
    </div>
  </div>
</template>

<script>
import weather from './components/Weather'
import spinner from './components/Spinner'
import hashtag from './components/Hashtag'
import $ from 'jquery'
export default {
  components: {
    weather,
    spinner,
    hashtag
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
      this.hasData = false

      var params = this.getQuery()

      if (params.latitude && params.longitude) {
        this.updateData({
          coords: {
            latitude: params.latitude,
            longitude: params.longitude
          }
        })
      } else if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.updateData)
      } else {
        window.alert('Can\'t get location')
      }
    },
    updateData: function (position) {
      var latitude = position.coords.latitude
      var longitude = position.coords.longitude
      var endpoint = `https://coatcheck-api.herokuapp.com/search?latitude=${latitude}&longitude=${longitude}`

      console.log(`${latitude}, ${longitude}`)
      $.get(endpoint, function (data) {
        this.hasData = true
        console.log(data)

        this.weather = data.weather
        this.location = data.location
        this.tweets = data.supporting_tweets
      }.bind(this))
    },
    getQuery: function () {
      return document.location.search.replace('?', '').split('&').map(function (param) {
        var parts = param.split('=')
        var key = parts[0]
        var val = parts[1]
        var obj = {}
        obj[key] = val

        return obj
      }).reduce(function (memo, item) {
        Object.assign(memo, item)
        return memo
      }, {})
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

.share {
  display: block;
  background-color: #3B7FEB;
  margin-bottom: 0px;
}

.avatar {
  box-shadow: 0px 1px 2px rgba(0,0,0,0.2);
  height: 54px;
  width: 54px;
  background-color: #ccc;
  overflow: hidden;
}

.content {
  margin-top: 300px;
}
</style>
