<template>
  <button
    v-magnet
    type="button"
    class="btn btn-secondary scroll-top"
    :class="{ 'is-visible': visible }"
    :aria-label="$t('common.scrollTop')"
    @click="scrollToTop"
  >
    <span aria-hidden="true">↑</span>
  </button>
</template>

<script setup>
const visible = ref(false)
let ticking = false

const updateVisible = () => {
  visible.value = window.scrollY > window.innerHeight * 0.5
}

const onScroll = () => {
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => {
    updateVisible()
    ticking = false
  })
}

onMounted(() => {
  updateVisible()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => window.removeEventListener('scroll', onScroll))

const scrollToTop = () => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' })
}
</script>

<style scoped>
.scroll-top {
  position: fixed;
  z-index: 55;
  left: var(--space-8);
  bottom: var(--space-4);
  width: 38px;
  height: 38px;
  padding: 0;
  font-size: 16px;
  background: var(--color-bg);
  opacity: 0;
  pointer-events: none;
  transform: translateY(8px);
  transition: opacity 0.25s cubic-bezier(.2,.8,.2,1), transform 0.25s cubic-bezier(.2,.8,.2,1);
}
.scroll-top.is-visible {
  opacity: 1;
  pointer-events: auto;
  transform: none;
}

@media (max-width: 768px) {
  .scroll-top { left: var(--space-4); bottom: var(--space-4); }
}

@media (prefers-reduced-motion: reduce) {
  .scroll-top { transition: opacity 0.15s ease; }
}
</style>
