const routes = [
    {
        path: '/',
        name: 'start',
        component: () => import('@/pages/profile-details.vue')
    },
    // Default route
    {
        path: '/*',
        redirect: '/'
    }
];

export default routes;
