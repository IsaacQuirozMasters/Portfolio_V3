<template>
  <div class="carousel-container">
    <div class="carousel-wrapper">
      <div 
        class="carousel-track"
        :style="{ transform: `translateX(-${currentIndex * slideWidth}%)` }"
      >
        <div 
          v-for="(item, index) in items" 
          :key="index"
          class="carousel-slide"
        >
          <div class="card">
            <div class="card-image">
              <img :src="item.image" :alt="item.title" />
            </div>
            <div class="card-content">
              <h3 class="card-title">{{ item.title }}</h3>
              <p class="card-description">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation Arrows -->
      <button 
        v-if="showNavigation"
        class="carousel-btn carousel-btn-prev" 
        @click="prev"
        :disabled="currentIndex === 0"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      
      <button 
        v-if="showNavigation"
        class="carousel-btn carousel-btn-next" 
        @click="next"
        :disabled="currentIndex >= maxIndex"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>

    <!-- Counter and Dots -->
    <div v-if="showControls" class="carousel-controls">
      <div class="carousel-counter">
        {{ currentIndex + 1 }} de {{ totalSlides }}
      </div>
      
      <div class="carousel-dots">
        <button
          v-for="(dot, index) in totalSlides"
          :key="index"
          class="dot"
          :class="{ active: index === currentIndex }"
          @click="goToSlide(index)"
          :aria-label="`Ir a diapositiva ${index + 1}`"
        ></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => []
  }
})

const currentIndex = ref(0)
const isMobile = ref(false)
const slideWidth = ref(100)

// Detectar si es mobile
const checkMobile = () => {
  isMobile.value = window.innerWidth < 768
  updateSlideWidth()
}

// Calcular ancho del slide según viewport
const updateSlideWidth = () => {
  if (isMobile.value) {
    slideWidth.value = 100 // 1 card por vista en mobile
  } else {
    slideWidth.value = 25 // 4 cards por vista en desktop (100/4)
  }
}

// Calcular total de slides/páginas
const totalSlides = computed(() => {
  if (isMobile.value) {
    return props.items.length
  } else {
    // En desktop, cada "slide" muestra 4 cards
    return Math.ceil(props.items.length / 4)
  }
})

// Calcular índice máximo
const maxIndex = computed(() => {
  return totalSlides.value - 1
})

// Mostrar controles (contador y dots)
const showControls = computed(() => {
  if (isMobile.value) {
    // En mobile: mostrar si hay más de 1 card
    return props.items.length > 1
  } else {
    // En desktop: mostrar si hay más de 4 cards
    return props.items.length > 4
  }
})

// Mostrar navegación (flechas)
const showNavigation = computed(() => {
  return showControls.value
})

// Navegación
const next = () => {
  if (currentIndex.value < maxIndex.value) {
    currentIndex.value++
  }
}

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

const goToSlide = (index) => {
  currentIndex.value = index
}

// Touch events para swipe en mobile
let touchStartX = 0
let touchEndX = 0

const handleTouchStart = (e) => {
  touchStartX = e.changedTouches[0].screenX
}

const handleTouchEnd = (e) => {
  touchEndX = e.changedTouches[0].screenX
  handleSwipe()
}

const handleSwipe = () => {
  if (touchStartX - touchEndX > 50) {
    next()
  }
  if (touchEndX - touchStartX > 50) {
    prev()
  }
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
  
  const track = document.querySelector('.carousel-track')
  if (track) {
    track.addEventListener('touchstart', handleTouchStart)
    track.addEventListener('touchend', handleTouchEnd)
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
  
  const track = document.querySelector('.carousel-track')
  if (track) {
    track.removeEventListener('touchstart', handleTouchStart)
    track.removeEventListener('touchend', handleTouchEnd)
  }
})
</script>

<style scoped>
.carousel-container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
}

.carousel-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
}

.carousel-track {
  display: flex;
  transition: transform 0.4s ease-in-out;
}

.carousel-slide {
  flex: 0 0 100%;
  padding: 10px;
  box-sizing: border-box;
}

@media (min-width: 768px) {
  .carousel-slide {
    flex: 0 0 25%;
  }
}

.card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

.card-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: #f0f0f0;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-content {
  padding: 20px;
}

.card-title {
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 10px 0;
  color: #333;
}

.card-description {
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  margin: 0;
}

/* Navigation Buttons */
.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  z-index: 10;
  color: #333;
}

.carousel-btn:hover:not(:disabled) {
  background: #f8f8f8;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.carousel-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.carousel-btn-prev {
  left: -24px;
}

.carousel-btn-next {
  right: -24px;
}

@media (max-width: 767px) {
  .carousel-btn-prev {
    left: 10px;
  }
  
  .carousel-btn-next {
    right: 10px;
  }
}

/* Controls */
.carousel-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.carousel-counter {
  font-size: 14px;
  color: #666;
  font-weight: 500;
}

.carousel-dots {
  display: flex;
  gap: 8px;
  align-items: center;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: #d1d5db;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.dot:hover {
  background: #9ca3af;
}

.dot.active {
  background: #3b82f6;
  width: 24px;
  border-radius: 4px;
}
</style>