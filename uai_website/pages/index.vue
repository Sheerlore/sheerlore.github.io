<template>
  <div id="container">
    <h1>{{ githubData.name }} Website</h1>
    <nav>
      <li>{{ githubData.login }}</li>
      <li>{{ githubData.avatar_url }}</li>
      <li>{{ githubData.html_url }}</li>
      <li>{{ githubData.blog }}</li>
      <li>{{ githubData.bio }}</li>
      <li>{{ githubData.twitter_username }}</li>
    </nav>
  </div>
</template>

<script lang="ts">
import axios from 'axios'

export default {
  name: 'IndexPage',

  async asyncData () {
    const res = await axios.get('https://api.github.com/users/Sheerlore')
    return { githubData: res.data }
  }
}
</script>
