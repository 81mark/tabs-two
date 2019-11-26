<template>
  <v-app>
    <v-content>
      <Header />
      <Register />
    </v-content>
  </v-app>
</template>

<script>
import Register from "./components/Register";
import Header from "./components/Header";

export default {
  name: "App",

  components: {
    Register,
    Header
  },

  data: () => ({})
};
</script>
