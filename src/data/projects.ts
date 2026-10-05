export type Project = {
  title: string
  description: string
  technologies: string[]
  github?: string
  demo?: string
  image?: string
  imageAlt?: string
  featured?: boolean
  status?: 'Destaque' | 'Em desenvolvimento' | 'Acadêmico'
}

export const projects: Project[] = [
  {
    title: 'ZEUS Finance',
    description:
      'Aplicação full stack de gestão financeira com autenticação, painel de gastos, dívidas, metas, orçamentos e persistência de dados.',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/GBLSLVA/zeus-finance',
    demo: 'https://zeus-finance-production.up.railway.app',
    image: '/zeus-finance-preview.svg',
    imageAlt: 'Tela de login do ZEUS Finance em tema escuro com detalhes verdes',
    featured: true,
    status: 'Destaque',
  },
  {
    title: 'Sistema de Gestão e Monitoramento de Horta Urbana',
    description:
      'Projeto acadêmico interdisciplinar de uma aplicação desktop para registrar, organizar e acompanhar informações da gestão de uma horta urbana, passando por requisitos, UML, modelagem de dados, implementação em WinForms e persistência com SQL Server.',
    technologies: ['C#', '.NET / WinForms', 'SQL Server', 'UML'],
    status: 'Acadêmico',
  },
  {
    title: 'ZEUS Agent',
    description:
      'Estudo de arquitetura para atendimento empresarial com IA, com foco em base de conhecimento, histórico, agenda, transferência humana e integrações com WhatsApp e Instagram.',
    technologies: ['IA', 'Arquitetura', 'APIs', 'Multiempresa'],
    github: 'https://github.com/GBLSLVA/ZEUS-AGENT',
    status: 'Em desenvolvimento',
  },
]
