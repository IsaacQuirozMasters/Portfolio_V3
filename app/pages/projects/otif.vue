<template>
  <div>
    <section>
      <NuxtImg v-for="(value, index) in infoProject" :key="index" loading="lazy" :src="value.src" class="w-full h-auto"
        :alt="value.alt" format="webp" sizes="100vw sm:100vw md:800px lg:1000px" quality="80" />
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
useSeoMeta({
  title: 'OTIF - UX Case Study',
  titleTemplate: '%s | Isaac Quiroz Portfolio',
  description: 'Estudio de caso UX/UI para "OTIF", rediseño de una plataforma para mejorar la experiencia de los usuarios.',

  // Open Graph (Para cuando se comparte en Facebook/LinkedIn/WhatsApp)
  ogTitle: 'OTIF - UX/UI Case Study',
  ogDescription: 'rediseño de una pagina en una plataforma web para mejorar la experiencia de los usuarios.',
  ogImage: 'https://isaacquirozmadrigal.dev/img/otif/1.webp', // IMPORTANTE: Usa URL absoluta en producción
  ogUrl: 'https://isaacquirozmadrigal.dev/projects/otif',
  ogType: 'article',

  // Twitter Card
  twitterCard: 'summary_large_image',
  twitterTitle: 'OTIF - UX/UI Case Study',
  twitterDescription: 'rediseño de una pagina en una plataforma web para mejorar la experiencia de los usuarios.',
  twitterImage: 'https://isaacquirozmadrigal.dev/img/otif/1.webp',
})
const infoProject = ref([
  {
    src: '/img/otif/1.webp',
    alt: 'portada de proyecto'
  },
  {
    src: '/img/otif/2.webp',
    alt: 'guide style'
  },
  {
    src: '/img/otif/3.webp',
    alt: 'goals for project'
  },
  {
    src: '/img/otif/4.webp',
    alt: 'after and before the project'
  },
  {
    src: '/img/otif/5.webp',
    alt: 'personas one'
  },
  {
    src: '/img/otif/6.webp',
    alt: 'personas 2'
  },
  {
    src: '/img/otif/7.webp',
    alt: 'investigation'
  },
  {
    src: '/img/otif/8.webp',
    alt: 'storys'
  },
  {
    src: '/img/otif/9.webp',
    alt: 'journey map'
  },
  {
    src: '/img/otif/10.webp',
    alt: 'value proposition'
  },
  {
    src: '/img/otif/11.webp',
    alt: 'crazys'
  },
  {
    src: '/img/otif/12.webp',
    alt: 'wireframe'
  },
  {
    src: '/img/otif/13.webp',
    alt: 'mockup'
  },
  {
    src: '/img/otif/14.webp',
    alt: 'mockup two'
  },
  {
    src: '/img/otif/15.webp',
    alt: 'mockup three'
  },
  {
    src: '/img/otif/16.webp',
    alt: 'mockup four'
  }
]);
</script>

<style scoped></style>