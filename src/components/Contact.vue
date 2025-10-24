<script setup>
    import { contactInfo, siteName, socials } from "../data/items"
    import ContactForm from './ContactForm.vue'
    import facebookIcon from "./icons/facebook.vue";
    import instagramIcon from "./icons/instagram.vue";
    import tiktokIcon from "./icons/tiktok.vue";
    import whatsappIcon from './icons/whatsapp.vue'

    const bgImage = '/src/assets/images/bgs/contact.jpg';
</script>

<template>
    <div class="py-12 md:py-20 xl:py-24 bg-white bg-cover" :style="{ backgroundImage: `url(${bgImage})` }">
        <div class="container mx-auto px-4">
            <div class="w-full md:w-10/12 xl:w-7/12 mx-auto mb-6 md:mb-8 xl:mb-10">
                <h4 class="font-bold text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl text-secondary text-center mb-6">
                    <span class="block text-transparent bg-gradient-to-r from-secondary to-primary bg-clip-text">Estamos aquí para atenderte</span>
                </h4>

                <p class="font-montserrat text-sm lg:text-base text-center">
                    ¿Tienes alguna duda o necesitas agendar un estudio?  Completa el siguiente formulario y nuestro equipo se pondrá en contacto contigo a la brevedad.  También puedes escribirnos directamente por llamada, WhatsApp o visitarnos en nuestras instalaciones.
                </p>
            </div>

            <div class="w-full xl:w-10/12 xl:mx-auto grid grid-cols-1 md:grid-cols-10">
                <div class="md:col-span-6 md:col-start-5">
                    <ContactForm />
                </div>

                <div class="md:col-span-1 md:col-start-4 md:row-start-1">
                    <div class="h-px w-full my-6 md:h-full md:w-px md:my-0 md:mx-auto lg:mx-0 bg-gray"></div>
                </div>

                <div class="md:col-span-3 md:col-start-1 md:row-start-1">
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
</template>