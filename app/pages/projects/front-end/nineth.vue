<template>
    <div class="container">
        <header-project :infoProject="aboutProject" />
        <article class="max-w-4xl mx-auto px-4 py-8">
            <header class="mb-10">
                <h1 class="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                    {{ caseStudy.header.title }}
                </h1>
                <p class="text-xl text-gray-500 dark:text-gray-400 italic">
                    {{ caseStudy.header.subtitle }}
                </p>
            </header>

            <hr class="border-gray-200 dark:border-gray-700 mb-10" />

            <!-- Summary -->
            <section class="mb-10">
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">{{ t('projectsDev.nineth.caseStudy.labels.summary') }}</h2>
                <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    {{ caseStudy.summary }}
                </p>
            </section>

            <!-- Results -->
            <section v-if="caseStudy.results && caseStudy.results.length" class="mb-10 flex flex-wrap gap-4">
                <div v-for="(result, i) in caseStudy.results" :key="i"
                    class="flex-1 min-w-[200px] bg-indigo-50 dark:bg-indigo-900/30 rounded-lg p-5 text-center">
                    <p class="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">{{ result.value }}</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">{{ result.label }}</p>
                </div>
            </section>

            <!-- Sections with categories & items -->
            <section v-for="(section, index) in caseStudy.sections" :key="index" class="mb-10">
                <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {{ section.category }}
                </h2>
                <ul class="space-y-3 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    <li v-for="(item, j) in section.items" :key="j" class="flex items-start gap-3">
                        <span class="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-indigo-500" />
                        <span>{{ item }}</span>
                    </li>
                </ul>

                <figure v-for="(image, k) in section.images" :key="k" class="my-6">
                    <NuxtImg :src="image.src" :alt="image.caption" format="webp" loading="lazy"
                        class="w-full h-auto rounded-lg shadow-lg" />
                    <figcaption class="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center italic">
                        {{ image.caption }}
                    </figcaption>
                </figure>
            </section>

            <!-- Stack -->
            <section v-if="caseStudy.stack && caseStudy.stack.length" class="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
                <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-4">{{ t('projectsDev.nineth.caseStudy.labels.stack') }}</h2>
                <div class="flex flex-wrap gap-2">
                    <span v-for="(tech, i) in caseStudy.stack" :key="i"
                        class="inline-block bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium px-3 py-1 rounded-full">
                        {{ tech }}
                    </span>
                </div>
            </section>
        </article>
    </div>
</template>

<script setup>
import HeaderProject from '@/components/HeaderProject.vue'
import { computed } from 'vue';

definePageMeta({ layout: 'project' })

const { t, rt, tm } = useI18n()

// tm() returns compiled AST nodes, not raw strings.
// resolveMessageDeep recursively resolves every leaf so we get plain strings.
const resolveMessageDeep = (val) => {
    if (Array.isArray(val)) return val.map(resolveMessageDeep)
    if (val && typeof val === 'object') {
        if (typeof val.type === 'number' && val.loc !== undefined) return rt(val)
        return Object.fromEntries(Object.entries(val).map(([k, v]) => [k, resolveMessageDeep(v)]))
    }
    return val
}

// Datos del proyecto - usando computed para reactividad con el idioma
const aboutProject = computed(() => ({
    projectType: t('projectsDev.nineth.projectType'),
    contribution: t('projectsDev.nineth.contribution'),
    myRole: t('projectsDev.nineth.myRole'),
    timeline: t('projectsDev.nineth.timeline'),
    title: t('projectsDev.nineth.title'),
    image: '/img/nineth/nineth_dashboard.png',
    description: t('projectsDev.nineth.description'),
    largeDescription: ''
}))

const caseStudy = computed(() => ({
    header: {
        title: t('projectsDev.nineth.caseStudy.header.title'),
        subtitle: t('projectsDev.nineth.caseStudy.header.subtitle')
    },
    summary: t('projectsDev.nineth.caseStudy.summary'),
    results: resolveMessageDeep(tm('projectsDev.nineth.caseStudy.results')),
    sections: resolveMessageDeep(tm('projectsDev.nineth.caseStudy.sections')),
    stack: resolveMessageDeep(tm('projectsDev.nineth.caseStudy.stack'))
}))
</script>
<style scoped>
.container {
    max-width: 900px;
    margin: 2rem auto;
    padding: 20px;
}
</style>
