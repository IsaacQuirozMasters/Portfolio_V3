// Registration-mark cursor: a fixed ring that snaps to cover whatever
// `v-magnet` element the pointer enters. Singleton state because a page
// mounts exactly one <MagneticCursor /> overlay that every directive
// instance below talks to.
const cursorEl = ref<HTMLElement | null>(null)

const isEnabled = () => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(hover: hover)').matches
    && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

const moveTo = (e: MouseEvent) => {
  const el = cursorEl.value
  if (!el) return
  el.style.transform = `translate(${e.clientX - 17}px, ${e.clientY - 17}px)`
}

const snapTo = (target: HTMLElement) => {
  const el = cursorEl.value
  if (!el) return
  const r = target.getBoundingClientRect()
  el.style.opacity = '1'
  el.style.width = `${r.width + 10}px`
  el.style.height = `${r.height + 10}px`
  el.style.borderRadius = r.height > 90 ? '2px' : '999px'
  el.style.transform = `translate(${r.left - 5}px, ${r.top - 5}px)`
}

const release = () => {
  const el = cursorEl.value
  if (el) el.style.opacity = '0'
}

export const useMagneticCursor = () => {
  // Broad areas (the dateline rail, the project grid) only need the cursor
  // to trail the pointer smoothly; it snaps only over `v-magnet` targets.
  const registerScope = (el: HTMLElement) => {
    if (!isEnabled()) return () => {}
    el.addEventListener('mousemove', moveTo)
    return () => el.removeEventListener('mousemove', moveTo)
  }

  const registerTarget = (el: HTMLElement) => {
    if (!isEnabled()) return () => {}
    const enter = () => snapTo(el)
    el.addEventListener('mousemove', moveTo)
    el.addEventListener('mouseenter', enter)
    el.addEventListener('mouseleave', release)
    return () => {
      el.removeEventListener('mousemove', moveTo)
      el.removeEventListener('mouseenter', enter)
      el.removeEventListener('mouseleave', release)
    }
  }

  return { cursorEl, isEnabled, registerScope, registerTarget }
}
