<template>
    <ButtonFloat />
    <Titles id="main" ref="mainRef" title="Diseñador UX Generalista y Desarrollador web en <span>Propiedades Cancún</span>" subtitle="Hi, I'm Isaac, a multidisciplinary <u>UI/UX Designer</u> & <u>Front-end Developer</u>. I Design, Code and Write." />
    <BubbleImgs />
    
    <!-- SECCIÓN PROJECTS -->
    <div id="projects" ref="projectsRef">
      <Titles v-if="currentSection === 'Diseñador UI/UX'" title="Pongo mi <span>corazón</span> en todo lo que hago" subtitle="Te muestro una pequeña sección de <u>casos de estudio</u> que muestran mi trabajo y que disfruto mucho hacer" />
      <Titles v-else title="Pongo mi <span>corazón</span> en todo lo que hago" subtitle="Te muestro una pequeña sección de <u>proyectos frontend</u> que muestran mi trabajo y que disfruto mucho hacer" />
      <ButtonsSections @update:current-section="val => currentSection = val" />
      <Carrousel :items="carouselItems" />
    </div>
    
    <!-- SECCIÓN ABOUT -->
    <div id="about" ref="aboutRef">
      <Titles title="La <span>experiencia</span> que me respalda" subtitle="Descubre mi experiencia desde diferentes proyecto con los que he trabajado estos ultimos años" />
      <ButtonsSections @update:current-section="val => currentSection = val" />
      <div class="items-center justify-center">
          <ul class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 w-fit mx-auto text-gray-700 my-8">
            <li v-for="(place, index) in projects" :key="index" class="flex flex-col py-4 px-8 border border-gray-200 rounded-lg transition-shadow duration-300">
              <div class="flex items-center space-x-2">
                <Icon :name="place.icon" size="24px" class="text-[#304fff]" />
                <h3 class="font-semibold">{{ place.site }}</h3>
              </div>
              <ul style="list-style-type:disc" class="ml-[50px] mt-2 space-y-2">
                <li v-for="(project, pIndex) in place.projects" :key="pIndex">
                  <a :href="project.src" target="_blank" rel="noopener noreferrer">{{ project.title }}</a>
                </li>
              </ul>
            </li>
          </ul>
      </div>
      <TitlesH2 title="<span>Herramientas</span> que se utilizar" />
      <ButtonsSections @update:current-section="val => currentSection = val" />
      <div class="logo-carousel-container py-12">
        <div class="logo-carousel" :class="{ 'animate-scroll': isMobile }">
          <div class="logo-track">
            <div 
              v-for="(logo, index) in displayLogos" 
              :key="index" 
              class="logo-item"
            >
              <img 
                :src="logo.src" 
                :alt="logo.alt" 
                class="logo-image"
              />
              <span>{{ logo.alt }}</span>
            </div>
          </div>
        </div>
      </div>
      <TitlesH2 title="<span>Estudios</span> que avalan" />
      <SectionStudies :studies="studies" />
    </div>
    
    <!-- SECCIÓN CONTACT -->
    <div id="contact" ref="contactRef">
      <!-- Aquí irá tu formulario de contacto o información -->
    </div>
</template>
<script setup>
import { ref } from 'vue'
const currentSection = ref('')
// Refs para las secciones
const projectsRef = ref(null)
const aboutRef = ref(null)
const contactRef = ref(null)
const mainRef = ref(null)

// Función para hacer scroll
const scrollToSection = (sectionId) => {
  let element = null
  
  switch(sectionId) {
    case 'projects':
      element = projectsRef.value
      break
    case 'about':
      element = aboutRef.value
      break
    case 'contact':
      element = contactRef.value
      break
    case 'main':
      element = mainRef.value
      break
  }
  
  if (element) {
    const headerOffset = 80 // altura de tu header sticky
    const elementPosition = element.offsetTop
    const offsetPosition = elementPosition - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

const carouselItems = ref([
  {
    title: 'Rediseño Landing Otif',
    description: 'Transformación de la navegación principal de una plataforma web de logística internacional',
    image: '/img/otif/1.webp',
    route: '/projects/otif'
  },
  {
    title: 'YiApp e-commerce',
    description: 'Aplicación móvil de comercio electrónico para ropa y accesorios',
    image: '/img/yiapp/yofrzpjwfxwjao7e2jub.webp',
    route: '/projects/yiapp'
  },
  {
    title: 'Propiedades Cancún Landing',
    description: 'Desarrollo de landing page para agencia inmobiliaria en Cancún',
    image: '/img/propiedades/nvifz5egnosguvd2tmgp.webp'
  },
  {
    title: 'Free Learn',
    description: 'Plataforma educativa en línea para cursos gratuitos',
    image: '/img/free/lqgrculfmexx2betqcuw.webp'
  },
  {
    title: 'Denuncia Ciudadana',
    description: 'Aplicación para reportar incidencias en la vía pública',
    image: '/img/citizen/955shots_so.webp'
  },
])

const projects = ref([
  {
    site: 'Universidad',
    icon: 'ph:student',
    projects: [
      {
        title: 'Sistema de Gestión Académica',
        src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&q=80'
      },
      {
        title: 'Portal de Biblioteca Digital',
        src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&q=80'
      }
    ]
  },
   {
    site: 'Personal Projects',
    icon: 'ph:laptop',
    projects: [
      {
        title: 'Sistema de Gestión Académica',
        src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&q=80'
      },
      {
        title: 'Portal de Biblioteca Digital',
        src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&q=80'
      }
    ]
  },
     {
    site: 'Wizeline',
    icon: 'ph:building-office',
    projects: [
      {
        title: 'Sistema de Gestión Académica',
        src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&q=80'
      },
      {
        title: 'Portal de Biblioteca Digital',
        src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&q=80'
      }
    ]
  },
     {
    site: 'WayaWeb Propiedades Cancun',
    icon: 'ph:building-office',
    projects: [
      {
        title: 'Sistema de Gestión Académica',
        src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&q=80'
      },
      {
        title: 'Portal de Biblioteca Digital',
        src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&q=80'
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

const studies = ref([
  {
    institution: 'Universidad Politécnica de Quintana Roo',
    degree: 'Ingeniería en Software',
    year: '2020 - 2023',
    photos: [
      '/certificado_de_estudios.jpg',
      '/titulo.jpg'
    ],
    experience: [
      'Expresión oral y escrita',
      'Ingeniería de requerimientos de software',
      'Habilidades cognitivas y de creatividad',
      'Diseño de interfaces',
    ]
  },
  {
    institution: 'Google',
    degree: 'Google UX Design Professional Certificate',
    year: '2024',
    photos: [
      '/coursera.jpg',
    ],
    experience: [
      'Foundations of User Experience (UX) Design',
      'Start the UX Design Process: Empathize, Define, and Ideate',
      'Build Wireframes and Low-Fidelity Prototypes',
      'Conduct UX Research and Test Early Concepts',
      'Create High-Fidelity Designs and Prototypes in Figma',
      'Build Dynamic User Interfaces (UI) for Websites',
      'Design a User Experience for Social Good & Prepare for Jobs',
    ]
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