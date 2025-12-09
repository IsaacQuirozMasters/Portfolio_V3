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
                            <Icon name="ph:target" class="w-8 h-8 dark:text-yellow-500 text-primary-500" />
                            {{ $t('projects.citizen.sections.background') }}
                        </h2>
                        <p class="text-lg text-light-text-secondary dark:text-dark-text-secondary leading-relaxed mb-8">
                            {{ $t('projects.citizen.content.backgroundText') }}
                        </p>
                        <!-- Background Images -->
                        <div class="grid md:grid-cols-2 gap-6">
                            <div v-for="(img, index) in backgroundImages" :key="index" class="relative group">
                                <div
                                    class="absolute -inset-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                                </div>
                                <NuxtImg :src="img" :alt="`Background image ${index + 1}`"
                                    class="relative w-full h-auto rounded-xl shadow-lg transform group-hover:scale-[1.02] transition-transform duration-500"
                                    loading="lazy" format="webp" sizes="100vw sm:100vw md:800px lg:1000px"
                                    quality="80" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Research Section -->
            <section class="animate-slide-up" style="animation-delay: 0.1s">
                <h2
                    class="text-3xl md:text-4xl font-bold text-light-text-primary dark:text-dark-text-primary mb-8 flex items-center gap-3">
                    <Icon name="ph:magnifying-glass" class="w-8 h-8 dark:text-yellow-500 text-primary-500" />
                    {{ $t('projects.citizen.sections.research') }}
                </h2>

                <!-- Research Methods -->
                <div
                    class="mb-8 bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-2xl p-8 border border-light-border-primary dark:border-dark-border-primary">
                    <h3 class="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-4">
                        {{ $t('projects.citizen.sections.researchMethods') }}</h3>
                    <div class="flex flex-wrap gap-3">
                        <span v-for="(method, index) in $tm('projects.citizen.content.researchMethods')" :key="index"
                            class="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-lg font-medium">
                            {{ resolveMessage(method) }}
                        </span>
                    </div>
                </div>

                <div class="grid md:grid-cols-2 gap-8">
                    <!-- Research Goals -->
                    <div
                        class="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-2xl p-8 border border-light-border-primary dark:border-dark-border-primary hover:border-primary-400 dark:hover:border-primary-600 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                        <h3 class="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-4">
                            {{ $t('projects.citizen.sections.researchGoals') }}</h3>
                        <p class="text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                            {{ $t('projects.citizen.content.researchGoals') }}
                        </p>
                    </div>

                    <!-- Research Results -->
                    <div
                        class="bg-gradient-to-br from-white to-primary-400 dark:from-dark-bg-secondary dark:to-dark-bg-tertiary rounded-2xl p-8 border border-light-border-primary dark:border-dark-border-primary hover:border-accent-400 dark:hover:border-accent-600 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                        <h3 class="text-xl font-semibold text-primary-900 dark:text-primary-400 mb-4">
                            {{ $t('projects.citizen.sections.keyResults') }}
                        </h3>
                        <p class="text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                            {{ $t('projects.citizen.content.researchResult') }}
                        </p>
                    </div>
                </div>

                <!-- Research Visual Assets -->
                <div class="mt-8 grid md:grid-cols-2 gap-6">
                    <div
                        class="relative group bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-2xl p-6 border border-light-border-primary dark:border-dark-border-primary overflow-hidden">
                        <div
                            class="absolute -inset-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                        </div>
                        <div class="relative">
                            <h4
                                class="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-4 text-center">
                                {{ $t('projects.citizen.sections.researchQuestions') }}</h4>
                            <NuxtImg src="/img/citizen/Untitled.webp" alt="Research questions"
                                class="w-full h-auto rounded-xl shadow-lg" loading="lazy" format="webp"
                                sizes="100vw sm:100vw md:800px lg:1000px" quality="80" />
                        </div>
                    </div>
                    <div
                        class="relative group bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-2xl p-6 border border-light-border-primary dark:border-dark-border-primary overflow-hidden">
                        <div
                            class="absolute -inset-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                        </div>
                        <div class="relative">
                            <h4
                                class="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-4 text-center">
                                {{ $t('projects.citizen.sections.painPoints') }}</h4>
                            <NuxtImg src="/img/citizen/U2.webp" alt="Pain points visualization"
                                class="w-full h-auto rounded-xl shadow-lg" loading="lazy" format="webp"
                                sizes="100vw sm:100vw md:800px lg:1000px" quality="80" />
                        </div>
                    </div>
                </div>

                <!-- Meme/Additional Image -->
                <div class="mt-8">
                    <div
                        class="relative group bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-2xl p-6 border border-light-border-primary dark:border-dark-border-primary overflow-hidden max-w-2xl mx-auto">
                        <div
                            class="absolute -inset-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                        </div>
                        <div class="relative">
                            <NuxtImg src="/img/citizen/Untitled3.webp" alt="Research insight"
                                class="w-full h-auto rounded-xl shadow-lg" loading="lazy" format="webp"
                                sizes="100vw sm:100vw md:800px lg:1000px" quality="80" />
                        </div>
                    </div>
                </div>
            </section>

            <!-- Personas Section -->
            <section class="animate-slide-up" style="animation-delay: 0.2s">
                <h2
                    class="text-3xl md:text-4xl font-bold text-light-text-primary dark:text-dark-text-primary mb-8 flex items-center gap-3">
                    <Icon name="ph:users" class="w-8 h-8 dark:text-yellow-500 text-primary-500" />
                    {{ $t('projects.citizen.sections.personas') }}
                </h2>
                <div class="grid md:grid-cols-2 gap-8">
                    <div v-for="(persona, index) in personasImages" :key="index"
                        class="group relative bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-2xl p-6 border border-light-border-primary dark:border-dark-border-primary overflow-hidden hover:border-primary-400 dark:hover:border-primary-600 transition-all duration-300 hover:shadow-2xl">

                        <div
                            class="absolute -inset-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                        </div>

                        <div class="relative">
                            <NuxtImg :src="persona" :alt="`User Persona ${index + 1}`"
                                class="w-full h-auto rounded-xl shadow-lg transform group-hover:scale-[1.02] transition-transform duration-500"
                                loading="lazy" format="webp" sizes="100vw sm:100vw md:800px lg:1000px" quality="80" />
                        </div>
                    </div>
                </div>
            </section>

            <!-- User Journey Map Section -->
            <section class="animate-slide-up" style="animation-delay: 0.3s">
                <h2
                    class="text-3xl md:text-4xl font-bold text-light-text-primary dark:text-dark-text-primary mb-8 flex items-center gap-3">
                    <Icon name="ph:map-trifold" class="w-8 h-8 dark:text-yellow-500 text-primary-500" />
                    {{ $t('projects.citizen.sections.userJourney') }}
                </h2>
                <div
                    class="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-2xl p-8 border border-light-border-primary dark:border-dark-border-primary overflow-hidden">
                    <p class="text-lg text-light-text-secondary dark:text-dark-text-secondary mb-8 leading-relaxed">
                        {{ $t('projects.citizen.content.userJourneyText') }}
                    </p>
                    <div class="relative group">
                        <div
                            class="absolute -inset-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                        </div>
                        <NuxtImg src="/img/citizen/Untitled6.webp" alt="User Journey Map"
                            class="relative w-full h-auto rounded-xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
                            loading="lazy" format="webp" sizes="100vw sm:100vw md:800px lg:1000px" quality="80" />
                    </div>
                </div>
            </section>

            <!-- User Flow Section -->
            <section class="animate-slide-up" style="animation-delay: 0.35s">
                <h2
                    class="text-3xl md:text-4xl font-bold text-light-text-primary dark:text-dark-text-primary mb-8 flex items-center gap-3">
                    <Icon name="ph:flow-arrow" class="w-8 h-8 dark:text-yellow-500 text-primary-500" />
                    {{ $t('projects.citizen.sections.userFlow') }}
                </h2>
                <div
                    class="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-2xl p-8 border border-light-border-primary dark:border-dark-border-primary overflow-hidden">
                    <p class="text-lg text-light-text-secondary dark:text-dark-text-secondary mb-8 leading-relaxed">
                        {{ $t('projects.citizen.content.userFlowText') }}
                    </p>
                    <div class="relative group">
                        <div
                            class="absolute -inset-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                        </div>
                        <NuxtImg src="/img/citizen/Untitled7.webp" alt="User Flow Diagram"
                            class="relative w-full h-auto rounded-xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
                            loading="lazy" format="webp" sizes="100vw sm:100vw md:800px lg:1000px" quality="80" />
                    </div>
                </div>
            </section>

            <!-- Architecture Design Section -->
            <section class="animate-slide-up" style="animation-delay: 0.4s">
                <h2
                    class="text-3xl md:text-4xl font-bold text-light-text-primary dark:text-dark-text-primary mb-8 flex items-center gap-3">
                    <Icon name="ph:git-merge-light" class="w-8 h-8 dark:text-yellow-500 text-primary-500" />
                    {{ $t('projects.citizen.sections.architecture') }}
                </h2>
                <div
                    class="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-2xl p-8 border border-light-border-primary dark:border-dark-border-primary overflow-hidden">
                    <p class="text-lg text-light-text-secondary dark:text-dark-text-secondary mb-8 leading-relaxed">
                        {{ $t('projects.citizen.content.architectureText') }}
                    </p>
                    <div class="relative group">
                        <div
                            class="absolute -inset-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                        </div>
                        <NuxtImg src="/img/citizen/Untitled8.webp" alt="Arquitectura de diseño del proyecto"
                            class="relative w-full h-auto rounded-xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
                            loading="lazy" format="webp" sizes="100vw sm:100vw md:800px lg:1000px" quality="80" />
                    </div>
                </div>
            </section>

            <!-- Crazy Eights Section -->
            <section class="animate-slide-up" style="animation-delay: 0.45s">
                <h2
                    class="text-3xl md:text-4xl font-bold text-light-text-primary dark:text-dark-text-primary mb-8 flex items-center gap-3">
                    <Icon name="ph:lightning" class="w-8 h-8 dark:text-yellow-500 text-primary-500" />
                    {{ $t('projects.citizen.sections.crazyEights') }}
                </h2>
                <div
                    class="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-2xl p-8 border border-light-border-primary dark:border-dark-border-primary">
                    <p class="text-lg text-light-text-secondary dark:text-dark-text-secondary mb-8 leading-relaxed">
                        {{ $t('projects.citizen.content.crazyEightsText') }}
                    </p>
                    <div class="grid md:grid-cols-2 gap-6">
                        <div v-for="(img, index) in crazyEightsImages" :key="index" class="relative group">
                            <div
                                class="absolute -inset-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                            </div>
                            <NuxtImg :src="img" :alt="`Crazy Eight sketch ${index + 1}`"
                                class="relative w-full h-auto rounded-xl shadow-lg transform group-hover:scale-[1.02] transition-transform duration-500"
                                loading="lazy" format="webp" sizes="100vw sm:100vw md:800px lg:1000px" quality="80" />
                        </div>
                    </div>
                </div>
            </section>

            <!-- Wireframes Section -->
            <section class="animate-slide-up" style="animation-delay: 0.5s">
                <h2
                    class="text-3xl md:text-4xl font-bold text-light-text-primary dark:text-dark-text-primary mb-8 flex items-center gap-3">
                    <Icon name="ph:ruler" class="w-8 h-8 dark:text-yellow-500 text-primary-500" />
                    {{ $t('projects.citizen.sections.wireframes') }}
                </h2>
                <div
                    class="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-2xl p-8 border border-light-border-primary dark:border-dark-border-primary mb-8">
                    <p class="text-lg text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                        {{ $t('projects.citizen.content.wireframesText') }}
                    </p>
                </div>
                <div class="grid grid-cols-1 gap-8">
                    <div v-for="(wireframe, index) in wireframesImages" :key="index"
                        class="group relative bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-2xl p-6 border border-light-border-primary dark:border-dark-border-primary overflow-hidden hover:border-primary-400 dark:hover:border-primary-600 transition-all duration-300">

                        <div
                            class="absolute -inset-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                        </div>

                        <div class="relative">
                            <div class="text-center mb-4">
                                <p class="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary">
                                    Wireframe {{ index + 1 }}</p>
                            </div>
                            <div class="overflow-hidden rounded-xl">
                                <NuxtImg :src="wireframe" :alt="`Wireframe ${index + 1}`"
                                    class="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                                    loading="lazy" format="webp" sizes="100vw sm:100vw md:800px lg:1000px"
                                    quality="80" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Low Fidelity Section -->
            <section class="animate-slide-up" style="animation-delay: 0.55s">
                <h2
                    class="text-3xl md:text-4xl font-bold text-light-text-primary dark:text-dark-text-primary mb-8 flex items-center gap-3">
                    <Icon name="ph:sketch-logo" class="w-8 h-8 dark:text-yellow-500 text-primary-500" />
                    {{ $t('projects.citizen.sections.lowFidelity') }}
                </h2>
                <div
                    class="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-2xl p-8 border border-light-border-primary dark:border-dark-border-primary overflow-hidden">
                    <p class="text-lg text-light-text-secondary dark:text-dark-text-secondary mb-8 leading-relaxed">
                        {{ $t('projects.citizen.content.lowFidelityText') }}
                    </p>
                    <div class="relative group">
                        <div
                            class="absolute -inset-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                        </div>
                        <NuxtImg src="/img/citizen/ww4zptfakcypo53cwqoe.webp" alt="Low Fidelity Prototype"
                            class="relative w-full h-auto rounded-xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
                            loading="lazy" format="webp" sizes="100vw sm:100vw md:800px lg:1000px" quality="80" />
                    </div>
                </div>
            </section>

            <!-- Usability Testing Section -->
            <section class="animate-slide-up" style="animation-delay: 0.6s">
                <h2
                    class="text-3xl md:text-4xl font-bold text-light-text-primary dark:text-dark-text-primary mb-8 flex items-center gap-3">
                    <Icon name="ph:test-tube" class="w-8 h-8 dark:text-yellow-500 text-primary-500" />
                    {{ $t('projects.citizen.sections.usabilityTesting') }}
                </h2>
                <div
                    class="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-2xl p-8 border border-light-border-primary dark:border-dark-border-primary mb-8">
                    <p class="text-lg text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                        {{ $t('projects.citizen.content.usabilityTestingText') }}
                    </p>
                </div>

                <!-- Testing Questions -->
                <div class="grid md:grid-cols-3 gap-6 mb-8">
                    <!-- Usability Questions -->
                    <div
                        class="bg-gradient-to-br from-white to-primary-200 dark:from-dark-bg-secondary dark:to-dark-bg-tertiary rounded-2xl p-6 border border-light-border-primary dark:border-dark-border-primary">
                        <h3 class="text-lg font-semibold text-primary-800 dark:text-primary-400 mb-4">
                            {{ $t('projects.citizen.content.usabilityLabels.usability') }}</h3>
                        <ul class="space-y-3">
                            <li v-for="(question, index) in $tm('projects.citizen.content.usabilityQuestions.usability')"
                                :key="index" class="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                                {{ resolveMessage(question) }}
                            </li>
                        </ul>
                    </div>

                    <!-- Design Questions -->
                    <div
                        class="bg-gradient-to-br from-white to-primary-200 dark:from-dark-bg-secondary dark:to-dark-bg-tertiary rounded-2xl p-6 border border-light-border-primary dark:border-dark-border-primary">
                        <h3 class="text-lg font-semibold text-primary-800 dark:text-primary-400 mb-4">
                            {{ $t('projects.citizen.content.usabilityLabels.design') }}</h3>
                        <ul class="space-y-3">
                            <li v-for="(question, index) in $tm('projects.citizen.content.usabilityQuestions.design')"
                                :key="index" class="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                                {{ resolveMessage(question) }}
                            </li>
                        </ul>
                    </div>

                    <!-- Functional Questions -->
                    <div
                        class="bg-gradient-to-br from-white to-primary-200 dark:from-dark-bg-secondary dark:to-dark-bg-tertiary rounded-2xl p-6 border border-light-border-primary dark:border-dark-border-primary">
                        <h3 class="text-lg font-semibold text-primary-800 dark:text-primary-400 mb-4">
                            {{ $t('projects.citizen.content.usabilityLabels.functional') }}</h3>
                        <ul class="space-y-3">
                            <li v-for="(question, index) in $tm('projects.citizen.content.usabilityQuestions.functional')"
                                :key="index" class="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                                {{ resolveMessage(question) }}
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Testing Image -->
                <div
                    class="relative group bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-2xl p-6 border border-light-border-primary dark:border-dark-border-primary overflow-hidden">
                    <div
                        class="absolute -inset-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                    </div>
                    <div class="relative">
                        <NuxtImg src="/img/citizen/ww4zptfakcypo53cwqoe.webp" alt="Usability Testing Results"
                            class="w-full h-auto rounded-xl shadow-lg transform group-hover:scale-[1.02] transition-transform duration-500"
                            loading="lazy" format="webp" sizes="100vw sm:100vw md:800px lg:1000px" quality="80" />
                    </div>
                </div>
            </section>

            <!-- Mockups Section -->
            <section class="animate-slide-up" style="animation-delay: 0.65s">
                <h2
                    class="text-3xl md:text-4xl font-bold text-light-text-primary dark:text-dark-text-primary mb-8 flex items-center gap-3">
                    <Icon name="ph:paint-brush" class="w-8 h-8 dark:text-yellow-500 text-primary-500" />
                    {{ $t('projects.citizen.sections.mockups') }}
                </h2>
                <div
                    class="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-2xl p-8 border border-light-border-primary dark:border-dark-border-primary mb-8">
                    <p class="text-lg text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                        {{ $t('projects.citizen.content.mockupsText') }}
                    </p>
                </div>
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
                                    Mockup {{ index + 1 }}</p>
                            </div>
                            <div class="overflow-hidden rounded-xl">
                                <NuxtImg :src="mockup" :alt="`Mockup ${index + 1}`"
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

                <!-- Conclusion -->
                <div
                    class="mt-8 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-dark-bg-secondary dark:to-dark-bg-tertiary rounded-2xl p-8 border border-light-border-primary dark:border-dark-border-primary">
                    <h3 class="text-xl font-semibold text-primary-800 dark:text-primary-400 mb-4">
                        {{ $t('projects.citizen.sections.conclusion') }}</h3>
                    <p class="text-lg text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                        {{ $t('projects.citizen.content.conclusionText') }}
                    </p>
                </div>
            </section>

            <!-- Call to Action / Footer Section -->
            <section class="animate-slide-up" style="animation-delay: 0.7s">
                <div
                    class="relative overflow-hidden bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 rounded-2xl p-12 text-center">
                    <!-- Animated background pattern -->
                    <div class="absolute inset-0 opacity-10">
                        <div class="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse-slow">
                        </div>
                        <div class="absolute bottom-0 right-0 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse-slow"
                            style="animation-delay: 1.5s"></div>
                    </div>

                    <div class="relative z-10">
                        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
                            {{ $t('projects.citizen.sections.cta') }}
                        </h2>
                        <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                            {{ $t('projects.citizen.sections.ctaDescription') }}
                        </p>
                        <NuxtLink to="/projects"
                            class="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl">
                            <span>{{ $t('projects.citizen.sections.viewMore') }}</span>
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

const { t, rt } = useI18n()

useSeoMeta({
    title: () => t('projects.citizen.title'),
    titleTemplate: '%s | Isaac Quiroz Portfolio',
    description: () => t('projects.citizen.seo.description'),

    // Open Graph
    ogTitle: () => t('projects.citizen.title'),
    ogDescription: () => t('projects.citizen.seo.description'),
    ogImage: 'https://isaacquirozmadrigal.dev/img/citizen/955shots_so.webp',
    ogUrl: 'https://isaacquirozmadrigal.dev/projects/citizen',
    ogType: 'article',

    // Twitter Card
    twitterCard: 'summary_large_image',
    twitterTitle: () => t('projects.citizen.title'),
    twitterDescription: () => t('projects.citizen.seo.description'),
    twitterImage: 'https://isaacquirozmadrigal.dev/img/citizen/955shots_so.webp',
})

const aboutProject = computed(() => ({
    projectType: t('projects.citizen.meta.projectType'),
    contribution: t('projects.citizen.meta.contribution'),
    myRole: t('projects.citizen.meta.myRole'),
    timeline: t('projects.citizen.meta.timeline'),
    title: t('projects.citizen.title'),
    image: '/img/citizen/955shots_so.webp',
    description: t('projects.citizen.meta.description')
}))

// Static image arrays (don't need translation)
const backgroundImages = ['/img/citizen/440shots_so.webp', '/img/citizen/965shots_so.webp']
const personasImages = ['/img/citizen/Untitled4.webp', '/img/citizen/Untitled5.webp']
const crazyEightsImages = ['/img/citizen/mj87fuga88a2a2am77za.webp', '/img/citizen/dhikb299lmbc6quwid9c.webp']
const wireframesImages = ['/img/citizen/jgnzjgmdlptb2pia3dd7.webp', '/img/citizen/woejksa8awhwkqgahiza.webp', '/img/citizen/qnls9ljdtivzppj3zdim.webp']
const mockupsImages = ['/img/citizen/m31kst5csqoz8nfxxzqa.webp', '/img/citizen/fqxuwuhutqmfp864jrm5.webp', '/img/citizen/uj7ra1yrlof7tcxdmjvc.webp']

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
