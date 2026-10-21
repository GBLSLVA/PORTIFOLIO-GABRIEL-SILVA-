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
        <span>03</span>
        <h2>Projetos</h2>
      </div>

      <div className="projects-intro" data-reveal="copy">
        <p>Projetos que mostram produto funcionando, engenharia de software e evolução técnica.</p>
        <span>Produto real • projeto acadêmico • arquitetura em desenvolvimento</span>
      </div>

      <div className="projects">
        {projects.map((project, index) => {
          const destination = project.demo ?? project.github

          const visual = project.image ? (
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
                <span>{project.visualKicker ?? 'case study'}</span>
                <span aria-hidden="true">{destination ? '↗' : '•'}</span>
              </div>
              <div className="project-screen">
                <img
                  src={project.image}
                  alt={project.imageAlt ?? project.title}
                  loading="lazy"
                />
              </div>
              <span className="project-orbit project-orbit--live">
                {project.visualBadge ?? 'PREVIEW'}
              </span>
              <span className="project-orbit project-orbit--stack">
                {project.visualStack ?? 'SOFTWARE'}
              </span>
            </div>
          ) : null

          return (
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

                  {project.highlights && (
                    <ul className="project-highlights" aria-label={`Destaques de ${project.title}`}>
                      {project.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  )}

                  <div className="tags">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer">
                        Ver aplicação ↗
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer">
                        Ver código ↗
                      </a>
                    )}
                  </div>
                </div>

                {project.image &&
                  (destination ? (
                    <a
                      className="project-visual-link"
                      href={destination}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Abrir ${project.title}`}
                    >
                      {visual}
                    </a>
                  ) : (
                    <div
                      className="project-visual-link project-visual-link--static"
                      aria-label={`Visual técnico de ${project.title}`}
                    >
                      {visual}
                    </div>
                  ))}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
