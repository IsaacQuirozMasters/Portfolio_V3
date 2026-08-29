<template>
  <a
    v-magnet
    class="btn btn-primary contact-sticky"
    :style="{ '--contact-progress': progress }"
    :href="whatsappHref"
    target="_blank"
    rel="noopener"
  >
    {{ $t('common.contactMe') }}
  </a>
</template>

<script setup>
const progress = ref(0)
let ticking = false

const updateProgress = () => {
  const max = window.innerHeight * 0.7
  progress.value = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
}

const onScroll = () => {
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => {
    updateProgress()
    ticking = false
  })
}

onMounted(() => {
  updateProgress()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => window.removeEventListener('scroll', onScroll))

const WHATSAPP_NUMBER = '529985242217'
const whatsappHref = computed(() => {
  const message = encodeURIComponent('¡Hola! Vi tu portafolio y me gustaría platicar sobre un proyecto.')
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
})
</script>

<style scoped>
.contact-sticky {
  position: fixed;
  z-index: 55;
  right: var(--space-8);
  top: calc((8 + 42 * var(--contact-progress, 0)) * 1vh);
  transform: translateY(calc(-50% * var(--contact-progress, 0)));
  transition: top 0.15s linear, transform 0.15s linear;
}

@media (max-width: 768px) {
  .contact-sticky {
    right: var(--space-4);
    top: auto;
    bottom: calc(88vh - (88vh - 20px) * var(--contact-progress, 0));
    transform: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .contact-sticky { transition: none; }
}
</style>
