<template>
    <div class="container">
        <header-project :infoProject="aboutProject" />
        <div class="prose prose-lg dark:prose-invert max-w-none" v-html="aboutProject.largeDescription">
        </div>
    </div>

</template>
<script setup>
import HeaderProject from '@/components/HeaderProject.vue'
import { computed } from 'vue';

const { t, rt } = useI18n()

// SEO Meta - usando traducciones
useSeoMeta({
    title: () => t('projects.yiapp.title'),
    titleTemplate: '%s | Isaac Quiroz Portfolio',
    description: () => t('projects.yiapp.seo.description'),
    keywords: ['ecommerce', 'yiapp', 'multi-brand', 'multi-payment', 'multi-shipping address', 'multi-packaging', 'apparel retail app', 'ui/ux', 'prototipado', 'investigación de usuarios'],
    // Open Graph
    ogTitle: () => t('projects.yiapp.title'),
    ogDescription: () => t('projects.yiapp.seo.description'),
    ogImage: 'https://isaacquirozmadrigal.dev/img/yiapp/yofrzpjwfxwjao7e2jub.webp',
    ogUrl: 'https://isaacquirozmadrigal.dev/projects/yiapp',
    ogType: 'article',
    // Twitter Card
    twitterCard: 'summary_large_image',
    twitterTitle: () => t('projects.yiapp.title'),
    twitterDescription: () => t('projects.yiapp.seo.description'),
    twitterImage: 'https://isaacquirozmadrigal.dev/img/yiapp/yofrzpjwfxwjao7e2jub.webp',
})

// Datos del proyecto - usando computed para reactividad con el idioma
const aboutProject = computed(() => ({
    projectType: t('projectsDev.propiedadesCancun.projectType'),
    contribution: t('projectsDev.propiedadesCancun.contribution'),
    myRole: t('projectsDev.propiedadesCancun.myRole'),
    timeline: t('projectsDev.propiedadesCancun.timeline'),
    title: t('projectsDev.propiedadesCancun.title'),
    image: '/img/propiedades/nvifz5egnosguvd2tmgp.webp',
    description: t('projectsDev.propiedadesCancun.description'),
    largeDescription: t('projectsDev.propiedadesCancun.largeDescription')
}))
</script>
<style scoped>
.container {
    max-width: 900px;
    margin: 2rem auto;
    padding: 20px;
}
</style>