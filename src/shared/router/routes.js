import About from '../../modules/about/routes';
import Auth from '../../modules/auth/routes';
import Home from '../../modules/home/routes';
import Chats from '../../modules/chats/routes';


export default [
    {
        path: '/',
        name: 'home',
        meta: { name: 'Home' },
        redirect: { name: 'login' },
        component: () => import('../pages/home.vue')
    },
    ...Auth,
    ...About,
    ...Home,
    ...Chats
]

