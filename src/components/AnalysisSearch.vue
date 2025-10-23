<script setup>
    import { ref } from 'vue'
    import { Navigation, Pagination, Autoplay } from 'swiper/modules'
    import { Swiper, SwiperSlide } from 'swiper/vue'
    import chevronLeftIcon from '../components/icons/chevronLeft.vue'
    import chevronRightIcon from '../components/icons/chevronRight.vue'

    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/autoplay';

    const modules = [Navigation, Pagination, Autoplay];

    const items = ref([
        {
            title: 'Química sanguinea de 50 elementos',
            old_price: '$850.00',
            price: '$599.00',

        },
        {
            title: 'Hormona estimulante de tiroides',
            old_price: null,
            price: '$299.00',

        },
        {
            title: 'Copro parasitoscopía 1A muestra',
            old_price: null,
            price: '$99.00',

        },
        {
            title: 'Calprotectina + Lactoferrina (cualitativo)',
            old_price: '$899.00',
            price: '$799.00',

        },
        {
            title: 'Química sanguinea de 50 elementos',
            old_price: '$850.00',
            price: '$599.00',

        },
        {
            title: 'Hormona estimulante de tiroides',
            old_price: null,
            price: '$299.00',

        },
        {
            title: 'Copro parasitoscopía 1A muestra',
            old_price: null,
            price: '$99.00',

        },
        {
            title: 'Calprotectina + Lactoferrina (cualitativo)',
            old_price: '$899.00',
            price: '$799.00',

        },
    ]);
</script>
<template>
    <div class="py-12 md:py-20 xl:py-24 bg-[url(/src/assets/images/bgs/analysis-search.jpg)] bg-cover bg-center">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-12 items-center gap-6 mb-8 md:mb-12 xl:mb-16">
                <div class="md:col-span-6 xl:col-span-5 xl:col-start-2 flex justify-center md:justify-start">
                    <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl text-secondary">
                        Busca aquí tus
                        <span class="block text-transparent bg-gradient-to-r from-secondary to-primary bg-clip-text ml-12 xl:ml-28">Análisis Clíncos</span>
                    </h1>
                </div>

                <div class="md:col-span-5 xl:col-span-4 md:col-start-8 xl:col-start-9">
                    <label for="search_analysis" class="inline-block font-montserrat font-medium mb-1">Buscar análisis</label>
                    <input type="text" class="w-full bg-white py-3 px-4 rounded-lg border border-light-gray outline-none font-montserrat placeholder:text-dark-grey transitioning focus:border-primary" placeholder="Escribe aquí...">
                </div>
            </div>

            <swiper
                :modules="modules"
                :slides-per-view="2"
                :space-between="16"
                :pagination="{
                    clickable: true,
                    el: '.analysis-slider-pag'
                }"
                :breakpoints="{
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 28,
                    },
                    992: {
                        slidesPerView: 4,
                        spaceBetween: 32,
                    },
                    1280: {
                        slidesPerView: 5,
                        spaceBetween: 36,
                    },
                }"
                :navigation="{
                    nextEl: '.analysis-slider-next',
                    prevEl: '.analysis-slider-prev',
                }"
                loop
                id="analysis-slider"
            >
                <template v-for="(item, index) in items" :key="index">
                    <swiper-slide>
                        <div class="flex flex-col items-center justify-center gap-4 md:gap-8 px-4 md:px-6 py-8 md:py-10 bg-white rounded-2xl shadow-lg mb-4">
                            <div class="font-semibold text-base md:text-xl text-primary text-center min-h-[72px] md:min-h-[84px]">
                                {{ item.title }}
                            </div>

                            <span v-if="item.old_price" class="bg-tertiary py-[1px] md:py-1 px-1 md:px-2 rounded-full font-montserrat font-semibold text-xs text-secondary absolute top-3 -right-3 shadow-md">PROMO</span>

                            <div class="flex flex-col items-center justify-center gap-1 min-h-16">
                                <span v-if="item.old_price" class="font-montserrat text-dark-gray text-xs md:text-base line-through">
                                    {{ item.old_price }}
                                </span>
                                <span class="font-montserrat font-semibold text-secondary text-xl md:text-3xl">
                                    {{ item.price }}
                                </span>
                            </div>

                            <div class="flex flex-col items-center gap-4">
                                <a href="#" class="font-medium text-primary text-sm md:text-base text-center underline underline-offset-4 transitioning hover:text-secondary">
                                    Ver detalles
                                </a>

                                <a href="#" class="py-2 md:py-3 px-6 md:px-8 bg-secondary rounded-full font-semibold text-tertiary transitioning hover:bg-tertiary hover:text-secondary hover:shadow-md">
                                    Agendar
                                </a>
                            </div>
                        </div>
                    </swiper-slide>
                </template>
            </swiper>

            <div class="flex items-center justify-center gap-6 mt-4" style="--swiper-theme-color: #06A8BF;">
                <div class="analysis-slider-prev size-10 lg:size-12 bg-white rounded-full text-primary flex items-center justify-center cursor-pointer transitioning hover:bg-primary hover:text-white">
                    <chevronLeftIcon />
                </div>

                <div class="!w-auto analysis-slider-pag"></div>

                <div class="analysis-slider-next size-10 lg:size-12 bg-white rounded-full text-primary flex items-center justify-center cursor-pointer transitioning hover:bg-primary hover:text-white">
                    <chevronRightIcon />
                </div>
            </div>
        </div>
    </div>
</template>