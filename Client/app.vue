<template>
    <v-app id="app" sidebar-under-toolbar>
        <v-toolbar>
            <v-toolbar-side-icon @click.native.stop="nav4 = !nav4" class="hidden-lg-and-up"/>
            <v-toolbar-title>This is a Tool bar</v-toolbar-title>
        </v-toolbar>
         <main>
            <v-sidebar v-model="nav4" class="mt-0 scroll-y" left>
                <v-list>
                    <v-list-item v-for="i in navItems" :key="i.title">
                        <v-list-tile ripple>
                            <router-link tag= "v-list-tile-title" :to="i.href"> {{ i.title }}</router-link>
                        </v-list-tile>
                    </v-list-item>
                </v-list>
            </v-sidebar>
            <v-content>
                <v-container fluid>
                    <router-view></router-view>
                </v-container>
            </v-content>
        </main>
    </v-app>

</template>

<script>
     export default {
        data() {
            return {
                count: 0,
                nav4: false,
                navItems: [
                    { 'title': 'Home', 'href': '/home' },
                    { 'title': 'Gundam', 'href': '/gundam' },
                    { 'title': 'BusinessLogic', 'href': '/' },
                    { 'title': 'Link', 'href': '/' }
                ]
            };
        }
    };
</script>

<style  lang="stylus">
  @import '../node_modules/vuetify/src/stylus/main'

</style>
<style>
    main {
        height: 100vh;
    }
</style>
