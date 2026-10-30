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
  visualKicker?: string
  visualBadge?: string
  visualStack?: string
}

export const projects: Project[] = [
  {
    title: 'ZEUS Finance',
    description:
      'Aplicação full stack de finanças pessoais com autenticação por sessão, regras financeiras no backend, PostgreSQL em produção e testes automatizados.',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/GBLSLVA/zeus-finance',
    demo: 'https://zeus-finance-production.up.railway.app',
    image: '/zeus-finance-preview.svg',
    imageAlt: 'Tela de login do ZEUS Finance em tema escuro com detalhes verdes',
    featured: true,
    status: 'Destaque',
    visualKicker: 'zeus-finance • produção',
    visualBadge: 'LIVE',
    visualStack: 'FULL STACK',
  },
  {
    title: 'Sistema de Gestão e Monitoramento de Horta Urbana',
    description:
      'Sistema desktop de gestão de horta urbana em C# e WinForms, com análise de requisitos, modelagem UML e persistência de dados em SQL Server.',
    technologies: ['C#', '.NET / WinForms', 'SQL Server', 'UML'],
    status: 'Acadêmico',
  },
  {
    title: 'ZEUS Agent',
    description:
      'Estudo de arquitetura de atendimento empresarial com IA, fluxos de supervisão humana, isolamento multiempresa e integrações planejadas com canais digitais.',
    technologies: ['IA', 'Arquitetura', 'APIs', 'Multiempresa'],
    github: 'https://github.com/GBLSLVA/ZEUS-AGENT',
    image: '/zeus-agent-preview.svg',
    imageAlt:
      'Protótipo conceitual do ZEUS Agent com caixa de entrada omnichannel, conversa assistida por IA e painel de contexto',
    status: 'Em desenvolvimento',
    visualKicker: 'zeus-agent • protótipo conceitual',
    visualBadge: 'CONCEITO',
    visualStack: 'IA + ATENDIMENTO',
  },
]
