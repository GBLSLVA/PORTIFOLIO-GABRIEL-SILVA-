// @vitest-environment jsdom
import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { Hero } from './Hero'

afterEach(cleanup)

describe('Hero para recrutadores', () => {
  it('apresenta a área de atuação e as tecnologias sem alterar o título', () => {
    render(<Hero />)
    expect(screen.getByText(/Desenvolvedor Full Stack Júnior/)).toBeTruthy()
    expect(screen.getByRole('heading', { level: 1 })).toBeTruthy()
    expect(screen.getByText(/React, TypeScript, Node.js e C#\/\.NET/)).toBeTruthy()
  })

  it('oferece caminhos imediatos para trabalhos e contato', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /Ver projetos/ }).getAttribute('href')).toBe('#projects')
    expect(screen.getByRole('link', { name: /Entrar em contato/ }).getAttribute('href')).toBe('#contact')
  })
})
