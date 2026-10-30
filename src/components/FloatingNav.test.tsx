// @vitest-environment jsdom
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { FloatingNav } from './FloatingNav'

describe('FloatingNav', () => {
  let mobile = true
  let onMediaChange: ((event: MediaQueryListEvent) => void) | undefined

  beforeEach(() => {
    mobile = true
    onMediaChange = undefined

    vi.stubGlobal('matchMedia', (query: string) => {
      if (query !== '(max-width: 720px)') {
        throw new Error(`Unexpected media query: ${query}`)
      }
      return {
        media: query,
        get matches() {
          return mobile
        },
        addEventListener: (_type: string, listener: (event: MediaQueryListEvent) => void) => {
          onMediaChange = listener
        },
        removeEventListener: () => {
          onMediaChange = undefined
        },
      } as unknown as MediaQueryList
    })

    vi.stubGlobal('IntersectionObserver', class {
      observe() {}
      disconnect() {}
      unobserve() {}
    })
  })

  afterEach(() => {
    cleanup()
    vi.unstubAllGlobals()
  })

  it('keeps the closed mobile menu inert and reports the collapsed state', () => {
    render(<FloatingNav />)
    const toggle = screen.getByRole('button', { name: 'Abrir menu' })
    const nav = document.getElementById('floating-nav-menu')

    expect(toggle.getAttribute('aria-expanded')).toBe('false')
    expect(toggle.getAttribute('aria-controls')).toBe(nav?.id)
    expect(nav?.hasAttribute('inert')).toBe(true)
  })

  it('opens the mobile menu and makes its links interactive', () => {
    render(<FloatingNav />)
    fireEvent.click(screen.getByRole('button', { name: 'Abrir menu' }))

    expect(screen.getByRole('button', { name: 'Fechar menu' }).getAttribute('aria-expanded')).toBe('true')
    expect(document.getElementById('floating-nav-menu')?.hasAttribute('inert')).toBe(false)
    expect(screen.getByRole('link', { name: 'Projetos' }).getAttribute('href')).toBe('#projects')
  })

  it('closes with Escape and restores focus to the toggle', () => {
    render(<FloatingNav />)
    fireEvent.click(screen.getByRole('button', { name: 'Abrir menu' }))
    screen.getByRole('link', { name: 'Sobre' }).focus()

    fireEvent.keyDown(document, { key: 'Escape' })

    const toggle = screen.getByRole('button', { name: 'Abrir menu' })
    expect(document.activeElement).toBe(toggle)
    expect(toggle.getAttribute('aria-expanded')).toBe('false')
    expect(document.getElementById('floating-nav-menu')?.hasAttribute('inert')).toBe(true)
  })

  it('closes when selecting an anchor or clicking outside', () => {
    render(<FloatingNav />)
    fireEvent.click(screen.getByRole('button', { name: 'Abrir menu' }))
    const contact = screen.getByRole('link', { name: 'Contato' })
    expect(contact.getAttribute('href')).toBe('#contact')
    fireEvent.click(contact)
    expect(document.getElementById('floating-nav-menu')?.hasAttribute('inert')).toBe(true)

    fireEvent.click(screen.getByRole('button', { name: 'Abrir menu' }))
    fireEvent.pointerDown(document.body)
    expect(document.getElementById('floating-nav-menu')?.hasAttribute('inert')).toBe(true)
  })

  it('keeps desktop links accessible and resets the menu on breakpoint change', () => {
    mobile = false
    render(<FloatingNav />)
    expect(document.getElementById('floating-nav-menu')?.hasAttribute('inert')).toBe(false)

    act(() => {
      mobile = true
      onMediaChange?.({ matches: true } as MediaQueryListEvent)
    })
    expect(document.getElementById('floating-nav-menu')?.hasAttribute('inert')).toBe(true)

    fireEvent.click(screen.getByRole('button', { name: 'Abrir menu' }))
    act(() => {
      mobile = false
      onMediaChange?.({ matches: false } as MediaQueryListEvent)
    })

    expect(document.getElementById('floating-nav-menu')?.hasAttribute('inert')).toBe(false)
    expect(screen.getByRole('button', { name: 'Abrir menu' }).getAttribute('aria-expanded')).toBe('false')
  })
})
