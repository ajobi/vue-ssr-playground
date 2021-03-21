import Vue from 'vue'
import Content from './Content.vue'

new Vue({
  el: '#ssr-content',
  render: h => h(Content)
})
