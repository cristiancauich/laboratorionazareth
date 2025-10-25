<script setup>
	import { onMounted } from "vue";
	import Header from "./components/Header.vue";
	import Footer from "./components/Footer.vue";

	onMounted(() => {
        window.addEventListener('load', () => {
			document.body.classList.add('loaded')
			const loader = document.getElementById('loader')
			if (loader) loader.remove()
		})
    })
</script>

<template>
	<Header />

	<router-view />

	<Footer />
</template>
