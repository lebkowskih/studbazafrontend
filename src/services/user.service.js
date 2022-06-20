import axios from 'axios';
import authHeader from './auth-header';
import { BASE_URL } from '../definitions';

class UserService {
    // POSTS
    getPost(postId) {
        return axios.get(BASE_URL + 'Posts/' + postId);
    }

    getUserPosts(user_id) {
        return axios.get(BASE_URL + 'Posts/UserPosts/' + user_id);
    }

    getAllPosts() {
        return axios.get(BASE_URL + 'Posts/all');
    }

    createPost(data) {
        return axios.post(BASE_URL + 'Posts', data, { headers: authHeader() });
    }

    deletePost(postId) {
        return axios.delete(BASE_URL + 'Posts/' + postId, { headers: authHeader() });
    }

    getMyPosts() {
        return axios.get(BASE_URL + 'mine', { headers: authHeader() });
    }

    // USERS
    loginUser(email, password) {
        return axios.post(BASE_URL + 'Users/signIn', {
            userEmail: email,
            password: password
        });
    }

    createUser(username, email, password, picture) {
        return axios.post(BASE_URL + 'Users ', {
            username: username,
            email: email,
            password: password,
            picture: picture
        });
    }

    getUserByUsername(username) {
        return axios.get(BASE_URL + 'Users/username/' + username);
    }

    getUserById(id) {
        return axios.get(BASE_URL + 'Users/' + id);
    }

}

export default new UserService();
