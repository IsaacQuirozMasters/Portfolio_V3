<template>
  <div
    ref="containerRef"
    class="relative overflow-hidden rounded-[var(--radius-md)]"
    style="aspect-ratio:3/4; background:var(--color-surface)"
  >
    <img
      :src="currentImage"
      :alt="alt || 'Face tracking cursor'"
      class="block h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.2,.8,.2,1)] hover:scale-[1.03]"
      style="object-position:50% 18%"
      @error="handleError"
    >
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  alt?: string
  basePath?: string
}>()

const P_MIN = -15
const P_MAX = 15
const STEP = 3
const SIZE = 256
const base = props.basePath || '/faces/'

const containerRef = ref<HTMLElement | null>(null)
const currentImage = ref<string>(`${base}gaze_px0p0_py0p0_${SIZE}.webp`)

function quantizeToGrid(val: number) {
  const raw = P_MIN + ((val + 1) * (P_MAX - P_MIN)) / 2
  const snapped = Math.round(raw / STEP) * STEP
  return Math.max(P_MIN, Math.min(P_MAX, snapped))
}

function sanitizeVal(val: number) {
  const str = (Math.round(val * 10) / 10).toFixed(1)
  return str.replace('-', 'm').replace('.', 'p')
}

function gridToFilename(px: number, py: number) {
  return `gaze_px${sanitizeVal(px)}_py${sanitizeVal(py)}_${SIZE}.webp`
}

function updateGaze(clientX: number, clientY: number) {
  if (!containerRef.value) return

  const rect = containerRef.value.getBoundingClientRect()
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2

  const rangeX = Math.max(300, window.innerWidth / 2)
  const rangeY = Math.max(300, window.innerHeight / 2)

  const nx = (clientX - centerX) / rangeX
  const ny = (centerY - clientY) / rangeY

  const clampedX = Math.max(-1, Math.min(1, nx))
  const clampedY = Math.max(-1, Math.min(1, ny))

  const px = quantizeToGrid(clampedX)
  const py = quantizeToGrid(clampedY)

  const filename = gridToFilename(px, py)
  currentImage.value = `${base}${filename}`
}

function handleMouseMove(e: MouseEvent) {
  updateGaze(e.clientX, e.clientY)
}

function handleTouchMove(e: TouchEvent) {
  if (e.touches.length > 0) {
    const touch = e.touches[0]
    updateGaze(touch.clientX, touch.clientY)
  }
}

function handleError() {
  currentImage.value = '/group.png'
}

function preloadFaceImages() {
  for (let py = P_MIN; py <= P_MAX; py += STEP) {
    for (let px = P_MIN; px <= P_MAX; px += STEP) {
      const img = new Image()
      img.src = `${base}${gridToFilename(px, py)}`
    }
  }
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove, { passive: true })
  window.addEventListener('touchmove', handleTouchMove, { passive: true })
  preloadFaceImages()
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('touchmove', handleTouchMove)
})
</script>
