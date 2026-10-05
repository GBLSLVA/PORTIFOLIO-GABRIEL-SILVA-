import { Hero } from './components/Hero'
import { Projects } from './components/Projects'

function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home">
          GS
        </a>
        <nav>
          <a href="#about">Sobre</a>
          <a href="#projects">Projetos</a>
          <a href="#contact">Contato</a>
        </nav>
      </header>

      <main>
        <Hero />

        <section className="section about" id="about">
          <div className="section-heading">
            <span>01</span>
            <h2>Sobre</h2>
          </div>
          <p className="about-copy">
            Sou Gabriel Silva, Desenvolvedor de Software formado em Análise e
            Desenvolvimento de Sistemas. Gosto de transformar ideias em
            aplicações organizadas, funcionais e fáceis de usar.
          </p>
        </section>

        <Projects />

        <section className="section contact" id="contact">
          <div className="section-heading">
            <span>03</span>
            <h2>Contato</h2>
          </div>
          <p>Vamos construir algo interessante.</p>
          <div className="contact-links">
            <a href="https://github.com/GBLSLVA" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </div>
        </section>
      </main>

      <footer>
        <span>Meu Portfólio</span>
        <span>Gabriel Silva © 2026</span>
      </footer>
    </>
  )
}

export default App
