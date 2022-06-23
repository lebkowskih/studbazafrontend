<template>
    <h2>Dashboard</h2>

    <div v-if="loading" class="loading">Loading...</div>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="posts" class="content">
        <div class="post-box" v-for="p in this.posts">
            <p>User @{{ p.creatorUsername }} ({{ p.creatorId }}) posted: "{{ p.content }}"</p>
        </div>
    </div>
</template>

<script>
import UserService from "../services/user.service";
export default {
    name: "Dashboard",
    data() {
        return {
            loading: false,
            error: null,
            posts: [],
        };
    },
    created() {
        this.fetchData()
    },
    methods: {
        fetchUser: async (p) => {
            const creator = await UserService.getUserById(p.creatorId).then((res) => res.data).then((data) => data.username)
            return { ...p, creatorUsername: creator }
        },
        fetchData() {
            this.loading = true
            this.posts = []
            UserService.getAllPosts().then(
                (response) => {
                    response.data.map(async (p) => await this.fetchUser(p).then((p) => this.posts.push(p)))
                    this.loading = false
                },
                (error) => {
                    this.error =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                }
            )
        },
    },
};
</script>
