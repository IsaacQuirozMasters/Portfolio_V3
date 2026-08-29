<template>
  <div class="cmyk-num" :style="{ fontSize, fontWeight }">
    <span class="paper">{{ value }}</span>
    <span class="plate plate-c" aria-hidden="true">{{ value }}</span>
    <span class="plate plate-m" aria-hidden="true">{{ value }}</span>
    <span class="plate plate-y" aria-hidden="true">{{ value }}</span>
  </div>
</template>

<script setup>
defineProps({
  value: { type: [String, Number], required: true },
  fontSize: { type: String, default: '64px' },
  fontWeight: { type: [String, Number], default: 600 },
})
</script>
