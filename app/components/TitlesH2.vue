<template>
    <section>
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-700 dark:text-white mb-4 titles-with-blue-color" v-html="props.title"></h2>
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
});
</script>
<style scoped>

.titles-with-blue-color :deep(span) {
  color: #304fff;
}
</style>