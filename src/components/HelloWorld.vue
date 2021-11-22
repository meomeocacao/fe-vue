<template>
  <div style="padding: 10em">
    <select name="" id="" v-model="limit" @change="getAllPost">
      <option value="5">Choose your results</option>
      <option value="10">10 results</option>
      <option value="15">15 results</option>
      <option value="20">20 results</option>
    </select>
    <div class="hello" :key="p.id" v-for="p in posts">
      <div :id="p.id">
        <div style="display: flex; justify-content: space-between; width: 80%">
          <div>
            <div>
              <h1>{{ p.title }}</h1>
            </div>
            <div>
              <p>{{ p.content }}</p>
            </div>
          </div>
          <div>
            <p>Edit</p>
            <p>Remove</p>
          </div>
        </div>
        <img width="80%" :src="p.image" alt="" srcset="" />
      </div>
      <div style="display: flex">
        <p style="padding: 20px" @click="generateCount('like')">
          Like : {{ p.like }}
        </p>
        <p style="padding: 20px" @click="generateCount('dislike')">
          Dislike : {{ p.dislike }}
        </p>
      </div>
    </div>
    <div>
      <p>Page :{{ page / 5 }}</p>
      <button @click="getAllPost">Next</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import axios from "axios";
import { PostResponse } from "../store/data";
@Component
export default class HelloWorld extends Vue {
  // @Prop() private posts: PostResponse[];
  posts: PostResponse[] = [];
  like: number = 0;
  dislike: number = 0;
  page: number = 0;
  limit: number = 5;
  getAllPost() {
    console.log(this.page);
    const path =
      "http://localhost:4444/post?skip=" + this.page + "&limit=" + this.limit;
    console.log(path);

    axios.get(path).then((res) => {
      console.log(res.data);
      this.posts = res.data;
      this.page += 5;
      window.scrollTo(0, 0);
    });
  }
  created() {
    this.getAllPost();
  }
  @Watch("posts")
  onPostsChange() {
    console.log("posts changed");
    // this.getAllPost();
  }
  generateCount(type: string) {
    if (type === "like") {
      this.like++;
    } else {
      this.dislike++;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
