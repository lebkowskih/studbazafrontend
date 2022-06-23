<template>
  <header-component />
  <div class="container">
    <div class="col-12">
      <div class="card" style="margin: 5px">
        <button id="cardbutton" class="button_post" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <div class="card-body">O czym myślisz?</div>
        </button>
      </div>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <div class="container">
                <section class="post">
                  <header>Utwórz post</header>
                  <form id="form" action="#">
                    <textarea placeholder="O czym myślisz?" spellcheck="false" required v-model="content"></textarea>
                    <button @click="addPost()" class="formbutton">
                      Opublikuj
                    </button>
                  </form>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card" style="margin: 5px" v-for="(post, postindex) in mineposts" :key="postindex">
        <div class="card-body">
          <button @click="deletePost(postindex)">Usuń</button>
          {{ post.content }} {{ postindex }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import store from "../store/index.js";
import userService from "../services/user.service";
import axios from "axios";
import { BASE_URL } from "../definitions";
var user = JSON.parse(localStorage.getItem("user-token"));

export default {
  components: { HeaderComponent },
  name: "Profile",
  data() {
    return {
      mineposts: null,
      content: "",
    };
  },
  computed: {
    currentUser() {
      return store.state.status.loggedIn;
    },
  },
  created() {
    axios
      .get(BASE_URL + "Posts/mine", {
        headers: {
          Authorization: "Bearer " + user.token,
          ContentType: "application/json",
        },
      })
      .then((response) => (this.mineposts = response.data));
  },
  methods: {
    addPost() {
      axios.post(
        BASE_URL + "Posts",
        {
          content: this.content,
        },
        {
          headers: {
            Authorization: "Bearer " + user.token,
            ContentType: "application/json",
          },
        }
      );
    },
    deletePost(postindex) {
      axios.delete(BASE_URL + "Posts/" + this.mineposts[postindex].id, {
        headers: {
          Authorization: "Bearer " + user.token,
          ContentType: "application/json",
        },
      });
    },
  },
};
</script>

<style scoped>
@import url("../styles/profile.css");
</style>
