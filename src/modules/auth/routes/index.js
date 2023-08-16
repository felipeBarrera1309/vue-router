export default [
    {
        path: '/login',
        name: 'login',
        meta: { layout: 'login', title: 'title' },
        component: () => import('../pages/index.vue')
    }
]