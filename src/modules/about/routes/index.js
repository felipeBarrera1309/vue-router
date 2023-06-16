export default [
    {
        path: '/about',
        name: 'about',
        meta: {
            layout: 'about'
        },
        component: () => import('../pages/index.vue')
    }
]