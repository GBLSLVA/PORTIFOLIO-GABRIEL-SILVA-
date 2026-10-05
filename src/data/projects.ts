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
    title: 'ZEUS Agent',
    description:
      'Estudo de caso de atendimento empresarial com IA para WhatsApp e Instagram, com arquitetura e planejamento de MVP full stack.',
    technologies: ['IA', 'APIs', 'Full Stack'],
    github: 'https://github.com/GBLSLVA/ZEUS-AGENT',
    status: 'Em desenvolvimento',
  },
  {
    title: 'Sistema de Gestão e Monitoramento de Horta Urbana',
    description:
      'Projeto acadêmico focado em gestão, monitoramento e organização de uma horta urbana.',
    technologies: ['C#', 'Windows Forms', 'SQL Server'],
    status: 'Acadêmico',
  },
]
