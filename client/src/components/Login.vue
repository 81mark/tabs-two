<template>
  <v-layout v-if="$route.name === 'login'">
    <v-flex xs6 offset-xs3>
      <div class="elevation-2">
        <v-toolbar class="primary mt-10" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <form v-on:submit.prevent>
            <v-text-field label="E-mail" type="email" v-model="email" />
            <v-text-field
              label="Password"
              type="password"
              v-model="password"
            /><br />
            <div
              v-if="error"
              class="error white--text pa-4"
              v-html="error"
              dark
            />
            <br />
            <v-btn class="primary light--text" type="submit" @click="login"
              >Login</v-btn
            >
          </form>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from "../services/AuthenticationService";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    async login() {
      try {
        await AuthenticationService.login({
          email: this.email,
          password: this.password
        });
        this.error = null; // clear errors if any existed
        alert(`Sucessfully Logged in with ${this.email}!`); // notify user of adding
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>

<style scoped></style>
