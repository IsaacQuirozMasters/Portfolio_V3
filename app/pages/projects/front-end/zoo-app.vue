<template>
    <div class="container">
        <header-project :infoProject="aboutProject" />

        <article class="max-w-3xl mx-auto px-4 py-8 dark:bg-slate-900">
            <header class="mb-10">
                <h1 class="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                    {{ caseStudy.header.title }}
                </h1>
                <p class="text-xl text-gray-500 italic">
                    {{ caseStudy.header.subtitle }}
                </p>
            </header>

            <hr class="border-gray-200 dark:border-gray-700 mb-10" />

            <p class="text-lg text-gray-700 dark:text-gray-300 mb-8">
                {{ caseStudy.intro }}
            </p>

            <section v-for="(section, index) in caseStudy.sections" :key="index" class="mb-10">
                <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {{ rt(section.title) }}
                </h2>
                <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4" v-html="rt(section.content)">
                </p>
                <div
                    class="inline-block bg-green-50 dark:bg-green-900/30 px-3 py-1 rounded text-green-600 dark:text-green-400 font-medium">
                    {{ rt(section.highlight) }}
                </div>
            </section>

            <footer class="mt-12 border-l-4 border-green-500 pl-6 py-4 bg-gray-50 dark:bg-gray-800/50">
                <p class="text-xl italic text-gray-800 dark:text-gray-100">
                    "{{ caseStudy.footer }}"
                </p>
            </footer>
        </article>
    </div>
</template>

<script setup>
import HeaderProject from '@/components/HeaderProject.vue'
import { computed } from 'vue';

const { t, rt, tm } = useI18n()

// Datos específicos de la App de Biología
const aboutProject = computed(() => ({
    projectType: t('projectsDev.biologiaEduApp.projectType'),
    contribution: t('projectsDev.biologiaEduApp.contribution'),
    myRole: t('projectsDev.biologiaEduApp.myRole'),
    timeline: t('projectsDev.biologiaEduApp.timeline'),
    title: t('projectsDev.biologiaEduApp.title'),
    image: '/img/zooapp/detalle.png',
    description: t('projectsDev.biologiaEduApp.description'),
    largeDescription: ''
}))

const caseStudy = computed(() => ({
    header: {
        title: t('projectsDev.biologiaEduApp.caseStudy.header.title'),
        subtitle: t('projectsDev.biologiaEduApp.caseStudy.header.subtitle')
    },
    intro: t('projectsDev.biologiaEduApp.caseStudy.intro'),
    sections: tm('projectsDev.biologiaEduApp.caseStudy.sections'),
    footer: t('projectsDev.biologiaEduApp.caseStudy.footer')
}))
</script>

<style scoped>
.container {
    max-width: 900px;
    margin: 2rem auto;
    padding: 20px;
}

:deep(strong) {
    font-weight: 700;
    color: #111827;
}

:global(.dark) :deep(strong) {
    color: #ffffff;
}
</style>