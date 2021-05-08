import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routerInstance = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'profile',
            component: () => import('@/pages/profile-details.vue')
        },
        {
            path: '/skills',
            name: 'skills',
            component: () => import('@/pages/skills.vue')
        },
        {
            path: '/requests',
            name: 'requests',
            component: () => import('@/pages/requests.vue')
        },
        // Default route
        {
            path: '/*',
            redirect: '/'
        }
    ],
    scrollBehavior() {
        return { y: 0 }; // auto scroll to top of viewport on route change
    }
});

export default routerInstance;
