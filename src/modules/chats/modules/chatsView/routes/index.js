export default [
    {
        path: 'wap',
        name: 'chats.messages.wap',
        meta: { layout: 'chats' },
        component: () => import ('../pages/index.vue'),
        children: [
            {
                path: ':id',
                name: 'chats.messages.wap.details',
                component: () => import('../pages/messages.vue'),
                props: {
                    id: '5'
                }
            }
        ]
    }
]