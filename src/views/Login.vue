<template>
  <div id="app"><LoginForm /></div>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: { LoginForm },
})
export default class Login extends Vue {}
</script>

<style></style>
