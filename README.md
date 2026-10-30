# Portfólio — Gabriel Silva

Portfólio pessoal de Desenvolvedor de Software, construído com **React 19, TypeScript e Vite**.

## Direção visual

Estética editorial minimalista inspirada na linguagem do [abn.ooo](https://abn.ooo/):
tipografia marcante, bastante espaço em branco, animações com propósito e projetos como protagonistas.

**Regra de evolução:** preservar o Hero e a composição aprovada. Não adicionar seções ou componentes decorativos sem um motivo funcional.

## Estrutura real

- `src/App.tsx`: composição das seções Sobre e Contato.
- `src/components/Hero.tsx`: título animado, introdução e fotografia.
- `src/components/FloatingNav.tsx`: navegação responsiva.
- `src/components/MotionController.tsx`: animação e elementos revelados ao rolar.
- `src/components/Projects.tsx`: vitrine orientada a dados.
- `src/data/projects.ts`: lista editável de projetos. **Adicione novos projetos aqui** sem reconstruir o layout.
- `src/styles/global.css`: estilos legados (refatoração planejada).
- `src/styles/personal-photo.css`: galeria do Sobre.
- `src/styles/editorial-polish.css`: ajustes discretos na branch de revisão.

## Desenvolvimento

Requer Node.js recente, compatível com Vite 7.

```bash
npm install
npm run dev
npm run build
```

O build roda a verificação TypeScript antes de gerar `dist/`.

**Limitações atuais:** não há lockfile nem suíte própria de testes; o CI na branch de revisão verifica compilação e build. Os testes de acessibilidade por teclado, mobile e Core Web Vitals ainda devem ser realizados antes de uma publicação.

## Fluxo seguro

- `main`: versão atualmente publicada no Railway.
- `refactor/editorial-polish-bootcamp`: mudanças editoriais discretas e correções técnicas **não publicadas**.
- Pull request em rascunho para revisão e aprovação antes do merge.

## Auditoria

Leia [docs/AUDITORIA-2026-10-30.md](docs/AUDITORIA-2026-10-30.md) para achados, prioridades e critérios de aceitação.

## Projetos

A vitrine inclui ZEUS Finance, Horta Urbana e ZEUS Agent. Cada projeto pode ter um `caseStudy` opcional em `src/data/projects.ts`: a interface exibe um link editorial discreto, com conteúdo técnico expansível e fechado por padrão. A estrutura permite novos projetos sem editar o componente visual.

Use somente links e capturas verificados; não apresente mockups como capturas reais. Atualize a stack tecnológica conforme a implementação real de cada projeto. O ZEUS Finance ainda exige autenticação para acesso à aplicação; a Horta Urbana ainda precisa de capturas reais do WinForms; o ZEUS Agent permanece identificado como estudo de arquitetura, sem aplicação executável.
