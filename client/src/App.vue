<template>
  <v-app>
    <v-content>
      <Header />
      <Register />
      <Login />
    </v-content>
  </v-app>
</template>

<script>
import Register from "./components/Register";
import Login from "./components/Login";
import Header from "./components/Header";

export default {
  name: "App",

  components: {
    Register,
    Login,
    Header
  },

  data: () => ({})
};
</script>
