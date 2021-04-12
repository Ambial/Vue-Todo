import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About'
import Home from '../views/Home'

//each route is an object with a path
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'about',
        component: About,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), routes,
})

export default router