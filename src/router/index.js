import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

const routerInstance = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior() {
        return { y: 0 }; // auto scroll to top of viewport on route change
    }
});

export default routerInstance;
