export type ProjectCaseStudy = {
  intro: string
  parts: { label: string; text: string }[]
  evidence?: { label: string; href: string }[]
  note?: string
}

export type Project = {
  title: string
  description: string
  technologies: string[]
  caseStudy?: ProjectCaseStudy
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
      'Aplicação full stack de gestão financeira com autenticação, painel de gastos, dívidas, metas, orçamentos e persistência de dados.',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/GBLSLVA/zeus-finance',
    demo: 'https://zeus-finance-production.up.railway.app',
    image: '/zeus-finance-preview.svg',
    imageAlt: 'Tela de login do ZEUS Finance em tema escuro com detalhes verdes',
    caseStudy: {
      intro:
        'Uma aplicação de finanças pessoais usada para exercitar decisões reais de arquitetura, persistência, validação e evolução contínua.',
      parts: [
        {
          label: 'Problema',
          text: 'Centralizar receitas, gastos, dívidas, metas e orçamentos sem misturar lançamentos realizados com despesas recorrentes ainda pendentes.',
        },
        {
          label: 'Minha implementação',
          text: 'Interface React e TypeScript conectada à API Node.js, com serviços de domínio e repositórios especializados. SQLite no desenvolvimento e PostgreSQL na produção.',
        },
        {
          label: 'Decisão técnica',
          text: 'Centralizei os cálculos oficiais no DashboardService. Receitas consideram a vigência, gastos respeitam a data financeira e recorrências pendentes entram na projeção sem duplicar despesas pagas.',
        },
        {
          label: 'Segurança e dados',
          text: 'Sessões por cookie, isolamento dos dados por usuário, migrations versionadas e operações transacionais para atualizar pagamentos e saldos de dívidas.',
        },
        {
          label: 'Validação',
          text: 'O repositório contém testes de API, cálculos e persistência, além de CI com build, verificação de PostgreSQL e smoke test de container. Isso documenta a estratégia de qualidade, não uma métrica de usuários.',
        },
      ],
      evidence: [
        {
          label: 'Regras do dashboard',
          href: 'https://github.com/GBLSLVA/zeus-finance/blob/main/server/services/dashboard-service.mjs',
        },
        {
          label: 'Persistência e isolamento',
          href: 'https://github.com/GBLSLVA/zeus-finance/blob/main/server/repositories/user-repository.mjs',
        },
        {
          label: 'Testes e CI',
          href: 'https://github.com/GBLSLVA/zeus-finance/blob/main/.github/workflows/ci.yml',
        },
      ],
      note:
        'A imagem de destaque é uma prévia visual do acesso. O repositório e a demonstração permitem consultar as evidências técnicas; não são apresentados números de impacto não medidos.',
    },
    featured: true,
    status: 'Destaque',
    visualKicker: 'zeus-finance • produção',
    visualBadge: 'LIVE',
    visualStack: 'FULL STACK',
  },
  {
    title: 'Sistema de Gestão e Monitoramento de Horta Urbana',
    description:
      'Projeto acadêmico interdisciplinar de uma aplicação desktop para registrar, organizar e acompanhar informações da gestão de uma horta urbana, passando por requisitos, UML, modelagem de dados, implementação em WinForms e persistência com SQL Server.',
    technologies: ['C#', '.NET / WinForms', 'SQL Server', 'UML'],
    caseStudy: {
      intro:
        'Projeto acadêmico interdisciplinar voltado à organização de informações e rotinas de uma horta urbana em uma aplicação desktop.',
      parts: [
        {
          label: 'Contexto',
          text: 'O desafio foi estruturar os registros necessários ao acompanhamento de uma horta urbana, transformando uma necessidade de organização em um sistema de gestão.',
        },
        {
          label: 'Processo',
          text: 'O trabalho passou por levantamento de requisitos, elaboração de modelos UML e organização da estrutura de dados antes e durante a implementação.',
        },
        {
          label: 'Tecnologias',
          text: 'C# com .NET e Windows Forms para a interface desktop; SQL Server como banco relacional. A proposta envolve registro, consulta e acompanhamento de informações.',
        },
        {
          label: 'Aprendizado',
          text: 'O projeto permite discutir a passagem de requisitos para telas, entidades e persistência, além da organização de responsabilidades em uma aplicação orientada a objetos.',
        },
      ],
      note:
        'Projeto acadêmico: ainda não há capturas reais, código público ou demonstração vinculados. Esses materiais serão adicionados após documentação e revisão do que foi implementado.',
    },
    status: 'Acadêmico',
  },
  {
    title: 'ZEUS Agent',
    description:
      'Estudo de arquitetura para atendimento empresarial com IA, com foco em base de conhecimento, histórico, agenda, transferência humana e integrações com WhatsApp e Instagram.',
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
