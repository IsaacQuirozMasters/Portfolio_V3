<template>
    <section>
        <!-- Overlay (fondo oscuro cuando el menú está abierto) -->
        <Transition name="fade">
            <div 
                v-if="isMenuOpen" 
                class="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                @click="toggleMenu"
            ></div>
        </Transition>

        <!-- Botones de contacto -->
        <Transition name="slide-up-stagger">
            <div v-if="isMenuOpen" class="fixed bottom-24 right-6 flex flex-col gap-3 z-50">
                <!-- WhatsApp -->
                <button
                    @click="openWhatsApp"
                    class="group flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:pr-6"
                    aria-label="Contactar por WhatsApp"
                >
                    <Icon name="ph:whatsapp-logo-fill" class="w-6 h-6" />
                    <span class="font-medium whitespace-nowrap">WhatsApp</span>
                </button>

                <!-- Llamada -->
                <button
                    @click="makeCall"
                    class="group flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:pr-6"
                    aria-label="Hacer llamada"
                >
                    <Icon name="ph:phone-fill" class="w-6 h-6" />
                    <span class="font-medium whitespace-nowrap">Llamar</span>
                </button>

                <!-- Email -->
                <button
                    @click="sendEmail"
                    class="group flex items-center gap-3 bg-purple-500 hover:bg-purple-600 text-white px-5 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:pr-6"
                    aria-label="Enviar correo"
                >
                    <Icon name="ph:envelope-fill" class="w-6 h-6" />
                    <span class="font-medium whitespace-nowrap">Correo</span>
                </button>
            </div>
        </Transition>

        <!-- Botón principal flotante -->
        <button
            class="fixed bottom-6 right-6 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 z-50 flex items-center justify-center w-14 h-14 hover:scale-110 group"
            :class="{ 'rotate-45': isMenuOpen }"
            @click="toggleMenu"
            aria-label="Menú de contacto"
        >
            <Transition name="icon-rotate" mode="out-in">
                <Icon 
                    v-if="!isMenuOpen" 
                    name="ph:chat-circle-dots-fill" 
                    class="w-7 h-7" 
                    key="chat"
                />
                <Icon 
                    v-else 
                    name="ph:x-bold" 
                    class="w-7 h-7" 
                    key="close"
                />
            </Transition>

            <!-- Ping animation cuando está cerrado -->
            <span 
                v-if="!isMenuOpen"
                class="absolute -inset-1 rounded-full bg-primary-400 opacity-75 animate-ping pointer-events-none"
            ></span>
        </button>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

// Configuración de contacto (actualiza con tu información)
const contactInfo = {
    phone: '+529985242217', // Formato internacional sin espacios
    whatsapp: '+529985242217', // Mismo formato
    email: 'isaacquirozmadrigal1@gmail.com'
}

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}

const openWhatsApp = () => {
    const message = encodeURIComponent('¡Hola! Me gustaría conectar contigo.')
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=${message}`, '_blank')
    isMenuOpen.value = false
}

const makeCall = () => {
    window.location.href = `tel:${contactInfo.phone}`
    isMenuOpen.value = false
}

const sendEmail = () => {
    const subject = encodeURIComponent('Contacto desde Portfolio')
    const body = encodeURIComponent('Hola Isaac,\n\nMe gustaría ponerme en contacto contigo.')
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`
    isMenuOpen.value = false
}
</script>

<style scoped>
/* Animaciones para el overlay */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* Animaciones para los botones de contacto */
.slide-up-stagger-enter-active {
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.slide-up-stagger-leave-active {
    transition: all 0.3s ease;
}

.slide-up-stagger-enter-from {
    opacity: 0;
    transform: translateY(20px);
}

.slide-up-stagger-leave-to {
    opacity: 0;
    transform: translateY(10px) scale(0.9);
}

/* Animación del icono */
.icon-rotate-enter-active,
.icon-rotate-leave-active {
    transition: all 0.2s ease;
}

.icon-rotate-enter-from {
    opacity: 0;
    transform: rotate(-90deg) scale(0.8);
}

.icon-rotate-leave-to {
    opacity: 0;
    transform: rotate(90deg) scale(0.8);
}

/* Efecto de rotación del botón principal */
button.rotate-45 {
    transform: rotate(45deg);
}
</style>