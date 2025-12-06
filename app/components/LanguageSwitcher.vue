<template>
  <div class="relative" ref="dropdownRef">
    <button
      @click="toggleDropdown"
      class="flex items-center gap-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      :aria-label="$t('header.nav.language')"
    >
      <Icon name="ph:translate-bold" class="w-6 h-6 text-gray-700 dark:text-gray-300" />
      <span class="text-sm font-medium text-gray-700 dark:text-gray-300 hidden md:inline">
        {{ currentLocale.toUpperCase() }}
      </span>
    </button>

    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-1"
    >
      <div
        v-if="isOpen"
        class="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50"
      >
        <div class="py-1" role="menu" aria-orientation="vertical">
          <button
            v-for="locale in availableLocales"
            :key="locale.code"
            @click="switchLanguage(locale.code)"
            class="w-full text-left px-4 py-2 text-sm transition-colors flex items-center justify-between"
            :class="[
              currentLocale === locale.code
                ? 'bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-semibold'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            ]"
            role="menuitem"
          >
            <span>{{ locale.name }}</span>
            <Icon
              v-if="currentLocale === locale.code"
              name="ph:check-bold"
              class="w-4 h-4"
            />
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const { locale, locales } = useI18n()
const router = useRouter()

const isOpen = ref(false)
const dropdownRef = ref(null)

const currentLocale = computed(() => locale.value)

const availableLocales = computed(() => {
  return locales.value.map(loc => {
    if (typeof loc === 'string') {
      return { code: loc, name: loc.toUpperCase() }
    }
    return loc
  })
})

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const switchLanguage = async (newLocale) => {
  if (newLocale === locale.value) {
    isOpen.value = false
    return
  }

  // Change locale
  locale.value = newLocale
  
  // Close dropdown
  isOpen.value = false

  // Navigate to the same route with new locale
  const currentRoute = router.currentRoute.value
  await router.push({
    ...currentRoute,
    params: { ...currentRoute.params, locale: newLocale }
  })
}

const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>
