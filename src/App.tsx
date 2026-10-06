import { FloatingNav } from './components/FloatingNav'
import { Hero } from './components/Hero'
import { MotionController } from './components/MotionController'
import { Projects } from './components/Projects'
import './styles/personal-photo.css'

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
                Fora do código, a música e o ciclismo também fazem parte de quem eu sou:
                criatividade, ritmo, disciplina e movimento que levo para os projetos.
              </p>
            </div>

            <div className="about-gallery" data-reveal="photo">
              <figure className="about-shot about-shot--music">
                <img
                  src="/assets/bass.webp"
                  alt="Gabriel Silva tocando baixo em um ensaio musical"
                  loading="lazy"
                />
              </figure>

              <figure className="about-shot about-shot--bike">
                <img
                  src="/assets/bike.webp"
                  alt="Gabriel Silva praticando ciclismo"
                  loading="lazy"
                />
              </figure>

              <div className="about-gallery-caption">
                <span>Fora do código</span>
                <strong>Música • ciclismo • criatividade • disciplina</strong>
              </div>
            </div>
          </div>
        </section>

        <Projects />

        <section className="section contact" id="contact">
          <div className="section-heading" data-reveal="heading">
            <span>03</span>
            <h2>Contato</h2>
          </div>

          <div className="contact-layout">
            <div className="contact-intro" data-reveal="copy">
              <p>Vamos construir algo interessante.</p>
              <span>
                Aberto a oportunidades, projetos e boas conversas sobre desenvolvimento
                de software.
              </span>
            </div>

            <div className="contact-links" data-reveal="copy">
              <a
                href="https://www.linkedin.com/in/gabriel-silva-13ab4a116/"
                target="_blank"
                rel="noreferrer"
              >
                <span>LinkedIn</span>
                <strong>Conectar ↗</strong>
              </a>

              <a href="mailto:Gabrielsilva_153@hotmail.com">
                <span>E-mail</span>
                <strong>Gabrielsilva_153@hotmail.com ↗</strong>
              </a>

              <a href="https://github.com/GBLSLVA" target="_blank" rel="noreferrer">
                <span>GitHub</span>
                <strong>GBLSLVA ↗</strong>
              </a>
            </div>
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
