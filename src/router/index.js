import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CheckResults from '../views/CheckResults.vue'

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/consulta-resultados', name: 'consulta-resultados', component: CheckResults },
]

export default createRouter({
    history: createWebHistory(),
    routes,
})
