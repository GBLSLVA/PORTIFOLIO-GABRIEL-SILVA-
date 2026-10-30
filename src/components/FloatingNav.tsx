import { useEffect, useRef, useState } from 'react'

const MOBILE_MENU_QUERY = '(max-width: 720px)'

const links = [
  { href: '#home', label: 'Início' },
  { href: '#about', label: 'Sobre' },
  { href: '#projects', label: 'Projetos' },
  { href: '#contact', label: 'Contato' },
]

export function FloatingNav() {
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia(MOBILE_MENU_QUERY).matches,
  )
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState('#home')
  const [isScrolled, setIsScrolled] = useState(false)
  const shellRef = useRef<HTMLElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const query = window.matchMedia(MOBILE_MENU_QUERY)
    const handleViewportChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches)
      setIsOpen(false)
    }

    query.addEventListener('change', handleViewportChange)
    return () => query.removeEventListener('change', handleViewportChange)
  }, [])

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter((section): section is Element => Boolean(section))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible?.target.id) {
          setActive(`#${visible.target.id}`)
        }
      },
      {
        rootMargin: '-25% 0px -60% 0px',
        threshold: [0.05, 0.2, 0.45, 0.7],
      },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 52)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!isMobile || !isOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      event.preventDefault()
      setIsOpen(false)
      toggleRef.current?.focus()
    }

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (event.target instanceof Node && !shellRef.current?.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', closeOnEscape)
    document.addEventListener('pointerdown', closeOnOutsideClick)
    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.removeEventListener('pointerdown', closeOnOutsideClick)
    }
  }, [isMobile, isOpen])

  return (
    <header
      ref={shellRef}
      className={`floating-nav-shell ${isOpen ? 'is-open' : ''} ${isScrolled ? 'is-scrolled' : ''}`}
    >
      <button
        ref={toggleRef}
        className="floating-nav-toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="floating-nav-menu"
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        id="floating-nav-menu"
        className="floating-nav"
        aria-label="Navegação principal"
        inert={isMobile && !isOpen}
      >
        <div className="nav-mark" aria-hidden="true">
          GS
        </div>

        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={active === link.href ? 'active' : ''}
                aria-current={active === link.href ? 'location' : undefined}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <span className="nav-status" aria-hidden="true">
          <i />
        </span>
      </nav>
    </header>
  )
}
