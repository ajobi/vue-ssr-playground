import Vue from 'vue'
import Header from './Header.vue'

new Vue({
  el: '#ssr-header',
  render: h => h(Header)
})
