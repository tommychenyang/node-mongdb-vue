import Vue from 'vue';
import App from './app.vue';
import VueResource from 'vue-resource';
import router from './core/routes';
import store from './core/store';
import Vuetify from 'vuetify';
Vue.use(VueResource);
Vue.use(Vuetify);
new Vue({// eslint-disable-line no-new
    el: 'app',
    router,
    components: {
        App
    },
    store,
    render: h => h(App)
}).$mount('#app');
