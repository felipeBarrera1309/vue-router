import About from '../../modules/about/routes';
import Auth from '../../modules/auth/routes';
import Home from '../../modules/home/routes';
import Chats from '../../modules/chats/routes';


export default [
    {
        path: '/404',
        name: 'not.found',
        component: () => import('../../modules/auth/pages/404View.vue'),
        meta: {
            layout: 'notFound',
            name: 'not found'
        }
    },
    {
        path: '/:catchAll(.*)',
        redirect: { name: 'not.found' }
    },
    {
        path: '/',
        name: 'Home',
        meta: { name: 'Home', title: 'home' },
        redirect: { name: 'login' },
        component: () => import('../pages/home.vue')
    },
    ...Auth,
    ...About,
    ...Home,
    ...Chats
]

