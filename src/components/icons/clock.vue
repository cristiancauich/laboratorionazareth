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
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
</template>
