<template>
  <HeaderComponent />
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-8">
        <h1 style="text-align: center">Posty {{ user }}</h1>
        <div v-if="this.posts.length != 0">
          <div
            class="card"
            style="margin: 5px"
            v-for="post in this.posts"
            :key="post"
          >
            <div class="card-body">
              {{ post.content }}
            </div>
          </div>
        </div>
        <div v-else>
          <div class="card" style="margin: 5px">
            <div class="card-body">
              <p>Ten użytkownik nie dodał żadnych postów!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import HeaderComponent from "../components/HeaderComponent.vue";
import { BASE_URL } from "../definitions";
import store from "../store/index";
export default {
  components: {
    HeaderComponent,
  },
  computed: {
    currentUser() {
      return store.state.status.loggedIn;
    },
  },
  data() {
    return {
      user: this.$route.params.username,
      userid: null,
      posts: "",
    };
  },
  async created() {
    await fetch("https://localhost:44381/api/Users/username/" + this.user)
      .then((response) => response.json())
      .then((iddata) => (this.userid = iddata[0].id));
    await axios
      .get(BASE_URL + "Posts/UserPosts/" + this.userid)
      .then((response) => (this.posts = response.data));
  },
};
</script>

<style scoped>
@import url("../styles/profile.css");
</style>
