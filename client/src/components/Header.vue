<template>
  <v-layout>
    <v-app-bar flat app color="info" dark>
      <v-app-bar-nav-icon dark @click="drawer = !drawer" />
      <v-toolbar-title class="home">
        <router-link to="root" title="Home">
          My Title
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" color="info" dark>
      <h2 class="mt-4 pa-2">Nav Bar</h2>
      <v-spacer></v-spacer>
      <v-list dark>
        <v-list-item @click="drawer = false">
          <v-list-item-icon>
            <v-icon>mdi-run</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Browse</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="drawer = false">
          <v-list-item-icon>
            <v-icon>mdi-account-plus</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              <router-link to="register" title="Register">
                Sign Up
              </router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="drawer = false">
          <v-list-item-icon>
            <v-icon>mdi-chevron-left</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Close Menu</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script>
export default {
  data() {
    return { drawer: false };
  },
  methods: {}
};
</script>

<style scoped>
h2 {
  color: white;
}
.v-application a {
  text-decoration: none;
  color: white;
}
.home {
  cursor: pointer;
}
</style>
