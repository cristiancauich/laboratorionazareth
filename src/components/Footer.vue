<script setup>
	import { ref, onMounted, onUnmounted } from 'vue'
	import { useRouter, useRoute } from 'vue-router'
	import { useScrollSpy } from '../composables/useScrollSpy'

	import { contactInfo, socials, siteName } from "../data/items"
	import facebookIcon from "./icons/facebook.vue"
	import instagramIcon from "./icons/instagram.vue"
	import tiktokIcon from "./icons/tiktok.vue"
	import whatsappIcon from "./icons/whatsapp.vue"
	import locationIcon from "./icons/location.vue"

	const logo = "/src/assets/images/logo.png"
	const header = ref(null)
  	let headerHeight = 80

	const handleScroll = () => {
		if (header.value) {
			headerHeight = header.value.clientHeight
		}
	}

	const router = useRouter()
	const route = useRoute()

	const handleMenuClick = (event, href) => {
		event.preventDefault()

		if (route.name === 'home') {
			scrollToSection(href)
		} else {
			router.push('/').then(() => {
				setTimeout(() => scrollToSection(href), 300)
			})
		}
	}

	const scrollToSection = (href) => {
		const sectionId = href.startsWith('#') ? href : new URL(href).hash
		const section = document.querySelector(sectionId)
		if (section) {
			window.scrollTo({
				top: section.offsetTop - headerHeight + 16,
				behavior: 'smooth'
			})
		}
	}

	// --- ScrollSpy usando el composable
	const { activeId } = useScrollSpy({
		selector: '.section',
		rootMargin: `-${headerHeight}px 0px -40% 0px`,
		threshold: 0.5
	})

	onMounted(() => {
		if (header.value) {
			headerHeight = header.value.clientHeight
		}

		window.addEventListener('scroll', handleScroll)
	})

	onUnmounted(() => {
		window.removeEventListener('scroll', handleScroll)
	})
</script>

<template>
	<footer class="py-12 md:py-20 xl:py-24 bg-secondary text-white">
		<div class="container mx-auto px-4">
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-8">
				<div class="md:col-span-2 lg:col-span-1">
					<div class="w-full md:w-1/2 lg:w-full md:mx-auto lg:mx-0">
						<img :src="logo" :alt="siteName" width="162" height="144" class="w-auto h-24 md:h-28 xl:h-32 2xl:h-36 mx-auto lg:mx-0">

						<p class="text-center lg:text-start mt-4 lg:text-sm xl:text-base">
							Somos un laboratorio de análisis clínicos comprometidos con la salud y el bienestar de nuestros pacientes.
						</p>
					</div>
				</div>

				<div class="flex flex-col items-center lg:items-start gap-6 xl:gap-8">
					<div class="font-medium text-lg md:text-xl xl:text-2xl text-primary">Enlaces directos</div>

					<div class="flex flex-col items-center lg:items-start gap-3 xl:gap-4">
						<a href="#analisis-clinicos" @click="(e) => handleMenuClick(e, '#analisis-clinicos')" class="link-underline font-montserrat text-white font-medium transitioning hover:text-primary">
							Análisis clínicos
						</a>

						<a href="#promociones" @click="(e) => handleMenuClick(e, '#promociones')" class="link-underline font-montserrat text-white font-medium transitioning hover:text-primary">
							Promociones
						</a>

						<a href="#paquetes" @click="(e) => handleMenuClick(e, '#paquetes')" class="link-underline font-montserrat text-white font-medium transitioning hover:text-primary">
							Paquetes
						</a>

						<RouterLink 
							to="/consulta-resultados" 
							class="link-underline font-montserrat text-white font-medium transitioning hover:text-primary"
						>
							Consulta resultados
						</RouterLink>

						<a href="#contacto" @click="(e) => handleMenuClick(e, '#contacto')" class="link-underline font-montserrat text-white font-medium transitioning hover:text-primary">
							Contacto
						</a>
                    </div>
				</div>

				<div class="flex flex-col items-center lg:items-start gap-6 xl:gap-8">
					<div class="font-medium text-lg md:text-xl xl:text-2xl text-primary">Contáctanos</div>

					<div class="flex flex-col gap-3 xl:gap-4">
						<div class="flex justify-center lg:justify-start gap-3">
							<locationIcon class="size-5 text-primary mt-1 flex-none" />

							<p class="font-montserrat text-white font-medium text-center lg:text-start">
								{{ contactInfo.address }}
							</p>
						</div>

                        <div class="flex justify-center lg:justify-start gap-3">
							<whatsappIcon class="size-5 text-primary flex-none" />

							<a :href="`https://wa.me/${contactInfo.whatsapp1.replace(/\s/g, '')}`" target="_blank" class="link-underline font-montserrat text-white font-medium transitioning hover:text-primary">
								{{ contactInfo.whatsapp1 }}
							</a>
						</div>

                        <div class="flex justify-center lg:justify-start gap-3">
							<whatsappIcon class="size-5 text-primary flex-none" />

							<a :href="`https://wa.me/${contactInfo.whatsapp2.replace(/\s/g, '')}`" target="_blank" class="link-underline font-montserrat text-white font-medium transitioning hover:text-primary">
								{{ contactInfo.whatsapp2 }}
							</a>
						</div>
                    </div>
				</div>

				<div class="md:col-span-2 lg:col-span-1 flex flex-col items-center lg:items-start gap-6 xl:gap-8">
					<div class="font-medium text-lg md:text-xl xl:text-2xl text-primary">Redes sociales</div>

					<div class="flex flex-row justify-center lg:justify-start gap-3">
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
	</footer>
</template>
