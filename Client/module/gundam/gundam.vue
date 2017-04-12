<template>
    <div id="gundam">
        <h1>Gundam page</h1>
        <div>
            <ul>
                <li v-for="item in gundams">
                    {{item.name}}
                </li>
            </ul>
        </div>

    </div>

</template>

<script>
    export default {
        data () {
            return {
                gundams: []
            };
        },
        methods: {
            getAll: function () {
                this.$http.get('/api/gundam').then(function (result) {
                    this.gundams = result.data;
                });
            }
        },
        mounted () {
            this.getAll();
        }
    };
</script>

<style>
</style>
