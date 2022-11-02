import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/index.vue'

const routes = [
    // 默认路径自动跳转到Home组件
    {
        path: "/",
        redirect: "/home"
    },
    // 下面匹配规则
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/404.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ left: 0, top: 0 })
            }, 500)
        })
    },
})

export default router