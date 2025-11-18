<template>
    <header-project :infoProject="aboutProject" />
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
</style>