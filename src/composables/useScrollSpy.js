import { ref, onMounted, onBeforeUnmount } from 'vue'

/**
 * useScrollSpy(options)
 * options:
 *  - selector: CSS selector para las secciones (default: '.section')
 *  - rootMargin: para ajustar el umbral (ej. `-80px 0px 0px 0px`)
 *  - threshold: valor o array (default: 0.5)
 */
export function useScrollSpy({ selector = '.section', rootMargin = '-80px 0px -40% 0px', threshold = 0.5 } = {}) {
	const activeId = ref(null)
	let observer = null


	const onIntersect = (entries) => {
		// Elegimos la entrada más visible (mayor intersectionRatio)
		let visible = entries
			.filter(e => e.isIntersecting)
			.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

		if (visible) {
			activeId.value = visible.target.id || null
		} else {
			// Si ninguna está intersectando, podríamos mantener el anterior o limpiar
			activeId.value = null
		}

		console.log('Intersecting:', entries.map(e => ({ id: e.target.id, visible: e.isIntersecting })))
	}

	onMounted(() => {
		const sections = Array.from(document.querySelectorAll(selector))
			.filter(el => el.id) // solo considerar secciones con id
		if (!sections.length) return

		observer = new IntersectionObserver(onIntersect, {
			root: null,
			rootMargin,
			threshold
		})

		sections.forEach(s => observer.observe(s))

		

		console.log('Observed sections:', sections)
	})

	onBeforeUnmount(() => {
		if (observer) observer.disconnect()
	})

	return { activeId }
}
