import { defineAsyncComponent } from 'vue'

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
        component: defineAsyncComponent(() => import('../pages/index.vue'))
    }
]