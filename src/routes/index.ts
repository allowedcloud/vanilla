import Home from '../views/Home.vue'
import About from '../views/About.vue'

export const routes = [
    {
        name: 'Home',
        component: Home,
        path: '/',
    },
    {
        name: 'About',
        component: About,
        path: '/about'
    }
]

export default routes