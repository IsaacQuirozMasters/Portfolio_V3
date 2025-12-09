<template>
  <section>
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 titles-with-blue-color"
        v-html="props.title"></h1>
      <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 rounded-md subtitle-with-underline"
        v-html="props.subtitle"></p>
    </div>
  </section>
</template>
<script setup>

const props = defineProps({
  title: {
    type: String,
  },
  subtitle: {
    type: String,
  },
});
</script>
<style scoped>
.subtitle-with-underline :deep(u),
.subtitle-with-underline :deep(span) {
  text-decoration: underline;
  text-decoration-color: #304fff;
  /* blue-500 */
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
}

.titles-with-blue-color :deep(span) {
  color: #304fff;
}
</style>