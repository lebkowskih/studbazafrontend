import { createWebHistory, createRouter } from "vue-router";
import Home from '../src/views/Home.vue'
import SignIn from "../src/views/SignIn.vue";
import store from '../src/store/index'
import { publicPages } from '../src/definitions'
import User from '../src/components/User.vue'
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
