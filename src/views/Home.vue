<template>
    <div class="container">
        <header-component />
    </div>
</template>
<script>
import UserService from "../services/user.service";
import HeaderComponent from '../components/HeaderComponent.vue';
export default {
  components: { HeaderComponent },
    name: "Home",
    data() {
        return {
            content: "",
        };
    },
    mounted() {
        UserService.getPublicContent().then(
            (response) => {
                this.content = response.data;
            },
            (error) => {
                this.content =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
            }
        );
    },
};
</script>
