<template>


<div id="landing">
    <div class="message">Value is: {{ count }}</div>
    <a href="#" @click.prevent="increment">Increment</a>
    <h1>Hello App!</h1>
    <p>
        <!-- use router-link component for navigation. -->
        <!-- specify the link by passing the `to` prop. -->
        <!-- <router-link> will be rendered as an `<a>` tag by default -->
        <router-link to="/home">Go to dashboard</router-link>
        <router-link to="/gundam">Go to gundam</router-link>
    </p>
    <myCarousel :pictures='pictures'></myCarousel>
</div>
</template>

<script>
    import myCarousel from '../controls/carousel.vue';

    export default {
        data() {
            return {
                count: 0,
                pictures: [
                    { url: './Client/assets/duelGundam_mg.jpg', name: 'duelGundam_mg', id: 1 },
                    { url: './Client/assets/aileStrike_mg.jpeg', name: 'aileStrike_mg', id: 2 },
                    { url: './Client/assets/wingEW.jpg', name: 'wingEW', id: 3 }
                ]
            };
        },
        methods: {
            increment() {
                this.count ++;
            }
        },
        components: {
            'myCarousel': myCarousel
        }
    };
</script>

<style>
</style>
