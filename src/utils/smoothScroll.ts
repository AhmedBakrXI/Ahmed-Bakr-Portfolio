/**
 * Easing function: cubic ease-in-out
 */
function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

/**
 * Smooth scroll to an element with easing animation
 * @param target - Target element or element ID
 * @param duration - Animation duration in ms (default 800)
 * @param easing - Easing function (default easeInOutCubic)
 */
export function smoothScrollTo(
  target: HTMLElement | string,
  duration = 800,
  easing = easeInOutCubic
) {
  const element =
    typeof target === 'string' ? document.getElementById(target) : target

  if (!element) return

  const startY = window.scrollY
  const targetY = element.getBoundingClientRect().top + window.scrollY
  const distance = targetY - startY
  let startTime: number | null = null

  function animate(currentTime: number) {
    if (startTime === null) startTime = currentTime
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    const ease = easing(progress)

    window.scrollTo(0, startY + distance * ease)

    if (progress < 1) {
      requestAnimationFrame(animate)
    }
  }

  requestAnimationFrame(animate)
}
