<script setup>
    const bgImage = '/src/assets/images/bgs/banner.jpg';
</script>
<template>
    <div class="container mx-auto px-4">
        <div class="px-6 md:px-8 xl:px-12 2xl:px-16 py-10 md:py-12 xl:py-16 bg-white bg-cover bg-[35%] md:bg-center lg:bg-left-bottom rounded-2xl"  :style="{ backgroundImage: `url(${bgImage})` }">
            <div class="w-full md:w-8/12 xl:w-7/12 2xl:w-6/12 flex flex-col items-start gap-6">
                <h3 class="font-bold text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl text-white leading-[115%]" data-aos="fade-up" data-aos-delay="0">
                    <span class="text-tertiary">Consulta</span> tus resultados
                    <span class="block text-transparent bg-gradient-to-r from-white to-primary bg-clip-text leading-[115%]">en línea, fácil y seguro</span>
                </h3>

                <p class="font-montserrat text-base xl:text-lg text-white" data-aos="fade-up" data-aos-delay="200">
                    Accede a tus resultados desde cualquier lugar y en cualquier momento. Nuestro sistema en línea te permite visualizar y descargar tus análisis de forma rápida y confidencial.
                </p>

                <RouterLink 
                    to="/consulta-resultados" 
                    class="inline-block py-2 md:py-3 px-6 md:px-8 bg-tertiary rounded-full font-semibold text-secondary transitioning hover:bg-primary hover:text-white hover:shadow-md"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    Ver mis resultados
                </RouterLink>
            </div>
        </div>
    </div>
</template>