<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import { contactInfo, siteName, socials } from "../data/items"
  import facebookIcon from "../components/icons/facebook.vue"
  import instagramIcon from "../components/icons/instagram.vue"
  import tiktokIcon from "../components/icons/tiktok.vue"
  import whatsappIcon from "../components/icons/whatsapp.vue"
  import menuIcon from "../components/icons/menu.vue"
  import closeIcon from "../components/icons/close.vue"
  import Menu from "../components/Menu.vue"
  const logo = "/src/assets/images/logo.png"

  const isOpen = ref(false)
  const isSticky = ref(false)

  const toggleSidebar = () => (isOpen.value = !isOpen.value)
  const closeSidebar = () => (isOpen.value = false)
  const header = ref(null);

  const handleScroll = () => {
    isSticky.value = window.scrollY < header.value.clientHeight ? false : true;
  }

  onMounted(() => {
    window.addEventListener("scroll", handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll)
  })
</script>

<template>
  <header ref="header" class="sticky top-0 left-0 w-full z-50 bg-white overflow-hidden transitioning after:hidden after:md:block after:content-[''] after:absolute after:w-full after:left-0 after:translate-x-1/4 after:bg-primary after:top-0 after:transitioning" :class="isSticky ? 'shadow-lg after:h-0' : 'after:h-12'">
    <div class="container mx-auto px-4 flex flex-row items-center gap-6 py-3 md:pt-0 transitioning" :class="isSticky ? 'md:pb-4' : 'md:pb-6 md:items-end'">
      <a href="/">
        <img :src="logo" :alt="siteName" width="162" height="144" class="w-auto transitioning" :class="isSticky ? 'h-12 md:h-16 lg:h-20 xl:h-20 2xl:h-24 md:mt-4' : 'h-16 md:h-20 lg:h-28 xl:h-32 2xl:h-36'">
      </a>

      <div class="relative z-10 flex flex-col md:w-3/4 ml-auto transitioning">
        <div class="hidden md:flex items-center justify-between gap-4 transitioning" :class="isSticky ? 'py-0 h-0 overflow-hidden' : 'py-3 h-auto'">
          <a :href="'tel:' + contactInfo.whatsapp" class="group flex items-center gap-3 font-montserrat text-white font-medium transitioning hover:text-secondary">
            <whatsappIcon class="size-5 text-tertiary transitioning group-hover:text-secondary" />
            {{ contactInfo.whatsapp }}
          </a>

          <div class="flex items-center gap-4">
            <span class="font-montserrat text-white">Síguenos:</span>
            <a :href="socials.facebook" target="_blank" class="text-tertiary transitioning hover:text-secondary">
              <facebookIcon class="size-5" />
            </a>
            <a :href="socials.facebook" target="_blank" class="text-tertiary transitioning hover:text-secondary">
              <instagramIcon class="size-5" />
            </a>
            <a :href="socials.facebook" target="_blank" class="text-tertiary transitioning hover:text-secondary">
              <tiktokIcon class="size-5" />
            </a>
          </div>
        </div>

        <div class="flex flex-row items-center justify-end transitioning" :class="isSticky ? 'md:mt-4' : 'lg:mt-8'">
          <ul class="menu hidden xl:flex flex-row items-center gap-x-10 2xl:gap-x-12">
            <Menu />
          </ul>

          <div class="flex items-center xl:hidden">
            <button class="p-2 rounded-full transitioning" :class="isOpen ? 'bg-primary text-dark' : 'text-primary bg-transparent'" @click="toggleSidebar">
              <menuIcon v-if="!isOpen" />
              <closeIcon v-if="isOpen" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <transition 
      name="overlay"
      enter-active-class="transition-transform duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-transform duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="isOpen" class="bg-black/4 fixed w-full h-full top-0 left-0" @click="toggleSidebar"></div>
    </transition>

    <transition 
      name="slide"
      enter-active-class="transition-transform duration-300"
      enter-from-class="translate-x-full opacity-0"
      enter-to-class="translate-x-0 opacity-100"
      leave-active-class="transition-transform duration-300"
      leave-from-class="translate-x-0 opacity-100"
      leave-to-class="translate-x-full opacity-0"
    >
      <ul id="sidebar"
        class="menu fixed flex flex-col gap-3 sm:gap-4 xl:gap-10 xl:hidden pt-12 pb-8 px-6 md:px-8 end-0 bottom-0 bg-primary shadow-lg z-20 w-9/12 sm:w-6/12 lg:w-4/12 overflow-hidden overflow-y-auto transitioning"
        :class="isSticky ? 'top-[72px] md:top-[88px] lg:top-[104px]' : 'top-[88px] md:top-[144px] lg:top-[144px]'"
        x-cloak
        v-if="isOpen"
      >
          <Menu />
      </ul>
    </transition>
  </header>
</template>
