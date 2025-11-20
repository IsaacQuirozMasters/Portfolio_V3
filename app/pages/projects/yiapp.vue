<template>
    <div class="container">
            <header-project :infoProject="aboutProject" />
              <h2 class="text-xl text-blue-700 mt-4">Overview</h2>
    <section class="grid grid-cols-1 md:grid-cols-[1fr,4fr] gap-4 md:gap-8 my-4">
        <section class="grid-1fr">
          <h2 class="text-2xl text-black-700 font-semibold">Background</h2>
        </section>
        <section class="grid-2fr">
            <h2 class="text-xl text-blue-700"><nuxt-img 
                src="/img/yiapp/firjjiyx6rihyzbici9m.webp"
                ></nuxt-img></h2>
        </section>
    </section>
    </div>

</template>
<script setup>
import HeaderProject from '@/components/HeaderProject.vue'
import { ref } from 'vue';

const aboutProject = ref({
    projectType: 'Aplicación Móvil',
    contribution: 'UI/UX Design, Prototipado, Investigación de usuarios',
    myRole: 'Diseñador UX/UI',
    outCome: 'Aplicación lanzada en Google Play Store con más de 10,000 descargas',
    timeline: 'Enero 2023 - Abril 2023'}
)
</script>
<style scoped>
.container {
    max-width: 900px;
    margin: 4rem auto;
    padding: 20px;
}
</style>