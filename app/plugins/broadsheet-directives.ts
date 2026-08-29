import type { Directive } from 'vue'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

// v-reveal="{ delay: 80 }" — fades/rises an element in once it crosses the
// viewport threshold. Reduced motion skips the observer and the translate,
// keeping only a short fade (handled in CSS via .reveal under the media query).
const vReveal: Directive<HTMLElement, { delay?: number } | number | undefined> = {
  mounted(el, binding) {
    const raw = binding.value
    const delay = typeof raw === 'number' ? raw : raw?.delay ?? 0
    el.style.setProperty('--reveal-delay', `${delay}ms`)
    el.classList.add('reveal')

    if (prefersReducedMotion()) {
      el.classList.add('is-visible')
      return
    }

    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        el.classList.add('is-visible')
        io.unobserve(el)
      }
    }, { threshold: 0.15 })
    io.observe(el)
  },
}

// v-dot-screen — the newsprint halftone over a photo that opens up to
// reveal the image once it scrolls into view.
const vDotScreen: Directive<HTMLElement> = {
  mounted(el) {
    el.classList.add('dot-screen')
    if (prefersReducedMotion()) {
      el.classList.add('is-resolved')
      return
    }
    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        el.classList.add('is-resolved')
        io.unobserve(el)
      }
    }, { threshold: 0.35 })
    io.observe(el)
  },
}

const cleanups = new WeakMap<HTMLElement, () => void>()

const vMagnet: Directive<HTMLElement> = {
  mounted(el) {
    const { registerTarget } = useMagneticCursor()
    cleanups.set(el, registerTarget(el))
  },
  unmounted(el) {
    cleanups.get(el)?.()
    cleanups.delete(el)
  },
}

const vMagnetScope: Directive<HTMLElement> = {
  mounted(el) {
    const { registerScope } = useMagneticCursor()
    cleanups.set(el, registerScope(el))
  },
  unmounted(el) {
    cleanups.get(el)?.()
    cleanups.delete(el)
  },
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', vReveal)
  nuxtApp.vueApp.directive('dot-screen', vDotScreen)
  nuxtApp.vueApp.directive('magnet', vMagnet)
  nuxtApp.vueApp.directive('magnet-scope', vMagnetScope)
})
