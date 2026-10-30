// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen, within } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { Projects } from './Projects'

afterEach(cleanup)

describe('Estudos de caso de projetos', () => {
  it('expõe estudos de caso por meio de details e summary nativos', () => {
    render(<Projects />)

    const summaries = screen.getAllByText('Explorar estudo de caso')
    expect(summaries).toHaveLength(2)

    for (const summary of summaries) {
      const details = summary.closest('details')
      expect(details?.open).toBe(false)
      fireEvent.click(summary.closest('summary')!)
      expect(details?.open).toBe(true)
    }
  })

  it('apresenta decisões do ZEUS Finance e links reais para evidências', () => {
    render(<Projects />)
    const article = screen.getByRole('heading', { name: 'ZEUS Finance' }).closest('article')!
    fireEvent.click(within(article).getByText('Explorar estudo de caso').closest('summary')!)

    expect(within(article).getByRole('heading', { name: 'Decisão técnica' })).toBeTruthy()
    expect(within(article).getByRole('heading', { name: 'Validação' })).toBeTruthy()
    const evidence = within(article).getByRole('link', { name: /Regras do dashboard/i })
    expect(evidence.getAttribute('href')).toBe(
      'https://github.com/GBLSLVA/zeus-finance/blob/main/server/services/dashboard-service.mjs',
    )
  })

  it('identifica a Horta Urbana como acadêmica sem inventar demo', () => {
    render(<Projects />)
    const article = screen.getByRole('heading', { name: 'Sistema de Gestão e Monitoramento de Horta Urbana' }).closest('article')!
    fireEvent.click(within(article).getByText('Explorar estudo de caso').closest('summary')!)

    expect(within(article).getByText(/ainda não há capturas reais/i)).toBeTruthy()
    expect(within(article).queryByRole('link')).toBeNull()
  })

  it('mantém o ZEUS Agent identificado como conceitual, sem estudo de caso inventado', () => {
    render(<Projects />)
    const article = screen.getByRole('heading', { name: 'ZEUS Agent' }).closest('article')!
    expect(within(article).getByText('Em desenvolvimento')).toBeTruthy()
    expect(within(article).queryByText('Explorar estudo de caso')).toBeNull()
  })
})
