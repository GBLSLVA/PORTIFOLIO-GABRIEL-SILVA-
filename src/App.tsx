import { FloatingNav } from './components/FloatingNav'
import { Hero } from './components/Hero'
import { MotionController } from './components/MotionController'
import { Projects } from './components/Projects'

function App() {
  return (
    <>
      <MotionController />
      <FloatingNav />

      <main>
        <Hero />

        <section className="section about" id="about">
          <div className="section-heading" data-reveal="heading">
            <span>01</span>
            <h2>Sobre</h2>
          </div>

          <div className="about-story">
            <div className="about-text">
              <p className="about-copy" data-reveal="copy">
                Sou Gabriel Silva, Desenvolvedor de Software formado em Análise e
                Desenvolvimento de Sistemas. Gosto de transformar ideias em
                aplicações organizadas, funcionais e fáceis de usar.
              </p>
              <p className="about-personal" data-reveal="copy">
                Fora do código, a música também faz parte da minha identidade e
                do jeito como eu exploro criatividade, ritmo e colaboração.
              </p>
            </div>

            <figure className="about-photo" data-reveal="photo">
              <div className="about-photo-frame">
                <img
                  src="/gabriel-bass.webp"
                  alt="Gabriel Silva tocando baixo em um ensaio musical"
                  loading="lazy"
                />
              </div>
              <figcaption>
                <span>Fora do código</span>
                <strong>Música • criatividade • colaboração</strong>
              </figcaption>
            </figure>
          </div>
        </section>

        <Projects />

        <section className="section contact" id="contact">
          <div className="section-heading" data-reveal="heading">
            <span>03</span>
            <h2>Contato</h2>
          </div>
          <p data-reveal="copy">Vamos construir algo interessante.</p>
          <div className="contact-links" data-reveal="copy">
            <a href="https://github.com/GBLSLVA" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </div>
        </section>
      </main>

      <footer data-reveal="footer">
        <span>Meu Portfólio</span>
        <span>Gabriel Silva © 2026</span>
      </footer>
    </>
  )
}

export default App
