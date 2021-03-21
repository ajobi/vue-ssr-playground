import Vue from 'vue';
import Content from './Content.vue';

// Receives the context of the render call, returning a Promise resolution to the root Vue instance.
export default context => {
  return Promise.resolve(
    new Vue({
      render: h => h(Content)
    })
  );
}
