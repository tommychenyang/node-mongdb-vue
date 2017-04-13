<template>
    <div id='gundam'>
        <h1>Gundam page</h1>
        <div>
            <ul>
                <li v-for='item in gundams'>
                    {{item.name}}
                </li>
            </ul>
        </div>

    </div>

</template>

<script>
	import { mapActions, mapGetters } from 'vuex';

    export default {
        data() {
            return {
                count: 0
            };
        },
        computed: {
            ...mapGetters({
                gundams: 'gundam/gundams'
            })
        },
        methods: {
            ...mapActions({
                load: 'gundam/load'
            })
        },
        created: function() {
            this.load();
        }
    };
</script>

<style>
</style>
