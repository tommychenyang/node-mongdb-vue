/**
 * Created by chenya3 on 4/10/2017.
 */
"use strict";
import Vue from "vue";
import VueRouter from "vue-router";

import Landing from "../module/landing/landing.vue";
import Dashboard from "../module/dashboard/dashboard.vue";
Vue.use(VueRouter);

export default new VueRouter({
    mode:'hash',
    routes:[
        { path: "/", component: Landing },
        { path: "/home", component: Dashboard}
    ]
});
