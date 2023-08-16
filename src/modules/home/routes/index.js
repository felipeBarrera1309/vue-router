export default [
    {
        path: '/admin',
        name: 'admin',
        meta: {
            layout: 'main',
            title: 'main',
            // requireAuth: true,
            // roles: ['admin']
        },
        component: () => import('../pages/index.vue')
    }
]