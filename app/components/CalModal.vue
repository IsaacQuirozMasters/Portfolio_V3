<template>
  <Teleport to="body">
    <Transition name="cal-modal-fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
        tabindex="-1"
        @keydown.esc="close"
      >
        <!-- Backdrop -->
        <div
          class="absolute inset-0 bg-black/65 backdrop-blur-md transition-opacity"
          @click="close"
        />

        <!-- Modal Box -->
        <div
          class="relative z-10 flex h-[92vh] max-h-[780px] w-full max-w-[980px] flex-col overflow-hidden rounded-2xl border border-[var(--color-divider)] bg-[var(--color-bg)] shadow-2xl transition-all"
          style="color: var(--color-text)"
        >
          <!-- Header -->
          <div class="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--color-divider)] px-6 py-4">
            <div class="flex items-center gap-3">
              <span class="h-3 w-3 rounded-full bg-[var(--color-accent)] animate-pulse" />
              <span class="font-serif text-lg font-semibold tracking-tight">
                {{ title || $t('home.contactPage.footer.scheduleCta') }}
              </span>
            </div>

            <!-- Duration Selector Tabs -->
            <div class="flex items-center gap-1.5 rounded-full border border-[var(--color-divider)] bg-[var(--color-surface)] p-1 text-xs">
              <button
                v-magnet
                type="button"
                class="rounded-full px-3 py-1 font-medium transition-all cursor-pointer"
                :class="activeDuration === '15min' ? 'bg-[var(--color-accent)] text-white shadow-sm' : 'text-[var(--color-neutral-700)] hover:text-[var(--color-text)]'"
                @click="setDuration('15min')"
              >
                15 min
              </button>
              <button
                v-magnet
                type="button"
                class="rounded-full px-3 py-1 font-medium transition-all cursor-pointer"
                :class="activeDuration === '30min' ? 'bg-[var(--color-accent)] text-white shadow-sm' : 'text-[var(--color-neutral-700)] hover:text-[var(--color-text)]'"
                @click="setDuration('30min')"
              >
                30 min
              </button>
            </div>

            <button
              v-magnet
              type="button"
              class="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-lg transition-colors hover:bg-black/10 dark:hover:bg-white/10"
              aria-label="Cerrar modal"
              @click="close"
            >
              <Icon name="ph:x-bold" class="h-5 w-5" />
            </button>
          </div>

          <!-- Body Container -->
          <div class="relative flex-1 overflow-hidden bg-white dark:bg-[#121412]">
            <div
              v-if="loading"
              class="absolute inset-0 flex items-center justify-center bg-[var(--color-bg)] text-sm"
              style="color: var(--color-neutral-700)"
            >
              <div class="flex flex-col items-center gap-2">
                <Icon name="ph:spinner-gap-bold" class="h-7 w-7 animate-spin text-[var(--color-accent)]" />
                <span>Cargando calendario de Cal.com…</span>
              </div>
            </div>

            <iframe
              :key="activeCalUrl"
              :src="activeCalUrl"
              class="h-full w-full border-0"
              title="Cal.com scheduling widget"
              @load="loading = false"
            />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  calLink: {
    type: String,
    default: 'isaac-quiroz-madrigal-pj3g6k'
  },
  title: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue', 'close'])

const colorMode = useColorMode()
const loading = ref(true)
const activeDuration = ref('15min')

const isOpen = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})

const baseHandle = computed(() => {
  let clean = props.calLink.replace(/^https?:\/\/cal\.com\//, '').replace(/\/+$/, '')
  clean = clean.replace(/\/(15min|30min)$/, '')
  return clean || 'isaac-quiroz-madrigal-pj3g6k'
})

const activeCalUrl = computed(() => {
  const isNight = colorMode.value === 'dark'
  const link = `${baseHandle.value}/${activeDuration.value}`
  return `https://cal.com/${link}?embed=true&layout=month_view&theme=${isNight ? 'dark' : 'light'}`
})

const setDuration = (duration) => {
  if (activeDuration.value === duration) return
  loading.value = true
  activeDuration.value = duration
}

const close = () => {
  isOpen.value = false
  emit('close')
}

watch(isOpen, (val) => {
  if (val) loading.value = true
  if (import.meta.client) {
    document.body.style.overflow = val ? 'hidden' : ''
  }
})

onUnmounted(() => {
  if (import.meta.client) {
    document.body.style.overflow = ''
  }
})
</script>

<style scoped>
.cal-modal-fade-enter-active,
.cal-modal-fade-leave-active {
  transition: opacity 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.cal-modal-fade-enter-from,
.cal-modal-fade-leave-to {
  opacity: 0;
}
</style>
