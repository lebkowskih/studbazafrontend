<template>
  <header-component />
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-8">
        <form>
          <div class="form-group">
            <label for="username">Nazwa użytkownika</label>
            <input
              type="text"
              class="form-control"
              id="username"
              placeholder="Wprowadź nową nazwę użytkownika"
              v-model="newusername"
            />
          </div>

          <br />

          <button @click.prevent="changeNickName()" class="btn btn-primary">
            Prześlij
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import HeaderComponent from "../components/HeaderComponent.vue";
import { BASE_URL } from "../definitions";
import store from "../store";
var user = JSON.parse(localStorage.getItem("user-token"));

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
      user: localStorage.getItem("username"),
      newusername: "",
    };
  },
  created() {},
  methods: {
    changeNickName() {
      axios.put(
        BASE_URL + "Users",
        {
          username: this.newusername,
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

<style>
#urnick {
  text-align: center;
}
</style>
