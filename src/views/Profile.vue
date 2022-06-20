<template>
        <header-component />
        <div>
        {{currentUser}}
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
