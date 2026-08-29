const STORAGE_KEY = 'night-edition'

export const useNightEdition = () => {
  const night = useState('night-edition', () => false)

  useHead({
    htmlAttrs: {
      'data-night': computed(() => (night.value ? 'on' : 'off')),
      class: computed(() => (night.value ? 'dark' : '')),
    },
  })

  const toggleNight = () => {
    night.value = !night.value
    if (import.meta.client) localStorage.setItem(STORAGE_KEY, night.value ? 'on' : 'off')
  }

  const initNight = () => {
    if (!import.meta.client) return
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'on') { night.value = true; return }
    if (saved === 'off') { night.value = false; return }
    night.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  return { night, toggleNight, initNight }
}
