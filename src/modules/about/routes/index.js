import { defineAsyncComponent } from 'vue'

export default [
    {
        path: '/about',
        name: 'about',
        meta: {
            layout: 'about',
            title: 'acerca de ti'
        },
        component: defineAsyncComponent(() => import('../pages/index.vue'))
    }
]