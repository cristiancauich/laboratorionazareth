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
            title: 'QUIMICA SANGUINEA 6 ELEMENTOS',
            old_price: null,
            price: '$330.00',
            description: null,
            items: [
                'GLUCOSA',
                'UREA',
                'CREATININA',
                'COLESTEROL',
                'TRIGLICERIDOS',
                'ACIDO URICO',
            ],
            color: '#95D7D3',
            image: '/src/assets/images/packs/2148205058.jpg',
        },
        {
            title: 'PERFIL GINECOLOGICO 1',
            old_price: null,
            price: '$1,500.00',
            description: null,
            items: [
                'PROLACTINA',
                'PROGESTERONA',
                'ESTRADIOL',
                'TESTOSTERONA',
                'HORMONA LUTEINIZANTE (LH)',
                'HORMONA FOLÍCULO ESTIMULANTE (FSH)',
            ],
            color: null,
            image: '/src/assets/images/packs/2147927809.jpg',
        },
        {
            title: 'PERFIL CARDIACO (TRIAGE)',
            old_price: null,
            price: '$2,700.00',
            description: null,
            items: [
                'TROPONINA I (CUANTITATIVA)',
                'MIOGLOBINA (CUANTITATIVA)',
                'CK-MB CREATINA FOSFOQUINASA FRACCIÓN MB',
            ],
            color: null,
            image: '/src/assets/images/packs/2148227104.jpg',
        },
        {
            title: 'PERFIL TIROIDEO + FT3',
            old_price: null,
            price: '$900.00',
            description: null,
            items: [
                'TU CAPTACIÓN',
                'T3 TOTAL (TRIYODOTIRONINA)',
                'T4 TOTAL (TIROXINA)',
                'YODO PROTEÍCO (IP)',
                'ÍNDICE DE TIROXINA LIBRE (ITL)',
                'T3 TOTAL (TRIYODOTIRONINA LIBRE)',
            ],
            color: '#fff7ed',
            image: '/src/assets/images/packs/2148227022.jpg',
        },
        {
            title: 'PERFIL HORMONAL FEMENINO',
            old_price: null,
            price: '$1,740.00',
            description: null,
            items: [
                'TU CAPTACIÓN',
                'T3 TOTAL (TRIYODOTIRONINA)',
                'T4 TOTAL (TIROXINA)',
                'YODO PROTEÍCO (IP)',
                'ÍNDICE DE TIROXINA LIBRE (ITL)',
                'HORMONA ESTIMULANTE DE TIROIDES (TSH)',
                'HORMONA LUTEINIZANTE (LH)',
                'HORMONA FOLÍCULO ESTIMULANTE (FSH)',
                'PROLACTINA',
                'PROGESTERONA',
                'ESTRADIOL (E2)',
                'TESTOSTERONA',
            ],
            color: '#e6e4ff',
            image: '/src/assets/images/packs/2148205046.jpg',
        },
        {
            title: 'PERFIL HORMONAL MASCULINO',
            old_price: null,
            price: '$1,740.00',
            description: null,
            items: [
                'TU CAPTACIÓN',
                'T3 TOTAL (TRIYODOTIRONINA)',
                'T4 TOTAL (TIROXINA)',
                'YODO PROTEÍCO (IP)',
                'ÍNDICE DE TIROXINA LIBRE (ITL)',
                'HORMONA ESTIMULANTE DE TIROIDES (TSH)',
                'HORMONA LUTEINIZANTE (LH)',
                'HORMONA FOLÍCULO ESTIMULANTE (FSH)',
                'PROLACTINA',
                'PROGESTERONA',
                'CORTISOL',
                'TESTOSTERONA',
            ],
            color: '#9adde8',
            image: '/src/assets/images/packs/18.jpg',
        },
        {
            title: 'MARCADORES TUMORALES',
            old_price: null,
            price: '$1,560.00',
            description: null,
            items: [
                'CA-125',
                'CA-15.3',
                'ALFAFETOPROTEINA',
            ],
            color: null,
            image: '/src/assets/images/packs/2147875896.jpg',
        },
        {
            title: 'PAPANICOLAU',
            old_price: null,
            price: '$690.00',
            description: 'El Papanicolau sirve para detectar no sólo las células pre-cancerosas, cancerosas e inflamación. Requisitos para realizarse este estudio:',
            descriptionItems: [
                'No estar en periodo menstrual',
                'No haber tenido relaciones sexuales 2 días antes',
                'Debe acudir al examen previo baño diario',
                'No realizarse duchas intravaginales 2 días antes',
                'No aplicarse óvulos o cremas vaginales 2 días antes a la prueba.'
            ],
            items: null,
            color: null,
            image: '/src/assets/images/packs/2148227107.jpg',
        },
    ]);
</script>
<template>
    <div id="paquetes" ref="paquetes" class="py-12 md:py-20 xl:py-24 bg-white">
        <div class="container mx-auto px-4">
            <div class="w-full md:w-10/12 xl:w-7/12 mx-auto mb-8 md:mb-12 xl:mb-16">
                <h2 class="font-bold text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl text-secondary text-center mb-6">
                    <span class="block text-transparent bg-gradient-to-r from-secondary to-primary bg-clip-text">Paquetes de análisis</span>
                </h2>

                <p class="font-montserrat text-sm lg:text-base text-center">
                    Explora nuestras opciones de estudios diseñadas para cada necesidad. Desde checkups básicos hasta análisis especializados, encuentra el paquete ideal para cuidar tu salud con precisión y confianza.
                </p>
            </div>

            <swiper
                :modules="modules"
                :slides-per-view="1"
                :space-between="20"
                :pagination="{
                    clickable: true,
                    el: '.packs-slider-pag'
                }"
                :breakpoints="{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 28,
                    },
                    1280: {
                        slidesPerView: 3,
                        spaceBetween: 36,
                    },
                }"
                :navigation="{
                    nextEl: '.packs-slider-next',
                    prevEl: '.packs-slider-prev',
                }"
                loop
                id="packs-slider"
            >
                <template v-for="(item, index) in items" :key="index">
                    <swiper-slide class="!h-auto mb-4">
                        <div class="relative h-full bg-white rounded-2xl shadow-lg bg-cover bg-left overflow-hidden" :style="{ backgroundImage: `url(${item.image})` }">
                            <div v-if="item.color" class="absolute w-full h-full top-0 left-0 opacity-50" :style="{ backgroundColor: item.color }"></div>

                            <div class="relative h-full z-10 flex flex-col items-start gap-6 md:gap-6 px-4 md:px-8 xl:px-10 py-10 md:py-12 xl:py-14">
                                <div class="w-10/12 font-bold text-xl md:text-2xl lg:text-2xl xl:text-3xl text-secondary uppercase md:min-h-16">
                                    {{ item.title }}
                                </div>

                                <span v-if="item.old_price" class="bg-tertiary py-[1px] md:py-1 px-1 md:px-2 rounded-full font-montserrat font-semibold text-xs text-secondary absolute right-4 md:right-8 xl:right-10 top-10 md:top-12 xl:top-14 shadow-md">PROMO</span>

                                <div class="flex flex-col justify-center gap-1 min-h-14 md:min-h-16">
                                    <span v-if="item.old_price" class="font-montserrat text-dark-gray text-xs md:text-base line-through">
                                        {{ item.old_price }}
                                    </span>
                                    <span class="font-montserrat font-semibold text-secondary text-xl md:text-3xl">
                                        {{ item.price }}
                                    </span>
                                </div>

                                <div class="flex flex-col gap-4 font-montserrat font-medium text-secondary text-xs lg:text-sm">
                                    <p v-if="item.description">{{ item.description }}</p>

                                    <ul class="list-disc pl-4" v-if="item.descriptionItems">
                                        <li v-for="option in item.descriptionItems">
                                            {{ option }}
                                        </li>
                                    </ul>

                                    <p v-if="item.items">Incluye:</p>

                                    <ul class="list-disc pl-4" v-if="item.items">
                                        <li v-for="option in item.items">
                                            {{ option }}
                                        </li>
                                    </ul>
                                </div>

                                <div class="flex flex-row items-center gap-4 xl:gap-6 mt-auto">
                                    <a href="#" class="py-2 md:py-3 px-6 md:px-8 bg-secondary rounded-full font-semibold text-tertiary transitioning hover:bg-tertiary hover:text-secondary hover:shadow-md">
                                        Agendar
                                    </a>

                                    <a href="#" class="font-medium text-secondary text-sm md:text-base text-center underline underline-offset-4 transitioning hover:text-tertiary">
                                        Ver detalles
                                    </a>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                </template>
            </swiper>

            <div class="flex items-center justify-center gap-6 mt-4" style="--swiper-theme-color: #06A8BF;">
                <div class="packs-slider-prev size-10 lg:size-12 bg-light-gray rounded-full text-primary flex items-center justify-center cursor-pointer transitioning hover:bg-primary hover:text-white">
                    <chevronLeftIcon />
                </div>

                <div class="!w-auto packs-slider-pag"></div>

                <div class="packs-slider-next size-10 lg:size-12 bg-light-gray rounded-full text-primary flex items-center justify-center cursor-pointer transitioning hover:bg-primary hover:text-white">
                    <chevronRightIcon />
                </div>
            </div>
        </div>
    </div>
</template>