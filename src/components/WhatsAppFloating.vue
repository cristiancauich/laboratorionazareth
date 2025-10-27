<script setup>
    import { contactInfo } from "../data/items"
    import whatsappIcon from "../components/icons/whatsapp.vue"
</script>

<template>
    <div class="fixed z-50 bottom-4 xl:bottom-8 right-4 xl:right-8">
        <a
            :href="`https://wa.me/${contactInfo.whatsapp2.replace(/\s/g, '')}`"
            target="_blank"
            class="peer relative size-12 md:size-16 bg-whatsapp text-white flex items-center justify-center rounded-full shadow-md transitioning hover:shadow-lg"
        >
            <whatsappIcon class="size-6 md:size-8" />
        </a>
        <span class="hidden lg:block absolute top-1/2 right-full mr-3 -translate-y-1/2 bg-black/75 py-1 px-2 opacity-0 scale-50 rounded font-medium text-xs text-white whitespace-nowrap transitioning peer-hover:opacity-100 peer-hover:scale-100 after:content-[''] after:border-4 after:border-transparent after:border-l-black/75 after:absolute after:top-1/2 after:left-full after:-translate-y-1/2">Escríbenos en WhatsApp</span>
    </div>
</template>
