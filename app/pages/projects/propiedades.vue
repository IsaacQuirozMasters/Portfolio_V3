<template>
    <div class="container min-h-screen bg-light-bg-primary dark:bg-dark-bg-primary transition-colors duration-300">
        <!-- Header Project Component -->
        <header class="animate-fade-in">
            <header-project :infoProject="aboutProject" />
        </header>

        <!-- Main Content -->
        <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">

            <!-- Background Section -->
            <section class="animate-slide-up">
                <div class="relative">
                    <div
                        class="absolute -inset-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur opacity-20 dark:opacity-30">
                    </div>
                    <div
                        class="relative bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-2xl p-8 md:p-12 border border-light-border-primary dark:border-dark-border-primary">
                        <h2
                            class="text-3xl md:text-4xl font-bold text-light-text-primary dark:text-dark-text-primary mb-6 flex items-center gap-3">
                            <span class="text-4xl">🎯</span>
                            {{ $t('projects.propiedades.sections.background') }}
                        </h2>
                        <p class="text-lg text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                            {{ $t('projects.propiedades.content.backgroundText') }}
                        </p>
                    </div>
                </div>
            </section>

            <!-- Research Section -->
            <section class="animate-slide-up" style="animation-delay: 0.1s">
                <h2
                    class="text-3xl md:text-4xl font-bold text-light-text-primary dark:text-dark-text-primary mb-8 flex items-center gap-3">
                    <span class="text-4xl">🔍</span>
                    {{ $t('projects.propiedades.sections.research') }}
                </h2>

                <div class="grid md:grid-cols-2 gap-8">
                    <!-- Research Overview -->
                    <div
                        class="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-2xl p-8 border border-light-border-primary dark:border-dark-border-primary hover:border-primary-400 dark:hover:border-primary-600 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                        <h3 class="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-4">
                            {{ $t('projects.propiedades.sections.researchProcess') }}</h3>
                        <p class="text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                            {{ $t('projects.propiedades.content.researchText') }}
                        </p>
                    </div>

                    <!-- Results -->
                    <div
                        class="bg-gradient-to-br from-white to-primary-400 dark:from-dark-bg-secondary dark:to-dark-bg-tertiary rounded-2xl p-8 border border-light-border-primary dark:border-dark-border-primary hover:border-accent-400 dark:hover:border-accent-600 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                        <h3 class="text-xl font-semibold text-primary-900 dark:text-primary-400 mb-4">
                            {{ $t('projects.propiedades.sections.keyResults') }}
                        </h3>
                        <p class="text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                            {{ $t('projects.propiedades.content.resultText') }}
                        </p>
                    </div>
                </div>

                <!-- Pain Points -->
                <div
                    class="mt-8 bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-2xl p-8 border border-light-border-primary dark:border-dark-border-primary">
                    <h3
                        class="text-2xl font-semibold text-light-text-primary dark:text-dark-text-primary mb-6 flex items-center gap-2">
                        <Icon name="ph:bandaids-fill" class="w-6 h-6 dark:text-yellow-500 text-primary-500" />
                        {{ $t('projects.propiedades.sections.painPoints') }}
                    </h3>
                    <ul class="space-y-4">
                        <li v-for="(punto, index) in $tm('projects.propiedades.content.painPointsList')" :key="index"
                            class="flex items-start gap-4 p-4 rounded-xl bg-light-bg-tertiary dark:bg-dark-bg-tertiary hover:bg-light-bg-hover dark:hover:bg-dark-bg-hover transition-colors duration-200">
                            <span
                                class="flex-shrink-0 w-8 h-8 rounded-full bg-primary-700 dark:bg-primary-600 text-white flex items-center justify-center font-semibold text-sm">
                                {{ index + 1 }}
                            </span>
                            <p class="text-light-text-secondary dark:text-dark-text-secondary flex-1">{{
                                resolveMessage(punto) }}</p>
                        </li>
                    </ul>
                </div>
            </section>

            <!-- Architecture Design Section -->
            <section class="animate-slide-up" style="animation-delay: 0.2s">
                <h2
                    class="text-3xl md:text-4xl font-bold text-light-text-primary dark:text-dark-text-primary mb-8 flex items-center gap-3">
                    <Icon name="ph:git-merge-light" class="w-6 h-6 dark:text-yellow-500 text-primary-500" />
                    {{ $t('projects.propiedades.sections.architecture') }}
                </h2>
                <div
                    class="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-2xl p-8 border border-light-border-primary dark:border-dark-border-primary overflow-hidden">
                    <p class="text-lg text-light-text-secondary dark:text-dark-text-secondary mb-8 leading-relaxed">
                        {{ $t('projects.propiedades.content.architectureText') }}
                    </p>
                    <div class="relative group">
                        <div
                            class="absolute -inset-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                        </div>
                        <NuxtImg src="/img/propiedades/flujo.webp" alt="Arquitectura de diseño del proyecto"
                            class="relative w-full h-auto rounded-xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
                            loading="lazy" format="webp" sizes="100vw sm:100vw md:800px lg:1000px" quality="80" />
                    </div>
                </div>
            </section>

            <!-- Personas Section -->
            <section class="animate-slide-up" style="animation-delay: 0.3s">
                <h2
                    class="text-3xl md:text-4xl font-bold text-light-text-primary dark:text-dark-text-primary mb-8 flex items-center gap-3">
                    <Icon name="ph:users" class="w-6 h-6 dark:text-yellow-500 text-primary-500" />
                    {{ $t('projects.propiedades.sections.personas') }}
                </h2>
                <div class="grid md:grid-cols-2 gap-8">
                    <div v-for="(persona, key) in personas" :key="key"
                        class="group bg-gradient-to-br from-light-bg-secondary to-light-bg-tertiary dark:from-dark-bg-secondary dark:to-dark-bg-tertiary rounded-2xl p-8 border border-light-border-primary dark:border-dark-border-primary hover:border-primary-400 dark:hover:border-primary-600 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">

                        <!-- Avatar Circle -->
                        <div class="mb-6 flex justify-center">
                            <div
                                class="w-24 h-24 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                                {{ persona.name.charAt(0) }}
                            </div>
                        </div>

                        <!-- Personal Info -->
                        <h3
                            class="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary text-center mb-2">
                            {{ persona.name }}
                        </h3>
                        <div
                            class="flex justify-center gap-4 mb-6 text-sm text-light-text-muted dark:text-dark-text-muted">
                            <span>{{ persona.age }} {{ $t('projects.propiedades.content.years') }}</span>
                            <span>•</span>
                            <span>{{ persona.gender }}</span>
                        </div>

                        <!-- Ocupation -->
                        <div class="mb-6 p-4 bg-light-bg-primary dark:bg-dark-bg-primary rounded-xl">
                            <p
                                class="text-xs font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wide mb-1">
                                {{ $t('projects.propiedades.content.occupation') }}</p>
                            <p class="text-light-text-secondary dark:text-dark-text-secondary">{{ persona.occupation }}
                            </p>
                        </div>

                        <!-- Objetivo -->
                        <div class="mb-6 p-4 bg-light-bg-primary dark:bg-dark-bg-primary rounded-xl">
                            <p
                                class="text-xs font-semibold text-accent-600 dark:text-accent-400 uppercase tracking-wide mb-1">
                                🎯 {{ $t('projects.propiedades.content.goal') }}</p>
                            <p class="text-light-text-secondary dark:text-dark-text-secondary">{{ persona.goal }}
                            </p>
                        </div>

                        <!-- Dificultad -->
                        <div
                            class="p-4 bg-light-bg-primary dark:bg-dark-bg-primary rounded-xl border-l-4 border-accent-500">
                            <p
                                class="text-xs font-semibold text-accent-600 dark:text-accent-400 uppercase tracking-wide mb-1">
                                ⚡ {{ $t('projects.propiedades.content.difficulty') }}</p>
                            <p class="text-light-text-secondary dark:text-dark-text-secondary">{{ persona.difficulty }}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Wireframes Section -->
            <section class="animate-slide-up" style="animation-delay: 0.4s">
                <h2
                    class="text-3xml md:text-4xl font-bold text-light-text-primary dark:text-dark-text-primary mb-8 flex items-center gap-3">
                    <Icon name="ph:ruler" class="w-6 h-6 dark:text-yellow-500 text-primary-500" />
                    {{ $t('projects.propiedades.sections.wireframes') }}
                </h2>
                <div class="grid md:grid-cols-1 gap-8">
                    <div v-for="(wireframe, index) in wireframesImages" :key="index"
                        class="group relative bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-2xl p-6 border border-light-border-primary dark:border-dark-border-primary overflow-hidden hover:border-primary-400 dark:hover:border-primary-600 transition-all duration-300">

                        <div
                            class="absolute -inset-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                        </div>

                        <div class="relative">
                            <NuxtImg :src="wireframe.src" :alt="wireframe.alt"
                                class="w-full h-auto rounded-xl shadow-lg transform group-hover:scale-[1.03] transition-transform duration-500"
                                loading="lazy" format="webp" sizes="100vw sm:100vw md:800px lg:1000px" quality="80" />
                            <div class="mt-4 text-center">
                                <p class="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary">
                                    {{ wireframe.alt }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Mockups Section -->
            <section class="animate-slide-up" style="animation-delay: 0.5s">
                <h2
                    class="text-3xl md:text-4xl font-bold text-light-text-primary dark:text-dark-text-primary mb-8 flex items-center gap-3">
                    <Icon name="ph:paint-brush" class="w-6 h-6 dark:text-yellow-500 text-primary-500" />
                    {{ $t('projects.propiedades.sections.mockups') }}
                </h2>
                <div class="grid grid-cols-1 gap-8">
                    <div v-for="(mockup, index) in mockupsImages" :key="index"
                        class="group relative bg-gradient-to-br from-light-bg-secondary to-light-bg-tertiary dark:from-dark-bg-secondary dark:to-dark-bg-tertiary rounded-2xl p-6 border border-light-border-primary dark:border-dark-border-primary overflow-hidden hover:border-accent-400 dark:hover:border-accent-600 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">

                        <!-- Gradient glow effect -->
                        <div
                            class="absolute -inset-2 bg-gradient-to-r from-accent-500 to-primary-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                        </div>

                        <div class="relative">
                            <div class="text-center mb-4">
                                <p class="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary">
                                    {{ mockup.alt }}</p>
                            </div>
                            <div class="overflow-hidden rounded-xl">
                                <NuxtImg :src="mockup.src" :alt="mockup.alt"
                                    class="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                                    loading="lazy" format="webp" sizes="100vw sm:100vw md:800px lg:1000px"
                                    quality="80" />
                            </div>
                        </div>

                        <!-- Corner decoration -->
                        <div
                            class="absolute top-4 right-4 w-3 h-3 bg-accent-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        </div>
                    </div>
                </div>
            </section>

            <!-- Call to Action / Footer Section -->
            <section class="animate-slide-up" style="animation-delay: 0.6s">
                <div
                    class="relative overflow-hidden bg-gradient-to-r from-primary-500 via-pr to-primary-600 rounded-2xl p-12 text-center">
                    <!-- Animated background pattern -->
                    <div class="absolute inset-0 opacity-10">
                        <div class="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse-slow">
                        </div>
                        <div class="absolute bottom-0 right-0 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse-slow"
                            style="animation-delay: 1.5s"></div>
                    </div>

                    <div class="relative z-10">
                        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
                            {{ $t('projects.propiedades.sections.cta') }}
                        </h2>
                        <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                            {{ $t('projects.propiedades.sections.ctaDescription') }}
                        </p>
                        <NuxtLink to="/projects"
                            class="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl">
                            <span>{{ $t('projects.propiedades.sections.viewMore') }}</span>
                            <span class="text-xl">→</span>
                        </NuxtLink>
                    </div>
                </div>
            </section>

        </main>
    </div>
</template>

<script setup>
import { computed } from 'vue'

definePageMeta({ layout: 'project' })

const { t, rt } = useI18n()

useSeoMeta({
    title: () => t('projects.propiedades.title'),
    titleTemplate: '%s | Isaac Quiroz Portfolio',
    description: () => t('projects.propiedades.seo.description'),

    // Open Graph
    ogTitle: () => t('projects.propiedades.title'),
    ogDescription: () => t('projects.propiedades.seo.description'),
    ogImage: 'https://isaacquirozmadrigal.dev/img/propiedades/nvifz5egnosguvd2tmgp.webp',
    ogUrl: 'https://isaacquirozmadrigal.dev/projects/propiedades',
    ogType: 'article',

    // Twitter Card
    twitterCard: 'summary_large_image',
    twitterTitle: () => t('projects.propiedades.title'),
    twitterDescription: () => t('projects.propiedades.seo.description'),
    twitterImage: 'https://isaacquirozmadrigal.dev/img/propiedades/nvifz5egnosguvd2tmgp.webp',
})

const aboutProject = computed(() => ({
    projectType: t('projects.propiedades.meta.projectType'),
    contribution: t('projects.propiedades.meta.contribution'),
    myRole: t('projects.propiedades.meta.myRole'),
    timeline: t('projects.propiedades.meta.timeline'),
    title: t('projects.propiedades.title'),
    image: '/img/propiedades/nvifz5egnosguvd2tmgp.webp',
    description: t('projects.propiedades.meta.description')
}))

const personas = computed(() => ({
    felipe: {
        name: t('projects.propiedades.personas.felipe.name'),
        age: t('projects.propiedades.personas.felipe.age'),
        gender: t('projects.propiedades.personas.felipe.gender'),
        occupation: t('projects.propiedades.personas.felipe.occupation'),
        goal: t('projects.propiedades.personas.felipe.goal'),
        difficulty: t('projects.propiedades.personas.felipe.difficulty')
    },
    carlos: {
        name: t('projects.propiedades.personas.carlos.name'),
        age: t('projects.propiedades.personas.carlos.age'),
        gender: t('projects.propiedades.personas.carlos.gender'),
        occupation: t('projects.propiedades.personas.carlos.occupation'),
        goal: t('projects.propiedades.personas.carlos.goal'),
        difficulty: t('projects.propiedades.personas.carlos.difficulty')
    }
}))

const wireframesImages = [
    { alt: $t('Home Page wireframe'), src: '/img/propiedades/d0wqshmlmxphx1t2ksmv.webp' },
    { alt: 'Search List wireframe', src: '/img/propiedades/szdqif8boeewlzjji1ff.webp' }
]

const mockupsImages = [
    { alt: 'Home Page mockup', src: '/img/propiedades/e9wxakci8jghkplabhhc.webp' },
    { alt: 'Search List mockup', src: '/img/propiedades/vmkkznqhyqwlkidcdvpp.webp' },
    { alt: 'Property Detail mockup', src: '/img/propiedades/h8k1gqrudeuhrwtwkyjg.webp' },
    { alt: 'Property Contact mockup', src: '/img/propiedades/wgjcjzt4otaaxzn2ipgl.webp' },
    { alt: 'Property About mockup', src: '/img/propiedades/vwzl4wciljwsqlyas4kl.webp' }
]

const resolveMessage = (msg) => {
    // If it's already a string, return as-is
    if (typeof msg === 'string') return msg
    // If it's a message object, resolve it with rt()
    return rt(msg)
}
</script>

<style scoped>
.container {
    max-width: 900px;
    margin: 2rem auto;
    padding: 20px;
}
</style>