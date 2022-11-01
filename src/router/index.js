import { createRouter, createWebHistory } from 'vue-router'
const User = {
    template: '<div>User wwwwwww{{ $route.params.id }}</div>',
}

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [{
        path: '/',
        name: 'ddd',
        component: User,
        meta: {
            title: 'hi'
        }
    },
    {
        path: '/:pathMatch(.*)*',
        name: "NotFound",
        component: () =>
            import ("@/views/404.vue"),
        meta: {
            title: '404'
        }
    }
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
    history: createWebHistory(),
    routes
})
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title + ' ' +
            import.meta.env.VITE_APP_TITLE
    }
})
export default router