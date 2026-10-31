# Portfólio — Gabriel Silva

Portfólio pessoal de desenvolvimento de software, construído com **React 19, TypeScript 5 e Vite 7**. A interface segue uma direção visual editorial, com navegação responsiva, animações progressivas e seções de apresentação, projetos e contato.

**Produção:** https://portfolio-gabriel-silva.up.railway.app/

## Pré-requisitos

- **Node.js 22** (veja `.nvmrc`)
- **npm** (incluído no Node.js)

## Executar localmente

```bash
npm ci
npm run dev
```

Acesse a URL informada pelo Vite no terminal.

## Verificação e build

```bash
npm run build
npm test
npm audit --audit-level=high
npm run preview
```

O teste automatizado verifica abertura, fechamento, Escape, foco e comportamento responsivo da navegação mobile.

O build executa a verificação TypeScript e gera os arquivos estáticos em `dist/`. O `package-lock.json` versionado garante que `npm ci` instale a árvore de dependências registrada. O GitHub Actions executa instalação reproduzível, auditoria de dependências, testes de navegação e build a cada pull request para `main`.

## Organização

- `src/App.tsx`: composição das seções
- `src/components/`: apresentação e comportamento da interface
- `src/data/projects.ts`: dados, links e estudos de caso dos projetos
- `src/styles/`: estilos e responsividade, incluindo `navigation.css` para o menu
- `public/`: imagens e assets públicos

### Como adicionar um projeto

1. Edite o array `projects` em `src/data/projects.ts`.
2. Cadastre `title`, `description` e `technologies` e, quando houver evidência real, `github`, `demo` e `image`. Use `caseStudy` para registrar desafio, implementação, decisões técnicas e validação com textos verificáveis; links públicos para o código ficam em `caseStudy.evidence`.
3. Use `status` para distinguir projetos acadêmicos, destacados ou ainda em desenvolvimento; não anuncie protótipos conceituais como produtos finalizados.
4. Execute `npm test` e `npm run build` e confira a apresentação em desktop e celular. Nunca invente métricas, capturas, repositórios ou contribuições.

## Projetos apresentados

- **ZEUS Finance** — aplicação full stack com React, TypeScript, Node.js e PostgreSQL.
- **Gestão e Monitoramento de Horta Urbana** — projeto acadêmico desktop em C#/.NET WinForms e SQL Server.
- **ZEUS Agent** — estudo de arquitetura de atendimento empresarial assistido por IA, em desenvolvimento.

## Publicação

O Railway acompanha a branch `main` e publica novas versões após o merge. **Alterações de branches e PRs não afetam a produção** até serem integradas.
