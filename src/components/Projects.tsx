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
          <article className="project-card" key={project.title}>
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

            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
