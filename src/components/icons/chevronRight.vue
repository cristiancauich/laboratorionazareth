<script setup>
    defineProps({
        size: {
            type: Number,
            default: 24,
        },
        class: {
            type: String,
            default: 'size-6',
        },
    });
</script>
<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" :width="size" :height="size" :class="class">
        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
</template>