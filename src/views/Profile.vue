<template>
        <header-component />
        <div>
        <h2>Hi</h2>
        </div>
</template>
<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import store from '../store/index.js'
export default {

  components: { HeaderComponent },
    name: 'Profile',
    computed: {
        currentUser() {
            return store.state.loggedIn;
        }
    },
};
</script>
