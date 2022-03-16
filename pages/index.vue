<template>
  <div>
    <h1>Index</h1>
    <h2>{{ rendering }}</h2>
    <the-canvas />
  </div>
</template>

<script>
import TheCanvas from '~/components/TheCanvas.vue'
export default {
  name: 'IndexPage',
  components: { TheCanvas },
  asyncData() {
    return {
      rendering: process.server ? 'server' : 'client'
    }
  }
}
</script>
