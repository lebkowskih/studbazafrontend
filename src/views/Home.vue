<template>
  <header-component />
  <h2>Home</h2>
</template>
<script>
import HeaderComponent from "../components/HeaderComponent.vue";
export default {
  components: { HeaderComponent },
  name: "Home",
  computed: {
    currentUser() {
      return store.state.status.loggedIn;
    },
  },
};
</script>
