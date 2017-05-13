<template>
    <div>
        <h1>Dashboard</h1>
        <div class='content-vp'>
            <div class='carousal-containter'>
                <div class="carousel-inner" >
                    <div class="mycarousel-left">
                        <button class="btn" @click="decrecement()">
                            <<
                        </button>
                    </div>
                    <div class = "mycarousel-right">
                        <button class="btn"  @click="increment()">
                            >>
                        </button>
                    </div>
                    <div v-for="item in pictures"  class="carousel-item" :class="{'active': item.id == index}" :style="{
                msTransform: `translateX( ${getTranslateX(item.id, count)}px) scale(1)`,
                webkitTransform: `translateX(${getTranslateX(item.id, count)}px) scale(1)`,
                transform: `translateX(${getTranslateX(item.id, count)}px) scale(1)`
                }">
                        <img class="img-fluid" v-bind:src="item.url" v-bind:alt="item.name" >
                    </div>                  
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                pictures: [
                    { url: './Client/assets/duelGundam_mg.jpg', name: 'duelGundam_mg', id: 1 },
                    { url: './Client/assets/aileStrike_mg.jpeg', name: 'aileStrike_mg', id: 2 },
                    { url: './Client/assets/wingEW.jpg', name: 'wingEW', id: 3 }
                ],
                count: 1,
                translate: 0,
                ready: false
            };
        },
        computed: {
            index: function() {
                return this.count;
            },
            ready: function() {
                return !!this.$el;
            }
        },
        methods: {
            decrecement: function() {
                if (this.count === 1) {
                    this.count = 4;
                }
                this.count--;
            },
            increment: function() {
                if (this.count === 3) {
                    this.count = 0;
                }
                this.count++;
            },
            getTranslateX: function(index, count) {
                if (!this.$el) {
                    return 0;
                }
                const parentWidth = this.$el.offsetWidth;
                const length = this.pictures.length;
                this.inStage = Math.round(Math.abs(index - count)) <= 1;
                if (this.inStage) {
                    return (index - count) * 1.2 * parentWidth / length;
                } else if (index < count) {
                    return (count - index - 1) * 1.2 * parentWidth / length;
                } else {
                    return -parentWidth / length;
                }
            }
        },
        mounted: function() {
            setInterval(this.increment, 5000);
        }
    };
</script>

<style>
    .carousel-inner {
        position: relative;
        width:400px;
        margin:auto;
        height:300px;
        overflow-x: hidden;
    }
    .carousel-item {
        position: absolute;
        top: 0;
        left: 0;
        width:100%;
        height:100%;
        display:inline-block;
        overflow: hidden;
        z-index:0;
        transition: 0.3s ease-in-out;
    }
    .carousel-item img{
        max-width: 100%;
        height: auto;
       
    }

    .carousel-item.active{
        z-index:2;
    }

    .mycarousel-left{
        position:absolute;
        left: 5px;
        top:50%;
        z-index:50;
        opacity:0;
        transition: all 0.4s ease-in-out;
    }
    .mycarousel-right{
        position:absolute;
        right: 5px;
        top:50%;
        z-index:50;
        opacity:0;
        transition: all 0.4s ease-in-out;

    }
    .carousel-inner:hover .mycarousel-right{
        opacity:0.2;
    }
    
    .carousel-inner:hover .mycarousel-left{
        opacity:0.2;
    }
</style>
