import { defineAsyncComponent } from 'vue';
import Messages from '../modules/chatsView/routes';
import Facebook from '../modules/facebookView/routes';

export default [
    {
        path: '/messages',
        name: 'chats',
        meta: { layout: 'chats' },
        redirect: { name: 'chats.messages.wap' },
        component: defineAsyncComponent(() => import('../pages/index.vue')),
        children: [
            ...Messages,
            ...Facebook
        ]
    }
]