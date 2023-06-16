export default [
    {
        path: '/admin',
        name: 'admin',
        meta: {
            layout: 'main'
        },
        component: () => import('../pages/index.vue')
    }
]