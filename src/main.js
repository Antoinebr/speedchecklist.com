// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


Vue.config.productionTip = false

window.VueScrollTo = require('vue-scrollto');

window.VueScollToOptions = {
    container: 'body',
    easing: 'ease-in',
    offset: -100,
    cancelable: true,
    onDone: function() {
      // scrolling is done
    },
    onCancel: function() {
      // scrolling has been interrupted
    },
    x: false,
    y: true
}


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
