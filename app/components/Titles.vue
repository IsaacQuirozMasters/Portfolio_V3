<template>
    <section>
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4 titles-with-blue-color" v-html="props.title"></h1>
        <p class="text-lg md:text-xl text-gray-600 rounded-md subtitle-with-underline" v-html="props.subtitle"></p>
      </div>
    </section>
</template>
<script setup>

const props = defineProps({
  title: {
    type: String,
    required: true,
    default: ''
  },
  subtitle: {
    type: String,
    required: false,
    default: ''
  },
});
</script>
<style scoped>
.subtitle-with-underline :deep(u) {
  text-decoration: underline;
  text-decoration-color: #304fff; /* blue-500 */
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
}

.titles-with-blue-color :deep(span) {
  color: #304fff;
}
</style>