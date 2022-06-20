import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Dashboard from "./components/Dashboard.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
// lazy-loaded
const Profile = () => import("./components/Profile.vue")
// const BoardAdmin = () => import("./components/BoardAdmin.vue")
// const BoardModerator = () => import("./components/BoardModerator.vue")
// const BoardUser = () => import("./components/BoardUser.vue")
const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/home",
        component: Home,
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard,
    },
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/register",
        component: Register,
    },
    {
        path: "/profile",
        name: "profile",
        // lazy-loaded
        component: Profile,
    },
    // {
    //     path: "/admin",
    //     name: "admin",
    //     // lazy-loaded
    //     component: BoardAdmin,
    // },
    // {
    //     path: "/mod",
    //     name: "moderator",
    //     // lazy-loaded
    //     component: BoardModerator,
    // },
    // {
    //     path: "/user",
    //     name: "user",
    //     // lazy-loaded
    //     component: BoardUser,
    // },
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