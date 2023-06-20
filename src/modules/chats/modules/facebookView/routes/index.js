export default [
    {
        path: 'facenook',
        name: 'chats.facebook',
        meta: { layout: 'chats' },
        component: () => import('../pages/index.vue'),
    }
]