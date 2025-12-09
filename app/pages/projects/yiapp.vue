<template>
    <div class="container">
        <header-project :infoProject="aboutProject" />
        <h2 class="text-xl text-blue-700 dark:text-blue-500 mt-4">{{ $t('projects.yiapp.sections.overview') }}</h2>
        <section class="grid grid-cols-1 md:grid-cols-[1fr,4fr] gap-4 md:gap-8 my-4">
            <section class="grid-1fr">
                <h2 class="text-2xl text-black-700 font-semibold">{{ $t('projects.yiapp.sections.background') }}</h2>
            </section>
            <section class="grid-2fr">
                <h3 class="text-xl text-blue-700 dark:text-blue-500">
                    <nuxt-img format="webp" loading="lazy" sizes="100vw sm:100vw md:800px lg:1000px" quality="80"
                        src="/img/yiapp/firjjiyx6rihyzbici9m.webp" alt="imagen de yiapp" :width="'800'" :height="'450'"
                        class="w-full h-auto my-4"></nuxt-img>
                    <NuxtImg loading="lazy" sizes="100vw sm:100vw md:800px lg:1000px" quality="80"
                        src="/img/yiapp/p2yi.gif" alt="imagen de yiapp" format="gif"></NuxtImg>
                </h3>
            </section>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-[1fr,4fr] gap-4 md:gap-8 my-4">
            <section class="grid-1fr">
                <h3 class="text-2xl text-black-700 font-semibold">{{ $t('projects.yiapp.sections.process') }}</h3>
            </section>
            <section class="grid-2fr">
                <nuxt-img loading="lazy" sizes="100vw sm:100vw md:800px lg:1000px" quality="80"
                    src="/img/yiapp/p3yi.gif" alt="process of project" class="w-full h-auto my-4" format="gif" />
                <NuxtImg format="webp" loading="lazy" sizes="100vw sm:100vw md:800px lg:1000px" quality="80"
                    src="/img/yiapp/qmntwea0jfrg840wtfrn.webp" alt="process of project" class="w-full h-auto my-4" />
            </section>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-[1fr,4fr] gap-4 md:gap-8 my-4">
            <section class="grid-1fr">
                <h2 class="text-xl text-blue-700 dark:text-blue-500 mt-4">{{ $t('projects.yiapp.sections.research') }}
                </h2>
            </section>
            <section class="grid-2fr">
                <p class="text-sm text-gray-500 italic font-semibold my-2">
                    {{ $t('projects.yiapp.content.researchIntro') }}
                </p>

                <h3 class="text-2xl text-black-700 font-semibold mt-6">{{ $t('projects.yiapp.sections.method') }}</h3>
                <ul class="list-disc ml-5 text-gray-600 dark:text-white">
                    <li v-for="(item, index) in $tm('projects.yiapp.content.methodItems')" :key="index">{{
                        resolveMessage(item) }}</li>
                </ul>

                <h4 class="text-lg text-black-700 font-bold mt-4">{{ $t('projects.yiapp.sections.goals') }}</h4>
                <p class="text-base text-gray-600 dark:text-white my-2">
                    {{ $t('projects.yiapp.content.goalsText') }}
                </p>

                <h4 class="text-lg text-black-700 font-bold mt-4">{{ $t('projects.yiapp.sections.result') }}</h4>
                <p class="text-base text-gray-600 dark:text-white my-2">
                    {{ $t('projects.yiapp.content.resultText') }}
                </p>

                <NuxtImg format="webp" loading="lazy" sizes="100vw sm:100vw md:800px lg:1000px" quality="80"
                    src="/img/yiapp/wumzenzxgcz6sddpewis.webp" alt="Case study of online clothing sales application"
                    class="w-full h-auto my-4" />
                <NuxtImg format="webp" loading="lazy" sizes="100vw sm:100vw md:800px lg:1000px" quality="80"
                    src="/img/yiapp/ppcamo0nasqajxby72v1.webp" alt="Research result" class="w-full h-auto my-4" />
            </section>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-[1fr,4fr] gap-4 md:gap-8 my-4">
            <section class="grid-1fr">
                <h2 class="text-xl text-blue-700 dark:text-blue-500 mt-8">{{
                    $t('projects.yiapp.sections.personaCreation') }}</h2>
            </section>
            <section class="grid-2fr">
                <NuxtImg format="webp" loading="lazy" sizes="100vw sm:100vw md:800px lg:1000px" quality="80"
                    src="/img/yiapp/mzzbv70ubn4qneqxknzg.webp" alt="Persona Creation 1" class="w-full h-auto my-4" />
                <NuxtImg format="webp" loading="lazy" sizes="100vw sm:100vw md:800px lg:1000px" quality="80"
                    src="/img/yiapp/isbrnrbgcfa6i0tdpbaz.webp" alt="Persona Creation 2" class="w-full h-auto my-4" />
            </section>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-[1fr,4fr] gap-4 md:gap-8 my-4">
            <section class="grid-1fr">
                <h2 class="text-xl text-blue-700 dark:text-blue-500 mt-8">{{ $t('projects.yiapp.sections.userJourney')
                }}</h2>
            </section>
            <section class="grid-2fr">
                <p class="text-base text-gray-600 dark:text-white my-2">
                    {{ $t('projects.yiapp.content.userJourneyText') }}
                </p>
                <NuxtImg format="webp" loading="lazy" sizes="100vw sm:100vw md:800px lg:1000px" quality="80"
                    src="/img/yiapp/kjw9wrzk4ofhga5k1se1.webp" alt="User Journey Map" class="w-full h-auto my-4" />
            </section>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-[1fr,4fr] gap-4 md:gap-8 my-4">
            <section class="grid-1fr">
                <h2 class="text-xl text-blue-700 dark:text-blue-500 mt-8">{{ $t('projects.yiapp.sections.userFlow') }}
                </h2>
            </section>
            <section class="grid-2fr">
                <p class="text-base text-gray-600 dark:text-white my-2">
                    {{ $t('projects.yiapp.content.userFlowText') }}
                </p>
                <NuxtImg format="webp" loading="lazy" sizes="100vw sm:100vw md:800px lg:1000px" quality="80"
                    src="/img/yiapp/ppcamo0nasqajxby72v1.webp" alt="User Flow" class="w-full h-auto my-4" />
            </section>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-[1fr,4fr] gap-4 md:gap-8 my-4">
            <section class="grid-1fr">
                <h2 class="text-xl text-blue-700 dark:text-blue-500 mt-8">{{ $t('projects.yiapp.sections.architecture')
                }}</h2>
            </section>
            <section class="grid-2fr">
                <p class="text-base text-gray-600 dark:text-white my-2">
                    {{ $t('projects.yiapp.content.architectureBrainstorm') }}
                </p>
                <NuxtImg format="webp" loading="lazy" sizes="100vw sm:100vw md:800px lg:1000px" quality="80"
                    src="/img/yiapp/acebs7prldg43oi1u0ds.webp" alt="Architecture Design Brainstorming"
                    class="w-full h-auto my-4" />
                <p class="text-base text-gray-600 dark:text-white my-2">
                    {{ $t('projects.yiapp.content.architectureComplete') }}
                </p>
                <NuxtImg format="webp" loading="lazy" sizes="100vw sm:100vw md:800px lg:1000px" quality="80"
                    src="/img/yiapp/English.svg" alt="Information Architecture" class="w-full h-auto my-4" />
            </section>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-[1fr,4fr] gap-4 md:gap-8 my-4">
            <section class="grid-1fr">
                <h2 class="text-xl text-blue-700 dark:text-blue-500 mt-8">{{ $t('projects.yiapp.sections.crazyEight') }}
                </h2>
            </section>
            <section class="grid-2fr">
                <p class="text-base text-gray-600 dark:text-white my-2">
                    {{ $t('projects.yiapp.content.crazyEightText') }}
                </p>
                <NuxtImg format="webp" loading="lazy" sizes="100vw sm:100vw md:800px lg:1000px" quality="80"
                    src="/img/yiapp/ucye57h5arwlad59kssg.webp" alt="Crazy Eight" class="w-full h-auto my-4" />
            </section>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-[1fr,4fr] gap-4 md:gap-8 my-4">
            <section class="grid-1fr">
                <h2 class="text-xl text-blue-700 dark:text-blue-500 mt-8">{{ $t('projects.yiapp.sections.wireframes') }}
                </h2>
            </section>
            <section class="grid-2fr">
                <p class="text-base text-gray-600 dark:text-white my-2">
                    {{ $t('projects.yiapp.content.wireframesText') }}
                </p>
            </section>
        </section>
        <NuxtImg format="webp" loading="lazy" sizes="100vw sm:100vw md:800px lg:1000px" quality="80"
            src="/img/yiapp/ehsyzoprlpi8q0e5fvba.webp" alt="Wireframes Portrait" class="w-full h-auto my-4" />
        <NuxtImg format="webp" loading="lazy" sizes="100vw sm:100vw md:800px lg:1000px" quality="80"
            src="/img/yiapp/Wireframe.png" alt="Wireframes Landscape" class="w-full h-auto my-4" />
        <section class="grid grid-cols-1 md:grid-cols-[1fr,4fr] gap-4 md:gap-8 my-4">
            <section class="grid-1fr">
                <h2 class="text-xl text-blue-700 dark:text-blue-500 mt-8">{{ $t('projects.yiapp.sections.lowFidelity')
                }}</h2>
            </section>
            <section class="grid-2fr">
                <p class="text-base text-gray-600 dark:text-white my-2">
                    {{ $t('projects.yiapp.content.lowFidelityText') }}
                </p>
                <NuxtImg loading="lazy" sizes="100vw sm:100vw md:800px lg:1000px" quality="80"
                    src="/img/yiapp/prototypeLow.gif" alt="Low Fidelity Prototype" class="w-full h-auto my-4"
                    format="gif" />
            </section>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-[1fr,4fr] gap-4 md:gap-8 my-4">
            <section class="grid-1fr">
                <h2 class="text-xl text-blue-700 dark:text-blue-500 mt-8">{{
                    $t('projects.yiapp.sections.usabilityTesting') }}</h2>
            </section>
            <section class="grid-2fr">
                <p class="text-base text-gray-600 dark:text-white my-2">
                    {{ $t('projects.yiapp.content.usabilityTestingIntro') }}
                </p>

                <h4 class="text-lg text-black-700 font-bold mt-4">{{ $t('projects.yiapp.content.usabilityTestingSurvey')
                }}</h4>
                <ul class="list-none space-y-2 mt-2 text-gray-600 dark:text-white">
                    <li v-for="(question, index) in $tm('projects.yiapp.content.usabilityQuestions')" :key="index">{{
                        resolveMessage(question) }}</li>
                </ul>
                <p class="text-base text-gray-600 dark:text-white my-2">
                    {{ $t('projects.yiapp.content.usabilityResult') }}
                </p>
            </section>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-[1fr,4fr] gap-4 md:gap-8 my-4">
            <section class="grid-1fr">
                <h2 class="text-xl text-blue-700 dark:text-blue-500 mt-8">{{ $t('projects.yiapp.sections.mockups') }}
                </h2>
            </section>
            <section class="grid-2fr">
                <p class="text-base text-gray-600 dark:text-white my-2">
                    {{ $t('projects.yiapp.content.mockupsText') }}
                </p>
            </section>
        </section>
        <NuxtImg format="webp" loading="lazy" sizes="100vw sm:100vw md:800px lg:1000px" quality="80"
            src="/img/yiapp/dac8tpkejvrr86z1nvpi.webp" alt="Mockups" class="w-full h-auto my-4" />

        <section class="grid grid-cols-1 md:grid-cols-[1fr,4fr] gap-4 md:gap-8 my-4">
            <section class="grid-1fr">
                <h2 class="text-xl text-blue-700 dark:text-blue-500 mt-8">{{ $t('projects.yiapp.sections.designSystem')
                }}</h2>
            </section>
            <section class="grid-2fr">
                <h4 class="text-lg text-black-700 font-bold mt-2">{{ $t('projects.yiapp.content.designSystemSubtitle')
                }}</h4>
                <p class="text-base text-gray-600 dark:text-white my-2">
                    {{ $t('projects.yiapp.content.designSystemText1') }}
                </p>
                <p class="text-base text-gray-600 dark:text-white my-2">
                    {{ $t('projects.yiapp.content.designSystemText2') }}
                </p>
            </section>
        </section>
        <NuxtImg format="webp" loading="lazy" sizes="100vw sm:100vw md:800px lg:1000px" quality="80"
            src="/img/yiapp/yzwtywyema8uvmztgj3a.webp" alt="Design System" class="w-full h-auto my-4" />
        <section class="grid grid-cols-1 md:grid-cols-[1fr,4fr] gap-4 md:gap-8 my-4">
            <section class="grid-1fr">
                <h2 class="text-xl text-blue-700 dark:text-blue-500 mt-8">{{ $t('projects.yiapp.sections.highFidelity')
                }}</h2>
            </section>
            <section class="grid-2fr">
                <NuxtImg loading="lazy" sizes="100vw sm:100vw md:800px lg:1000px" quality="80"
                    src="/img/yiapp/202402102303.gif" alt="High Fidelity Prototype" class="w-1/2 h-auto my-4"
                    format="gif" />
            </section>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-[1fr,4fr] gap-4 md:gap-8 my-4">
            <section class="grid-1fr">
                <h2 class="text-xl text-blue-700 dark:text-blue-500 mt-8">{{ $t('projects.yiapp.sections.conclusion') }}
                </h2>
            </section>
            <section class="grid-2fr">
                <p class="text-base text-gray-600 dark:text-white my-2">
                    {{ $t('projects.yiapp.content.conclusionText') }}
                </p>
            </section>
        </section>
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
    projectType: t('projects.yiapp.meta.projectType'),
    contribution: t('projects.yiapp.meta.contribution'),
    myRole: t('projects.yiapp.meta.myRole'),
    timeline: t('projects.yiapp.meta.timeline'),
    title: t('projects.yiapp.title'),
    image: '/img/yiapp/yofrzpjwfxwjao7e2jub.webp',
    description: t('projects.yiapp.meta.description')
}))

// Helper function to resolve translation messages
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