<template>
    <div id='gundam'>
        
            <v-row>
                <v-col xs2 offset-xs3>       
                    <v-card class='green darken-1'>
                        <v-card-title > 
                            <span class='white--text'>Gundam CRUD</span>
                        </v-card-title>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col xs3 offset-xs1>
                    <v-modal v-model="modal">
                        <v-btn slot="activator" primary dark>Create</v-btn>
                        <v-card>
                            <v-card-text>
                                <h2 class="title">Please fill the gundam information.</h2>
                            </v-card-text>
                            <form>
                                <input type= 'text' placeholder = 'Type name' v-model = 'editingRow.name' />
                                <input type= 'text' placeholder = 'Type code' v-model = 'editingRow.code' />
                            </form>
                            <v-card-row actions>
                                <v-spacer></v-spacer>
                                <v-btn secondary dark @click.native="modal = false" class="white--text">Cancel</v-btn>
                                <v-btn primary dark @click.native="add(editingRow); editingRow={}; modal = false; " class="white--text">Submit</v-btn>
                            </v-card-row>
                        </v-card>
                    </v-modal>     
                </v-col>
                
            </v-row>
            <div class= 'gundam-grid'>
                <ul>
                    <li v-for='item in gundams' class='gundam-grid-item'>
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
                modal: false,
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
    .row {
        margin: 20px 0 20px 0;
    }

    .gundam-grid{
        margin:20px;

    }
    li.gundam-grid-item{
        margin: 20px;
        display: block;
    }
</style>
