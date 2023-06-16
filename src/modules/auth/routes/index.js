export default [
    {
        path: '/login',
        name: 'login',
        meta: { layout: 'login' },
        component: () => import('../pages/index.vue')
    }
]