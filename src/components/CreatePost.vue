<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <p v-bind="attrs" v-on="on">{{ data.title }}</p>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Create Post
        </v-card-title>

        <v-card-text>
          <v-text-field
            v-model="post.title"
            label="Title"
            required
            color="primary"
          ></v-text-field>

          <v-text-field
            v-model="post.content"
            label="Content"
            required
            color="primary"
          ></v-text-field>
          <v-file-input
            label="Image"
            color="primary"
            @change="onFileChange"
          ></v-file-input>
          <v-progress-linear
            indeterminate
            color="green"
            v-if="isLoading"
          ></v-progress-linear>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="onSubmit" :disabled="display">
            Create Post
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { API_URL } from "@/constants/api.constant";
import axios from "axios";
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class CreatePost extends Vue {
  @Prop() data!: any;
  dialog = false;
  isLoading = false;
  display: boolean = false;
  post = {
    title: "",
    content: "",
    image: undefined as any,
    user: "",
  };

  onFileChange(e: any) {
    this.post.image = e;
    console.log(this.post.image);
    console.log(e);
  }
  onSubmit() {
    this.display = true;
    this.isLoading = true;
    const user = localStorage.getItem("userId");
    if (user) {
      const formData = new FormData();
      formData.append("title", this.post.title);
      formData.append("content", this.post.content);
      formData.append("file", this.post.image);
      formData.append("user", user);
      console.log(formData);

      axios
        .post(API_URL.create_post, formData)
        .then((response) => {
          console.log(response.data);
        })
        .finally(() => {
          this.isLoading = false;
          this.display = false;
          this.dialog = false;
          //   router.go(-1);
          //   router.go(0);
        });
    }
  }
}
</script>

<style></style>
