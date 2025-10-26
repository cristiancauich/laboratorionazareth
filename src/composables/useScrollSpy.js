import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

/**
 * useScrollSpy(options)
 * - selector: selector de secciones ('.section')
 * - rootMargin: ajuste para compensar header
 * - threshold: IntersectionObserver threshold
 * - observeMutations: si true, usa MutationObserver para detectar cuando aparecen secciones (default true)
 */
export function useScrollSpy({
	selector = '.section',
	rootMargin = '-80px 0px -40% 0px',
	threshold = 0.5,
	observeMutations = true
} = {}) {
	const activeId = ref(null)
	let io = null
	let mo = null
	let observedIds = []

	const createObserver = (sections) => {
		destroyObserver()

		io = new IntersectionObserver((entries) => {
			// Selecciona la sección más visible
			const visible = entries
				.filter(e => e.isIntersecting)
				.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

			if (visible) {
				activeId.value = visible.target.id || null
			} else {
				activeId.value = null
			}

			/*console.log('Visible:', entries.map(e => ({
				id: e.target.id,
				ratio: e.intersectionRatio,
				visible: e.isIntersecting
			})))*/
		}, { root: null, rootMargin, threshold })


		sections.forEach(s => io.observe(s))
		observedIds = sections.map(s => s.id)
		//console.log('[scrollspy] observing', observedIds)
	}

	const destroyObserver = () => {
		if (io) {
			io.disconnect()
			io = null
		}
	}

	const refresh = async () => {
		// espera un tick para que el DOM se estabilice
		await nextTick()
		const sections = Array.from(document.querySelectorAll(selector)).filter(el => el.id)

		if (!sections.length) {
			// console.warn('[scrollspy] no sections found yet')
			destroyObserver()
			return
		}

		// si ya estamos observando las mismas ids, no reiniciar
		const ids = sections.map(s => s.id).join('|')
		if (observedIds.join('|') === ids && io) {
			return
		}

		createObserver(sections)
	}

	// Observa mutaciones en el body para detectar cuando se agregan secciones dinámicamente
	const startMutationObserver = () => {
		if (!observeMutations || typeof MutationObserver === 'undefined') return
		
		mo = new MutationObserver((mutations) => {
			// una heurística simple: cuando se agreguen nodos, intentar refresh()
			const added = mutations.some(m => m.addedNodes && m.addedNodes.length)
			
			if (added) {
				// debounce simple
				setTimeout(() => refresh(), 80)
			}
		})

		mo.observe(document.body, { childList: true, subtree: true })
	}

	const stopMutationObserver = () => {
		if (mo) {
			mo.disconnect()
			mo = null
		}
	}

	onMounted(() => {
		// inicializa tras nextTick (espera render inicial)
		refresh()
		startMutationObserver()
	})

	onBeforeUnmount(() => {
		destroyObserver()
		stopMutationObserver()
	})

	return { activeId, refresh, destroy: destroyObserver }
}
