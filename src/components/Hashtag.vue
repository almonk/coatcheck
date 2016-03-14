<template>
  <a target="_blank" :href="linkToTweet" class="hashtag">#{{hashtag.text}}</a>
</template>

<script>
export default {
  props: ['tweet', 'hashtag'],
  computed: {
    linkToTweet: function () {
      const url = `https://twitter.com/${this.tweet.user.screen_name}/status/${this.tweet.id_str}`
      return url
    }
  }
}
</script>

<style>
a.hashtag {
  box-shadow: 0px 1px 2px rgba(0,0,0,0.2);
  display: inline-block;
  margin-right: 2px;
  border-radius: 20px;
  padding: 4px 10px;
  font-size: 16px;
  background-color: white;
  margin-bottom: 5px;
}
</style>
