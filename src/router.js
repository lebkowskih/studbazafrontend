import { createWebHistory, createRouter } from "vue-router";
import Home from '../src/views/Home.vue'
import SignIn from "../src/views/SignIn.vue";
import store from '../src/store/index'
import User from '../src/views/User.vue'
import ChangeLogin from '../src/views/ChangeLogin.vue'
// lazy-loaded
const Profile = () => import("../src/views/Profile.vue")


const routes = [
    {
        path: "/",
        name: "SignIn",
        component: SignIn,
    },
    {
        path:"/users/:username",
        component: User
    },
    {
        path: "/home",
        component: Home,
    },
    {
        path: "/yourprofile",
        name: "yourprofile",
        // lazy-loaded
        component: Profile,
    },
    {
        path:'/changelogin',
        name:"changelogin",
        component:ChangeLogin
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});



export default router;


router.beforeEach((to, from, next) => {
    const publicPages = ['/'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = store.state.status.loggedIn;
    if (authRequired && !loggedIn) {
        next('/');
    } else {
        next();
    }
});
