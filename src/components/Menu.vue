<script setup>
    import searchFileIcon from "../components/icons/searchFile.vue"
</script>

<template>
    <li>
        <a href="/#inicio" class="menu-item xl:link-underline after:hidden xl:after:block block px-4 py-2 lg:py-3 xl:p-0 rounded-md font-medium text-lg text-white xl:text-black transitioning hover:text-primary active">
            Inicio
        </a>
    </li>
    <li>
        <a href="/#analisis" class="menu-item xl:link-underline after:hidden xl:after:block block px-4 py-2 lg:py-3 xl:p-0 rounded-md font-medium text-lg text-white xl:text-black transitioning hover:text-primary">
            Análisis clínicos
        </a>
    </li>
    <li>
        <a href="/#promociones" class="menu-item xl:link-underline after:hidden xl:after:block block px-4 py-2 lg:py-3 xl:p-0 rounded-md font-medium text-lg text-white xl:text-black transitioning hover:text-primary">
            Promociones
        </a>
    </li>
    <li>
        <a href="/#paquetes" class="menu-item xl:link-underline after:hidden xl:after:block block px-4 py-2 lg:py-3 xl:p-0 rounded-md font-medium text-lg text-white xl:text-black transitioning hover:text-primary">
            Paquetes
        </a>
    </li>
    <li>
        <a href="/#contactanos" class="menu-item xl:link-underline after:hidden xl:after:block block px-4 py-2 lg:py-3 xl:p-0 rounded-md font-medium text-lg text-white xl:text-black transitioning hover:text-primary">
            Contáctanos
        </a>
    </li>
    <li>
        <a href="/#inicio" class="group relative overflow-hidden flex md:gap-3 py-3 px-6 rounded-full bg-gradient-to-r from-primary to-secondary after:content-[''] after:absolute after:w-full after:h-full after:top-0 after:left-0 after:-translate-x-full after:bg-primary after:opacity-0 after:transitioning hover:after:opacity-100 hover:after:translate-x-0">
            <div class="relative z-10 flex items-center justify-center gap-2 font-medium text-white uppercase transitioning group-hover:text-tertiary">
                <searchFileIcon class="size-6 md:size-10" />
                Consulta tus <br class="hidden md:inline"/>resultados aquí
            </div>
        </a>
    </li>
</template>