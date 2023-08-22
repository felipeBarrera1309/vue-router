import { defineAsyncComponent } from 'vue'

export default [
    {
        path: '/login',
        name: 'login',
        meta: { layout: 'login', title: 'title' },
        component: defineAsyncComponent(() => import('../pages/index.vue'))
    }
]