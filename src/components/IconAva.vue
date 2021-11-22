<template>
  <div>
    <div class="text-center">
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-avatar v-if="user.profilePicture" v-bind="attrs" v-on="on">
            <img :src="user.profilePicture" :alt="user.lastName" />
          </v-avatar>

          <v-avatar color="red" v-else v-bind="attrs" v-on="on">
            <span class="white--text text-h5">{{ user.lastName }}</span>
          </v-avatar>
        </template>
        <v-list style="margin-top: 20px">
          <v-list-item v-for="(item, index) in items" :key="index">
            <CreatePost :data="item" v-if="item.title == 'Create Post'" />
            <router-link
              v-else
              :to="item.url"
              class="text-decoration-none black--text"
            >
              <v-list-item-title>{{
                item.title
              }}</v-list-item-title></router-link
            >
            <!-- {{if ( item.title === "Create Post"
            <CreatePost :data="item" /> )else}}
            <v-list-item-title>{{ item.title }}</v-list-item-title> -->
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </div>
</template>

<script lang="ts">
import { API_URL } from "../constants/api.constant";
import axios from "axios";
import { Component, Vue, Watch } from "vue-property-decorator";
import CreatePost from "./CreatePost.vue";
@Component({
  components: {
    CreatePost,
  },
})
export default class IconAva extends Vue {
  user = {
    profilePicture: "",
    firstName: "",
    lastName: "",
  };
  userId: string | null = "";
  items: { title: string; url: string }[] = [
    { title: "Create Post", url: "/create-post" },
    { title: "Home", url: "/" },
    { title: "Profile", url: "/profile" },
    { title: "Change Profile", url: "/change-profile" },
    { title: "Logout", url: "/logout" },
  ];
  created() {
    this.userId = localStorage.getItem("userId");
    console.log(this.userId);
    if (this.userId) {
      axios
        .get(API_URL.get_user_info + this.userId)
        .then((response) => {
          console.log(response.data);
          this.user = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  @Watch("userId")
  onUserIdChange() {
    console.log(this.userId);
  }
}
</script>

<style></style>
