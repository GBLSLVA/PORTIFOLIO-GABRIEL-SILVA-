export type Project = {
  title: string
  description: string
  technologies: string[]
  highlights?: string[]
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
      'Aplicação full stack de finanças pessoais construída ponta a ponta, conectando interface, API, autenticação, persistência e testes.',
    technologies: ['React', 'TypeScript', 'Node.js', 'SQLite'],
    highlights: [
      'API em camadas para gastos, dívidas e metas.',
      'Cadastro, login, sessões e isolamento de dados por usuário.',
      'Testes de integração para autenticação, validação, persistência e logout.',
    ],
    github: 'https://github.com/GBLSLVA/zeus-finance',
    demo: 'https://zeus-finance-production.up.railway.app',
    image: '/zeus-finance-preview.svg',
    imageAlt: 'Apresentação visual do ZEUS Finance com tela de autenticação em tema escuro',
    featured: true,
    status: 'Destaque',
    visualKicker: 'zeus-finance • produto funcionando',
    visualBadge: 'LIVE',
    visualStack: 'FULL STACK',
  },
  {
    title: 'Sistema de Gestão e Monitoramento de Horta Urbana',
    description:
      'Projeto acadêmico interdisciplinar de uma aplicação desktop para registrar, organizar e acompanhar a gestão de uma horta urbana.',
    technologies: ['C#', '.NET / WinForms', 'SQL Server', 'POO', 'UML'],
    highlights: [
      'Levantamento de requisitos, casos de uso e modelagem de dados.',
      'Implementação de telas e regras de negócio em C# com WinForms.',
      'Persistência em SQL Server, testes, documentação e versionamento com Git.',
    ],
    image: '/horta-case-preview.svg',
    imageAlt:
      'Painel conceitual de case técnico da Horta Urbana destacando C#, WinForms, SQL Server, requisitos e UML',
    status: 'Acadêmico',
    visualKicker: 'horta urbana • case técnico',
    visualBadge: 'CASE',
    visualStack: 'C# + SQL SERVER',
  },
  {
    title: 'ZEUS Agent',
    description:
      'Estudo de arquitetura para atendimento empresarial com IA, pensado para base de conhecimento, histórico, agenda, transferência humana e integrações.',
    technologies: ['IA', 'Arquitetura', 'APIs', 'Multiempresa'],
    highlights: [
      'Modelagem de backend multiempresa e regras de negócio.',
      'Fluxos de conhecimento, atendimento, agenda, permissões e auditoria.',
      'Arquitetura preparada para evolução e integrações omnichannel.',
    ],
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
