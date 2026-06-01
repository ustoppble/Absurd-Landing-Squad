# Vitality.gg — Análise de DNA Visual (Extraído do site real)

> **Fonte:** HTML/CSS extraído diretamente de `https://vitality.gg/` via curl. Shopify-based (tema customizado "Base" v79). Idioma: francês.

---

## 1. Estrutura de Seções da Home

A home tem **8 seções identificadas** via IDs Shopify:

| # | Seção | Tipo |
|---|-------|------|
| 1 | `video_hero_VqpRz4` | Hero com vídeo fullscreen (banner de fundo) |
| 2 | `hero_header_q1_MPpN8U` | Hero principal — título + vídeo lateral + strip de parceiros |
| 3 | `collection_slider_PDfzRd` | Slider de coleções da loja (merch) |
| 4 | `hero_header_q1_a4jY3k` | Segundo hero — seção de esports/equipes |
| 5 | `match_calendar_jCF377` | Calendário de partidas (agenda esportiva) |
| 6 | `latest_news_q1_gJNJmY` | Grid de últimas notícias |
| 7 | Footer | Rodapé completo |

---

## 2. Padrões de Layout

### Container
- **Max-width:** `1400px` (seções customizadas) com `padding: 0 40px` desktop / `0 20px` mobile
- **Shopify page-width:** `160rem` (≈2560px, mas não usado nas seções esport)
- **Margens:** zero entre seções — fluxo contínuo sem gap

### Grids
- **Hero:** `grid-template-columns: 1fr 1fr`, `gap: 60px` — split content/video. Colapsa para 1fr em ≤1024px
- **News:** `repeat(3, 1fr)`, `gap: 30px` — com stagger manual: cards pares têm `margin-top: 80px` (efeito masonry)
- **Collection slider:** horizontal scroll track com `width: max-content`, carrossel CSS puro
- **Logo strip (parceiros):** flex, itens 180×110px, borda dashed dividindo cada item

### Breakpoints
- Mobile: ≤480px (botões empilham em coluna)
- Tablet: ≤768px (fontes reduzem, hero reflow)
- Desktop médio: ≤1024px (hero colapsa)
- Desktop largo: 1400px container

---

## 3. Tom Visual

**Aesthetic:** Dark tactical / military esports — near-black com amarelo elétrico único como acento. Zero decoração supérflua. Disciplina visual extrema.

**Paleta de emoção:**
- Fundos quase-pretos criam peso e seriedade
- O `#FFFF00` age como alerta de alto contraste — chama atenção imediata
- Tipografia super-condensada em UPPERCASE transmite energia, velocidade, agressividade
- Bordas tracejadas (`dashed`) remetem a interfaces militares/táticas — HUD de jogo
- Cantos em L amarelos nos frames de vídeo reforçam o DNA tático

**Idioma visual:** esports de alto nível, team org premium, não casual.

---

## 4. Motion / Interações

| Elemento | Animação | Duração |
|---------|---------|---------|
| Logo strip (parceiros) | `translateX(0 → -25%)` scroll infinito | 30s linear infinite |
| Logo strip hover | `animation-play-state: paused` | — |
| Image cards hover | `scale(1.05)` zoom | 0.4s ease |
| Botões hover | `background: rgba(255,255,0,0.1)` fill | 0.3s ease |
| Arrow icon hover | `translateX(4px)` slide | 0.3s ease |
| Play button hover | `scale(1.1)` | 0.3s ease |
| Transição global padrão | `all 0.3s ease` | — |
| Duração curta var | `--duration-short: 0.1s` | — |
| Duração padrão var | `--duration-default: 0.25s` | — |
| Duração longa var | `--duration-long: 0.5s` | — |
| Duração animação var | `--duration-animate: 1.0s` | — |

**Efeito noise/textura:** SVG `feTurbulence` (fractalNoise, baseFrequency 0.85) com `opacity: 0.03` como overlay em todos os heroes — simula papel/grain sem peso visual.

**Radial glows:** dois gradientes radiais posicionados (direita + esquerda inferior) com cor `rgba(120, 140, 20, 0.49)` — amarelo-oliva fantasma.

---

## 5. Componentes-Chave

### Navegação (NAV)
- **Background:** branco `#FFFFFF` com borda inferior `#D2D5D9`
- **Texto nav:** `rgb(40,40,40)` — quase preto
- **Logo height:** 44px mobile / 50px desktop
- **Nav items:** `"Instrument Sans"`, 14px, weight 400
- **Botão CTA no header:** altura mínima 3.6rem, padding `0.8rem 2rem`, font 1.2rem
- **Detalhe único:** pseudo-elemento `::before/::after` dos botões tem `background-color: #FEFF00 !important` — acento amarelo aparece em hover como barra lateral decorativa

### Hero
- **Background:** `linear-gradient(135deg, #1a1a0f 0%, #0d0d0a 50%, #141410 100%)` — verde-oliva escurissimo
- **Layout:** 2 colunas — texto (esquerda) + frame de vídeo (direita)
- **Badge de status:** dot `8×8px` cor `#FF0` + texto uppercase 12px
- **Título:** `'Base Neue'` condensed, weight 800, `letter-spacing: 3px`, `line-height: 0.95`, UPPERCASE. Tamanho: `clamp(40px, 12vw, 160px)`. Linha 1 sólida `#FFFFFF`, linha 2 muted `rgba(255,255,255,0.5)`
- **Descrição:** Inter 16px, weight 400, cor `#888888`, `max-width: 500px`, `line-height: 1.6`
- **Botões:** `border-radius: 0`, `padding: 18px 32px`, borda `1px dashed #41413B`, sem background, texto amarelo `#FFFF00` (primário) ou branco (secundário)
- **Frame de vídeo:** `aspect-ratio: 16/10`, max 600px, borda dashed `#41413B` + **4 cantos em L** com `20×20px border 2px solid #FFFF00` — detalhe tático distintivo
- **Noise overlay:** SVG turbulência, opacity 0.03

### Strip de Parceiros (Logo Scroll)
- Itens: `180×110px`, borda `1px dashed #41413B`, margin negativo para overlap
- Logos: `filter: brightness(0) invert(1)` — todos brancos
- Scroll: `logoScroll` animation 30s infinite
- Pause on hover

### Collection Slider (Merch)
- **Background:** `#000000` puro com noise SVG overlay opacity 0.03
- **Título:** `'Base Neue'`, `clamp(40px, 6vw, 70px)`, weight 800, UPPERCASE, branco com palavra destacada em `#FFFF00`
- **Botão CTA:** 0 radius, `padding: 18px 32px`, borda `1px dashed #41413B`, cor `#FFFF00`, letra-spacing 2px

### Calendário de Partidas
- **Background:** `#000000`
- **Card upcoming:** `#FFFDFD` bg, `border: 1px solid #FEFF00`
- **Card past:** `#F9FAFB` bg, `border: 1px solid #FEFF00`
- **Texto:** `#000000` (cards claros em seção escura — inversão de contraste)
- **Título:** `'Base Neue'`, 60px, weight 800, `letter-spacing: 2px`, `line-height: 0.95`
- **Timeline:** scroll horizontal sem scrollbar visível

### Grid de Notícias
- **Background:** `#000000`, padding `150px 20px 100px 20px`
- **Título:** `'Base Neue'`, `clamp(60px, 10vw, 120px)`, weight 800, `letter-spacing: 3px`, center-align
- **Grid:** 3 colunas, `gap: 30px`, stagger: cards 2 e 5 têm `margin-top: 80px` (ritmo visual masonry)
- **Card:** sem border, sem shadow, sem radius — flat. Imagem `aspect-ratio: 16/10`, zoom hover `scale(1.05)` 0.4s
- **Título da notícia:** Inter 16px, weight 700, `#FFFFFF`, UPPERCASE
- **Excerpt:** Inter 13px, weight 400, `#888888`, 2 linhas max
- **Link:** Inter 11px, weight 600, uppercase, letter-spacing 1px

### Footer
- **Background:** `#000000`
- **Texto/links/heading/border:** tudo `#FFFFFF`

---

## 6. Hierarquia Tipográfica Resumida

| Papel | Fonte | Peso | Tamanho | Notas |
|-------|-------|------|---------|-------|
| Display/Hero | Base Neue (Super Cond) | 800 | clamp(40px–160px) | uppercase, letter-spacing 3px |
| Section title | Base Neue (Super Cond) | 800 | clamp(40–120px) | uppercase |
| UI/Nav | Instrument Sans | 400–700 | 14px | —|
| Body | Raleway | 400 | 16px (1rem base) | line-height 1.6 |
| Subheading/card | Inter | 700 | 16px | uppercase |
| Body small | Inter | 400 | 13–16px | color #888888 |
| CTA/label | Inter | 500–600 | 11px | uppercase, letter-spacing 2px |
| Price | Instrument Sans | scale=1.0 | — | — |

---

## 7. Identidade Sonora Visual (Resumo)

- **Cor dominante:** preto absoluto `#000000`
- **Acento único:** amarelo `#FFFF00` — exatamente 1 cor de acento, usada com disciplina
- **Bordas dashed:** assinatura visual — separadores, frames, botões, itens de grid
- **Cantos em L:** detalhe tático em frames de conteúdo premium
- **Zero radius em elementos principais:** filosofia sharp/angular
- **Noise sutil:** textura de papel/grain em todas as seções escuras
- **Tipografia condensada:** Base Neue como voz principal — agressiva e moderna
