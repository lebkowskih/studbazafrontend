<template>
    <div class="container">
        <ul>
            <li v-for="p in this.posts">
                {{ p.id }}: {{ p.content }}
                {{ p }}
            </li>
        </ul>
    </div>
</template>

<script>
import UserService from "../services/user.service";
export default {
    name: "Dashboard",
    data() {
        return {
            posts: [],
        };
    },
    mounted() {
        UserService.getAllPosts().then(
            (response) => {
                this.posts = response.data;
            },
            (error) => {
                this.posts =
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
