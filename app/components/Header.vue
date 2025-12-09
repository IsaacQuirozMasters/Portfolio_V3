<template>
  <header :class="[
    'sticky top-0 z-50 transition-all duration-300 mb-4 pb-2 ',
    isScrolled ? 'bg-white dark:bg-gray-900 shadow-md' : 'bg-white/95 dark:bg-gray-900/95',
  ]">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <NuxtLink to="/">
          <h1 class="text-lg font-semibold dark:text-white">{{ $t('header.name') }}</h1>
          <p class="text-sm text-gray-600 dark:text-gray-400 hidden md:block">
            {{ $t('header.subtitle') }}
          </p>
        </NuxtLink>
        <div class="flex items-center justify-center gap-4">
          <button @click="toggleTheme"
            class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <Icon v-if="isDark" name="ph:sun-bold" class="w-6 h-6 text-yellow-500" />
            <Icon v-else name="ph:moon-bold" class="w-6 h-6 text-gray-700" />
          </button>
          <LanguageSwitcher />
          <button class="md:hidden" @click="toggleMenu" aria-label="Toggle menu"
            v-if="currentRoute == '/' || currentRoute == '/en' || currentRoute == '/es' || currentRoute == '/pt'">
            <Icon v-if="isMenuOpen" name="ph:x-bold" class="w-6 h-6 text-black-100 dark:text-white" />
            <Icon v-else name="ph:list-bold" class="w-6 h-6 text-black-100 dark:text-white" />
          </button>

          <!-- Mobile Menu Dropdown -->
          <div
            v-show="isMenuOpen && (currentRoute == '/' || currentRoute == '/en' || currentRoute == '/es' || currentRoute == '/pt')"
            class="absolute top-16 left-0  w-full bg-white dark:bg-gray-900 shadow-md p-4 flex flex-col gap-4 md:hidden border-t dark:border-gray-800 transition-all duration-300 z-40">
            <ul class="flex flex-col w-full gap-4">
              <li v-for="(internRoute, index) in internRoutes" :key="index" class="w-full">
                <button v-if="internRoute.section" @click="scrollToSection(internRoute.section)"
                  class="w-full text-left py-2 text-sm text-black-100 dark:text-gray-200 hover:text-[#304fff] dark:hover:text-[#304fff] transition-colors cursor-pointer block">
                  {{ $t(internRoute.nameKey) }}
                </button>
                <NuxtLink v-else :to="internRoute.route" @click="closeMenu"
                  class="w-full text-left py-2 text-sm text-black-100 dark:text-gray-200 hover:text-[#304fff] dark:hover:text-[#304fff] transition-colors block">
                  {{ $t(internRoute.nameKey) }}
                </NuxtLink>
              </li>
            </ul>
          </div>


          <nav class="flex w-auto hidden md:flex"
            v-if="currentRoute == '/' || currentRoute == '/en' || currentRoute == '/es' || currentRoute == '/pt'">
            <div class="w-px h-6 bg-gray-200 dark:bg-gray-700 mx-2"></div>
            <ul class="flex flex-row w-full gap-6 justify-end mr-12">
              <li v-for="(internRoute, index) in internRoutes" :key="index">
                <button v-if="internRoute.section" @click="scrollToSection(internRoute.section)"
                  class="text-sm text-black-100 dark:text-gray-200 hover:text-[#304fff] dark:hover:text-[#304fff] transition-colors cursor-pointer">
                  {{ $t(internRoute.nameKey) }}
                </button>
                <NuxtLink v-else :to="internRoute.route"
                  class="text-sm text-black-100 dark:text-gray-200 hover:text-[#304fff] dark:hover:text-[#304fff] transition-colors">
                  {{ $t(internRoute.nameKey) }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);
const { isDark, toggleTheme, initTheme } = useTheme();
const route = useRoute();
const currentRoute = computed(() => route.path);
const internRoutes = ref([
  {
    nameKey: 'header.nav.home',
    route: '/',
    section: 'main'
  },
  {
    nameKey: 'header.nav.about',
    section: 'about'
  },
  {
    nameKey: 'header.nav.projects',
    section: 'projects'
  }
]);

// Mobile Menu State
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

// Función de scroll integrada en el componente
const scrollToSection = (sectionId) => {
  closeMenu(); // Close menu on selection
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