<template>
  <div id="ssr-content">
    {{ increment }}
    <button @click="increment++">Increment</button>
  </div>
</template>

<script>
export default {
  name: 'ssr-content',
  data() {
    return {
      increment: 0
    }
  },
}
</script>

<style lang="scss">
#ssr-content button {
  padding: 20px;
}
</style>
