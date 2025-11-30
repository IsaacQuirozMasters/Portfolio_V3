<template>
  <header
    :class="[
      'sticky top-0 z-50 transition-all duration-300 mb-4',
      isScrolled ? 'bg-white dark:bg-gray-900 shadow-md' : 'bg-white/95 dark:bg-gray-900/95',
    ]"
  >
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <div>
          <h1 class="text-lg font-semibold dark:text-white">Isaac Quiroz</h1>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Diseñador UI/UX y Desarrollador Web
          </p>
        </div>
        <div class="flex items-center gap-4">
          <button @click="toggleTheme" class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <Icon v-if="isDark" name="ph:sun-bold" class="w-6 h-6 text-yellow-500" />
            <Icon v-else name="ph:moon-bold" class="w-6 h-6 text-gray-700" />
          </button>
          <button class="md:hidden">
            <Icon name="ph:list-bold" class="w-6 h-6 text-black-100 dark:text-white" />
          </button>
        </div>
        <nav class="flex w-[50%] hidden md:flex">
          <ul class="flex flex-row w-full gap-6 justify-end mr-12">
            <li v-for="(internRoute, index) in internRoutes" :key="index">
              <button 
                v-if="internRoute.section"
                @click="scrollToSection(internRoute.section)"
                class="text-sm text-black-100 dark:text-gray-200 hover:text-[#304fff] dark:hover:text-[#304fff] transition-colors cursor-pointer"
              >
                {{ internRoute.name }}
              </button>
              <NuxtLink 
                v-else
                :to="internRoute.route" 
                class="text-sm text-black-100 dark:text-gray-200 hover:text-[#304fff] dark:hover:text-[#304fff] transition-colors"
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
const { isDark, toggleTheme, initTheme } = useTheme();

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
  initTheme();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>