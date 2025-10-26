<script setup>
    import searchFileIcon from "../components/icons/searchFile.vue"

    const props = defineProps({
        activeId: String
    })

    const emit = defineEmits(['menuClick', 'routeClick'])
</script>

<template>
    <li>
        <a 
            href="#inicio" 
            @click="(e) => emit('menuClick', e, '#inicio')"
            class="xl:link-underline after:hidden xl:after:block block px-4 py-2 lg:py-3 xl:p-0 rounded-md font-medium text-lg text-white xl:text-black transitioning xl:hover:text-primary"
            :class="{ active: activeId === 'inicio' }"
        >
            Inicio
        </a>
    </li>
    <li>
        <a 
            href="#analisis-clinicos" 
            @click="(e) => emit('menuClick', e, '#analisis-clinicos')"
            class="xl:link-underline after:hidden xl:after:block block px-4 py-2 lg:py-3 xl:p-0 rounded-md font-medium text-lg text-white xl:text-black transitioning xl:hover:text-primary"
            :class="{ active: activeId === 'analisis-clinicos' }"
        >
            Análisis clínicos
        </a>
    </li>
    <li>
        <a 
            href="#paquetes-de-analisis"
            @click="(e) => emit('menuClick', e, '#paquetes-de-analisis')"
            class="xl:link-underline after:hidden xl:after:block block px-4 py-2 lg:py-3 xl:p-0 rounded-md font-medium text-lg text-white xl:text-black transitioning xl:hover:text-primary"
            :class="{ active: activeId === 'paquetes-de-analisis' }"
        >
            Paquetes de análisis
        </a>
    </li>
    <li>
        <a 
            href="#contacto"
            @click="(e) => emit('menuClick', e, '#contacto')"
            class="xl:link-underline after:hidden xl:after:block block px-4 py-2 lg:py-3 xl:p-0 rounded-md font-medium text-lg text-white xl:text-black transitioning xl:hover:text-primary"
            :class="{ active: activeId === 'contacto' }"
        >
            Contáctanos
        </a>
    </li>
    <li>
        <RouterLink 
            to="/consulta-resultados" 
            class="group relative overflow-hidden flex md:gap-3 py-3 px-6 rounded-full bg-tertiary xl:bg-gradient-to-r xl:from-primary xl:to-secondary after:content-[''] after:absolute after:w-full after:h-full after:top-0 after:left-0 after:-translate-x-full after:bg-secondary xl:after:bg-primary after:opacity-0 after:transitioning hover:after:opacity-100 hover:after:translate-x-0"
            @click="$emit('routeClick')"
        >
            <div class="w-full relative z-10 flex items-center justify-center text-center xl:text-start gap-2 font-medium text-sm md:text-base text-secondary xl:text-white uppercase transitioning group-hover:text-tertiary">
                <searchFileIcon class="flex-none size-6 md:size-10" />
                Consulta tus <br class="hidden md:inline"/>resultados aquí
            </div>
        </RouterLink>
    </li>
</template>