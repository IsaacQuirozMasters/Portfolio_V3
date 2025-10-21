<template>
     <header
    :class="[
      'sticky top-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-white shadow-md' : 'bg-white/95',
    ]"
  >
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <div>
          <h1 class="text-lg font-semibold">Isaac Quiroz</h1>
          <p class="text-sm text-gray-600">
            Diseñador UI/UX y Desarrollador Web
          </p>
        </div>
        <button>
          <Icon name="ph:list-bold" class="w-6 h-6 text-black-100" />
        </button>
      </div>
    </div>
  </header>
</template>

  <script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>