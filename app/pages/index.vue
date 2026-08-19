<template>
  <ButtonFloat />
  <ButtonsSections :current-section="currentSection" @update:current-section="val => currentSection = val" />
  <main>
    <section id="main" ref="mainRef" aria-label="Introducción">
      <Titles :title="$t('home.hero.title')" :subtitle="$t('home.hero.subtitle')" />
      <BubbleImgs />
    </section>
    <section id="projects" ref="projectsRef" aria-label="Portafolio de Proyectos">
      <Titles v-if="currentSection === 'Diseñador UX/UI'" :title="$t('home.projects.title')"
        :subtitle="$t('home.projects.subtitleUX')" />
      <Titles v-else :title="$t('home.projects.title')" :subtitle="$t('home.projects.subtitleDev')" />
      <Carrousel v-if="currentSection === 'Diseñador UX/UI'" :items="carouselItems" />
      <Carrousel v-else :items="carrouselItemsDevelopment" />
    </section>
    <div class="h-[1px] w-3/4 mx-auto bg-gray-200 dark:bg-gray-700"></div>
    <section id="about" ref="aboutRef" aria-label="Sobre mí y Experiencia" class="pt-12">
      <Titles :title="$t('home.about.title')" :subtitle="$t('home.about.subtitle')" />
      <!-- Experience Cards Grid -->
      <div class="w-full max-w-7xl mx-auto mt-12 md:mt-16 mb-24 px-4 sm:px-6 lg:px-8">
        <!-- UX/UI Section (4 cards) -->
        <div v-if="currentSection === 'Diseñador UX/UI'" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(place, index) in projects" :key="index"
            class="group flex flex-col bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl hover:border-blue-500/40 dark:hover:border-blue-400/40 transition-all duration-300 overflow-hidden hover:-translate-y-1">

            <!-- Card Header with Image -->
            <div class="h-36 bg-cover bg-center relative overflow-hidden"
              :style="{ backgroundImage: `url(${place.bgImage})` }">
              <div class="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/40 to-transparent group-hover:scale-105 transition-transform duration-500"></div>
              <div class="absolute bottom-3 left-4 right-4 text-white flex items-center space-x-3">
                <div class="p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-sm flex items-center justify-center">
                  <Icon :name="place.icon" size="24px" class="text-white drop-shadow" />
                </div>
                <h3 class="font-bold text-lg drop-shadow tracking-tight truncate">{{ place.site }}</h3>
              </div>
            </div>

            <!-- Card Body -->
            <div class="p-5 flex-1 flex flex-col justify-between bg-white dark:bg-gray-800">
              <ul class="space-y-2 text-sm">
                <li v-for="(project, pIndex) in place.projects" :key="pIndex">
                  <a v-if="project.src" :href="project.src" target="_blank" rel="noopener noreferrer"
                    class="group/link flex items-center justify-between py-1.5 px-2.5 -mx-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/60 dark:hover:bg-gray-700/60 transition-all">
                    <span class="truncate font-medium">{{ project.title }}</span>
                    <Icon name="ph:arrow-up-right" size="14px" class="opacity-0 group-hover/link:opacity-100 transition-opacity ml-1.5 flex-shrink-0 text-blue-500" />
                  </a>
                  <div v-else class="flex items-center py-1.5 px-2.5 -mx-2.5 text-gray-600 dark:text-gray-400 font-medium">
                    <span class="truncate">{{ project.title }}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Development Section (2 cards centered) -->
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div v-for="(place, index) in projectsDevelopment" :key="index"
            class="group flex flex-col bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl hover:border-blue-500/40 dark:hover:border-blue-400/40 transition-all duration-300 overflow-hidden hover:-translate-y-1">

            <!-- Card Header with Image -->
            <div class="h-36 bg-cover bg-center relative overflow-hidden"
              :style="{ backgroundImage: `url(${place.bgImage})` }">
              <div class="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/40 to-transparent group-hover:scale-105 transition-transform duration-500"></div>
              <div class="absolute bottom-3 left-4 right-4 text-white flex items-center space-x-3">
                <div class="p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-sm flex items-center justify-center">
                  <Icon :name="place.icon" size="24px" class="text-white drop-shadow" />
                </div>
                <h3 class="font-bold text-lg drop-shadow tracking-tight truncate">{{ place.site }}</h3>
              </div>
            </div>

            <!-- Card Body -->
            <div class="p-5 flex-1 flex flex-col justify-between bg-white dark:bg-gray-800">
              <ul class="space-y-2 text-sm">
                <li v-for="(project, pIndex) in place.projects" :key="pIndex">
                  <a v-if="project.src" :href="project.src" target="_blank" rel="noopener noreferrer"
                    class="group/link flex items-center justify-between py-1.5 px-2.5 -mx-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/60 dark:hover:bg-gray-700/60 transition-all">
                    <span class="truncate font-medium">{{ project.title }}</span>
                    <div class="flex items-center space-x-1.5 flex-shrink-0 ml-1.5">
                      <span v-if="project.status === 'Private'" class="inline-flex items-center text-xs px-2 py-0.5 rounded-full bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-700/40">
                        <Icon name="ph:lock" size="12px" class="mr-1" /> Privado
                      </span>
                      <Icon name="ph:arrow-up-right" size="14px" class="opacity-0 group-hover/link:opacity-100 transition-opacity text-blue-500" />
                    </div>
                  </a>
                  <div v-else class="flex items-center justify-between py-1.5 px-2.5 -mx-2.5 text-gray-600 dark:text-gray-400 font-medium">
                    <span class="truncate">{{ project.title }}</span>
                    <span v-if="project.status === 'Private'" class="inline-flex items-center text-xs px-2 py-0.5 rounded-full bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-700/40">
                      <Icon name="ph:lock" size="12px" class="mr-1" /> Privado
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <article class="tools-section">
        <TitlesH2 :title="$t('home.about.tools.title')" />
        <div class="logo-carousel-container py-12">
          <div class="logo-carousel" :class="{ 'animate-scroll': isMobile }">
            <div class="logo-track">
              <div v-for="(logo, index) in displayLogos" :key="index" class="logo-item">
                <NuxtImg :src="logo.src" :alt="logo.alt" class="logo-image" width="150" height="150" quality="70"
                  format="webp" />
                <span>{{ logo.alt }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="logo-carousel-container py-12">
          <div class="logo-carousel" :class="{ 'animate-scroll': isMobile }">
            <div class="logo-track">
              <div v-for="(logo, index) in displayToolsDev" :key="index" class="logo-item">
                <NuxtImg :src="logo.src" :alt="logo.alt" class="logo-image" width="150" height="150" quality="70" />
                <span>{{ logo.alt }}</span>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article class="pt-12 dark:bg-gray-700 bg-blue-50">
        <TitlesH2 :title="$t('home.about.studies.title')" />
        <SectionStudies v-if="currentSection === 'Diseñador UX/UI'" :studies="studies" />
        <SectionStudies v-else :studies="studiesDev" />
      </article>
    </section>
  </main>

  <footer>
  </footer>
</template>
<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t: $t, tm: $tm, locale } = useI18n()
useSeoMeta({
  title: 'Isaac Quiroz Portfolio',
  titleTemplate: '%s | Isaac Quiroz Portfolio',
  description: 'Isaac Quiroz Portfolio',
  keywords: ['Isaac Quiroz', 'Portfolio', 'UI/UX Designer', 'Front-end Developer', 'Propiedades Cancún', 'YiApp', 'Free Learn', 'Citizen', 'Otif', 'WayaWeb', 'Wizeline'],
  // Open Graph (Para cuando se comparte en Facebook/LinkedIn/WhatsApp)
  ogTitle: 'Isaac Quiroz Portfolio',
  ogDescription: 'Isaac Quiroz Portfolio',
  ogImage: 'https://isaacquirozmadrigal.dev/img/group.png', // IMPORTANTE: Usa URL absoluta en producción
  ogUrl: 'https://isaacquirozmadrigal.com',
  ogType: 'website',

  // Twitter Card
  twitterCard: 'summary_large_image',
  twitterTitle: 'Isaac Quiroz Portfolio',
  twitterDescription: 'Isaac Quiroz Portfolio',
  twitterImage: 'https://isaacquirozmadrigal.dev/img/group.png',
})
const currentSection = ref('Diseñador UX/UI')
// Refs para las secciones
const projectsRef = ref(null)
const aboutRef = ref(null)
const contactRef = ref(null)
const mainRef = ref(null)

const carouselItems = computed(() => [
  {
    title: $t('home.carousel.yiapp.title'),
    description: $t('home.carousel.yiapp.description'),
    image: '/img/yiapp/yofrzpjwfxwjao7e2jub.webp',
    route: '/projects/yiapp'
  },
  {
    title: $t('home.carousel.freelearn.title'),
    description: $t('home.carousel.freelearn.description'),
    image: '/img/free/lqgrculfmexx2betqcuw.webp',
    route: '/projects/freelearn'
  },

  {
    title: $t('home.carousel.propiedades.title'),
    description: $t('home.carousel.propiedades.description'),
    image: '/img/propiedades/nvifz5egnosguvd2tmgp.webp',
    route: '/projects/propiedades'
  },
  {
    title: $t('home.carousel.otif.title'),
    description: $t('home.carousel.otif.description'),
    image: '/img/otif/1.webp',
    route: '/projects/otif'
  },
  {
    title: $t('home.carousel.citizen.title'),
    description: $t('home.carousel.citizen.description'),
    image: '/img/citizen/955shots_so.webp',
    route: '/projects/citizen'
  },
])

const carrouselItemsDevelopment = computed(() => [
  {
    title: $t('home.carouseldev.propiedades.title'),
    description: $t('home.carouseldev.propiedades.description'),
    image: '/img/propiedades/nvifz5egnosguvd2tmgp.webp',
    route: '/projects/front-end/propiedades'
  },
  {
    title: $t('home.carouseldev.virturecrm.title'),
    description: $t('home.carouseldev.virturecrm.description'),
    image: '/img/virture/dashboard.png',
    route: '/projects/front-end/virture-crm'
  }
])


const listOfExperienceUX = ref([
  {
    title: 'Propiedades Cancún Landing',
    description: 'Desarrollo de landing page para agencia inmobiliaria en Cancún',
    image: '/img/propiedades/nvifz5egnosguvd2tmgp.webp',
    route: '/projects/propiedades'
  }
])
const projects = ref([
  {
    site: 'Universidad',
    icon: 'ph:student',
    bgImage: '/img/citizen/955shots_so.webp',
    projects: [
      {
        title: 'Reptiles App',
        src: 'https://www.figma.com/design/D8iCgvKvfDTVVTFbvEkZeh/Borrador-inicial?node-id=0-1&t=fX6tJ7IFU9mERCEc-1'
      },
      {
        title: 'Plataforma de documentación de estadias',
      }
    ]
  },
  {
    site: 'Personal Projects',
    icon: 'ph:laptop',
    bgImage: '/img/yiapp/yofrzpjwfxwjao7e2jub.webp',
    projects: [
      {
        title: 'YiApp',
        src: 'https://www.figma.com/design/MqMinzwnlInoVGTHbYEH0w/Bengala-Mockup?node-id=911-3954&t=Ebh3NoYZ8DaWI7wv-1'
      },
      {
        title: 'FreeLearn',
        src: 'https://www.figma.com/design/pz1NeJwJIvXhYlEshiyBTl/Free-Learn?node-id=311-3301&t=Ebh3NoYZ8DaWI7wv-1'
      },
      {
        title: 'Citizen',
        src: 'https://www.figma.com/design/o8bemR8kKFtZxh66cCcxFU/Denuncia-ciudadana?node-id=0-1&t=Ebh3NoYZ8DaWI7wv-1'
      },
      {
        title: 'Rosas Eterns Nineth',
        src: 'https://www.figma.com/design/5VhB1OLm2KvtMxQkppfClZ/Nineth-Sale?t=biIL6hpsxitsh47H-1'
      },
      {
        title: 'Otif - Rediseño Landing',
        src: 'https://www.figma.com/design/ZozY2Lo9gmLmO4IeK4Of1e/Otif-Mini-Redise%C3%B1o-UX?node-id=0-1&t=biIL6hpsxitsh47H-1'
      }
    ]
  },
  {
    site: 'Wizeline',
    icon: 'ph:building-office',
    bgImage: '/img/otif/1.webp',
    projects: [
      {
        title: 'Plataforma de PATIO for Kudos',
      }
    ]
  },
  {
    site: 'WayaWeb Propiedades Cancun',
    icon: 'ph:building-office',
    bgImage: '/img/propiedades/nvifz5egnosguvd2tmgp.webp',
    projects: [
      {
        title: 'Propiedades Cancun Landing',
        src: 'https://www.figma.com/design/Dd72HXnjoEAyoNxlNJWB5V/Propiedades-Canc%C3%BAn?node-id=0-1&t=WhZY8LFASa4EtrxM-1'
      },
      {
        title: 'Virture App and CRM',
        src: 'https://www.figma.com/design/RDYH5lbQMg2LrcocLxEPqe/Virture-web?node-id=0-1&t=AvXCTcIAVcChWyZI-1'
      }
    ]
  }
])
const projectsDevelopment = ref([
  {
    site: 'Wizeline',
    icon: 'ph:building-office',
    bgImage: '/img/otif/1.webp',
    projects: [
      {
        title: 'Plataforma de PATIO for Kudos',
        status: 'Private'
      }
    ]
  },
  {
    site: 'WayaWeb Propiedades Cancun',
    icon: 'ph:building-office',
    bgImage: '/img/propiedades/nvifz5egnosguvd2tmgp.webp',
    projects: [
      {
        title: 'Propiedades Cancun Landing',
        src: 'https://www.figma.com/design/Dd72HXnjoEAyoNxlNJWB5V/Propiedades-Canc%C3%BAn?node-id=0-1&t=WhZY8LFASa4EtrxM-1',
        status: 'Private'
      },
      {
        title: 'Virture App and CRM',
        src: 'https://www.figma.com/design/RDYH5lbQMg2LrcocLxEPqe/Virture-web?node-id=0-1&t=AvXCTcIAVcChWyZI-1',
        status: 'Private'
      }
    ]
  }
])
const isMobile = ref(false)

// Define tus logos aquí
const logos = ref([
  { src: '/adobeXd.png', alt: 'Adobe XD' },
  { src: '/framex.jpg', alt: 'framex' },
  { src: '/figma.png', alt: 'Figma' },
  { src: '/balsamiq.png', alt: 'balsamiq' },
  { src: '/photoshop.png', alt: 'Photoshop' },
  { src: '/lightroom.png', alt: 'lightroom' },
  // Agrega más logos según necesites
])
const toolsDev = ref([
  { src: '/img/toolsdev/javascript-logo-svgrepo-com.svg', alt: 'JavaScript' },
  { src: '/img/toolsdev/html5-svgrepo-com.svg', alt: 'HTML5' },
  { src: '/img/toolsdev/css3-svgrepo-com.svg', alt: 'CSS3' },
  { src: '/img/toolsdev/vue.svg', alt: 'VueJs' },
  { src: '/img/toolsdev/Pinialogo.svg', alt: 'Pinia' },
  { src: '/img/toolsdev/icon-green.svg', alt: 'NuxtJs' },
  { src: '/img/toolsdev/react-svgrepo-com.svg', alt: 'ReactJs' },
  { src: '/img/toolsdev/nextjs.svg', alt: 'NextJs' },
  { src: '/img/toolsdev/tailwind-svgrepo-com.svg', alt: 'TailwindCSS' },
  { src: '/img/toolsdev/Daco_1407237.png', alt: 'Sass' },
  { src: '/img/toolsdev/storybook-svgrepo-com.svg', alt: 'Storybook' },
  { src: '/img/toolsdev/Google Tag Manager.svg', alt: 'Google Tag Manager' },
  { src: '/img/toolsdev/pngegg.png', alt: 'Google Search Console' },
  { src: '/img/toolsdev/cdnlogo.com_analytics.svg', alt: 'Google Analytics' },
  { src: '/img/toolsdev/cdnlogo.com_google-lighthouse-icon-may-2019.svg', alt: 'Google Lighthouse' },
])

// Duplica los logos para el efecto infinito en móvil
const displayLogos = computed(() => {
  return isMobile.value ? [...logos.value, ...logos.value] : logos.value
})

const displayToolsDev = computed(() => {
  return isMobile.value ? [...toolsDev.value, ...toolsDev.value] : toolsDev.value
})
const checkMobile = () => {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})

const studies = computed(() => [
  {
    institution: $t('home.studies.upqroo.institution'),
    degree: $t('home.studies.upqroo.degree'),
    year: $t('home.studies.upqroo.year'),
    photos: [
      '/certificado_de_estudios.jpg',
      '/titulo.jpg'
    ],
    experience: $tm('home.studies.upqroo.experience')
  },
  {
    institution: $t('home.studies.google.institution'),
    degree: $t('home.studies.google.degree'),
    year: $t('home.studies.google.year'),
    photos: [
      '/coursera.jpg',
    ],
    experience: $tm('home.studies.google.experience')
  }
])
const studiesDev = computed(() => [
  {
    institution: $t('home.studies_dev.upqroo.institution'),
    degree: $t('home.studies_dev.upqroo.degree'),
    year: $t('home.studies_dev.upqroo.year'),
    photos: [
      '/certificado_de_estudios.jpg',
      '/titulo.jpg'
    ],
    experience: $tm('home.studies_dev.upqroo.experience')
  }
])
</script>
<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.5s ease-out forwards;
}

.perspective-1000 {
  perspective: 1000px;
}

.logo-carousel-container {
  width: 100%;
  overflow: hidden;

}

.logo-carousel {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.logo-track {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
}

/* En desktop: logos centrados sin animación */
@media (min-width: 768px) {
  .logo-track {
    flex-wrap: wrap;
  }
}

/* En móvil: animación infinita */
@media (max-width: 767px) {
  .logo-carousel.animate-scroll .logo-track {
    animation: scroll 20s linear infinite;
    flex-wrap: nowrap;
  }
}

.logo-item {
  flex-shrink: 0;
  width: 120px;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  filter: grayscale(100%) brightness(1.2);
  opacity: 0.6;
  transition: all 0.3s ease;
}

.logo-image:hover {
  filter: grayscale(0%) brightness(1);
  opacity: 1;
  transform: scale(1.1);
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

/* Pausa la animación al hacer hover en móvil */
@media (max-width: 767px) {
  .logo-carousel.animate-scroll:hover .logo-track {
    animation-play-state: paused;
  }
}
</style>