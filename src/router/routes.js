import AppLayout from '../components/layout/AppLayout'
import AuthLayout from '../components/auth/AuthLayout'
import lazyLoading from './lazyLoading'

const EmptyParentComponent = {
    template: '<router-view></router-view>',
}

export default [
    {
        path: '*',
        redirect: { name: 'dashboard' },
    },
    {
        path: '/auth',
        component: AuthLayout,
        children: [
            {
                name: 'login',
                path: 'login',
                component: lazyLoading('auth/login/Login'),
            },
            {
                name: 'signup',
                path: 'signup',
                component: lazyLoading('auth/signup/Signup'),
            },
            {
                path: '',
                redirect: { name: 'login' },
            },
        ],
    },
    {
        path: '/404',
        component: EmptyParentComponent,
        children: [
            {
                name: 'not-found-advanced',
                path: 'not-found-advanced',
                component: lazyLoading('pages/404-pages/VuesticPageNotFoundSearch')
            },
            {
                name: 'not-found-simple',
                path: 'not-found-simple',
                component: lazyLoading('pages/404-pages/VuesticPageNotFoundSimple')
            },
            {
                name: 'not-found-custom',
                path: 'not-found-custom',
                component: lazyLoading('pages/404-pages/VuesticPageNotFoundCustom')
            },
            {
                name: 'not-found-large-text',
                path: '/pages/not-found-large-text',
                component: lazyLoading('pages/404-pages/VuesticPageNotFoundLargeText')
            }
        ]
    },
    {
        name: 'MyNADB',
        path: '/',
        redirect: 'dashboard',
        component: AppLayout,
        children: [
            {
                name: 'dashboard',
                path: 'dashboard',
                component: lazyLoading('dashboard/Dashboard'),
                default: true,
            },
            {
                name: 'matches',
                path: 'matches',
                component: lazyLoading('views/matches/Index'),
            },
            {
                name: 'profile',
                path: 'profile',
                component: lazyLoading('views/profile/Index'),
            },
            {
                name: 'teams',
                path: 'teams',
                component: lazyLoading('views/teams/Index'),
            },
            {
                name: 'logout',
                path: 'logout',
                component: lazyLoading('views/logout/Index'),
            },
        ],
    },
]
