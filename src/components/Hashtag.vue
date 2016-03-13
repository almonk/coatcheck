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
