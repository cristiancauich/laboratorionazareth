<script setup>
	import Slider from "../components/Slider.vue";
	import Marquee from "../components/Marquee.vue";
	import AnalysisSearch from "../components/AnalysisSearch.vue";
	import Packs from "../components/Packs.vue";
	import Banner from "../components/Banner.vue";
	import Contact from "../components/Contact.vue";
	import Slogan from "../components/Slogan.vue";
</script>

<template>
	<Slider />
	<Marquee />
	<AnalysisSearch />
	<Packs />
	<Banner />
	<Contact />
	<Slogan />
	<router-view />
</template>
