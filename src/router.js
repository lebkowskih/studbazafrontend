import { createWebHistory, createRouter } from "vue-router";
import Home from '../src/views/Home.vue'
import SignIn from "../src/views/SignIn.vue";
// lazy-loaded
const Profile = () => import("../src/views/Profile.vue")
const routes = [
    {
        path: "/",
        name: "SignIn",
        component: SignIn,
    },
    {
        path: "/home",
        component: Home,
    },
    {
        path: "/profile",
        name: "profile",
        // lazy-loaded
        component: Profile,
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;

// If you want to check Authorized status everytime a navigating action is trigger, just add router.beforeEach() inside src / router.js like this:
// router.beforeEach((to, from, next) => {
//     const publicPages = ['/login', '/register', '/home'];
//     const authRequired = !publicPages.includes(to.path);
//     const loggedIn = localStorage.getItem('user');
//     // trying to access a restricted page + not logged in
//     // redirect to login page
//     if (authRequired && !loggedIn) {
//         next('/login');
//     } else {
//         next();
//     }
// });
