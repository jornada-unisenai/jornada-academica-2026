# Site da Jornada Acadêmica 2026 — Guia para a equipe

Site oficial da **Jornada Acadêmica 2026 · Agro 5.0: Computação Sem Fronteiras na Engenharia do Campo**,
promovida pelas turmas de Agrocomputação e ADS do UniSENAI Rondonópolis (29, 30 e 31/10/2026).

O site é HTML + CSS + JavaScript puro: não precisa instalar nada nem rodar build.
Para ver no computador, basta abrir o `index.html` no navegador.

## Estrutura

| Arquivo | O que é | Quem mexe |
|---|---|---|
| `index.html` | Página inicial (apresentação do evento) | Equipe da landing page |
| `cronograma.html` | Página do cronograma — **já criada com cabeçalho, rodapé e um aviso "em breve"** | Colega do cronograma |
| `inscricao.html` | Página de inscrição — **já criada com cabeçalho, rodapé e um aviso "em breve"** | Colega da inscrição |
| `styles.css` | Visual de **todas** as páginas (cores, fontes, botões, cartões, cabeçalho, rodapé) | Combinar com a equipe antes de alterar |
| `script.js` | Menu do celular e contagem regressiva | Combinar com a equipe |
| `logo.svg` | Logo da Jornada (versão para fundo claro: cartazes, slides) | — |
| `unisenai-logo.jpg` | Logo institucional da UniSENAI MT | — |

## Como trabalhar na sua página

1. Abra `cronograma.html` ou `inscricao.html`.
2. Procure o comentário **`ÁREA DO COLEGA`**. Substitua apenas o bloco entre ele e `FIM DA ÁREA DO COLEGA`.
3. **Não altere o cabeçalho nem o rodapé** de uma página só. Eles são iguais nas três páginas; se precisar mudar, mude nas três.
4. **Mantenha os nomes dos arquivos** (`cronograma.html`, `inscricao.html`). Todos os botões do site já apontam para eles.
   Se for usar outro nome ou outro endereço, procure por `LINK DO CRONOGRAMA` / `LINK DA INSCRIÇÃO` em todos os arquivos e troque.

## Componentes prontos para reaproveitar (em `styles.css`)

- Layout: `.container` (largura máxima centralizada), `.section` (seção com espaçamento), `.section.alt` (fundo alternado)
- Títulos: `.eyebrow` (texto pequeno acima do título), `.lead` (parágrafo de destaque)
- Botões: `<a class="btn btn-primary">` (gradiente verde/ciano) e `<a class="btn btn-ghost">` (contorno)
- Cartões: `.cards` + `.card` (grade de 3 colunas), `.format` + `.format-item` (2 colunas com barra lateral), `.days` + `.day` (3 colunas — útil para os dias do evento)
- Etiquetas: `.chip`

Cores (variáveis no topo do `styles.css`): `--green` #4ade80 · `--cyan` #22d3ee · `--orange` #f05a28 · fundo `--bg` #0b1a14 · texto `--text` #e8f5ee · texto secundário `--muted` #9bb8aa.
Fontes: Montserrat (títulos) e Inter (texto), carregadas do Google Fonts.

Teste sempre no celular: no Chrome, F12 → ícone de celular (Ctrl+Shift+M), largura de 390px.

## Inscrição — importante

O site é **estático**: ele não tem banco de dados e não consegue guardar as inscrições sozinho. Opções simples:

- **Google Forms (mais simples):** crie o formulário, clique em *Enviar → < >* e cole o `<iframe>` dentro da área do colega.
  As respostas ficam numa planilha do Google. Ou use um botão `btn btn-primary` apontando para o link do formulário.
- **Formulário próprio em HTML** enviando para um serviço como Formspree ou Getform (plano gratuito), sem precisar de servidor.
- **Plataforma de eventos** (Sympla, Even3, Doity): útil se precisarem de certificado e controle de vagas por minicurso.
- **Back-end próprio** (ex.: API + banco de dados): mais trabalho; só vale se for parte da avaliação da disciplina.

Se forem coletar dados pessoais (nome, CPF, e-mail), informem no formulário para que serão usados (LGPD).

## Publicação (Vercel)

Recomendado: subir esta pasta num repositório do GitHub e importar em vercel.com → *Add New → Project*
(Framework Preset: **Other**, sem comando de build). Cada envio ao repositório atualiza o site sozinho,
então cada colega pode atualizar sua página sem precisar de quem fez o deploy.

Alternativa pelo terminal, dentro desta pasta: `npx vercel` (teste) e `npx vercel --prod` (publicar).
