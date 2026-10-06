import type { CSSProperties } from 'react'

const title =
  'Desenvolvedor de Software criando experiências digitais com código, produto e propósito.'

const titleLines = [
  { words: ['Desenvolvedor', 'de'], offset: 0 },
  { words: ['Software', 'criando'], offset: 2 },
  { words: ['experiências', 'digitais'], offset: 4 },
  { words: ['com', 'código,', 'produto'], offset: 6 },
  { words: ['e', 'propósito.'], offset: 9 },
]

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

        <h1 className="hero-title" aria-label={title}>
          {titleLines.map((line, lineIndex) => (
            <span className="hero-title-line" key={`hero-line-${lineIndex}`} aria-hidden="true">
              {line.words.map((word, wordIndex) => (
                <span
                  className="hero-word"
                  key={`${word}-${lineIndex}-${wordIndex}`}
                  style={{ '--word-index': line.offset + wordIndex } as CSSProperties}
                >
                  {word}
                </span>
              ))}
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
          <img
            src="/assets/hero.jpeg"
            alt="Gabriel Silva sorrindo em um retrato casual"
            loading="eager"
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
