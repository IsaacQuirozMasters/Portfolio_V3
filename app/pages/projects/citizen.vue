<template>
    <div class="container min-h-screen bg-light-bg-primary dark:bg-dark-bg-primary transition-colors duration-300">
        <!-- SEO Meta Tags -->
        <Head>
            <Title>{{ aboutProject.title }} - Portfolio Isaac Quiroz</Title>
            <Meta name="description" :content="aboutProject.description" />
            <Meta name="keywords" content="UI/UX Design, Citizen Complaint, Public Services, Denuncia Ciudadana" />
            <Meta property="og:title" :content="aboutProject.title" />
            <Meta property="og:description" :content="aboutProject.description" />
            <Meta property="og:image" :content="aboutProject.image" />
            <Meta property="og:type" content="website" />
            <Meta name="twitter:card" content="summary_large_image" />
            <Meta name="twitter:title" :content="aboutProject.title" />
            <Meta name="twitter:description" :content="aboutProject.description" />
            <Meta name="twitter:image" :content="aboutProject.image" />
        </Head>

        <!-- Header Project Component -->
        <header class="animate-fade-in">
            <header-project :infoProject="aboutProject" />
        </header>

        <!-- Main Content -->
        <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
            
            <!-- Background Section -->
            <section class="animate-slide-up">
                <div class="relative">
                    <div class="absolute -inset-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur opacity-20 dark:opacity-30"></div>
                    <div class="relative bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-2xl p-8 md:p-12 border border-light-border-primary dark:border-dark-border-primary">
                        <h2 class="text-3xl md:text-4xl font-bold text-light-text-primary dark:text-dark-text-primary mb-6 flex items-center gap-3">
                            <Icon name="ph:target" class="w-8 h-8 dark:text-yellow-500 text-primary-500" />
                            Background
                        </h2>
                        <p class="text-lg text-light-text-secondary dark:text-dark-text-secondary leading-relaxed mb-8">
                            {{ infoProject.background.introduction }}
                        </p>
                        <!-- Background Images -->
                        <div class="grid md:grid-cols-2 gap-6">
                            <div v-for="(img, index) in infoProject.background.images" :key="index" class="relative group">
                                <div class="absolute -inset-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                                <NuxtImg
                                    :src="img"
                                    :alt="`Background image ${index + 1}`"
                                    class="relative w-full h-auto rounded-xl shadow-lg transform group-hover:scale-[1.02] transition-transform duration-500"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Research Section -->
            <section class="animate-slide-up" style="animation-delay: 0.1s">
                <h2 class="text-3xl md:text-4xl font-bold text-light-text-primary dark:text-dark-text-primary mb-8 flex items-center gap-3">
                    <Icon name="ph:magnifying-glass" class="w-8 h-8 dark:text-yellow-500 text-primary-500" />
                    Investigación
                </h2>
                
                <!-- Research Methods -->
                <div class="mb-8 bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-2xl p-8 border border-light-border-primary dark:border-dark-border-primary">
                    <h3 class="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-4">Métodos de Investigación</h3>
                    <div class="flex flex-wrap gap-3">
                        <span v-for="(method, index) in infoProject.research.method" :key="index"
                            class="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-lg font-medium">
                            {{ method }}
                        </span>
                    </div>
                </div>

                <div class="grid md:grid-cols-2 gap-8">
                    <!-- Research Goals -->
                    <div class="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-2xl p-8 border border-light-border-primary dark:border-dark-border-primary hover:border-primary-400 dark:hover:border-primary-600 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                        <h3 class="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-4">Objetivos de Investigación</h3>
                        <p class="text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                            {{ infoProject.research.goals }}
                        </p>
                    </div>

                    <!-- Research Results -->
                    <div class="bg-gradient-to-br from-white to-primary-400 dark:from-dark-bg-secondary dark:to-dark-bg-tertiary rounded-2xl p-8 border border-light-border-primary dark:border-dark-border-primary hover:border-accent-400 dark:hover:border-accent-600 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                        <h3 class="text-xl font-semibold text-primary-900 dark:text-primary-400 mb-4">Resultados Clave</h3>
                        <p class="text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                            {{ infoProject.research.result }}
                        </p>
                    </div>
                </div>

                <!-- Research Visual Assets -->
                <div class="mt-8 grid md:grid-cols-2 gap-6">
                    <div class="relative group bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-2xl p-6 border border-light-border-primary dark:border-dark-border-primary overflow-hidden">
                        <div class="absolute -inset-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                        <div class="relative">
                            <h4 class="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-4 text-center">Preguntas de Investigación</h4>
                            <NuxtImg
                                :src="infoProject.research.image"
                                alt="Research questions"
                                class="w-full h-auto rounded-xl shadow-lg"
                                loading="lazy"
                            />
                        </div>
                    </div>
                    <div class="relative group bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-2xl p-6 border border-light-border-primary dark:border-dark-border-primary overflow-hidden">
                        <div class="absolute -inset-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                        <div class="relative">
                            <h4 class="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-4 text-center">Pain Points</h4>
                            <NuxtImg
                                :src="infoProject.research.painPointsImage"
                                alt="Pain points visualization"
                                class="w-full h-auto rounded-xl shadow-lg"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>

                <!-- Meme/Additional Image -->
                <div v-if="infoProject.research.imgMeme" class="mt-8">
                    <div class="relative group bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-2xl p-6 border border-light-border-primary dark:border-dark-border-primary overflow-hidden max-w-2xl mx-auto">
                        <div class="absolute -inset-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                        <div class="relative">
                            <NuxtImg
                                :src="infoProject.research.imgMeme"
                                alt="Research insight"
                                class="w-full h-auto rounded-xl shadow-lg"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <!-- Personas Section -->
            <section v-if="infoProject.personasCreation && infoProject.personasCreation.length" class="animate-slide-up" style="animation-delay: 0.2s">
                <h2 class="text-3xl md:text-4xl font-bold text-light-text-primary dark:text-dark-text-primary mb-8 flex items-center gap-3">
                    <Icon name="ph:users" class="w-8 h-8 dark:text-yellow-500 text-primary-500" />
                    User Personas
                </h2>
                <div class="grid md:grid-cols-2 gap-8">
                    <div v-for="(persona, index) in infoProject.personasCreation" :key="index"
                        class="group relative bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-2xl p-6 border border-light-border-primary dark:border-dark-border-primary overflow-hidden hover:border-primary-400 dark:hover:border-primary-600 transition-all duration-300 hover:shadow-2xl">
                        
                        <div class="absolute -inset-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                        
                        <div class="relative">
                            <NuxtImg
                                :src="persona"
                                :alt="`User Persona ${index + 1}`"
                                class="w-full h-auto rounded-xl shadow-lg transform group-hover:scale-[1.02] transition-transform duration-500"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <!-- User Journey Map Section -->
            <section v-if="infoProject.userJourneyMap" class="animate-slide-up" style="animation-delay: 0.3s">
                <h2 class="text-3xl md:text-4xl font-bold text-light-text-primary dark:text-dark-text-primary mb-8 flex items-center gap-3">
                    <Icon name="ph:map-trifold" class="w-8 h-8 dark:text-yellow-500 text-primary-500" />
                    User Journey Map
                </h2>
                <div class="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-2xl p-8 border border-light-border-primary dark:border-dark-border-primary overflow-hidden">
                    <p class="text-lg text-light-text-secondary dark:text-dark-text-secondary mb-8 leading-relaxed">
                        {{ infoProject.userJourneyMap.description }}
                    </p>
                    <div class="relative group">
                        <div class="absolute -inset-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                        <NuxtImg
                            :src="infoProject.userJourneyMap.image"
                            alt="User Journey Map"
                            class="relative w-full h-auto rounded-xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>

            <!-- User Flow Section -->
            <section v-if="infoProject.userFlow" class="animate-slide-up" style="animation-delay: 0.35s">
                <h2 class="text-3xl md:text-4xl font-bold text-light-text-primary dark:text-dark-text-primary mb-8 flex items-center gap-3">
                    <Icon name="ph:flow-arrow" class="w-8 h-8 dark:text-yellow-500 text-primary-500" />
                    User Flow
                </h2>
                <div class="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-2xl p-8 border border-light-border-primary dark:border-dark-border-primary overflow-hidden">
                    <p class="text-lg text-light-text-secondary dark:text-dark-text-secondary mb-8 leading-relaxed">
                        {{ infoProject.userFlow.description }}
                    </p>
                    <div class="relative group">
                        <div class="absolute -inset-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                        <NuxtImg
                            :src="infoProject.userFlow.image"
                            alt="User Flow Diagram"
                            class="relative w-full h-auto rounded-xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>

            <!-- Architecture Design Section -->
            <section v-if="infoProject.arquitectureDesign" class="animate-slide-up" style="animation-delay: 0.4s">
                <h2 class="text-3xl md:text-4xl font-bold text-light-text-primary dark:text-dark-text-primary mb-8 flex items-center gap-3">
                    <Icon name="ph:git-merge-light" class="w-8 h-8 dark:text-yellow-500 text-primary-500" />
                    Arquitectura de Diseño
                </h2>
                <div class="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-2xl p-8 border border-light-border-primary dark:border-dark-border-primary overflow-hidden">
                    <p class="text-lg text-light-text-secondary dark:text-dark-text-secondary mb-8 leading-relaxed">
                        {{ infoProject.arquitectureDesign.description }}
                    </p>
                    <div class="relative group">
                        <div class="absolute -inset-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                        <NuxtImg
                            :src="infoProject.arquitectureDesign.image"
                            alt="Arquitectura de diseño del proyecto"
                            class="relative w-full h-auto rounded-xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>

            <!-- Crazy Eights Section -->
            <section v-if="infoProject.crazyEights" class="animate-slide-up" style="animation-delay: 0.45s">
                <h2 class="text-3xl md:text-4xl font-bold text-light-text-primary dark:text-dark-text-primary mb-8 flex items-center gap-3">
                    <Icon name="ph:lightning" class="w-8 h-8 dark:text-yellow-500 text-primary-500" />
                    Crazy Eights
                </h2>
                <div class="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-2xl p-8 border border-light-border-primary dark:border-dark-border-primary">
                    <p class="text-lg text-light-text-secondary dark:text-dark-text-secondary mb-8 leading-relaxed">
                        {{ infoProject.crazyEights.description }}
                    </p>
                    <div class="grid md:grid-cols-2 gap-6">
                        <div v-for="(img, index) in infoProject.crazyEights.image" :key="index" class="relative group">
                            <div class="absolute -inset-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                            <NuxtImg
                                :src="img"
                                :alt="`Crazy Eight sketch ${index + 1}`"
                                class="relative w-full h-auto rounded-xl shadow-lg transform group-hover:scale-[1.02] transition-transform duration-500"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <!-- Wireframes Section -->
            <section v-if="infoProject.wireframes && infoProject.wireframes.image.length" class="animate-slide-up" style="animation-delay: 0.5s">
                <h2 class="text-3xl md:text-4xl font-bold text-light-text-primary dark:text-dark-text-primary mb-8 flex items-center gap-3">
                    <Icon name="ph:ruler" class="w-8 h-8 dark:text-yellow-500 text-primary-500" />
                    Wireframes
                </h2>
                <div class="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-2xl p-8 border border-light-border-primary dark:border-dark-border-primary mb-8">
                    <p class="text-lg text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                        {{ infoProject.wireframes.description }}
                    </p>
                </div>
                <div class="grid grid-cols-1 gap-8">
                    <div v-for="(wireframe, index) in infoProject.wireframes.image" :key="index"
                        class="group relative bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-2xl p-6 border border-light-border-primary dark:border-dark-border-primary overflow-hidden hover:border-primary-400 dark:hover:border-primary-600 transition-all duration-300">
                        
                        <div class="absolute -inset-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                        
                        <div class="relative">
                            <div class="text-center mb-4">
                                <p class="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary">Wireframe {{ index + 1 }}</p>
                            </div>
                            <div class="overflow-hidden rounded-xl">
                                <NuxtImg
                                    :src="wireframe"
                                    :alt="`Wireframe ${index + 1}`"
                                    class="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Low Fidelity Section -->
            <section v-if="infoProject.lowFidelity" class="animate-slide-up" style="animation-delay: 0.55s">
                <h2 class="text-3xl md:text-4xl font-bold text-light-text-primary dark:text-dark-text-primary mb-8 flex items-center gap-3">
                    <Icon name="ph:sketch-logo" class="w-8 h-8 dark:text-yellow-500 text-primary-500" />
                    Prototipo de Baja Fidelidad
                </h2>
                <div class="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-2xl p-8 border border-light-border-primary dark:border-dark-border-primary overflow-hidden">
                    <p class="text-lg text-light-text-secondary dark:text-dark-text-secondary mb-8 leading-relaxed">
                        {{ infoProject.lowFidelity.description }}
                    </p>
                    <div class="relative group">
                        <div class="absolute -inset-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                        <NuxtImg
                            :src="infoProject.lowFidelity.image"
                            alt="Low Fidelity Prototype"
                            class="relative w-full h-auto rounded-xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>

            <!-- Usability Testing Section -->
            <section v-if="infoProject.usabilityTesting" class="animate-slide-up" style="animation-delay: 0.6s">
                <h2 class="text-3xl md:text-4xl font-bold text-light-text-primary dark:text-dark-text-primary mb-8 flex items-center gap-3">
                    <Icon name="ph:test-tube" class="w-8 h-8 dark:text-yellow-500 text-primary-500" />
                    Pruebas de Usabilidad
                </h2>
                <div class="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-2xl p-8 border border-light-border-primary dark:border-dark-border-primary mb-8">
                    <p class="text-lg text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                        {{ infoProject.usabilityTesting.description }}
                    </p>
                </div>

                <!-- Testing Questions -->
                <div class="grid md:grid-cols-3 gap-6 mb-8">
                    <!-- Usability Questions -->
                    <div class="bg-gradient-to-br from-white to-primary-200 dark:from-dark-bg-secondary dark:to-dark-bg-tertiary rounded-2xl p-6 border border-light-border-primary dark:border-dark-border-primary">
                        <h3 class="text-lg font-semibold text-primary-800 dark:text-primary-400 mb-4">Usabilidad</h3>
                        <ul class="space-y-3">
                            <li v-for="(question, index) in infoProject.usabilityTesting.designUsabilityTesting.questions" :key="index"
                                class="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                                {{ question }}
                            </li>
                        </ul>
                    </div>

                    <!-- Design Questions -->
                    <div class="bg-gradient-to-br from-white to-primary-200 dark:from-dark-bg-secondary dark:to-dark-bg-tertiary rounded-2xl p-6 border border-light-border-primary dark:border-dark-border-primary">
                        <h3 class="text-lg font-semibold text-primary-800 dark:text-primary-400 mb-4">Diseño</h3>
                        <ul class="space-y-3">
                            <li v-for="(question, index) in infoProject.usabilityTesting.designUsabilityTesting.designedUsabilityTesting" :key="index"
                                class="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                                {{ question }}
                            </li>
                        </ul>
                    </div>

                    <!-- Functional Questions -->
                    <div class="bg-gradient-to-br from-white to-primary-200 dark:from-dark-bg-secondary dark:to-dark-bg-tertiary rounded-2xl p-6 border border-light-border-primary dark:border-dark-border-primary">
                        <h3 class="text-lg font-semibold text-primary-800 dark:text-primary-400 mb-4">Funcionalidad</h3>
                        <ul class="space-y-3">
                            <li v-for="(question, index) in infoProject.usabilityTesting.designUsabilityTesting.funcionalAndUtilityQuestions" :key="index"
                                class="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                                {{ question }}
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Testing Image -->
                <div class="relative group bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-2xl p-6 border border-light-border-primary dark:border-dark-border-primary overflow-hidden">
                    <div class="absolute -inset-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                    <div class="relative">
                        <NuxtImg
                            :src="infoProject.usabilityTesting.image"
                            alt="Usability Testing Results"
                            class="w-full h-auto rounded-xl shadow-lg transform group-hover:scale-[1.02] transition-transform duration-500"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>

            <!-- Mockups Section -->
            <section v-if="infoProject.mockups && infoProject.mockups.imgs.length" class="animate-slide-up" style="animation-delay: 0.65s">
                <h2 class="text-3xl md:text-4xl font-bold text-light-text-primary dark:text-dark-text-primary mb-8 flex items-center gap-3">
                    <Icon name="ph:paint-brush" class="w-8 h-8 dark:text-yellow-500 text-primary-500" />
                    Mockups Finales
                </h2>
                <div class="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-2xl p-8 border border-light-border-primary dark:border-dark-border-primary mb-8">
                    <p class="text-lg text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                        {{ infoProject.mockups.description }}
                    </p>
                </div>
                <div class="grid grid-cols-1 gap-8">
                    <div v-for="(mockup, index) in infoProject.mockups.imgs" :key="index"
                        class="group relative bg-gradient-to-br from-light-bg-secondary to-light-bg-tertiary dark:from-dark-bg-secondary dark:to-dark-bg-tertiary rounded-2xl p-6 border border-light-border-primary dark:border-dark-border-primary overflow-hidden hover:border-accent-400 dark:hover:border-accent-600 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                        
                        <!-- Gradient glow effect -->
                        <div class="absolute -inset-2 bg-gradient-to-r from-accent-500 to-primary-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                        
                        <div class="relative">
                            <div class="text-center mb-4">
                                <p class="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary">Mockup {{ index + 1 }}</p>
                            </div>
                            <div class="overflow-hidden rounded-xl">
                                <NuxtImg
                                    :src="mockup"
                                    :alt="`Mockup ${index + 1}`"
                                    class="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        <!-- Corner decoration -->
                        <div class="absolute top-4 right-4 w-3 h-3 bg-accent-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                </div>

                <!-- Conclusion -->
                <div v-if="infoProject.mockups.conclusion" class="mt-8 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-dark-bg-secondary dark:to-dark-bg-tertiary rounded-2xl p-8 border border-light-border-primary dark:border-dark-border-primary">
                    <h3 class="text-xl font-semibold text-primary-800 dark:text-primary-400 mb-4">Conclusión</h3>
                    <p class="text-lg text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                        {{ infoProject.mockups.conclusion }}
                    </p>
                </div>
            </section>

            <!-- Call to Action / Footer Section -->
            <section class="animate-slide-up" style="animation-delay: 0.7s">
                <div class="relative overflow-hidden bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 rounded-2xl p-12 text-center">
                    <!-- Animated background pattern -->
                    <div class="absolute inset-0 opacity-10">
                        <div class="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse-slow"></div>
                        <div class="absolute bottom-0 right-0 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse-slow" style="animation-delay: 1.5s"></div>
                    </div>
                    
                    <div class="relative z-10">
                        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
                            ¿Te gustó este proyecto?
                        </h2>
                        <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                            Explora más de mi trabajo y descubre cómo puedo ayudarte a crear experiencias digitales excepcionales.
                        </p>
                        <NuxtLink to="/projects" 
                            class="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl">
                            <span>Ver más proyectos</span>
                            <span class="text-xl">→</span>
                        </NuxtLink>
                    </div>
                </div>
            </section>

        </main>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const aboutProject = ref({
    projectType: 'Plataforma de denuncia ciudadana, servicios públicos, mala administración',
    contribution: 'UI/UX Design, Prototipado, Investigación de usuarios',
    myRole: 'UI/UX Designer',
    timeline: 'January 2024 - February 2024',
    title: 'Citizen Complaint',
    image: '/img/citizen/955shots_so.webp',
    description: 'Denuncia ciudadana Benito Juárez es una App para que cada ciudadano pueda presentar su inconformidad sobre un servicio público. La plataforma facilita el proceso de reportar problemas relacionados con servicios municipales, infraestructura y administración pública.'
})

const infoProject = ref({
    background: {
        introduction: 'Denuncia ciudadana Benito Juárez es una App para que cada ciudadano pueda presentar su inconformidad sobre un servicio publico.',
        images: ['/img/citizen/440shots_so.webp', '/img/citizen/965shots_so.webp']
    },
    research: {
        method:[
            'User Interviews',
            'Field Research'
        ],
        goals: 'Se entrevistaron 15 personas y se hicieron las preguntas que se presentan en la imagen, para conocer si habían hecho alguna denuncia y cual es el proceso para hacerla.',
        result: 'Son pocas las personas que han hecho alguna denuncia, para dar a conocer su inconformidad lo comentan entre ciudadanos pero nunca a la autoridad correspondiente, también no saben a quien acudir.',
        image: '/img/citizen/Untitled.webp',
        painPointsImage: '/img/citizen/U2.webp',
        imgMeme: '/img/citizen/Untitled3.webp',
    },
    personasCreation: ['/img/citizen/Untitled4.webp', '/img/citizen/Untitled5.webp' ],
    userJourneyMap: {
        description: 'Después de comprender las necesidades de los usuarios  creamos los temas para poder sacar ideas de los diseños que mas adelante lograron responder puntualmente  a las necesidades de los usuarios.',
        image: '/img/citizen/Untitled6.webp',
    },
    userFlow: {
        description: 'Decidimos recrear todo el proceso que un usuario hace para realizar una denuncia, al igual sacamos ideas de como resolveriamos puntualmente esos procesos.',
        image: '/img/citizen/Untitled7.webp',
    },
    arquitectureDesign: {
        description: 'Una vez tenidos en cuenta todos los procesos y temas, generamos la arquitectura de diseño para organizar que información va en cada vista y como se conectaran entre ellas.',
        image: '/img/citizen/Untitled8.webp',
    },
    crazyEights: {
        description: 'Finalmente para tener un boceto guia de hacia donde dirigiriamos nuestro esfuerzo sobre el diseño de interfaz hicimos el famoso ejercicio crazy eight que explora las ideas de diseño que puede tomar nuestra interfaz y toma lo mejor de cada una para finalmente tener un diseño final.',
        image:[ '/img/citizen/mj87fuga88a2a2am77za.webp','/img/citizen/dhikb299lmbc6quwid9c.webp'],
    },
    wireframes: {
        description: 'Mejoramos espacios, formas y contenido  al digitalizar los wireframes.',
        image: ['/img/citizen/jgnzjgmdlptb2pia3dd7.webp', '/img/citizen/woejksa8awhwkqgahiza.webp','/img/citizen/qnls9ljdtivzppj3zdim.webp'],
    },
    lowFidelity: {
        description: 'Aclaramos visiblemente los enlaces y acciones internas dentro del diseño para luego iteramos internamente en el equipo y corregimos algunas conexiones internas.',
        image: '/img/citizen/ww4zptfakcypo53cwqoe.webp'
    },
    usabilityTesting: {
        description: 'Para finalizar la primera etapa quisimos encuestar a los usuarios sobre la plataforma y obtener retroalimentaciones como observar que tan facil o dificil era para los usuarios navegar. Durante la entrevista aprendimos que realmente fue facil e intuitivo para el usuario sin embargo algunos elementos como el texto necesitaban contexto a pesar de ya tener una idea de para que servían. Iteramos sobre el Wireframes y resolvimos el aviso. preguntas de  Indicador Clave de Rendimiento : Son medidas cuantificables utilizadas para evaluar el éxito de una organización, proyecto o actividad en función de sus objetivos.',
        image: '/img/citizen/ww4zptfakcypo53cwqoe.webp',
        designUsabilityTesting: {
            questions: ['a. ¿Qué tan fácil fue para ti entender el propósito de la plataforma de denuncia ciudadana?','b. ¿Qué tan intuitiva fue la navegación en la plataforma?','c. ¿Encontraste algún problema técnico mientras usabas la plataforma?'],
            designedUsabilityTesting: ['a. ¿Te gustó el diseño general de la plataforma?','b. ¿Los elementos de la interfaz de usuario estaban claramente etiquetados?','c. ¿El flujo de trabajo en la plataforma fue lógico y coherente?'],
            funcionalAndUtilityQuestions: ['a. ¿Las funciones disponibles en la plataforma cumplieron tus expectativas?','b. ¿Consideras que la plataforma de denuncia ciudadana sería útil para resolver problemas comunitarios?','c. ¿Qué tan probable es que recomiendes esta plataforma a otras personas?']
        },
    },
    mockups: {
        description: 'Una ves afinado los Wireframes nos dedicamos a maquetar todos los elementos agregando colores, pesos, sombras,  tipografías etc.',
        imgs: ['/img/citizen/m31kst5csqoz8nfxxzqa.webp', '/img/citizen/fqxuwuhutqmfp864jrm5.webp', '/img/citizen/uj7ra1yrlof7tcxdmjvc.webp'],
        conclusion: 'Denuncia ciudadana Benito Juárez es una App para que cada ciudadano pueda presentar su inconformidad sobre un servicio publico.',
    }
})
</script>

<style scoped>
.container {
    max-width: 900px;
    margin: 2rem auto;
    padding: 20px;
}
</style>
