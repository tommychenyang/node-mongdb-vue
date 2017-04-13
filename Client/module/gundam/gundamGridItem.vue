<template>
    <div id='gundamGridItem'>
        <h4> {{ item.name }} </h4>
        <div>
            <button v-on:click='deleteRow(item)'>Delete</button>
        </div>
    </div>
</template>

<script>
	import { mapActions } from 'vuex';

    export default {
        props: {
            item: {
                type: Object
            }
        },
        methods: {
            ...mapActions({
                deleteRow: 'gundam/deleteRow'
            })
        }
    };
</script>

<style>
</style>

