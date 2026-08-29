export type PortfolioEdition = 'design' | 'code'

const STORAGE_KEY = 'portfolio-edition'
const QUERY_KEY = 'edicion'
const QUERY_VALUES: Record<PortfolioEdition, string> = { design: 'diseno', code: 'codigo' }

export const useEdition = () => {
  const edition = useState<PortfolioEdition>('portfolio-edition', () => 'design')

  const setEdition = (next: PortfolioEdition) => {
    edition.value = next
    if (!import.meta.client) return
    localStorage.setItem(STORAGE_KEY, next)
    const url = new URL(window.location.href)
    url.searchParams.set(QUERY_KEY, QUERY_VALUES[next])
    window.history.replaceState(window.history.state, '', url)
  }

  // Deterministic from the URL alone — safe to call during setup (SSR and
  // client render the same result, so there is no hydration mismatch).
  const initEdition = (queryValue?: string | string[]) => {
    const q = Array.isArray(queryValue) ? queryValue[0] : queryValue
    if (q === QUERY_VALUES.code) edition.value = 'code'
    else if (q === QUERY_VALUES.design) edition.value = 'design'
  }

  // localStorage fallback when there's no query param — browser-only, so it
  // must run from onMounted (after hydration), same as useTheme's initTheme.
  const restoreEdition = (queryValue?: string | string[]) => {
    const q = Array.isArray(queryValue) ? queryValue[0] : queryValue
    if (q === QUERY_VALUES.code || q === QUERY_VALUES.design) return
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'design' || saved === 'code') edition.value = saved
  }

  return { edition, setEdition, initEdition, restoreEdition }
}
