<template>
  <div>
    <section>
      <NuxtImg
        v-for="(value, index) in infoProject"
        :key="index"
        loading="lazy"
        :src="value.src"
        class="w-full h-auto"
        :alt="value.alt"
      />
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

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

<style scoped>
</style>