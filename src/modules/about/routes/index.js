export default [
    {
        path: '/about',
        name: 'about',
        meta: {
            layout: 'about',
            title: 'acerca de ti'
        },
        component: () => import('../pages/index.vue')
    }
]