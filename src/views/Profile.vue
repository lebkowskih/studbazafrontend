<template>
  <header-component />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-8">
        <h1 style="text-align: center">Twoje posty</h1>
        <div class="card" style="margin: 5px">
          <button
            id="cardbutton"
            class="button_post"
            data-bs-toggle="modal"
            data-bs-target="#addpostmodal"
          >
            <div class="card-body">O czym myślisz?</div>
          </button>
        </div>

        <div
          class="modal fade"
          id="addpostmodal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <div class="container">
                  <section class="post">
                    <header>Utwórz post</header>
                    <form id="form" action="#">
                      <textarea
                        placeholder="O czym myślisz?"
                        spellcheck="false"
                        required
                        v-model="addcontent"
                      ></textarea>
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
        <div
          class="card"
          style="margin: 5px"
          v-for="(post, postindex) in mineposts"
          :key="postindex"
        >
          <div class="card-body">
            <button class="btndelete" @click="deletePost(postindex)">
              <i class="fa fa-trash"></i>
            </button>
            <button
              data-bs-toggle="modal"
              data-bs-target="#editpostmodal"
              class="btnedit"
            >
              <i class="fa fa-pencil"></i>
            </button>

            <div
              class="modal fade"
              id="editpostmodal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <div class="container">
                      <section class="post">
                        <header>Edytuj post</header>
                        <form id="form" action="#">
                          <textarea
                            spellcheck="false"
                            required
                            v-model="editcontent"
                          ></textarea>
                          <button
                            @click="updatePost(postindex)"
                            class="formbutton"
                          >
                            Opublikuj
                          </button>
                        </form>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {{ post.content }}
          </div>
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
      addcontent: "",
      editcontent: "",
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
          content: this.addcontent,
        },
        {
          headers: {
            Authorization: "Bearer " + user.token,
            ContentType: "application/json",
          },
        }
      );
      this.$router.go();
    },
    deletePost(postindex) {
      axios.delete(BASE_URL + "Posts/" + this.mineposts[postindex].id, {
        headers: {
          Authorization: "Bearer " + user.token,
          ContentType: "application/json",
        },
      });
      this.$router.go();
    },
    updatePost(postindex) {
      axios.put(
        BASE_URL + "Posts/editpost",
        {
          id: this.mineposts[postindex].id,
          content: this.editcontent,
        },
        {
          headers: {
            Authorization: "Bearer " + user.token,
            ContentType: "application/json",
          },
        }
      );
    },
  },
};
</script>

<style scoped>
@import url("../styles/profile.css");
</style>
