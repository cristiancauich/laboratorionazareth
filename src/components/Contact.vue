<script setup>
    import { ref, onMounted, onBeforeUnmount } from 'vue'
    import Parallax from 'parallax-js'
    import { contactInfo, socials } from "../data/items"
    import ContactForm from './ContactForm.vue'
    import facebookIcon from "./icons/facebook.vue"
    import instagramIcon from "./icons/instagram.vue"
    import tiktokIcon from "./icons/tiktok.vue"
    import whatsappIcon from './icons/whatsapp.vue'
    import clockIcon from './icons/clock.vue'
    import locationIcon from './icons/location.vue'

    const bgImage = '/src/assets/images/bgs/contact.jpg';
    const cellImage = '/src/assets/images/cell.png';

    const scene = ref(null)
    let parallaxInstance = null

    onMounted(() => {
        // Inicializa Parallax.js
        parallaxInstance = new Parallax(scene.value, {
            relativeInput: true, // se mueve con el mouse
            hoverOnly: false,    // también funciona con giroscopio en móviles
        })
    })

    onBeforeUnmount(() => {
        // Limpia la instancia para evitar fugas de memoria
        if (parallaxInstance) {
            parallaxInstance.destroy()
        }
    })
</script>

<template>
    <div id="contacto" ref="contacto" class="section py-12 md:py-20 xl:py-24 bg-white bg-cover md:bg-contain lg:bg-cover md:bg-center" :style="{ backgroundImage: `url(${bgImage})` }">
        <div class="container mx-auto px-4">
            <div class="w-full md:w-10/12 xl:w-7/12 mx-auto mb-6 md:mb-8 xl:mb-10">
                <h4 class="font-bold text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl text-secondary text-center mb-6" data-aos="fade-up" data-aos-delay="0">
                    <span class="block text-transparent bg-gradient-to-r from-secondary to-primary bg-clip-text">Estamos aquí para atenderte</span>
                </h4>

                <p class="font-montserrat text-sm lg:text-base text-center" data-aos="fade-up" data-aos-delay="100">
                    ¿Tienes alguna duda o necesitas agendar un estudio?  Completa el siguiente formulario y nuestro equipo se pondrá en contacto contigo a la brevedad.  También puedes escribirnos directamente por llamada, WhatsApp o visitarnos en nuestras instalaciones.
                </p>
            </div>

            <div class="w-full xl:w-10/12 xl:mx-auto grid grid-cols-1 md:grid-cols-10">
                <div class="md:col-span-6 md:col-start-5" data-aos="fade-up" data-aos-delay="200">
                    <ContactForm />
                </div>

                <div class="md:col-span-1 md:col-start-4 md:row-start-1">
                    <div class="h-px w-full my-6 md:h-full md:w-px md:my-0 md:mx-auto lg:mx-0 bg-gray"></div>
                </div>

                <div class="md:col-span-3 md:col-start-1 md:row-start-1" data-aos="fade-up" data-aos-delay="300">
                    <div class="font-bold text-xl md:text-2xl xl:text-3xl text-secondary mb-6">Contacto directo</div>

                    <div class="font-medium text-base md:text-xl xl:text-2xl text-secondary mb-4">WhatsApp</div>

                    <div class="flex flex-row items-center gap-3 mb-3">
                        <whatsappIcon class="text-primary" />
                        <a :href="`https://wa.me/${contactInfo.whatsapp1.replace(/\s/g, '')}`" target="_blank" class="text-secondary link-underline transitioning hover:text-primary">{{ contactInfo.whatsapp1 }}</a>
                    </div>
                    <div class="flex flex-row items-center gap-3">
                        <whatsappIcon class="text-primary" />
                        <a :href="`https://wa.me/${contactInfo.whatsapp2.replace(/\s/g, '')}`" target="_blank" class="text-secondary link-underline transitioning hover:text-primary">{{ contactInfo.whatsapp2 }}</a>
                    </div>

                    <div class="font-medium text-base md:text-xl xl:text-2xl text-secondary mt-6 mb-4">Redes sociales</div>

                    <div class="flex flex-row gap-3">
                        <a :href="socials.facebook" target="_blank" class="group relative size-14 flex items-center justify-center border-2 border-primary rounded-full text-primary transitioning hover:bg-primary hover:text-white">
                            <facebookIcon class="size-5" />
                            <span class="absolute inline-block -bottom-4 left-1/2 -translate-x-1/2 bg-black/75 py-1 px-2 opacity-0 scale-50 rounded font-medium text-xs text-white transitioning group-hover:opacity-100 group-hover:scale-95 group-hover:-bottom-8 after:content-[''] after:border-4 after:border-transparent after:border-b-black/75 after:absolute after:top-0 after:left-1/2 after:-translate-x-1/2 after:-translate-y-full">Facebook</span>
                        </a>

                        <a :href="socials.instagram" target="_blank" class="group relative size-14 flex items-center justify-center border-2 border-primary rounded-full text-primary transitioning hover:bg-primary hover:text-white">
                            <instagramIcon class="size-5" />
                            <span class="absolute inline-block -bottom-4 left-1/2 -translate-x-1/2 bg-black/75 py-1 px-2 opacity-0 scale-50 rounded font-medium text-xs text-white transitioning group-hover:opacity-100 group-hover:scale-95 group-hover:-bottom-8 after:content-[''] after:border-4 after:border-transparent after:border-b-black/75 after:absolute after:top-0 after:left-1/2 after:-translate-x-1/2 after:-translate-y-full">Instagram</span>
                        </a>

                        <a :href="socials.tiktok" target="_blank" class="group relative size-14 flex items-center justify-center border-2 border-primary rounded-full text-primary transitioning hover:bg-primary hover:text-white">
                            <tiktokIcon class="size-5" />
                            <span class="absolute inline-block -bottom-4 left-1/2 -translate-x-1/2 bg-black/75 py-1 px-2 opacity-0 scale-50 rounded font-medium text-xs text-white transitioning group-hover:opacity-100 group-hover:scale-95 group-hover:-bottom-8 after:content-[''] after:border-4 after:border-transparent after:border-b-black/75 after:absolute after:top-0 after:left-1/2 after:-translate-x-1/2 after:-translate-y-full">TikTok</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container mx-auto px-4 pb-12 md:pb-20 xl:pb-24">
        <div class="relative w-full xl:w-10/12 xl:mx-auto grid grid-cols-1 md:grid-cols-10 gap-6" data-aos="fade-up" data-aos-delay="300">
            <div ref="scene" class="absolute inset-0 pointer-events-none">
                <div data-depth="0.6"  data-invert-x="false" data-invert-y="false" class="w-full h-full">
                    <div class="absolute top-0 left-0 -translate-y-2/3 -translate-x-1/3 hidden md:block w-36 2xl:w-48">
                        <img :src="cellImage" alt="Célula laboratorio" width="190" height="181" class="w-36 2xl:w-48 h-auto" />
                    </div>
                </div>
                
                <div data-depth="0.1"  data-invert-x="false" data-invert-y="true" class="w-full h-full">
                    <div class="absolute bottom-0 left-[80%] -translate-y-1/3 xl:-translate-y-1/4 2xl:-translate-y-1/3 -translate-x-2/3 hidden lg:block w-32 2xl:w-36">
                        <img :src="cellImage" alt="Célula laboratorio" width="144" height="140" class="w-32 2xl:w-36 h-auto" />
                    </div>
                </div>
                
                <div data-depth="0.3"  data-invert-x="true" data-invert-y="true" class="w-full h-full">
                    <div class="absolute -top-1/4 md:top-20 2xl:top-24 left-3/4 md:left-auto md:right-0 md:-translate-y-2/3 xl:-translate-y-1/3 md:translate-x-1/3 2xl:translate-x-1/2 2xl:-translate-y-1/2 w-20">
                        <img :src="cellImage" alt="Célula laboratorio" width="88" height="85" class="w-20 h-auto" />
                    </div>
                </div>
            </div>

            <div class="md:col-span-5 lg:w-64 xl:w-72 2xl:w-80 lg:aspect-square flex flex-col gap-6 px-6 py-8 md:p-6 xl:p-8 rounded-2xl bg-primary shadow-lg relative z-10 lg:absolute lg:right-0 lg:top-0 lg:translate-y-1/4">
                <locationIcon class="size-10 md:size-12 xl:size-14 text-tertiary" />

                <div class="font-bold text-xl md:text-2xl xl:text-3xl text-white">Ubicación</div>
                
                <p class="font-montserrat text-base xl:text-lg text-white">
                    Segundo piso, interior de la Clínica Nazareth, Avenida Revolución, Supermanzana 76, CP 77527, Cancún, Q.R.
                </p>
            </div>

            <div class="md:col-span-10 lg:col-span-6 lg:col-start-3 aspect-square md:aspect-video lg:aspect-square rounded-2xl overflow-hidden">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7440.219818720474!2d-86.8285854576496!3d21.187792372006392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2d6b3013c471%3A0x798def209a32baba!2sLaboratorio%20de%20An%C3%A1lisis%20Cl%C3%ADnicos%20Nazareth!5e0!3m2!1ses-419!2smx!4v1761335055912!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="w-full h-full"></iframe>
            </div>

            <div class="md:col-span-5 md:col-start-6 md:row-start-1 lg:col-start-auto lg:row-start-auto lg:w-64 xl:w-72 2xl:w-80 lg:aspect-square flex flex-col gap-6 px-6 py-8 md:p-6 xl:p-8 rounded-2xl bg-secondary shadow-lg lg:absolute lg:left-0 lg:bottom-0 lg:-translate-y-1/4">
                <clockIcon class="size-10 md:size-12 xl:size-14 text-tertiary" />

                <div class="font-bold text-xl md:text-2xl xl:text-3xl text-white">Horarios</div>
                
                <ul class="list-disc pl-4 font-montserrat text-base xl:text-lg text-white">
                    <li>Lunes a Viernes de 7 am a 9 pm</li>
                    <li>Sábados de 7 am a 4 pm</li>
                    <li>Domingos abierto las 24 horas</li>
                </ul>
            </div>
        </div>
    </div>
</template>