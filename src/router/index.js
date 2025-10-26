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
    scrollBehavior(to, from, savedPosition) {
        // Si el usuario presiona "atrás" o "adelante", conserva la posición
        if (savedPosition) {
            return savedPosition
        } else {
            // Siempre vuelve al inicio al cambiar de ruta
            return { top: 0, left: 0, behavior: 'smooth' }
        }
    },
})
