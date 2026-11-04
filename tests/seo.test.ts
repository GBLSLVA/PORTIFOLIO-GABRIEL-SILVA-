// @vitest-environment node
import { readFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

const root = process.cwd()
const html = readFileSync(resolve(root, 'index.html'), 'utf8')
const sitemap = readFileSync(resolve(root, 'public/sitemap.xml'), 'utf8')
const robots = readFileSync(resolve(root, 'public/robots.txt'), 'utf8')
const canonical = 'https://portfolio-gabriel-silva.up.railway.app/'

describe('Metadados de compartilhamento e SEO', () => {
  it('usa o mesmo endereço canônico no HTML, Open Graph e sitemap', () => {
    expect(html).toContain('<link rel="canonical" href="' + canonical + '"')
    expect(html).toContain('property="og:url" content="' + canonical + '"')
    expect(sitemap).toContain('<loc>' + canonical + '</loc>')
    expect(robots).toContain('Sitemap: ' + canonical + 'sitemap.xml')
  })

  it('inclui título, descrição, imagem real e favicon local', () => {
    expect(html).toContain('Desenvolvedor Full Stack Júnior')
    expect(html).toMatch(/<meta name="description" content="[^"]+"/)
    expect(html).toContain('name="twitter:card" content="summary"')
    expect(html).toContain('property="og:image" content="' + canonical + 'assets/hero.jpeg"')
    expect(existsSync(resolve(root, 'public/assets/hero.jpeg'))).toBe(true)
    expect(existsSync(resolve(root, 'public/favicon.svg'))).toBe(true)
  })

  it('publica JSON-LD válido com perfis profissionais verificáveis', () => {
    const script = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)
    expect(script).not.toBeNull()
    const data = JSON.parse(script![1])
    expect(data['@context']).toBe('https://schema.org')
    expect(data['@graph']).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          '@type': 'Person',
          name: 'Gabriel Silva',
          sameAs: expect.arrayContaining([
            'https://github.com/GBLSLVA',
            'https://www.linkedin.com/in/gabriel-silva-13ab4a116/',
          ]),
        }),
        expect.objectContaining({ '@type': 'WebSite', url: canonical }),
      ]),
    )
  })
})
