/**
 * Created by chenya3 on 3/30/2017.
 */
// 0. If using a module system, call Vue.use(VueRouter)

// 1. Define route components.
// These can be imported from other files
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.


// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
    el: '#app',
    http: {


    },
    data:{
        message:'node+mongo+vue',
        currentGundam:{
            name:'',
            code:'',
            releaseDate:''
        },
        gundams:[]
    },
    methods:{
        getAllGundam:function(){
            this.message='user click!'
            return this.$http.get('/api/gundam').then(function(res){
                this.gundams=res.data;
                return this.gundams;
            })
        },
        SaveGundam:function(){
            this.$http.post('/api/gundam',this.currentGundam).then(function () {
                this.getAllGundam().then(function(res){
                    this.gundams=res;

                })
            })
        }
    },
    ready:function(){

        this.getAllGundam();
        console.log('vue ready method called');
    }

});

// Now the app has started!