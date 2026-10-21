import type { CSSProperties } from 'react'

const skillGroups = [
  {
    label: 'Front-end',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Vite'],
  },
  {
    label: 'Back-end',
    items: ['Node.js', 'APIs HTTP/REST', 'C#', '.NET / WinForms', 'ASP.NET'],
  },
  {
    label: 'Dados',
    items: ['SQL', 'SQLite', 'SQL Server', 'Modelagem relacional'],
  },
  {
    label: 'Engenharia & segurança',
    items: ['Git/GitHub', 'Testes de integração', 'POO', 'UML', 'Autenticação', 'Cibersegurança'],
  },
]

const journey = [
  {
    period: 'Em andamento',
    eyebrow: 'Formação complementar',
    title: 'Bootcamp de Cibersegurança',
    place: 'Santander + DIO',
    description:
      'Aprofundando fundamentos de segurança, análise de riscos e proteção de sistemas para levar uma visão mais segura ao desenvolvimento de software.',
    featured: true,
  },
  {
    period: '2023 — 2025',
    eyebrow: 'Formação',
    title: 'Análise e Desenvolvimento de Sistemas',
    place: 'Universidade Paulista — UNIP',
    description:
      'Formação voltada a desenvolvimento de sistemas, banco de dados, engenharia de software, requisitos e construção de aplicações.',
  },
  {
    period: 'ago. 2024 — atual',
    eyebrow: 'Experiência',
    title: 'Atendente de Loja',
    place: 'Drogaria São Paulo',
    description:
      'Atendimento, operação de loja, estoque e resolução de demandas com agilidade, organização e contato direto com processos reais.',
  },
  {
    period: 'jun. 2023 — dez. 2023',
    eyebrow: 'Experiência técnica',
    title: 'Instalador TA',
    place: 'Danlex Serviços',
    description:
      'Instalação e suporte em redes GPON/HFC, diagnóstico de falhas, ordens de serviço e atendimento em campo.',
  },
]

export function Profile() {
  return (
    <section className="section profile-section" id="profile">
      <div className="section-heading" data-reveal="heading">
        <span>02</span>
        <h2>Trajetória</h2>
      </div>

      <div className="profile-intro" data-reveal="copy">
        <p>
          Desenvolvimento é o eixo principal. Minha experiência com operações e a formação
          em cibersegurança ampliam a forma como penso produto, processo e confiabilidade.
        </p>
        <span>
          Busco minha primeira oportunidade profissional em desenvolvimento de software,
          levando projetos práticos, visão de negócio e aprendizado contínuo.
        </span>
      </div>

      <div className="profile-grid">
        <div className="journey-list" aria-label="Trajetória profissional e educacional">
          {journey.map((item, index) => (
            <article
              className={`journey-card ${item.featured ? 'journey-card--featured' : ''}`}
              key={`${item.title}-${item.period}`}
              data-reveal="copy"
              style={{ '--reveal-delay': `${index * 70}ms` } as CSSProperties}
            >
              <div className="journey-card-top">
                <span>{item.eyebrow}</span>
                <strong>{item.period}</strong>
              </div>
              <h3>{item.title}</h3>
              <p className="journey-place">{item.place}</p>
              <p>{item.description}</p>
              {item.featured && <span className="journey-badge">EM ANDAMENTO</span>}
            </article>
          ))}
        </div>

        <aside className="skills-panel" data-reveal="copy" aria-label="Competências técnicas">
          <div className="skills-panel-heading">
            <span>Stack atual</span>
            <strong>Construção ponta a ponta</strong>
          </div>

          {skillGroups.map((group) => (
            <div className="skill-group" key={group.label}>
              <h3>{group.label}</h3>
              <div className="skill-list">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </aside>
      </div>
    </section>
  )
}
