export type Project = {
  title: string
  description: string
  technologies: string[]
  github?: string
  demo?: string
  image?: string
  imageAlt?: string
  caseStudy?: { label: string; text: string }[]
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
    imageAlt: 'Apresentação visual do acesso ao ZEUS Finance em tema escuro com detalhes verdes',
    caseStudy: [
      {
        label: 'Problema',
        text: 'Reunir receitas, despesas, dívidas, metas e orçamentos em uma aplicação de acompanhamento financeiro.',
      },
      {
        label: 'Solução',
        text: 'Interface React e TypeScript integrada a um backend Node.js, com regras de cálculo financeiro centralizadas no servidor e PostgreSQL em produção.',
      },
      {
        label: 'Engenharia',
        text: 'Autenticação por sessão, isolamento por usuário, migrações versionadas e testes automatizados de API e persistência com integração contínua.',
      },
    ],
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
    caseStudy: [
      {
        label: 'Contexto',
        text: 'Aplicação desktop desenvolvida em projeto acadêmico interdisciplinar para organizar informações de uma horta urbana.',
      },
      {
        label: 'Implementação',
        text: 'Desenvolvimento com C# e Windows Forms, utilizando modelagem relacional e SQL Server para persistência.',
      },
      {
        label: 'Processo',
        text: 'Levantamento de requisitos e modelagem UML integrados ao desenvolvimento. Capturas reais e documentação pública serão adicionadas quando disponíveis.',
      },
    ],
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
    caseStudy: [
      {
        label: 'Problema',
        text: 'Explorar como pequenas empresas podem organizar dúvidas frequentes, histórico de conversas e encaminhamento humano no atendimento.',
      },
      {
        label: 'Arquitetura proposta',
        text: 'Estudo de base de conhecimento, isolamento multiempresa, agenda, permissões e integrações previstas para canais digitais.',
      },
      {
        label: 'Estágio',
        text: 'Projeto conceitual documentado: ainda não existe aplicação executável nem piloto validado. O repositório reúne o planejamento do MVP.',
      },
    ],
  },
]
