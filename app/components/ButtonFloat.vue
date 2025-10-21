<template>
    <section>
    <button
      class="fixed bottom-6 right-0 bg-blue-600 text-white p-4 rounded-l-lg shadow-lg hover:bg-blue-700 transition z-index-50 flex items-center space-x-2"
      @click="scrollToTop"
      aria-label="Scroll to top"
    >
        Conectemos
    </button>
    </section>
</template>
<script setup>
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>