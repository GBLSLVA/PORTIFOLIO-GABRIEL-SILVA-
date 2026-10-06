import type { CSSProperties } from 'react'
import { Base64Image } from './Base64Image'

const title =
  'Desenvolvedor de Software criando experiências digitais com código, produto e propósito.'

const titleWords = title.split(' ')

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-ambient" aria-hidden="true">
        <span className="hero-ambient-card hero-ambient-card--one">React</span>
        <span className="hero-ambient-card hero-ambient-card--two">Node.js</span>
        <span className="hero-ambient-card hero-ambient-card--three">C# / .NET</span>
      </div>

      <div className="hero-content">
        <p className="eyebrow hero-kicker">Gabriel Silva</p>

        <h1 aria-label={title}>
          {titleWords.map((word, index) => (
            <span
              className="hero-word"
              key={`${word}-${index}`}
              style={{ '--word-index': index } as CSSProperties}
              aria-hidden="true"
            >
              {word}
              {index < titleWords.length - 1 ? ' ' : ''}
            </span>
          ))}
        </h1>

        <div className="hero-footer">
          <p>
            React, JavaScript, Node.js, C#, SQL e projetos que continuam evoluindo.
          </p>
          <a href="#projects" className="text-link">
            Ver projetos <span aria-hidden="true">↘</span>
          </a>
        </div>

        <div className="hero-scroll-cue" aria-hidden="true">
          <span />
          <small>scroll</small>
        </div>
      </div>

      <figure className="hero-portrait" aria-label="Retrato de Gabriel Silva">
        <div className="hero-portrait-frame">
          <Base64Image
            parts={['/assets/hero-01.txt', '/assets/hero-02.txt', '/assets/hero-03.txt', '/assets/hero-04.txt', '/assets/hero-05.txt', '/assets/hero-06.txt']}
            alt="Gabriel Silva usando terno claro e gravata azul"
          />
        </div>
        <figcaption>
          <span>Software Developer</span>
          <strong>Gabriel Silva</strong>
        </figcaption>
      </figure>
    </section>
  )
}
