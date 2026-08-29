<template>
  <div class="min-h-screen" style="background:var(--color-bg);color:var(--color-text)">
    <MagneticCursor />
    <ProjectHead />
    <slot />
    <ContactSticky />
    <ScrollTop />
  </div>
</template>

<script setup>
import MagneticCursor from '@/components/broadsheet/MagneticCursor.vue'
import ProjectHead from '@/components/broadsheet/ProjectHead.vue'
import ContactSticky from '@/components/broadsheet/ContactSticky.vue'
import ScrollTop from '@/components/broadsheet/ScrollTop.vue'

const { initNight } = useNightEdition()
onMounted(() => initNight())
</script>
