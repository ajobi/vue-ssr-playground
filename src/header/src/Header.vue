<template>
  <div id="ssr-header">
    {{ increment }}
    <button @click="increment++">Increment</button>
  </div>
</template>

<script>
export default {
  name: 'ssr-header',
  data() {
    return {
      increment: 0
    }
  },
}
</script>

<style lang="scss">

</style>
