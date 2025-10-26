<script setup>
    import { ref } from 'vue'
    import { Navigation, Pagination, Autoplay } from 'swiper/modules'
    import { Swiper, SwiperSlide } from 'swiper/vue'

    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/autoplay';

    const modules = [Navigation, Pagination, Autoplay];

    const slides = ref([
        'https://via.assets.so/img.jpg?w=1920&h=500&gradient=linear-gradient%28135deg%2C+%230093E9%2C+%2380D0C7%2C+%2323a6d5%2C+%2323d5ab%29&text=lorem+ipsum&f=png',
        'https://via.assets.so/img.jpg?w=1920&h=500&gradientFrom=f093fb&gradientTo=f5576c&gradientAngle=135&text=lorem+ipsum&f=png',
        'https://via.assets.so/img.jpg?w=1920&h=500&gradientFrom=667eea&gradientTo=764ba2&gradientAngle=135&text=lorem+ipsum&f=png',
    ]);
</script>
<template>
    <div id="inicio" ref="inicio" class="section">
        <swiper
            :modules="modules"
            :slides-per-view="1"
            :space-between="0"
            navigation
            :pagination="{ clickable: true }"
            loop
            autoplay
            id="main-slider"
        >
            <template v-for="(slide, index) in slides" :key="index">
                <swiper-slide>
                    <img :src="slide" width="1920" height="1080" class="block w-full h-auto" />
                </swiper-slide>
            </template>
        </swiper>
    </div>
</template>