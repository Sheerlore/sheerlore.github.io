<template>
  <div>
    <h1>Index</h1>
    {{ rendering }}
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  asyncData() {
    return {
      rendering: process.server ? 'server' : 'client'
    }
  }
}
</script>
