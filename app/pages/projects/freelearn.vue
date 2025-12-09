<template>
    <div class="container">
        <header-project :infoProject="aboutProject" />
        <section>
            <NuxtImg format="webp" loading="lazy" sizes="100vw sm:100vw md:800px lg:1000px" quality="80"
                src="/img/free/eqnmt3a7p47ylkg8bfoq.webp" alt="High Fidelity Prototype" class="w-full h-auto my-4" />
            <NuxtImg format="webp" loading="lazy" sizes="100vw sm:100vw md:800px lg:1000px" quality="80"
                src="/img/free/uhvjq2jvkghmeqmhj1dc.webp" alt="High Fidelity Prototype" class="w-full h-auto my-4" />
        </section>
        <h2 class="text-xl text-blue-700 dark:text-blue-500 mt-4">{{ $t('projects.freelearn.sections.overview') }}</h2>
        <section class="grid grid-cols-1 md:grid-cols-[1fr,4fr] gap-4 md:gap-8 my-4">
            <section class="grid-1fr">
                <h2 class="text-2xl text-black-700 font-semibold">{{ $t('projects.freelearn.sections.background') }}
                </h2>
            </section>
            <section class="grid-2fr">
                <h3 class="text-xl text-gray-700 dark:text-gray-400">
                    {{ $t('projects.freelearn.content.backgroundText') }}
                </h3>
                <h3 class="text-2xl text-black-700 font-semibold mt-6">{{ $t('projects.freelearn.content.allInOneTitle')
                }}</h3>
                <h3 class="text-xl text-gray-700 dark:text-gray-400">
                    <br>{{ $t('projects.freelearn.content.allInOneText') }}</br>
                </h3>
            </section>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-[1fr,4fr] gap-4 md:gap-8 my-4">
            <section class="grid-1fr">
                <h2 class="text-xl text-blue-700 dark:text-blue-500 mt-4">{{ $t('projects.freelearn.sections.research')
                }}</h2>
            </section>
            <section class="grid-2fr">
                <p class="text-sm text-gray-500 italic font-semibold my-2">
                    {{ $t('projects.freelearn.content.researchIntro') }}
                </p>

                <h3 class="text-2xl text-black-700 font-semibold mt-6">{{ $t('projects.freelearn.sections.method') }}
                </h3>
                <ul class="list-disc ml-5 text-gray-600 dark:text-white">
                    <li v-for="(item, index) in $tm('projects.freelearn.content.methodItems')" :key="index">{{
                        resolveMessage(item) }}
                    </li>
                </ul>

                <h4 class="text-lg text-black-700 font-bold mt-4">{{ $t('projects.freelearn.sections.goals') }}</h4>
                <p class="text-base text-gray-600 dark:text-white my-2">
                    {{ $t('projects.freelearn.content.goalsText') }}
                </p>

                <h4 class="text-lg text-black-700 font-bold mt-4">{{ $t('projects.freelearn.sections.result') }}</h4>
                <p class="text-base text-gray-600 dark:text-white my-2">
                    {{ $t('projects.freelearn.content.resultText') }}
                </p>

                <NuxtImg format="webp" loading="lazy" sizes="100vw sm:100vw md:800px lg:1000px" quality="80"
                    src="/img/free/xir7yvnheqynkrua50eu.webp" alt="Case study of online clothing sales application"
                    class="w-full h-auto my-4" />
                <NuxtImg format="webp" loading="lazy" sizes="100vw sm:100vw md:800px lg:1000px" quality="80"
                    src="/img/free/ra1b3ufkgekxtjp2zvvh.webp" alt="Research result" class="w-full h-auto my-4" />
            </section>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-[1fr,4fr] gap-4 md:gap-8 my-4">
            <section class="grid-1fr">
                <h2 class="text-xl text-blue-700 dark:text-blue-500 mt-8">{{
                    $t('projects.freelearn.sections.personaCreation') }}</h2>
            </section>
            <section class="grid-2fr">
                <NuxtImg format="webp" loading="lazy" sizes="100vw sm:100vw md:800px lg:1000px" quality="80"
                    src="/img/free/wojo4wqx9s1dp2ysj1xh.webp" alt="Persona Creation 1" class="w-full h-auto my-4" />
                <NuxtImg format="webp" loading="lazy" sizes="100vw sm:100vw md:800px lg:1000px" quality="80"
                    src="/img/free/s1tpwi8renst37hje4hc.webp" alt="Persona Creation 2" class="w-full h-auto my-4" />
            </section>
        </section>
        <section class="grid grid-cols-1 md:grid-cols-[1fr,4fr] gap-4 md:gap-8 my-4">
            <section class="grid-1fr">
                <h2 class="text-xl text-blue-700 dark:text-blue-500 mt-8">{{
                    $t('projects.freelearn.sections.userJourney') }}</h2>
            </section>
            <section class="grid-2fr">
                <p class="text-base text-gray-600 dark:text-white my-2">
                    {{ $t('projects.freelearn.content.userJourneyText') }}
                </p>
                <NuxtImg format="webp" loading="lazy" sizes="100vw sm:100vw md:800px lg:1000px" quality="80"
                    src="/img/free/eclu86q5sjhdlraqtzqy.webp" alt="User Journey Map" class="w-full h-auto my-4" />
            </section>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-[1fr,4fr] gap-4 md:gap-8 my-4">
            <section class="grid-1fr">
                <h2 class="text-xl text-blue-700 dark:text-blue-500 mt-8">{{ $t('projects.freelearn.sections.userFlow')
                }}</h2>
            </section>
            <section class="grid-2fr">
                <p class="text-base text-gray-600 dark:text-white my-2">
                    {{ $t('projects.freelearn.content.userFlowText') }}
                </p>
                <NuxtImg format="webp" loading="lazy" sizes="100vw sm:100vw md:800px lg:1000px" quality="80"
                    src="/img/free/ycwhivzm2bhffwfl27dx.webp" alt="User Flow" class="w-full h-auto my-4" />
            </section>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-[1fr,4fr] gap-4 md:gap-8 my-4">
            <section class="grid-1fr">
                <h2 class="text-xl text-blue-700 dark:text-blue-500 mt-8">{{
                    $t('projects.freelearn.sections.architecture') }}</h2>
            </section>
            <section class="grid-2fr">
                <p class="text-base text-gray-600 dark:text-white my-2">
                    {{ $t('projects.freelearn.content.architectureText') }}</p>
                <NuxtImg format="webp" loading="lazy" sizes="100vw sm:100vw md:800px lg:1000px" quality="80"
                    src="/img/free/lkkh2ea8uu0esfnvjhos.webp" alt="Architecture Design Brainstorming"
                    class="w-full h-auto my-4" />
            </section>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-[1fr,4fr] gap-4 md:gap-8 my-4">
            <section class="grid-1fr">
                <h2 class="text-xl text-blue-700 dark:text-blue-500 mt-8">{{
                    $t('projects.freelearn.sections.crazyEight') }}</h2>
            </section>
            <section class="grid-2fr">
                <p class="text-base text-gray-600 dark:text-white my-2">
                    {{ $t('projects.freelearn.content.crazyEightText') }}
                </p>
                <NuxtImg format="webp" loading="lazy" sizes="100vw sm:100vw md:800px lg:1000px" quality="80"
                    src="/img/free/biewj4dnwgbmjtbhku6g.webp" alt="Crazy Eight" class="w-full h-auto my-4" />
                <NuxtImg format="webp" loading="lazy" sizes="100vw sm:100vw md:800px lg:1000px" quality="80"
                    src="/img/free/xpaufvkh01dgdtyjmrd1.webp" alt="Crazy Eight" class="w-full h-auto my-4" />
            </section>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-[1fr,4fr] gap-4 md:gap-8 my-4">
            <section class="grid-1fr">
                <h2 class="text-xl text-blue-700 dark:text-blue-500 mt-8">{{
                    $t('projects.freelearn.sections.wireframes') }}</h2>
            </section>
            <section class="grid-2fr">
                <p class="text-base text-gray-600 dark:text-white my-2">
                    {{ $t('projects.freelearn.content.wireframesText') }}
                </p>
            </section>
        </section>
        <NuxtImg format="webp" loading="lazy" sizes="100vw sm:100vw md:800px lg:1000px" quality="80"
            src="/img/free/mwxccbtzsd9xtirpa1lp.webp" alt="Wireframes Portrait" class="w-full h-auto my-4" />
        <NuxtImg format="webp" loading="lazy" sizes="100vw sm:100vw md:800px lg:1000px" quality="80"
            src="/img/free/t5ljsub7ldehnk1ap9jl.webp" alt="Wireframes Landscape" class="w-full h-auto my-4" />
        <NuxtImg format="webp" loading="lazy" sizes="100vw sm:100vw md:800px lg:1000px" quality="80"
            src="/img/free/c5pztjqym8fy5vmgqsmu.webp" alt="Wireframes Landscape" class="w-full h-auto my-4" />
        <section class="grid grid-cols-1 md:grid-cols-[1fr,4fr] gap-4 md:gap-8 my-4">
            <section class="grid-1fr">
                <h2 class="text-xl text-blue-700 dark:text-blue-500 mt-8">{{
                    $t('projects.freelearn.sections.lowFidelity') }}</h2>
            </section>
            <section class="grid-2fr">
                <p class="text-base text-gray-600 dark:text-white my-2">
                    {{ $t('projects.freelearn.content.lowFidelityText') }}
                </p>
                <NuxtImg format="webp" loading="lazy" sizes="100vw sm:100vw md:800px lg:1000px" quality="80"
                    src="/img/free/tnrp9icg2ct4ps85inno.webp" alt="Low Fidelity Prototype" class="w-full h-auto my-4" />
            </section>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-[1fr,4fr] gap-4 md:gap-8 my-4">
            <section class="grid-1fr">
                <h2 class="text-xl text-blue-700 dark:text-blue-500 mt-8">{{
                    $t('projects.freelearn.sections.usabilityTesting') }}</h2>
            </section>
            <section class="grid-2fr">
                <p class="text-base text-gray-600 dark:text-white my-2">
                    {{ $t('projects.freelearn.content.usabilityTestingIntro') }}
                </p>
                <p class="text-base text-gray-600 dark:text-white my-2">
                    {{ $t('projects.freelearn.content.usabilityTestingResult') }}
                </p>

                <h4 class="text-lg text-black-700 font-bold mt-4">{{
                    $t('projects.freelearn.content.usabilityTestingSurvey') }}</h4>
                <p class="text-base text-gray-600 dark:text-white my-2 font-semibold text-center">
                    {{ $t('projects.freelearn.content.backgroundExperienceTitle') }} </p>
                <ul class="list-disc space-y-2 mt-2 text-gray-600 dark:text-white">
                    <li v-for="(question, index) in $tm('projects.freelearn.content.backgroundExperienceQuestions')"
                        :key="index">{{ resolveMessage(question) }}</li>
                </ul>
                <p class="text-base text-gray-600 dark:text-white my-2 font-semibold text-center mt-4">
                    {{ $t('projects.freelearn.content.appExperienceTitle') }} </p>
                <ul class="list-disc space-y-2 mt-2 text-gray-600 dark:text-white">
                    <li v-for="(question, index) in $tm('projects.freelearn.content.appExperienceQuestions')"
                        :key="index">{{ resolveMessage(question) }}</li>
                </ul>
            </section>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-[1fr,4fr] gap-4 md:gap-8 my-4">
            <section class="grid-1fr">
                <h2 class="text-xl text-blue-700 dark:text-blue-500 mt-8">{{ $t('projects.freelearn.sections.mockups')
                }}</h2>
            </section>
            <section class="grid-2fr">
                <p class="text-base text-gray-600 dark:text-white my-2">
                    {{ $t('projects.freelearn.content.mockupsText') }}
                </p>
            </section>
        </section>
        <NuxtImg format="webp" loading="lazy" sizes="100vw sm:100vw md:800px lg:1000px" quality="80"
            src="/img/free/q3ymrgabsxd6ugwpv6pa.webp" alt="Mockups" class="w-full h-auto my-4" />
        <NuxtImg format="webp" loading="lazy" sizes="100vw sm:100vw md:800px lg:1000px" quality="80"
            src="/img/free/c0qx5002gu4kaf9r3ni9.webp" alt="Mockups" class="w-full h-auto my-4" />
        <NuxtImg format="webp" loading="lazy" sizes="100vw sm:100vw md:800px lg:1000px" quality="80"
            src="/img/free/uvztnmfvu6r5b53mzijw.webp" alt="Mockups" class="w-full h-auto my-4" />
        <section class="grid grid-cols-1 md:grid-cols-[1fr,4fr] gap-4 md:gap-8 my-4">
            <section class="grid-1fr">
                <h2 class="text-xl text-blue-700 dark:text-blue-500 mt-8">{{
                    $t('projects.freelearn.sections.designSystem') }}</h2>
            </section>
            <section class="grid-2fr">
                <h4 class="text-lg text-black-700 font-bold mt-2">{{
                    $t('projects.freelearn.content.designSystemSubtitle') }}</h4>
                <p class="text-base text-gray-600 dark:text-white my-2">
                    {{ $t('projects.freelearn.content.designSystemText') }}
                </p>
            </section>
        </section>
        <NuxtImg format="webp" loading="lazy" sizes="100vw sm:100vw md:800px lg:1000px" quality="80"
            src="/img/free/yr7ufni9iuykte2cykqy.webp" alt="Design System" class="w-full h-auto my-4" />

        <section class="grid grid-cols-1 md:grid-cols-[1fr,4fr] gap-4 md:gap-8 my-4">
            <section class="grid-1fr">
                <h2 class="text-xl text-blue-700 dark:text-blue-500 mt-8">{{
                    $t('projects.freelearn.sections.conclusion') }}</h2>
            </section>
            <section class="grid-2fr">
                <p class="text-base text-gray-600 dark:text-white my-2">
                    {{ $t('projects.freelearn.content.conclusionText') }}
                </p>
            </section>
        </section>
    </div>

</template>
<script setup>
import HeaderProject from '@/components/HeaderProject.vue'
import { computed } from 'vue';

const { t, rt } = useI18n()

useSeoMeta({
    title: () => t('projects.freelearn.title'),
    titleTemplate: '%s | Isaac Quiroz Portfolio',
    description: () => t('projects.freelearn.seo.description'),

    // Open Graph
    ogTitle: () => t('projects.freelearn.title'),
    ogDescription: () => t('projects.freelearn.seo.description'),
    ogImage: 'https://isaacquirozmadrigal.dev/img/free/eqnmt3a7p47ylkg8bfoq.webp',
    ogUrl: 'https://isaacquirozmadrigal.dev/projects/freelearn',
    ogType: 'article',

    // Twitter Card
    twitterCard: 'summary_large_image',
    twitterTitle: () => t('projects.freelearn.title'),
    twitterDescription: () => t('projects.freelearn.seo.description'),
    twitterImage: 'https://isaacquirozmadrigal.dev/img/free/eqnmt3a7p47ylkg8bfoq.webp',
})

const aboutProject = computed(() => ({
    projectType: t('projects.freelearn.meta.projectType'),
    contribution: t('projects.freelearn.meta.contribution'),
    myRole: t('projects.freelearn.meta.myRole'),
    timeline: t('projects.freelearn.meta.timeline'),
    title: t('projects.freelearn.title'),
    image: '/img/free/lqgrculfmexx2betqcuw.webp',
    description: t('projects.freelearn.meta.description')
}))

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