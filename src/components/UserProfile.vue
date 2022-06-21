<template>
    <p>WHATSUPPPP</p>
</template>

<script>
// TODO: Make a unified component out of that
import UserService from "../services/user.service";
export default {
    name: "UserProfile",
    data() {
        return {
            posts: [],
            user: {},
            userId: null,
        };
    },
    mounted() {
        this.userId = parseInt(window.location.hash.split('/').at(-1))

        // UserService.getUserPosts(this.userId).then(
        //     (response) => {
        //         this.posts = response.data;
        //     },
        //     (error) => {
        //         this.posts =
        //             (error.response &&
        //                 error.response.data &&
        //                 error.response.data.message) ||
        //             error.message ||
        //             error.toString();
        //     }
        // );

        // UserService.getUserById(this.userId).then(
        //     (response) => {
        //         this.user = response.data;
        //     },
        //     (error) => {
        //         this.user =
        //             (error.response &&
        //                 error.response.data &&
        //                 error.response.data.message) ||
        //             error.message ||
        //             error.toString();
        //     }
        // );
    },
};
</script>
