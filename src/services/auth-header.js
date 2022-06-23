import { cookieKey } from "../definitions";

export default function authHeader() {
    let user = JSON.parse(localStorage.getItem(cookieKey))
    if (user && user.accessToken) {
        return {
            Authorization: 'Bearer ' + user.token,
            ContentType: 'application/json'
        };
    } else {
        return {};
    }
}
