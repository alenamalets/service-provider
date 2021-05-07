const routes = [
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
    // Default route
    {
        path: '/*',
        redirect: '/'
    }
];

export default routes;
