<template>
  <div>
    <v-text-field v-model="username" label="Username" />
    <v-text-field v-model="password" label="Password" />
    <v-btn color="primary" @click="login" :disabled="!display">Login</v-btn>
  </div>
</template>

<script lang="ts">
import { API_URL } from "../constants/api.constant";
import axios from "axios";
import { Component, Vue, Watch } from "vue-property-decorator";
import router from "../router";
@Component
export default class LoginForm extends Vue {
  username: string = "";
  password: string = "";
  display: boolean = false;
  @Watch("username")
  onUsernameChange() {
    this.display = this.username.length > 0 && this.password.length > 0;
  }
  @Watch("password")
  onPasswordChange() {
    this.display = this.username.length > 0 && this.password.length > 0;
  }
  login() {
    const data = {
      username: this.username,
      password: this.password,
    };

    axios
      .post(API_URL.login, data)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("userId", response.data.id);
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
</script>

<style></style>
