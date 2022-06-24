<template>
  <HeaderComponent />
  <h2>
    <div v-for="post in this.posts" :key="post">{{ post }}</div>
  </h2>
</template>

<script>
import axios from "axios";
import HeaderComponent from "../components/HeaderComponent.vue";
import { BASE_URL } from "../definitions";
export default {
  components: {
    HeaderComponent,
  },
  data() {
    return {
      user: this.$route.params.username,
      posts: "",
    };
  },
  created() {
    axios
      .get(BASE_URL + "Posts/UserPosts/" + 3006)
      .then((response) => (this.posts = response.data));
  },
};
</script>
