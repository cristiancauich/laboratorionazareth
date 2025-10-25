import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

// Inicializa AOS globalmente
app.mixin({
    mounted() {
        // Evita múltiples inicializaciones
        if (!this.$aosInitialized) {
            AOS.init({
                duration: 800,
                easing: 'slide',
                once: true
            })
            this.$aosInitialized = true
        }
    },
    updated() {
        // Refresca AOS si el DOM cambia dinámicamente
        AOS.refresh()
    },
})

app.use(router).mount('#app')