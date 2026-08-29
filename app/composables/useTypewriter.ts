// Types [data-typewriter] headlines in one character at a time on scroll-in.
// A line marked [data-typewriter-after] waits for its previous sibling to
// finish (used to chain the two lines of the masthead name). Width is
// measured before the styles are applied and the HTML is never left at
// width:0, so a headline that never gets observed still renders in full.
export const initTypewriter = (root: ParentNode) => {
  const els = root.querySelectorAll<HTMLElement>('[data-typewriter]')
  if (!els.length) return

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const start = (el: HTMLElement, delay: number) => {
    const chars = (el.textContent || '').trim().length || 1
    const width = el.getBoundingClientRect().width
    if (!width) return
    Object.assign(el.style, {
      display: 'inline-block', overflow: 'hidden', whiteSpace: 'nowrap',
      verticalAlign: 'bottom', width: '0px',
    })
    el.classList.add('tw-caret')
    const duration = Math.max(650, chars * 105)
    const anim = el.animate(
      [{ width: '0px' }, { width: `${width}px` }],
      { duration, delay, easing: `steps(${chars}, end)`, fill: 'forwards' },
    )
    anim.finished.then(() => {
      el.style.width = ''
      el.style.animation = 'bs-caret .85s step-end 5'
      setTimeout(() => {
        el.classList.remove('tw-caret')
        el.style.animation = ''
      }, 4300)
    }).catch(() => {})
  }

  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue
      io.unobserve(entry.target)
      const el = entry.target as HTMLElement
      const after = el.hasAttribute('data-typewriter-after') ? el.previousElementSibling as HTMLElement | null : null
      const wait = after ? Math.max(650, (after.textContent || '').trim().length * 105) + 90 : 0
      start(el, wait)
    }
  }, { threshold: 0.55 })

  els.forEach((el) => io.observe(el))
}
