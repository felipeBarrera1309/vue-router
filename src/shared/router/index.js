import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes.js';
import { useAuth } from '../../modules/auth/store/auth.store.js';

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {

    if(to.name === 'login' && from.name) return next({ name: 'admin' });
    else next()
    const isAuth = ['login']
    if(isAuth.includes(to.name)) return true


    if(to.name !== 'login'){
        const { getToken, isAuthenticated } = useAuth()

        if(getToken){
            return true
        }

        if(!getToken){
            return { name: 'login' }
        }

        if(isAuthenticated.value.tipo === 21) return true;

        return true
    }

    return { name: 'admin' }

})

export default router