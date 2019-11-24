<template>
  <div>
    <v-layout>
      <v-flex xs6 offset-xs3>
        <div class="elevation-2">
          <v-toolbar class="primary mt-10" dark>
            <v-toolbar-title>Register</v-toolbar-title>
          </v-toolbar>

          <div class="pl-4 pr-4 pt-2 pb-2">
            <form v-on:submit.prevent>
              <input
                type="email"
                name="email"
                class="mt-2 mb-2 pa-2 input"
                v-model="email"
                placeholder="email"
              /><br />
              <input
                type="password"
                name="password"
                class="mt-2 mb-2 pa-2 input"
                v-model="password"
                placeholder="password"
              /><br />
              <div
                v-if="error"
                class="error white--text pa-4"
                v-html="error"
                dark
              />
              <br />
              <v-btn class="primary light--text" type="submit" @click="register"
                >Register</v-btn
              >
            </form>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </div>
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
    async register() {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        });
        this.error = null; // clear errors if any existed
        alert(`User Account Created Sucessfully for ${this.email}!`); // notify user of adding
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>

<style scoped>
.input {
  width: 100%;
  height: 2em;
  border-bottom: 1px solid darkgrey;
}
</style>
