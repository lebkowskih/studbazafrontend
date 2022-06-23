<script>
import Home from './components/Home.vue'
import NotFound from './components/NotFound.vue'
import Dashboard from './components/Dashboard.vue'
import CreatePost from './components/CreatePost.vue'
import SignIn from './components/SignIn.vue'

const routes = {
    '/': Home,
    '/about': About,
    '/dashboard': Dashboard,
    '/create-post': CreatePost,
    '/sign-in': SignIn,
}

export default {
    data() {
        return {
            currentPath: window.location.hash
        }
    },
    computed: {
        currentView() {
            return routes[this.currentPath.slice(1) || '/'] || NotFound
        }
    },
    mounted() {
        window.addEventListener('hashchange', () => {
            this.currentPath = window.location.hash
        })
    }
}
</script>

<template>
    <a href="#/">Home</a> |
    <a href="#/about">About</a> |
    <a href="#/non-existent-path">Broken Link</a> |
    <a href="#/dashboard">Dashboard</a> |
    <a href="#/create-post">Create post</a> |
    <a href="#/sign-in">Sign In</a>
    <component :is="currentView" />
</template>
