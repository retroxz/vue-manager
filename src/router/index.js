import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../components/Home.vue'

const routes = [
    {
        name: 'home',
        path: '/',
        component: Home,
        redirect: '/welcome',
        children: [
            {
                name: 'welcome',
                path: '/welcome',
                meta: {title: '欢迎页'},
                component: ()=>import('../view/Welcome.vue')
            }
        ]
    },
    {
        name: 'login',
        path: '/login',
        meta: {title: '登录'},
        component: ()=>import('../view/Login.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
