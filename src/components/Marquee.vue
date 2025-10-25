<script setup>
    import { ref, onMounted, onBeforeUnmount, nextTick, computed } from 'vue'

    const props = defineProps({
        speed: { type: Number, default: 40 },
    })

    const container = ref(null)
    const track = ref(null)
    const slotContent = ref(null)

    let rafId = null
    let lastTime = null
    const offset = ref(0)
    let contentWidth = 0

    const trackStyle = computed(() => ({
        transform: `translateX(${-offset.value}px)`,
        display: 'flex',
        alignItems: 'center',
    }))

    function step(time) {
        if (!lastTime) lastTime = time
        const delta = time - lastTime
        lastTime = time

        if (contentWidth > 0) {
            const pxToMove = (props.speed * delta) / 1000
            offset.value += pxToMove

            if (offset.value >= contentWidth) {
                offset.value -= contentWidth
            }
        }

        rafId = requestAnimationFrame(step)
    }

    onMounted(async () => {
        await nextTick()
        const slotEl = slotContent.value
        const trackEl = track.value

        if (!slotEl || !trackEl) return

        if (slotEl.children.length === 0 && slotEl.textContent.trim() === '') return

        const originalHTML = slotEl.innerHTML
        trackEl.innerHTML = `
            <div class="marquee-items inline-flex font-bold text-base md:text-lg xl:text-xl 2xl:text-2xl text-secondary whitespace-nowrap uppercase mr-2">${originalHTML}</div>
            <div class="marquee-items inline-flex font-bold text-base md:text-lg xl:text-xl 2xl:text-2xl text-secondary whitespace-nowrap uppercase mr-2">${originalHTML}</div>
        `

        const firstBlock = trackEl.children[0]
        contentWidth = firstBlock.scrollWidth

        if (contentWidth === 0) {
            await new Promise((r) => setTimeout(r, 50))
            contentWidth = firstBlock.scrollWidth || 0
        }

        rafId = requestAnimationFrame(step)
    })

    onBeforeUnmount(() => {
        if (rafId) cancelAnimationFrame(rafId)
    })
</script>

<template>
    <div
        ref="container"
        class="marquee overflow-hidden w-full bg-tertiary py-3 lg:py-4 xl:py-6"
    >
        <div ref="track" class="marquee-track will-change-transform" :style="trackStyle">
            <div ref="slotContent" class="marquee-items inline-flex font-bold text-base md:text-lg xl:text-xl 2xl:text-2xl text-secondary whitespace-nowrap uppercase mr-2">
                QUÍMICA SANGUÍNEA  *  HORMONALES  *  CUIDADO DEL EMBARAZO  *  ENFERMEDADES DE TRANSMISIÓN SEXUAL  *  CUIDADO GASTROINTESTINAL * CUIDADO CARDIOVASCULAR * MARCADORES TUMORALES * 
            </div>
        </div>
    </div>
</template>