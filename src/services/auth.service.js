import axios from 'axios';
import { BASE_URL, cookieKey } from '../definitions.js';
import router from '../router'

class AuthService {
    async login({email, password}) {
        const response = await axios
            .post(BASE_URL + 'Users/signIn', {
                userEmail: email,
                password: password
            });
        if (response.data.token && response.data.succeeded) {
            localStorage.setItem(cookieKey, JSON.stringify(response.data));
            localStorage.setItem('username',email);
        }
        return response.data;
    }

    logout() {
        localStorage.removeItem('username');
        localStorage.removeItem(cookieKey);
    }

    register({username,email,password}) {
        return axios.post(BASE_URL + 'Users', {
            username: username,
            email: email,
            password: password,
            picture:"picture"
        });
    }
}
export default new AuthService();
