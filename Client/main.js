import Vue from 'vue';
import App from './app.vue';
//let router = require("./core/routes").default;

import router from './core/routes';
new Vue({
  el: 'app',
  router,
  render: h => h(App)
})
