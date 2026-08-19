<template>
  <div class="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 pointer-events-auto">
    <div class="flex items-center p-1.5 bg-white/85 dark:bg-gray-900/85 backdrop-blur-xl border border-gray-200/80 dark:border-gray-700/80 shadow-2xl rounded-full transition-all duration-300 hover:shadow-blue-500/15">
      <button
        type="button"
        @click="handleSelect('Diseñador UX/UI')"
        class="flex items-center space-x-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300"
        :class="activeSection === 'Diseñador UX/UI'
          ? 'bg-[#304fff] text-white shadow-md shadow-blue-500/30 scale-[1.02]'
          : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/60 dark:hover:bg-gray-800/60'"
        aria-label="Ver perfil de Diseñador UX/UI"
      >
        <Icon name="ph:palette" size="16px" />
        <span>Diseñador UX/UI</span>
      </button>

      <button
        type="button"
        @click="handleSelect('Desarrollador')"
        class="flex items-center space-x-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300"
        :class="activeSection === 'Desarrollador'
          ? 'bg-[#304fff] text-white shadow-md shadow-blue-500/30 scale-[1.02]'
          : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/60 dark:hover:bg-gray-800/60'"
        aria-label="Ver perfil de Desarrollador"
      >
        <Icon name="ph:code" size="16px" />
        <span>Desarrollador</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  currentSection: {
    type: String,
    default: 'Diseñador UX/UI'
  },
  modelValue: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:currentSection', 'update:modelValue'])

const activeSection = computed(() => {
  return props.modelValue || props.currentSection || 'Diseñador UX/UI'
})

const handleSelect = (section) => {
  emit('update:currentSection', section)
  emit('update:modelValue', section)
}
</script>