# IA_SPEC — Overclock CS · Landing Page Institucional
> Arquitetura de Informação completa. Gerado por scout UX em 2026-06-01.
> Referência visual: vitality.gg (DNA extraído em DESIGN_DNA.json + COMPETITOR.md)

---

## Roster Oficial

| Nick | Nome | Função | Nação |
|------|------|---------|-------|
| **brvno** | Bruno "brvno" Ferreira | Entry Fragger | 🇧🇷 BR |
| **xanT** | Antoine "xanT" Moreau | IGL | 🇫🇷 FR |
| **ZEDy** | Eduardo "ZEDy" Santos | AWPer | 🇧🇷 BR |
| **FLKR** | Filip "FLKR" Krasnov | Rifler | 🇵🇱 PL |
| **nOVA** | Lucas "nOVA" Novak | Support / Lurker | 🇧🇷 BR |
| **SIGMA** *(coach)* | Rodrigo "SIGMA" Almeida | Head Coach | 🇧🇷 BR |

---

## Seções — Lista Ordenada

```
01 · NAV
02 · VIDEO-HERO
03 · HERO-MAIN
04 · ROSTER
05 · ACHIEVEMENTS
06 · MATCHES
07 · NEWS
08 · MERCH
09 · PARTNERS
10 · RECRUITMENT
11 · FOOTER
```

---

## Especificação de Cada Seção

---

### 01 · NAV
**Objetivo:** Navegação global fixa — orientação e CTA de conversão imediata.

**Hierarquia de conteúdo:**
1. Logo Overclock (esquerda)
2. Links de âncora: Time · Conquistas · Partidas · Notícias · Loja
3. CTA botão: "SEJA UM PARCEIRO" (direita)
4. Ícones redes sociais: Twitter/X, Instagram, YouTube, Twitch (inline, 20px)

**Componentes:**
- Barra sticky, fundo branco `#FFFFFF`, borda inferior `1px solid #D2D5D9` (idêntico Vitality)
- Logo SVG height 50px desktop / 44px mobile
- Nav links: Instrument Sans 14px weight 400, cor `rgb(40,40,40)`
- Botão CTA: `border-radius: 0`, `padding: 0.8rem 2rem`, acento amarelo `#FFFF00` no hover via `::before`
- Mobile: hamburger colapsando links verticalmente

**Slots de imagem:**

| ID | Tipo | Proporção | Descrição |
|----|------|-----------|-----------|
| `nav-logo` | ASSET | SVG livre | Logo Overclock horizontal, versão preta (sobre fundo branco) |

**Estados:** scroll > 80px → sombra sutil aparece na nav.

---

### 02 · VIDEO-HERO
**Objetivo:** Impacto imediato — identidade de marca antes de qualquer copy. Reel de highlights do time.

**Hierarquia de conteúdo:**
1. Vídeo loop mudo fullscreen (fundo)
2. Overlay escuro gradiente
3. Logo Overclock centralizado (sobre vídeo)
4. Tagline curta: "DESTRUINDO ADVERSÁRIOS DESDE 2023"
5. Indicador scroll-down (seta animada)

**Componentes:**
- `<video>` autoplay muted loop playsinline, `object-fit: cover`, 100vw × 100vh
- Overlay: `linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%)`
- Noise SVG overlay `opacity: 0.03` (padrão Vitality)
- Tagline: Base Neue Super Condensed, weight 800, uppercase, `clamp(40px, 8vw, 100px)`, `#FFFFFF`
- Glow radial direito: `rgba(120,140,20,0.49)` (padrão DNA)

**Slots de imagem:**

| ID | Tipo | Proporção | Descrição |
|----|------|-----------|-----------|
| `video-hero-reel` | ASSET | 16:9 loop | Reel de 30s: highlights de rounds, frags, LAN stage, torcida. Mudo. |
| `video-hero-fallback` | FOTO | 16:9 | Foto estática fallback: jogadores em palco de LAN, luz dramática, fundo escuro |
| `video-hero-logo-overlay` | ASSET | SVG livre | Logo Overclock branco, versão grande, sobre overlay do vídeo |

---

### 03 · HERO-MAIN
**Objetivo:** Apresentar o time e sua proposta — 2 colunas: copy à esq, imagem do time à dir.

**Hierarquia de conteúdo:**
1. Badge status: `● AO VIVO` ou `● PRÓXIMA PARTIDA: [data]`
2. Título display (2 linhas): linha 1 "OVERCLOCK" sólido `#FFFFFF`, linha 2 "ESPORTS" muted `rgba(255,255,255,0.5)`
3. Subtítulo: "TIME PROFISSIONAL DE COUNTER-STRIKE"
4. Descrição curta (2–3 linhas): posicionamento, missão, anos de atuação
5. 2 botões: "CONHEÇA O TIME" (amarelo, primário) · "ASSISTA AO VIVO" (branco, secundário)
6. Frame de vídeo/imagem à direita com cantos em L amarelos
7. Strip de parceiros imediatamente abaixo (inline, scroll logo strip)

**Componentes:**
- Grid 2 colunas `1fr 1fr` gap 60px; colapsa 1fr ≤1024px
- Background: `linear-gradient(135deg, #1a1a0f 0%, #0d0d0a 50%, #141410 100%)`
- Badge: dot 8×8px `#FFFF00` + Inter 12px uppercase `#FFFF00`
- Título: Base Neue SuperCond weight 800 `clamp(40px, 12vw, 160px)` letter-spacing 3px line-height 0.95
- Descrição: Inter 16px `#888888` max-width 500px
- Botões: `border-radius: 0` `padding: 18px 32px` `border: 1px dashed #41413B`
- Frame imagem/vídeo: `aspect-ratio: 16/10` max-width 600px `border: 1px dashed #41413B` + 4 cantos L 20px `2px solid #FFFF00`
- Glow radial direito + esquerdo inferior (padrão DNA)
- Noise SVG overlay `opacity: 0.03`

**Slots de imagem:**

| ID | Tipo | Proporção | Descrição |
|----|------|-----------|-----------|
| `hero-main-frame` | FOTO | 16:10 | Star player (ZEDy ou brvno) em pose tática, rifle na mão, fundo preto fosco, tratamento fotográfico hiper-realista |
| `hero-main-logo-badge` | ASSET | 1:1 | Logo Overclock versão ícone/símbolo (para badge e watermark) |

---

### 04 · ROSTER
**Objetivo:** Apresentar os 5 jogadores + coach com identidade individual mas coesão visual de equipe.

**Hierarquia de conteúdo:**
1. Label seção: "TIME" (eyebrow, uppercase, amarelo)
2. Título: "NOSSO ROSTER"
3. Grid 6 cards (5 jogadores + coach): foto, nick, nome, função, bandeira, número da camisa
4. Card ativo/hover: destaque com borda `1px solid #FFFF00` + nome em amarelo
5. Sub-info por card: nick (grande, display), função (badge), nome real (pequeno)

**Componentes:**
- Grid: `repeat(3, 1fr)` desktop → `repeat(2, 1fr)` tablet → `1fr` mobile; gap 0 (bordas dashed como divisores)
- Card: fundo `#121212`, borda `1px dashed #41413B`, `border-radius: 0`
- Foto: `aspect-ratio: 3/4`, `object-fit: cover`, hover `scale(1.05) 0.4s ease`
- Nick: Base Neue weight 800 `clamp(32px, 5vw, 64px)` uppercase `#FFFFFF`
- Badge função: Inter 11px weight 600 uppercase letter-spacing 2px; cores por função:
  - IGL: `#FFFF00` (amarelo)
  - AWPer: `#FF4444` (vermelho)
  - Entry: `#FF8800` (laranja)
  - Rifler: `#AAAAAA` (cinza)
  - Support: `#44AAFF` (azul)
  - Coach: `rgba(255,255,255,0.5)` (muted)
- Bandeira: ícone SVG 20×14px inline

**Slots de imagem:**

| ID | Tipo | Proporção | Descrição |
|----|------|-----------|-----------|
| `player-portrait-brvno` | FOTO | 3:4 | Bruno "brvno" Ferreira — retrato oficial fundo preto, pose neutra/agressiva, uniforme Overclock, olhar câmera |
| `player-portrait-xanT` | FOTO | 3:4 | Antoine "xanT" Moreau — retrato oficial fundo preto, pose de liderança |
| `player-portrait-ZEDy` | FOTO | 3:4 | Eduardo "ZEDy" Santos — retrato oficial fundo preto, AWP visível ou pose de sniper |
| `player-portrait-FLKR` | FOTO | 3:4 | Filip "FLKR" Krasnov — retrato oficial fundo preto |
| `player-portrait-nOVA` | FOTO | 3:4 | Lucas "nOVA" Novak — retrato oficial fundo preto |
| `player-portrait-SIGMA` | FOTO | 3:4 | Rodrigo "SIGMA" Almeida — retrato oficial coach, postura analítica, fundo preto |

---

### 05 · ACHIEVEMENTS
**Objetivo:** Construir credibilidade e autoridade — troféus, ranking, conquistas expressivas.

**Hierarquia de conteúdo:**
1. Label: "CONQUISTAS"
2. Título display: "HISTÓRIA DE VITÓRIAS"
3. Número destaque: ex. `3× CAMPEÕES NACIONAIS` (stat grande)
4. Lista de torneios (3–5 entradas): nome do campeonato, resultado, ano, logo do evento
5. Foto editorial do time (levantando troféu ou no palco)
6. CTA secundário: "VER HISTÓRICO COMPLETO" (link âncora para seção de notícias)

**Componentes:**
- Layout: 2 colunas `1fr 1fr` gap 60px; esq = stats + lista; dir = foto
- Background: `#000000` com noise overlay
- Stat número: Base Neue weight 800 `clamp(60px, 10vw, 120px)` `#FFFF00`
- Lista torneios: cada item tem borda-top `1px dashed #41413B`, padding 16px 0
- Logo torneio: filtro `brightness(0) invert(1)` branco, height 32px
- Foto: `aspect-ratio: 16:9` com cantos L amarelos (padrão hero frame)

**Slots de imagem:**

| ID | Tipo | Proporção | Descrição |
|----|------|-----------|-----------|
| `trophy-shot-main` | FOTO | 16:9 | Time completo no palco levantando troféu — iluminação de arena, confetes, jerseys Overclock |
| `trophy-shot-secondary` | FOTO | 1:1 ou 16:9 | Momento de celebração — foco no capitão (xanT) ou no AWPer (ZEDy) |
| `event-badge-1` | ASSET | 1:1 | Logo/badge do torneio 1 — ex.: "CBCS Masters 2024" |
| `event-badge-2` | ASSET | 1:1 | Logo/badge do torneio 2 |
| `event-badge-3` | ASSET | 1:1 | Logo/badge do torneio 3 |

---

### 06 · MATCHES
**Objetivo:** Agenda de partidas próximas e resultados recentes — dinâmico, HUD-like.

**Hierarquia de conteúdo:**
1. Label: "PARTIDAS"
2. Título: "CALENDÁRIO" (display grande)
3. Tabs: PRÓXIMAS · RESULTADOS
4. Cards de partidas (3–5 por tab):
   - Logo Overclock vs Logo adversário
   - Resultado ou hora/data
   - Campeonato/evento
   - Formato (Bo1/Bo3/Bo5)
   - Mapa(s) — se resultado: thumbnail de mapa
5. Estado vazio: "NENHUMA PARTIDA AGENDADA — SIGA NOSSAS REDES"
6. CTA: "TODAS AS PARTIDAS" → link externo (HLTV ou Liquipedia)

**Componentes:**
- Background: `#000000`
- Título: Base Neue 60px weight 800 letter-spacing 2px line-height 0.95
- Tabs: Inter 14px uppercase; aba ativa = borda-bottom `2px solid #FFFF00`
- Card upcoming: fundo `#FFFDFD`, `border: 1px solid #FEFF00`, texto `#000000`
- Card past: fundo `#F9FAFB`, `border: 1px solid #FEFF00`, texto `#000000`
- Logo times: 48×48px, `object-fit: contain`
- Score: Base Neue weight 800 32px — vitória em `#FFFF00`, derrota em `#888888`
- Timeline: scroll horizontal sem scrollbar visível em mobile

**Slots de imagem:**

| ID | Tipo | Proporção | Descrição |
|----|------|-----------|-----------|
| `match-oc-logo-mini` | ASSET | 1:1 | Logo Overclock versão compacta para cards de partida |
| `match-opp-logo-1` | ASSET | 1:1 | Logo adversário partida 1 (formato branco ou cor original) |
| `match-opp-logo-2` | ASSET | 1:1 | Logo adversário partida 2 |
| `match-opp-logo-3` | ASSET | 1:1 | Logo adversário partida 3 |
| `match-opp-logo-4` | ASSET | 1:1 | Logo adversário partida 4 |
| `match-opp-logo-5` | ASSET | 1:1 | Logo adversário partida 5 |
| `match-event-logo-1` | ASSET | livre | Logo do campeonato/evento partida 1 |
| `match-event-logo-2` | ASSET | livre | Logo do campeonato/evento partida 2 |
| `match-map-thumb-1` | ASSET | 16:9 | Thumbnail mapa (ex: Dust2) — exibido em card de resultado |
| `match-map-thumb-2` | ASSET | 16:9 | Thumbnail mapa 2 |

**Estados:**
- Aba "PRÓXIMAS" vazia: card placeholder com mensagem "EM BREVE" e ícone relógio
- Aba "RESULTADOS" vazia: mensagem "TEMPORADA AINDA NÃO INICIADA"

---

### 07 · NEWS
**Objetivo:** Hub de conteúdo — notícias, vlogs, entrevistas. Manter fãs engajados e SEO.

**Hierarquia de conteúdo:**
1. Label: "CONTEÚDO"
2. Título display: "ÚLTIMAS NOTÍCIAS"
3. Grid 3×2 (6 cards) com stagger masonry (cards 2 e 5 com margin-top 80px)
4. Cada card: thumbnail, categoria (badge), título, excerpt 2 linhas, data, link "LER MAIS →"
5. CTA final: "VER TODOS OS POSTS" → link blog/canal YouTube

**Componentes:**
- Background: `#000000` padding `150px 40px 100px`
- Título: Base Neue `clamp(60px, 10vw, 120px)` weight 800 letter-spacing 3px center-align
- Grid: `repeat(3, 1fr)` gap 30px; tablet `repeat(2, 1fr)`; mobile `1fr`
- Card: flat, sem sombra, `border-radius: 0`
- Thumbnail: `aspect-ratio: 16/10` overflow hidden; hover `scale(1.05) 0.4s ease`
- Badge categoria: Inter 11px uppercase letter-spacing 1px; cores: MATCH=amarelo, TEAM=branco, MEDIA=cinza
- Título card: Inter 16px weight 700 `#FFFFFF` uppercase 2-line clamp
- Excerpt: Inter 13px `#888888` 2-line clamp
- Link: Inter 11px weight 600 uppercase letter-spacing 1px; hover `translateX(4px)` na seta

**Slots de imagem:**

| ID | Tipo | Proporção | Descrição |
|----|------|-----------|-----------|
| `news-thumb-1` | FOTO | 16:10 | Thumbnail notícia 1 — ex.: foto de round em jogo (LAN, tela de server) |
| `news-thumb-2` | FOTO | 16:10 | Thumbnail notícia 2 — ex.: bastidores bootcamp |
| `news-thumb-3` | FOTO | 16:10 | Thumbnail notícia 3 — ex.: conquista/troféu |
| `news-thumb-4` | FOTO | 16:10 | Thumbnail notícia 4 — ex.: entrevista jogador |
| `news-thumb-5` | FOTO | 16:10 | Thumbnail notícia 5 — ex.: novo jersey/merch drop |
| `news-thumb-6` | FOTO | 16:10 | Thumbnail notícia 6 — ex.: vlog viagem para torneio |

---

### 08 · MERCH
**Objetivo:** Direcionar para loja — não vender on-site, apenas gerar intenção e clique.

**Hierarquia de conteúdo:**
1. Label: "LOJA"
2. Título display (palavra em amarelo): "VISTA A" `#FFFFFF` + "OVERCLOCK" `#FFFF00`
3. Copy curta: "Coleção oficial — equipamentos dos campeões"
4. Slider horizontal: 3–4 produtos em destaque
5. CTA único: "IR PARA A LOJA →" (link externo)

**Componentes:**
- Background: `#000000` com noise SVG overlay
- Título: Base Neue `clamp(40px, 6vw, 70px)` weight 800 uppercase
- Slider: scroll horizontal, cards 1fr com gap 20px
- Card produto: `border: 1px dashed #41413B`, hover `border: 1px solid #FFFF00`
- Imagem produto: `aspect-ratio: 1/1` `object-fit: cover`
- Nome produto: Inter 14px uppercase weight 700
- CTA: `border-radius: 0` `padding: 18px 32px` `border: 1px dashed #41413B` cor `#FFFF00`

**Slots de imagem:**

| ID | Tipo | Proporção | Descrição |
|----|------|-----------|-----------|
| `merch-hero-img` | FOTO | 16:10 | Foto editorial flagship: jersey completo Overclock em modelo, fundo escuro dramático |
| `merch-product-jersey` | FOTO | 1:1 | Jersey oficial frente — fundo neutro escuro |
| `merch-product-hoodie` | FOTO | 1:1 | Hoodie Overclock — fundo neutro escuro |
| `merch-product-cap` | FOTO | 1:1 | Boné/cap Overclock — fundo neutro escuro |

---

### 09 · PARTNERS
**Objetivo:** Mostrar parceiros/patrocinadores — validação social + obrigação contratual.

**Hierarquia de conteúdo:**
1. Label: "PARCEIROS"
2. Título: "NOSSOS APOIADORES"
3. Logo strip (scroll infinito): todos os logos brancos, tamanho uniforme
4. CTA: "SEJA UM PARCEIRO" → link âncora para seção RECRUITMENT ou mailto

**Componentes:**
- Background: `#000000`
- Logo strip: flex, itens `180×110px` desktop / `140×80px` mobile
- Borda de cada item: `1px dashed #41413B`, margin negativo `-1px` para overlap
- Filter logos: `brightness(0) invert(1)` → todos brancos
- Animação: `logoScroll` 30s linear infinite; `animation-play-state: paused` no hover
- Título: Base Neue weight 800 `clamp(40px, 6vw, 70px)` uppercase center-align

**Slots de imagem:**

| ID | Tipo | Proporção | Descrição |
|----|------|-----------|-----------|
| `partner-logo-1` | ASSET | livre (max 180×80px) | Logo parceiro 1 — será invertido para branco via CSS |
| `partner-logo-2` | ASSET | livre | Logo parceiro 2 |
| `partner-logo-3` | ASSET | livre | Logo parceiro 3 |
| `partner-logo-4` | ASSET | livre | Logo parceiro 4 |
| `partner-logo-5` | ASSET | livre | Logo parceiro 5 |
| `partner-logo-6` | ASSET | livre | Logo parceiro 6 |
| `partner-logo-7` | ASSET | livre | Logo parceiro 7 |
| `partner-logo-8` | ASSET | livre | Logo parceiro 8 |

*Nota: strip duplica os 8 logos para garantir loop contínuo sem gap visível.*

---

### 10 · RECRUITMENT
**Objetivo:** CTA duplo — recrutamento de players aspirantes E captação de novos patrocinadores.

**Hierarquia de conteúdo:**
1. Label: "FAÇA PARTE"
2. Título display: "QUER JOGAR COM OS MELHORES?"
3. 2 cards side-by-side:
   - **Card A — PLAYERS:** "Somos recrutamos talentos BR/EU periodicamente. Envie seu perfil." + CTA "CANDIDATE-SE"
   - **Card B — PARCEIROS:** "Sua marca ao lado de campeões. Atingimos X mil fãs mensais." + CTA "SEJA PARCEIRO"
4. Foto de fundo (bootcamp/treino)
5. Dados de contato: e-mail esports@overclock.gg + ícones sociais

**Componentes:**
- Background: foto `recruitment-bg` com overlay `rgba(0,0,0,0.75)`
- Grid: 2 colunas gap 1px `#41413B` como divisor
- Cada card: padding 60px, fundo `rgba(0,0,0,0.4)`, `border: 1px dashed #41413B`
- Título: Base Neue `clamp(40px, 6vw, 80px)` weight 800 uppercase center-align
- CTA card A: texto `#FFFF00`, borda dashed
- CTA card B: texto `#FFFFFF`, borda dashed
- E-mail: Inter 14px `#888888`, hover `#FFFFFF`

**Slots de imagem:**

| ID | Tipo | Proporção | Descrição |
|----|------|-----------|-----------|
| `recruitment-bg` | FOTO | 16:9 (full-bleed) | Foto ambiental: bootcamp ou sala de treinamento — telas, teclados, intensidade competitiva. Baixa luminosidade, compatível com overlay escuro. |

---

### 11 · FOOTER
**Objetivo:** Navegação secundária, links legais, redes sociais, copyright.

**Hierarquia de conteúdo:**
1. Logo Overclock (esquerda) + tagline curta
2. Colunas de links:
   - **Time:** Roster · Conquistas · Staff
   - **Conteúdo:** Notícias · Vídeos · Calendário
   - **Organização:** Sobre · Patrocínio · Imprensa
3. Ícones redes: Twitter/X, Instagram, YouTube, Twitch, TikTok
4. Linha divisória `1px dashed #41413B`
5. Copyright: "© 2026 Overclock Esports. Todos os direitos reservados."
6. Links legais: Privacidade · Termos

**Componentes:**
- Background: `#000000`
- Texto/links: `#FFFFFF`, hover `#FFFF00`
- Headings colunas: Inter 12px uppercase letter-spacing 2px `rgba(255,255,255,0.5)`
- Links: Inter 14px weight 400
- Logo height: 40px
- Ícones sociais: 20px stroke-width 1.5 (Lucide React)
- Grid: `repeat(4, 1fr)` desktop → `repeat(2, 1fr)` tablet → `1fr` mobile

**Slots de imagem:**

| ID | Tipo | Proporção | Descrição |
|----|------|-----------|-----------|
| `footer-logo` | ASSET | SVG livre | Logo Overclock horizontal, versão branca — uso sobre fundo preto |

---

## Mapa Completo de Slots de Imagem

| ID | Seção | Tipo | Proporção | Descrição resumida |
|----|-------|------|-----------|-------------------|
| `nav-logo` | NAV | ASSET | SVG | Logo horizontal, versão preta |
| `video-hero-reel` | VIDEO-HERO | ASSET | 16:9 loop | Reel highlights 30s, mudo |
| `video-hero-fallback` | VIDEO-HERO | FOTO | 16:9 | Fallback: jogadores em palco LAN |
| `video-hero-logo-overlay` | VIDEO-HERO | ASSET | SVG | Logo branco grande sobre overlay |
| `hero-main-frame` | HERO-MAIN | FOTO | 16:10 | Star player em pose tática |
| `hero-main-logo-badge` | HERO-MAIN | ASSET | 1:1 | Logo ícone/símbolo para badge |
| `player-portrait-brvno` | ROSTER | FOTO | 3:4 | Retrato oficial brvno |
| `player-portrait-xanT` | ROSTER | FOTO | 3:4 | Retrato oficial xanT |
| `player-portrait-ZEDy` | ROSTER | FOTO | 3:4 | Retrato oficial ZEDy |
| `player-portrait-FLKR` | ROSTER | FOTO | 3:4 | Retrato oficial FLKR |
| `player-portrait-nOVA` | ROSTER | FOTO | 3:4 | Retrato oficial nOVA |
| `player-portrait-SIGMA` | ROSTER | FOTO | 3:4 | Retrato oficial coach SIGMA |
| `trophy-shot-main` | ACHIEVEMENTS | FOTO | 16:9 | Time no palco com troféu |
| `trophy-shot-secondary` | ACHIEVEMENTS | FOTO | 16:9 ou 1:1 | Celebração — foco em jogador |
| `event-badge-1` | ACHIEVEMENTS | ASSET | 1:1 | Logo torneio 1 |
| `event-badge-2` | ACHIEVEMENTS | ASSET | 1:1 | Logo torneio 2 |
| `event-badge-3` | ACHIEVEMENTS | ASSET | 1:1 | Logo torneio 3 |
| `match-oc-logo-mini` | MATCHES | ASSET | 1:1 | Logo OC compacto para cards |
| `match-opp-logo-1` | MATCHES | ASSET | 1:1 | Logo adversário partida 1 |
| `match-opp-logo-2` | MATCHES | ASSET | 1:1 | Logo adversário partida 2 |
| `match-opp-logo-3` | MATCHES | ASSET | 1:1 | Logo adversário partida 3 |
| `match-opp-logo-4` | MATCHES | ASSET | 1:1 | Logo adversário partida 4 |
| `match-opp-logo-5` | MATCHES | ASSET | 1:1 | Logo adversário partida 5 |
| `match-event-logo-1` | MATCHES | ASSET | livre | Logo evento/campeonato 1 |
| `match-event-logo-2` | MATCHES | ASSET | livre | Logo evento/campeonato 2 |
| `match-map-thumb-1` | MATCHES | ASSET | 16:9 | Thumbnail mapa CS (Dust2 etc) |
| `match-map-thumb-2` | MATCHES | ASSET | 16:9 | Thumbnail mapa CS 2 |
| `news-thumb-1` | NEWS | FOTO | 16:10 | Thumb notícia 1 |
| `news-thumb-2` | NEWS | FOTO | 16:10 | Thumb notícia 2 |
| `news-thumb-3` | NEWS | FOTO | 16:10 | Thumb notícia 3 |
| `news-thumb-4` | NEWS | FOTO | 16:10 | Thumb notícia 4 |
| `news-thumb-5` | NEWS | FOTO | 16:10 | Thumb notícia 5 |
| `news-thumb-6` | NEWS | FOTO | 16:10 | Thumb notícia 6 |
| `merch-hero-img` | MERCH | FOTO | 16:10 | Editorial flagship jersey |
| `merch-product-jersey` | MERCH | FOTO | 1:1 | Jersey frente, fundo escuro |
| `merch-product-hoodie` | MERCH | FOTO | 1:1 | Hoodie, fundo escuro |
| `merch-product-cap` | MERCH | FOTO | 1:1 | Boné/cap, fundo escuro |
| `partner-logo-1` | PARTNERS | ASSET | livre | Logo parceiro 1 (será branco via CSS) |
| `partner-logo-2` | PARTNERS | ASSET | livre | Logo parceiro 2 |
| `partner-logo-3` | PARTNERS | ASSET | livre | Logo parceiro 3 |
| `partner-logo-4` | PARTNERS | ASSET | livre | Logo parceiro 4 |
| `partner-logo-5` | PARTNERS | ASSET | livre | Logo parceiro 5 |
| `partner-logo-6` | PARTNERS | ASSET | livre | Logo parceiro 6 |
| `partner-logo-7` | PARTNERS | ASSET | livre | Logo parceiro 7 |
| `partner-logo-8` | PARTNERS | ASSET | livre | Logo parceiro 8 |
| `recruitment-bg` | RECRUITMENT | FOTO | 16:9 full-bleed | Bootcamp/treino, baixa luminosidade |
| `footer-logo` | FOOTER | ASSET | SVG | Logo horizontal branco |

**Total: 48 slots** — 22 FOTO · 26 ASSET

---

## Checklist de Gate

- [x] Todas as seções mapeadas (11/11)
- [x] Hero presente
- [x] Roster presente (6 membros com nicks, nomes, funções)
- [x] Conquistas presentes (achievements com troféus e evento-badges)
- [x] Agenda/partidas presente (matches com tabs próximas/resultados)
- [x] Notícias/conteúdo presente (news grid 3×2)
- [x] Parceiros presente (logo strip animado)
- [x] CTA recrutamento presente (seção dedicada, 2 cards)
- [x] Footer presente
- [x] Merch presente (slider + CTA externo)
- [x] Todo slot de imagem tem ID único, tipo, proporção e descrição
- [x] Nenhum slot órfão — todos referenciados em suas seções
- [x] Estados de UI mapeados (matches vazio, tab vazia)
