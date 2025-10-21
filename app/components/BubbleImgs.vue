<template>
  <section class="relative w-full min-h-screen flex items-start justify-center py-16 px-4">
    <div class="items-center mx-auto">
      <div class="relative inline-block overflow-visible">
        <nuxt-img 
          src="/group.png" 
          alt="Bubble Image 1" 
          width="500" 
          height="500" 
          class="block"
        />
        <!-- Botón mitad dentro y mitad fuera de la imagen -->
        <button 
          class="absolute left-1/2 bottom-0 translate-y-3/4 w-28 h-28 md:w-32 md:h-32 rounded-full bg-[#304fff] hover:bg-blue-700 transition-all duration-300 shadow-xl flex items-center justify-center cursor-pointer hover:scale-105 text-white text-sm md:text-base font-medium z-20"
          aria-label="Más sobre mí"
        >
          <!-- Pulsing ring (fondo animado) -->
          <span aria-hidden="true" class="absolute -inset-2 rounded-full bg-blue-100 opacity-60 animate-ping pointer-events-none"></span>
          <!-- Filo estático para mejorar contraste -->
          <span aria-hidden="true" class="absolute -inset-1 rounded-full border-2 border-blue-100 opacity-90 pointer-events-none"></span>

          Más<br>sobre mí
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>