import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes.js';
import { useAuth } from '../../modules/auth/store/auth.store.js';

const stage = import.meta.env.VITE_STAGE

const router = createRouter({
    history: createWebHistory(),
    routes
})

if(stage === 'test'){
    router.addRoute({
        path: '/profile',
        name: 'profile',
        meta: {
            layout: 'profile'
        },
        component: () => import('../../modules/profile/pages/index.vue')
    })
}

router.beforeEach((to, from) => {

    const isAuth = ['login']
    if(isAuth.includes(to.name) && !from.name) {
        return true
    }


    if(to.name !== 'login'){
        const { getToken, isAuthenticated } = useAuth()

        if(getToken){
            return true
        }

        // if(!getToken){
        //     return { name: 'login' }
        // }

        // if(isAuthenticated.value.tipo === 21) return true;

        return true
    }

    return { name: 'admin' }

})

export default router