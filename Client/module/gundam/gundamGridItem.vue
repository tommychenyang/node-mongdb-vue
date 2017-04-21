<template>
    <v-card id='gundamGridItem'>
        <v-card-row class='green darken-1'>
            <v-card-title>
                <span class='white--text'> {{ item.name }} </span>
            </v-card-title>
        </v-card-row>
        <div>
            <v-btn primary dark @click.native='deleteRow(item)'>Delete</v-btn>
        </div>      
    </v-card>
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

