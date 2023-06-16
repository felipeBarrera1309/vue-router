import About from '../../modules/about/routes';
import Auth from '../../modules/auth/routes';
import Home from '../../modules/home/routes';

export default [
    {
        path: '/',
        name: 'home',
        redirect: { name: 'login' },
        component: () => import('../pages/home.vue')
    },
    ...Auth,
    ...About,
    ...Home
]