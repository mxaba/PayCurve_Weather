import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'
import Error from '@/components/Error/Error.vue'

const routes: Array<RouteRecordRaw> = [
   { path: '/', component: Home},
    {path: '/register', component: Register},
    {path: '/error', component: Error},
    {path: '/login', component: Login}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
