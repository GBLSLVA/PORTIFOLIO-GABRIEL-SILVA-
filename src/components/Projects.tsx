import type { CSSProperties, PointerEvent } from 'react'
import { projects } from '../data/projects'

function tiltProject(event: PointerEvent<HTMLDivElement>) {
  const target = event.currentTarget
  const rect = target.getBoundingClientRect()
  const x = (event.clientX - rect.left) / rect.width - 0.5
  const y = (event.clientY - rect.top) / rect.height - 0.5

  target.style.setProperty('--tilt-x', `${-y * 4.5}deg`)
  target.style.setProperty('--tilt-y', `${x * 5.5}deg`)
  target.style.setProperty('--glow-x', `${(x + 0.5) * 100}%`)
  target.style.setProperty('--glow-y', `${(y + 0.5) * 100}%`)
}

function resetProjectTilt(event: PointerEvent<HTMLDivElement>) {
  const target = event.currentTarget
  target.style.setProperty('--tilt-x', '0deg')
  target.style.setProperty('--tilt-y', '-3deg')
  target.style.setProperty('--glow-x', '50%')
  target.style.setProperty('--glow-y', '50%')
}

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-heading" data-reveal="heading">
        <span>02</span>
        <h2>Projetos</h2>
      </div>

      <div className="projects">
        {projects.map((project, index) => (
          <article
            className={`project-card ${project.featured ? 'project-card--featured' : ''}`}
            key={project.title}
            data-reveal="project"
            style={{ '--reveal-delay': `${index * 90}ms` } as CSSProperties}
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
                  <div
                    className="project-visual"
                    onPointerMove={tiltProject}
                    onPointerLeave={resetProjectTilt}
                  >
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
