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
</div>
</template>

<script>
    export default {
        data () {
            return {
                count: 0
            };
        },
        methods: {
            increment () {
                this.count ++;
            }
        }
    };
</script>

<style>
</style>
