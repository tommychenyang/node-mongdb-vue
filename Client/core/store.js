import Vue from 'vue';
import Vuex from 'vuex';

import gundam from '../module/gundam/store';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        'gundam': gundam
    }
});
