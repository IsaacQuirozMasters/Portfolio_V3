const PROJECT_ORDER = [
  '/projects/yiapp',
  '/projects/freelearn',
  '/projects/citizen',
  '/projects/otif',
  '/projects/propiedades',
  '/projects/front-end/propiedades',
  '/projects/front-end/virture-crm',
  '/projects/front-end/estancias',
  '/projects/front-end/zoo-app',
]

export const useProjectNav = () => {
  const route = useRoute()
  const localePath = useLocalePath()

  const nextProjectPath = computed(() => {
    const currentIndex = PROJECT_ORDER.findIndex((p) => route.path.endsWith(p))
    if (currentIndex === -1) return localePath(PROJECT_ORDER[0])
    const next = PROJECT_ORDER[(currentIndex + 1) % PROJECT_ORDER.length]
    return localePath(next)
  })

  return { nextProjectPath }
}
