<template>
  <header
    :class="[
      'sticky top-0 z-50 transition-all duration-300 mb-4',
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
        <button class="md:hidden">
          <Icon name="ph:list-bold" class="w-6 h-6 text-black-100" />
        </button>
        <nav class="flex w-[50%]">
          <ul class="flex flex-row w-full gap-6 justify-end mr-12">
            <li v-for="(internRoute, index) in internRoutes" :key="index">
              <button 
                v-if="internRoute.section"
                @click="scrollToSection(internRoute.section)"
                class="text-sm text-black-100 hover:text-[#304fff] transition-colors cursor-pointer"
              >
                {{ internRoute.name }}
              </button>
              <NuxtLink 
                v-else
                :to="internRoute.route" 
                class="text-sm text-black-100 hover:text-[#304fff] transition-colors"
              >
                {{ internRoute.name }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);

const internRoutes = ref([
  {
    name: 'Inicio',
    route: '/',
    section: 'main'
  },
  {
    name: 'About Me',
    section: 'about'
  },
  {
    name: 'Projects',
    section: 'projects'
  },
  {
    name: 'Contact Me',
    section: 'contact'
  },
]);

// Función de scroll integrada en el componente
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  
  if (element) {
    const headerOffset = 80; // altura del header sticky
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

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