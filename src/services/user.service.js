import axios from 'axios';
import authHeader from './auth-header';
import { BASE_URL } from '../definitions';

class UserService {
    createPost(data) {
        return axios.post(BASE_URL + 'Posts', data, { headers: authHeader() });
    }

    deletePost(postId) {
        return axios.delete(BASE_URL + 'Posts/' + postId, { headers: authHeader() });
    }

    getPost(postId) {
        return axios.get(BASE_URL + 'Posts/' + postId);
    }

    getMyPosts() {
        return axios.get(BASE_URL + 'mine', { headers: authHeader() });
    }

    getAllPosts() {
        return axios.get(BASE_URL + 'Posts/all');
    }

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
