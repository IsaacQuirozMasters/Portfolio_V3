<template>
    <div class="container min-h-screen bg-light-bg-primary dark:bg-dark-bg-primary transition-colors duration-300">
        <!-- SEO Meta Tags -->
        <Head>
            <Title>{{ aboutProject.title }} - Portfolio Isaac Quiroz</Title>
            <Meta name="description" :content="aboutProject.description" />
            <Meta name="keywords" content="UI/UX Design, Landing Page, Real Estate, Propiedades Cancun, Diseño Web" />
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
                            <span class="text-4xl">🎯</span>
                            Background
                        </h2>
                        <p class="text-lg text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                            {{ infoProject.Background }}
                        </p>
                    </div>
                </div>
            </section>

            <!-- Research Section -->
            <section class="animate-slide-up" style="animation-delay: 0.1s">
                <h2 class="text-3xl md:text-4xl font-bold text-light-text-primary dark:text-dark-text-primary mb-8 flex items-center gap-3">
                    <span class="text-4xl">🔍</span>
                    Investigación
                </h2>
                
                <div class="grid md:grid-cols-2 gap-8">
                    <!-- Research Overview -->
                    <div class="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-2xl p-8 border border-light-border-primary dark:border-dark-border-primary hover:border-primary-400 dark:hover:border-primary-600 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                        <h3 class="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-4">Proceso de Investigación</h3>
                        <p class="text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                            {{ infoProject.Research }}
                        </p>
                    </div>

                    <!-- Results -->
                    <div class="bg-gradient-to-br from-white to-primary-400 dark:from-dark-bg-secondary dark:to-dark-bg-tertiary rounded-2xl p-8 border border-light-border-primary dark:border-dark-border-primary hover:border-accent-400 dark:hover:border-accent-600 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                        <h3 class="text-xl font-semibold text-primary-900 dark:text-primary-400 mb-4">Resultados Clave</h3>
                        <p class="text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                            {{ infoProject.resultInvestigation }}
                        </p>
                    </div>
                </div>

                <!-- Pain Points -->
                <div class="mt-8 bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-2xl p-8 border border-light-border-primary dark:border-dark-border-primary">
                    <h3 class="text-2xl font-semibold text-light-text-primary dark:text-dark-text-primary mb-6 flex items-center gap-2">
                        <Icon name="ph:bandaids-fill" class="w-6 h-6 dark:text-yellow-500 text-primary-500" />
                        Puntos de Dolor
                    </h3>
                    <ul class="space-y-4">
                        <li v-for="(punto, index) in infoProject.puntosDeDolor" :key="index" 
                            class="flex items-start gap-4 p-4 rounded-xl bg-light-bg-tertiary dark:bg-dark-bg-tertiary hover:bg-light-bg-hover dark:hover:bg-dark-bg-hover transition-colors duration-200">
                            <span class="flex-shrink-0 w-8 h-8 rounded-full bg-primary-700 dark:bg-primary-600 text-white flex items-center justify-center font-semibold text-sm">
                                {{ index + 1 }}
                            </span>
                            <p class="text-light-text-secondary dark:text-dark-text-secondary flex-1">{{ punto }}</p>
                        </li>
                    </ul>
                </div>
            </section>

            <!-- Architecture Design Section -->
            <section v-if="infoProject.ArquitectureDesign" class="animate-slide-up" style="animation-delay: 0.2s">
                <h2 class="text-3xl md:text-4xl font-bold text-light-text-primary dark:text-dark-text-primary mb-8 flex items-center gap-3">
                   <Icon name="ph:git-merge-light" class="w-6 h-6 dark:text-yellow-500 text-primary-500" />
                    Arquitectura de Diseño
                </h2>
                <div class="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-2xl p-8 border border-light-border-primary dark:border-dark-border-primary overflow-hidden">
                    <p class="text-lg text-light-text-secondary dark:text-dark-text-secondary mb-8 leading-relaxed">
                        {{ infoProject.ArquitectureDesign.information }}
                    </p>
                    <div class="relative group">
                        <div class="absolute -inset-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                        <NuxtImg
                            :src="infoProject.ArquitectureDesign.image"
                            alt="Arquitectura de diseño del proyecto"
                            class="relative w-full h-auto rounded-xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>

            <!-- Personas Section -->
            <section v-if="infoProject.personas && infoProject.personas.length" class="animate-slide-up" style="animation-delay: 0.3s">
                <h2 class="text-3xl md:text-4xl font-bold text-light-text-primary dark:text-dark-text-primary mb-8 flex items-center gap-3">
                    <Icon name="ph:users" class="w-6 h-6 dark:text-yellow-500 text-primary-500" />
                    User Personas
                </h2>
                <div class="grid md:grid-cols-2 gap-8">
                    <div v-for="(persona, index) in infoProject.personas" :key="index"
                        class="group bg-gradient-to-br from-light-bg-secondary to-light-bg-tertiary dark:from-dark-bg-secondary dark:to-dark-bg-tertiary rounded-2xl p-8 border border-light-border-primary dark:border-dark-border-primary hover:border-primary-400 dark:hover:border-primary-600 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                        
                        <!-- Avatar Circle -->
                        <div class="mb-6 flex justify-center">
                            <div class="w-24 h-24 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                                {{ persona.name.charAt(0) }}
                            </div>
                        </div>

                        <!-- Personal Info -->
                        <h3 class="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary text-center mb-2">
                            {{ persona.name }}
                        </h3>
                        <div class="flex justify-center gap-4 mb-6 text-sm text-light-text-muted dark:text-dark-text-muted">
                            <span>{{ persona.age }} años</span>
                            <span>•</span>
                            <span>{{ persona.gender }}</span>
                        </div>

                        <!-- Ocupation -->
                        <div class="mb-6 p-4 bg-light-bg-primary dark:bg-dark-bg-primary rounded-xl">
                            <p class="text-xs font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wide mb-1">Ocupación</p>
                            <p class="text-light-text-secondary dark:text-dark-text-secondary">{{ persona.ocupation }}</p>
                        </div>

                        <!-- Objetivo -->
                        <div class="mb-6 p-4 bg-light-bg-primary dark:bg-dark-bg-primary rounded-xl">
                            <p class="text-xs font-semibold text-accent-600 dark:text-accent-400 uppercase tracking-wide mb-1">🎯 Objetivo</p>
                            <p class="text-light-text-secondary dark:text-dark-text-secondary">{{ persona.objetivo }}</p>
                        </div>

                        <!-- Dificultad -->
                        <div class="p-4 bg-light-bg-primary dark:bg-dark-bg-primary rounded-xl border-l-4 border-accent-500">
                            <p class="text-xs font-semibold text-accent-600 dark:text-accent-400 uppercase tracking-wide mb-1">⚡ Dificultad</p>
                            <p class="text-light-text-secondary dark:text-dark-text-secondary">{{ persona.dificultad }}</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Wireframes Section -->
            <section v-if="infoProject.wireframesImages && infoProject.wireframesImages.length" class="animate-slide-up" style="animation-delay: 0.4s">
                <h2 class="text-3xml md:text-4xl font-bold text-light-text-primary dark:text-dark-text-primary mb-8 flex items-center gap-3">
                    <Icon name="ph:ruler" class="w-6 h-6 dark:text-yellow-500 text-primary-500" />
                    Wireframes
                </h2>
                <div class="grid md:grid-cols-1 gap-8">
                    <div v-for="(wireframe, index) in infoProject.wireframesImages" :key="index"
                        class="group relative bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-2xl p-6 border border-light-border-primary dark:border-dark-border-primary overflow-hidden hover:border-primary-400 dark:hover:border-primary-600 transition-all duration-300">
                        
                        <div class="absolute -inset-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                        
                        <div class="relative">
                            <NuxtImg
                                :src="wireframe.src"
                                :alt="wireframe.alt"
                                class="w-full h-auto rounded-xl shadow-lg transform group-hover:scale-[1.03] transition-transform duration-500"
                                loading="lazy"
                            />
                            <div class="mt-4 text-center">
                                <p class="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary">{{ wireframe.alt }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Mockups Section -->
            <section v-if="infoProject.mockupsImages && infoProject.mockupsImages.length" class="animate-slide-up" style="animation-delay: 0.5s">
                <h2 class="text-3xl md:text-4xl font-bold text-light-text-primary dark:text-dark-text-primary mb-8 flex items-center gap-3">
                    <Icon name="ph:paint-brush" class="w-6 h-6 dark:text-yellow-500 text-primary-500" />
                    Mockups Finales
                </h2>
                <div class="grid grid-cols-1 gap-8">
                    <div v-for="(mockup, index) in infoProject.mockupsImages" :key="index"
                        class="group relative bg-gradient-to-br from-light-bg-secondary to-light-bg-tertiary dark:from-dark-bg-secondary dark:to-dark-bg-tertiary rounded-2xl p-6 border border-light-border-primary dark:border-dark-border-primary overflow-hidden hover:border-accent-400 dark:hover:border-accent-600 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                        
                        <!-- Gradient glow effect -->
                        <div class="absolute -inset-2 bg-gradient-to-r from-accent-500 to-primary-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                        
                        <div class="relative">
                                    <div class="text-center mb-4">
                                <p class="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary">{{ mockup.alt }}</p>
                            </div>
                            <div class="overflow-hidden rounded-xl">
                                <NuxtImg
                                    :src="mockup.src"
                                    :alt="mockup.alt"
                                    class="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        <!-- Corner decoration -->
                        <div class="absolute top-4 right-4 w-3 h-3 bg-accent-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                </div>
            </section>

            <!-- Call to Action / Footer Section -->
            <section class="animate-slide-up" style="animation-delay: 0.6s">
                <div class="relative overflow-hidden bg-gradient-to-r from-primary-500 via-pr to-primary-600 rounded-2xl p-12 text-center">
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
    projectType: 'Landing para una agencia inmobiliaria en cancun',
    contribution: 'UI/UX Design, Prototipado, Investigación de usuarios',
    myRole: 'UI/UX Designer',
    timeline: 'Enero 2024 - Marzo 2024',
    title: 'Propiedades Cancun Landing Page',
    image: '/img/propiedades/nvifz5egnosguvd2tmgp.webp',
    description: 'Implemente con un compañero una refactorización del diseño de una landing page de propiedades'
})

const infoProject = ref({
    Background: 'La idea surgió de la necesidad de mejorar la experiencia del usuario en la página web de una agencia inmobiliaria en Cancun. aquí implementamos el branding de la página más lujosa, intuitiva y profesional. Mejoramos el filtro principal para que desde ahí redireccione a propiedades más especificas.',
    TheProcess: 'The Process',
    Research: 'Investigación de usuarios, obtuvimos datos de personas que visitan, las que compran propiedades, las que buscan propiedades, las que alquilan propiedades. gracias a *google analitycs* pudimos identificar las personas que más interactuan con la página y las que más tiempo pasan en la página, la tasa de conversión de la página era de 10% y el tiempo de interacción era de 2 minutos.',
    resultInvestigation: 'Encontramos que los usuarios tienen una tendencia a buscar las propiedades mas exclusivas y seguras, también encontramos que los usuarios que compran propiedades son personas que tienen familias grandes y que quieren seguridad en su inversión como cercanía a la playa',
    puntosDeDolor: ['Las personas sienten que su inversión es peligrosa si no hay seguridad en las propiedades', 'Necesitan una plataforma que les ayude a encontrar propiedades seguras', 'quieren conocer la propiedad mediante imágenes y videos', 'es dificil contactarse con las agencias'],
    ArquitectureDesign: {
        information: 'Se planifico una arquitectura de landing page con un filtro principal que redirija a propiedades mas especificas',
        image: '/img/propiedades/flujo.webp'
    },
    personas: [{
        name: 'Felipe Gonzalez',
        age: 25,
        gender: 'Masculino',
        ocupation: 'Dueño de una empresa de marketing',
        objetivo: 'Buscar una propiedad segura para su familia',
        dificultad: 'No encontraba propiedades seguras por que no tenia tiempo de salir a buscar a lugares cercanos y no hay quien le de información sobre propiedades'
    },
    {
        name: 'Carlos Soza',
        age: 50,
        gender: 'Masculino',
        ocupation: 'Inversionista en propiedades',
        objetivo: 'Buscar una o mas propiedades en preventa seguras para su inversion',
        dificultad: 'A pesar de que tiene tiempo para buscar propiedades, se le dificulta contactarse con las agencias por que sus agendas estan llenas y no hay quien le ayude a buscar propiedades' 
    }],
    wireframesImages: [{
        alt: 'Home Page wireframe',
        src: '/img/propiedades/d0wqshmlmxphx1t2ksmv.webp'
    },
    {
        alt: 'Search List wireframe',
        src: '/img/propiedades/szdqif8boeewlzjji1ff.webp'
    }],
    mockupsImages: [{
        alt: 'Home Page mockup',
        src: '/img/propiedades/e9wxakci8jghkplabhhc.webp'
    },
    {
        alt: 'Search List mockup',
        src: '/img/propiedades/vmkkznqhyqwlkidcdvpp.webp'
    },
    {
        alt: 'Property Detail mockup',
        src: '/img/propiedades/h8k1gqrudeuhrwtwkyjg.webp'
    },{
        alt: 'Property Contact mockup',
        src: '/img/propiedades/wgjcjzt4otaaxzn2ipgl.webp'
    },{
        alt: 'Property About mockup',
        src: '/img/propiedades/vwzl4wciljwsqlyas4kl.webp'
    }],
})
</script>

<style scoped>
.container {
    max-width: 900px;
    margin: 2rem auto;
    padding: 20px;
}
</style>