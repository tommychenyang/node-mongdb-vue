import Vue from 'vue';
import App from './app.vue';
import VueResource from 'vue-resource';
import router from './core/routes';
import state from './core/store';
Vue.use(VueResource);

new Vue({// eslint-disable-line no-new
    el: 'app',
    router,
    state,
    render: h => h(App)
}).$mount('#app');
