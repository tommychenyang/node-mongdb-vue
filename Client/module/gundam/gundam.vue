<template>
    <div id='gundam'>
        <h1>Gundam page</h1>
        <div class= 'gundam-form'>
            <form>
                <input type= 'text' placeholder='Type name' v-model='editingRow.name'/>
                
            </form>
            
        </div>
        <v-btn primary dark @click.native='add(editingRow);editingRow={}'>Save </v-btn>
        <div class= 'gundam-grid'>
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
                editingRow: {
                    name: ''
                },
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
                add: 'gundam/saveRow',
                delete: 'gundam/deleteRow'
            })
        },
        created: function() {
            this.load();
        }
    };
</script>

<style>
    .gundam-grid{
        margin:20px 20px 20px 20px;

    }
    .gundam-form{
        border: 1px solid #333;
    }
</style>
