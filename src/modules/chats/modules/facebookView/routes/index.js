export default [
    {
        path: 'facenook',
        name: 'chats.facebook',
        meta: { layout: 'chats' },
        component: () => import('../pages/index.vue'),
        children: [
            {
                path: '',
                name: 'chats.facebook.details',
                components: {
                    default: () => import('../pages/feis.vue'),
                    helper: () => import('../pages/tercera.vue')
                }
            }
        ]
    }
]