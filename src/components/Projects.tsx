import { projects } from '../data/projects'

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-heading">
        <span>02</span>
        <h2>Projetos</h2>
      </div>

      <div className="projects">
        {projects.map((project, index) => (
          <article
            className={`project-card ${project.featured ? 'project-card--featured' : ''}`}
            key={project.title}
          >
            <div className={`project-layout ${project.image ? 'project-layout--visual' : ''}`}>
              <div className="project-copy">
                <div className="project-meta">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <span>{project.status}</span>
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tags">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      Abrir projeto ↗
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer">
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>

              {project.image && (
                <a
                  className="project-visual-link"
                  href={project.demo ?? project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Abrir ${project.title}`}
                >
                  <div className="project-visual">
                    <div className="project-browser-bar">
                      <span className="project-browser-dots" aria-hidden="true">
                        <i />
                        <i />
                        <i />
                      </span>
                      <span>zeus-finance • produção</span>
                      <span aria-hidden="true">↗</span>
                    </div>
                    <div className="project-screen">
                      <img src={project.image} alt={project.imageAlt ?? project.title} />
                    </div>
                    <span className="project-orbit project-orbit--live">LIVE</span>
                    <span className="project-orbit project-orbit--stack">FULL STACK</span>
                  </div>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
