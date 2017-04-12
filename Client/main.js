import Vue from 'vue';
import App from './app.vue';
import VueResource from 'vue-resource';
import router from './core/routes';

Vue.use(VueResource);

new Vue({// eslint-disable-line no-new
    el: 'app',
    router,
    render: h => h(App)
});
