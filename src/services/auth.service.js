import axios from 'axios';
import { BASE_URL, cookieKey } from '../definitions';


class AuthService {
    async login(email, password) {
        const response = await axios
            .post(BASE_URL + 'Users/signIn', {
                userEmail: email,
                password: password
            });
        if (response.data.token && response.data.succeeded) {
            localStorage.setItem(cookieKey, JSON.stringify(response.data));
        }
        return response.data;
    }

    logout() {
        localStorage.removeItem(cookieKey);
    }

    register(user) {
        return axios.post(BASE_URL + 'Users', {
            username: user.username,
            email: user.email,
            password: user.password,
            picture: user.picture
        });
    }
}
export default new AuthService();
