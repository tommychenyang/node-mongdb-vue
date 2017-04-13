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
    export default {
        data() {
            return {
                count: 0
            };
        },
        computed: {
            gundams() {
                return this.$store.state.gundam.gundams;
            }
        }
    };
</script>

<style>
</style>
