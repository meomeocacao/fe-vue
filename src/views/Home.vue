<template>
  <div class="home">
    <div class="iconAva"><IconAva /></div>
    <HelloWorld />
    <FooterView />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "../components/HelloWorld.vue";
import FooterView from "./FooterView.vue";
import IconAva from "../components/IconAva.vue";

@Component({
  components: {
    HelloWorld,
    FooterView,
    IconAva,
  },
})
export default class Home extends Vue {}
</script>
<style scoped lang="scss">
.iconAva {
  position: absolute;
  top: -50px;
  right: 10px;
  z-index: 10000;
}
</style>
