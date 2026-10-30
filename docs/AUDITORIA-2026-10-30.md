# Auditoria técnica do portfólio — 30/10/2026

## Escopo
Revisão somente leitura da produção + inspeção do repositório `main` e do PR #1. Critérios: identidade editorial inspirada em abn.ooo, acessibilidade, SEO, arquitetura, performance, manutenção, infraestrutura, confiança para recrutadores. Nenhuma publicação em produção foi realizada.

## Estado comprovado
- Produção: `https://portfolio-gabriel-silva.up.railway.app/`; Railway online, commit `ba251861f0ea2cda13089cbc1e401df126531725`, branch `main`.
- Em 7 dias, amostra de 19 requisições: 14 x 2xx, 3 x 3xx, 2 x 4xx, 0 x 5xx. Não extrapolar essa amostra para disponibilidade contínua.
- Proposta editorial: branch `refactor/editorial-polish-bootcamp`, PR #1 em rascunho. CI do TypeScript/build foi bem-sucedido em `aecd62177bd0bfeeb2f0bfc37eaee347a8bb27ae`.
- Navegação do site usa âncoras; o conteúdo publicado possui 3 projetos (ZEUS Finance, Horta Urbana, ZEUS Agent). O browser automatizado não encontrou sobreposição de texto/foto no desktop.
- Não houve medição de Core Web Vitals, contraste com ferramenta, navegação via teclado real, leitor de tela ou responsividade em aparelhos/viewport mobile. Esses testes continuam pendentes.

## Achados classificados
| ID | Severidade | Evidência | Decisão |
|---|---|---|---|
| A01 | Alta | `src/styles/global.css` tem 1.830 linhas e 11 blocos `.hero-portrait` com media queries repetidas. | Consolidar gradualmente CSS por responsabilidade, com regressão visual obrigatória. Não redesenhar Hero. |
| A02 | Alta | No site publicado, extração de conteúdo mostra `#` vazio para H1; spans animados estão `aria-hidden`, enquanto título depende de `aria-label`. | Em PR #1, texto real oculto visualmente no H1 e cópia animada `aria-hidden`. Validar com crawler/leitor de tela. |
| A03 | Alta | Produção usa `Meu Portfólio` e description genérica; `favicon.ico` retorna 404 e `robots.txt` entrega HTML do SPA. | PR #1 inclui metadados OG/canonical, favicon SVG, robots e sitemap; verificar respostas reais após publicação autorizada. |
| A04 | Alta | Horta Urbana não tem screenshot, repositório público, demonstração ou documentação vinculada. | Solicitar captura real e links válidos; criar case editorial discreto sem mockups fingindo captura. |
| A05 | Média | ZEUS Finance e ZEUS Agent usam SVGs de apresentação; seção mostra links, mas benefícios técnicos resumidos. | Priorizar 2–3 capturas reais e narrativa curta: problema, contribuição e resultado. Manter o grid/ritmo existentes. |
| A06 | Média | `package.json` não possui teste; repositório principal não traz `package-lock.json`. | Commitar lockfile gerado pelo npm e migrar CI para `npm ci`; acrescentar validações automáticas de links e componentes. |
| A07 | Média | Railway inicia serviço `hermes-web` com `npm start`, que chama `vite preview`; sem healthcheck configurado. | Avaliar servidor estático de produção, healthcheck e atualização de nome em deploy futuro autorizado. |
| A08 | Média | `src/components/Base64Image.tsx` não é importado; assets `*.b64` coexistem com arquivos binários. | Remover código/ativos mortos somente após verificação de referências e build; reduzir manutenção. |
| A09 | Média | `src/components/FloatingNav.tsx` tem estado de menu mobile e ESC, mas falta auditoria interativa real de teclado e de foco após âncoras. | Inspecionar em 360/390/768/1024/1440px; verificar Tab/Escape, menu, foco visível e atalhos. |
| A10 | Baixa | Contato não disponibiliza currículo; o texto do sobre é curto e coerente com identidade editorial. | Inserir link discreto para PDF validado após aprovação do documento; evitar timeline, skill bars e cards extras. |

## Checagens de consistência
- `index.html` publicado **possui** `lang="pt-BR"`; não abrir issue dizendo que falta atributo.
- `FloatingNav.tsx` traz literalmente o texto `Projetos`. Um relatório visual automático viu "Pxos" em uma captura, mas isso não está reproduzido no código: **não tratar como bug confirmado** sem screenshot/inspeção reproduzível.
- Não há componente de cursor SVG personalizado no código React revisado; alegação visual não confirmada.
- O GitHub do ZEUS Finance está acessível; o README informa **SQLite no desenvolvimento e PostgreSQL na produção**, portanto a tag `PostgreSQL` do portfólio é defensável.
- GitHub ZEUS Agent acessível, descrito como estudo de caso; manter essa honestidade no portfólio.
- Experiência de projeto/emprego não deve ser inventada; Santander + DIO entra apenas como bootcamp **em andamento**, uma linha editorial no Sobre.

## Plano seguro
1. Aprovar visualmente a proposta minimalista do PR #1. Manter `main` e Railway intactos.
2. Validar desktop/mobile e foco via browser real, regressão de Hero e menu.
3. Refatorar CSS em mudanças pequenas com comparação visual antes/depois, sem acrescentar componentes decorativos.
4. Adicionar screenshot real da Horta Urbana, documentação e currículo com autorização explícita.
5. Melhorar processo de build/testes e deploy estático em etapa independente.
6. Só fazer merge/deploy após aprovação e checar páginas públicas, links, robots, favicon, Core Web Vitals.

## Critério de aceitação
Manter a composição atual do Hero, tipografia forte, espaço negativo, fotos pessoais, seções atuais e estética editorial. Não adicionar timeline, grandes painéis de skills, badges repetidos, dashboards artificiais ou formulários sem necessidade.
