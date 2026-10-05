import { useEffect, useState } from 'react'

const links = [
  { href: '#home', label: 'Início' },
  { href: '#about', label: 'Sobre' },
  { href: '#projects', label: 'Projetos' },
  { href: '#contact', label: 'Contato' },
]

export function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState('#home')
  const [isScrolled, setIsScrolled] = useState(false)

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
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    const onScroll = () => {
      setIsScrolled(window.scrollY > 52)
    }

    onScroll()
    window.addEventListener('keydown', closeOnEscape)
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('keydown', closeOnEscape)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <header
      className={`floating-nav-shell ${isOpen ? 'is-open' : ''} ${isScrolled ? 'is-scrolled' : ''}`}
    >
      <button
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

      <nav className="floating-nav" aria-label="Navegação principal">
        <div className="nav-mark" aria-hidden="true">
          GS
        </div>

        <ul id="floating-nav-menu">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={active === link.href ? 'active' : ''}
                aria-current={active === link.href ? 'page' : undefined}
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
