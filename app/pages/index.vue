<template>
  <ButtonFloat />

  <main>
    <section id="main" ref="mainRef" aria-label="Introducción">
      <Titles :title="$t('home.hero.title')" :subtitle="$t('home.hero.subtitle')" />
      <BubbleImgs />
    </section>

    <section id="projects" ref="projectsRef" aria-label="Portafolio de Proyectos">
      <Titles v-if="currentSection === 'Diseñador UI/UX'" :title="$t('home.projects.title')"
        :subtitle="$t('home.projects.subtitleUX')" />
      <Titles v-else :title="$t('home.projects.title')" :subtitle="$t('home.projects.subtitleDev')" />
      <!-- <ButtonsSections @update:current-section="val => currentSection = val" /> -->
      <Carrousel :items="carouselItems" />
    </section>

    <section id="about" ref="aboutRef" aria-label="Sobre mí y Experiencia">
      <Titles :title="$t('home.about.title')" :subtitle="$t('home.about.subtitle')" />

      <div class="items-center justify-center">
        <ul class="grid grid-cols-1 md:grid-cols-2 ...">
        </ul>
      </div>

      <article class="tools-section">
        <TitlesH2 :title="$t('home.about.tools.title')" />
        <div class="logo-carousel-container py-12">
        </div>
      </article>

      <article class="studies-section">
        <TitlesH2 :title="$t('home.about.studies.title')" />
        <SectionStudies :studies="studies" />
      </article>
    </section>
  </main>

  <footer id="contact" ref="contactRef">
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
  ogUrl: 'https://isaacquirozmadrigal.dev',
  ogType: 'website',

  // Twitter Card
  twitterCard: 'summary_large_image',
  twitterTitle: 'Isaac Quiroz Portfolio',
  twitterDescription: 'Isaac Quiroz Portfolio',
  twitterImage: 'https://isaacquirozmadrigal.dev/img/group.png',
})
const currentSection = ref('')
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

const carrouselItemsDevelopment = ref([
  {
    title: 'Propiedades Cancún Landing',
    description: 'Desarrollo de landing page para agencia inmobiliaria en Cancún',
    image: '/img/propiedades/nvifz5egnosguvd2tmgp.webp',
    route: '/projects/propiedades'
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
    projects: [
      {
        title: 'Plataforma de PATIO for Kudos',
      }
    ]
  },
  {
    site: 'WayaWeb Propiedades Cancun',
    icon: 'ph:building-office',
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
const isMobile = ref(false)

// Define tus logos aquí
const logos = ref([
  { src: '/adobeXd.png', alt: 'Figma' },
  { src: '/framex.jpg', alt: 'framex' },
  { src: '/figma.png', alt: 'figma' },
  { src: '/balsamiq.png', alt: 'balsamiq' },
  { src: '/photoshop.png', alt: 'Photoshop' },
  { src: '/lightroom.png', alt: 'lightroom' },
  // Agrega más logos según necesites
])

// Duplica los logos para el efecto infinito en móvil
const displayLogos = computed(() => {
  return isMobile.value ? [...logos.value, ...logos.value] : logos.value
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
</script>
<style scoped>
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