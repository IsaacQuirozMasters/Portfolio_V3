<template>
  <div ref="el" class="magnet-cursor">
    <span class="magnet-cursor__ring" />
    <span class="magnet-cursor__v" />
    <span class="magnet-cursor__h" />
  </div>
</template>

<script setup>
const { cursorEl } = useMagneticCursor()
const el = ref(null)

onMounted(() => { cursorEl.value = el.value })
onUnmounted(() => { if (cursorEl.value === el.value) cursorEl.value = null })
</script>
