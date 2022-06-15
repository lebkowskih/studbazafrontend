<template>
    <ul>
        <li v-for="p in this.posts">
            {{ p.id }}: {{ p.content }}
        </li>
    </ul>
</template>

<script>
import { BASE_URL } from '../definitions';
import axios from 'axios';

export default {
    data() {
        return {
            posts: [],
            errors: []
        }
    },

    // Fetches posts when the component is created.
    async created() {
        try {
            const response = await axios.get(`${BASE_URL}/Posts/all`)
            this.posts = response.data
        } catch (e) {
            this.errors.push(e)
        }
    }
}
</script>