import { useEffect } from 'react'

export function MotionController() {
  useEffect(() => {
    const root = document.documentElement
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const revealTargets = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    // The Hero already has its own fade; all other main sections share an exit fade.
    const fadeSections = Array.from(
      document.querySelectorAll<HTMLElement>('main > section.section'),
    )

    if (reducedMotion) {
      revealTargets.forEach((target) => target.classList.add('is-visible'))
    } else {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return
            entry.target.classList.add('is-visible')
            revealObserver.unobserve(entry.target)
          })
        },
        {
          threshold: 0.14,
          rootMargin: '0px 0px -8% 0px',
        },
      )

      revealTargets.forEach((target) => revealObserver.observe(target))

      let frame = 0

      const updateMotion = () => {
        frame = 0
        const scrollY = window.scrollY
        const maxScroll = Math.max(
          1,
          document.documentElement.scrollHeight - window.innerHeight,
        )
        const progress = Math.min(1, Math.max(0, scrollY / maxScroll))

        root.style.setProperty('--scroll-progress', `${progress * 100}%`)
        root.style.setProperty('--hero-shift', `${Math.min(scrollY * 0.075, 72)}px`)
        root.style.setProperty(
          '--hero-copy-shift',
          `${Math.min(scrollY * 0.035, 34)}px`,
        )
        root.style.setProperty(
          '--hero-fade',
          String(Math.max(0.62, 1 - scrollY / 1250)),
        )

        // Dissolve sections only as they leave the top of the viewport.
        // This preserves full opacity while their content is being read.
        const fadeStart = window.innerHeight * 0.44
        const fadeEnd = window.innerHeight * 0.02
        fadeSections.forEach((section) => {
          const bottom = section.getBoundingClientRect().bottom
          const exitProgress = Math.min(
            1,
            Math.max(0, (fadeStart - bottom) / (fadeStart - fadeEnd)),
          )
          section.style.setProperty(
            '--section-exit-opacity',
            String(1 - exitProgress * 0.38),
          )
        })
      }

      const requestUpdate = () => {
        if (frame) return
        frame = window.requestAnimationFrame(updateMotion)
      }

      updateMotion()
      window.addEventListener('scroll', requestUpdate, { passive: true })
      window.addEventListener('resize', requestUpdate)

      return () => {
        revealObserver.disconnect()
        fadeSections.forEach((section) => {
          section.style.removeProperty('--section-exit-opacity')
        })
        window.removeEventListener('scroll', requestUpdate)
        window.removeEventListener('resize', requestUpdate)
        if (frame) window.cancelAnimationFrame(frame)
      }
    }
  }, [])

  return <span className="scroll-progress" aria-hidden="true" />
}
