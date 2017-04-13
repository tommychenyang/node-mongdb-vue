<template>
    <div id='gundam'>
        <h1>Gundam page</h1>
        <div>
            <ul>
                <li v-for='item in gundams'>
                    <gundamItem :item='item'></gundamItem> 
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
	import { mapActions, mapGetters } from 'vuex';
    import gundamGridItem from './gundamGridItem.vue';
    export default {
        data() {
            return {
                count: 0
            };
        },
        computed: {
            ...mapGetters({
                gundams: 'gundam/gundams',
                selected: 'gundam/selected'
            })
        },
        components: {
            'gundamItem': gundamGridItem
        },
        methods: {
            ...mapActions({
                load: 'gundam/load',
                delete: 'gundam/deleteRow'
            })
        },
        created: function() {
            this.load();
        }
    };
</script>

<style>
</style>
