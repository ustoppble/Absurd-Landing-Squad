# Overclock CS — Design System

Derivado do DNA visual vitality.gg · 2026-06-01  
Arquivos de tokens: `tokens.css` (CSS custom properties) · `tokens.json` (JSON)

---

## Filosofia

| Princípio | Regra |
|---|---|
| Radius | **0px everywhere** — sharp edges são a assinatura |
| Borda | `1px dashed #41413B` — presente em todos os containers principais |
| Acento | **Só amarelo** `#FFFF00` — zero outros acentos |
| Fundo | Preto `#000000` + gradiente olive-dark no hero |
| Tipografia Display | Base Neue Super Condensed, uppercase, w800, ls 3px |
| Sombras | Praticamente inexistentes — profundidade via contraste |

---

## Paleta de Cores

### Backgrounds

| Token CSS | Valor | Uso |
|---|---|---|
| `--color-bg-page` | `#000000` | Base de todas as páginas |
| `--color-bg-hero-gradient` | `linear-gradient(135deg, #1A1A0F, #0D0D0A, #141410)` | Hero section |
| `--color-bg-surface` | `#121212` | Superfícies elevadas em dark bg |
| `--color-bg-video-inner` | `#0A0A0A` | Interior do frame de vídeo |
| `--color-bg-header` | `#FFFFFF` | Header/nav |
| `--color-bg-match-upcoming` | `#FFFDFD` | Card de partida futura |
| `--color-bg-match-past` | `#F9FAFB` | Card de partida passada |

### Acento (único)

| Token CSS | Valor | Uso |
|---|---|---|
| `--color-accent` | `#FFFF00` | CTA buttons, corner accents, play icon, estrelas, highlights |
| `--color-accent-alt` | `#FEFF00` | Borda de match card (variação quase idêntica) |
| `--color-accent-dim` | `#FAE100` | Estado de acento dimmed |
| `--color-accent-fill-hover` | `rgba(255,255,0,0.10)` | Fill de hover em botões |
| `--color-accent-glow-right` | radial-gradient olive-yellow | Glow à direita no hero |
| `--color-accent-glow-left` | radial-gradient sutil | Glow sutil inferior-esquerdo no hero |

### Texto

| Token CSS | Valor | Uso |
|---|---|---|
| `--color-text-primary` | `#FFFFFF` | Texto padrão em fundos escuros |
| `--color-text-muted` | `#888888` | Texto secundário, excerpts, captions |
| `--color-text-muted-title` | `rgba(255,255,255,0.5)` | Subtítulo/eyebrow em seção escura |
| `--color-text-on-light` | `#000000` | Texto sobre superfícies brancas |
| `--color-text-near-black` | `rgb(40,40,40)` | Texto de navegação no header |

### Sistema (feedback)

| Token CSS | Valor | Uso |
|---|---|---|
| `--color-system-error` | `#D72C0D` | Erro, preço promocional |
| `--color-system-success` | `#008060` | Estado positivo |
| `--color-system-focus` | `#87ADF5` | Anel de foco por teclado |

---

## Bordas

> **A borda dashed é a assinatura visual mais importante do sistema.**  
> Presente em containers, botões, logo strip e frames de vídeo.

| Token CSS | Valor | Uso |
|---|---|---|
| `--border-signature` | `1px dashed #41413B` | **Assinatura** — containers, buttons, logo items, video frames |
| `--border-match` | `1px solid #FEFF00` | Cards de partida |
| `--border-header` | `1px solid #D2D5D9` | Separador inferior do header |
| `--border-corner-accent` | `2px solid #FFFF00` | L-accents nos cantos de frames premium |
| `--border-button` | `1px dashed #41413B` | Botões (primary e ghost) |

---

## Radius

> Filosofia: **zero radius**. Sharp edges em tudo.

| Token CSS | Valor | Exceção? |
|---|---|---|
| `--radius-none` / `--radius-default` | `0px` | Padrão universal |
| `--radius-card` | `0px` | Cards |
| `--radius-button` | `0px` | Botões |
| `--radius-video-inner` | `2px` | Exceção técnica: inner frame de vídeo |
| `--radius-dot` | `50%` | Badge dots / indicadores de status |

---

## Tipografia

### Font Stacks

| Família | Stack | Uso principal |
|---|---|---|
| Display | `'Base Neue', 'Arial Narrow', Arial, sans-serif` | Hero titles, section headings |
| Heading | `'Instrument Sans', 'Trebuchet MS', 'Helvetica Neue', sans-serif` | Nav, buttons, UI headings |
| Body | `'Raleway', 'Gill Sans', 'Gill Sans MT', 'Segoe UI', sans-serif` | Body copy, parágrafos |
| UI | `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif` | Card titles, badges, CTA labels |

### Escala de Tamanhos

| Token CSS | Valor | Uso |
|---|---|---|
| `--font-size-hero-display` | `clamp(40px, 12vw, 160px)` | Headline principal do hero |
| `--font-size-hero-display-vertical` | `clamp(80px, 15vw, 160px)` | Variante vertical/empilhada |
| `--font-size-hero-display-mobile` | `clamp(30px, 10vw, 70px)` | Hero em mobile |
| `--font-size-section-xl` | `clamp(60px, 10vw, 120px)` | Títulos grandes (news, roster) |
| `--font-size-section-lg` | `clamp(40px, 6vw, 70px)` | Títulos médios de seção |
| `--font-size-section-match` | `clamp(24px, 8vw, 60px)` | Título da seção de partidas |
| `--font-size-body` | `16px` | Corpo padrão |
| `--font-size-body-sm` | `13px` | Excerpts, secundário |
| `--font-size-nav` | `14px` | Navegação |
| `--font-size-button` | `14px` | Label de botão |
| `--font-size-cta` | `11px` | CTA label (uppercase, ls 2px) |
| `--font-size-badge` | `12px` | Badge text |

### Estilos Display (Base Neue)

```css
font-family: var(--font-display);
font-size: var(--font-size-hero-display);
font-weight: 800;
letter-spacing: 3px;
line-height: 0.95;
text-transform: uppercase;
-webkit-font-smoothing: antialiased;
```

### Estilos CTA

```css
font-family: var(--font-ui);
font-size: 11px;
font-weight: 500;
letter-spacing: 2px;
text-transform: uppercase;
```

---

## Espaçamento

### Scale (base 8pt grid)

| Token | Valor |
|---|---|
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-3` | 12px |
| `--space-4` | 16px |
| `--space-5` | 20px |
| `--space-6` | 24px |
| `--space-8` | 32px |
| `--space-10` | 40px |
| `--space-12` | 48px |
| `--space-15` | 60px |
| `--space-20` | 80px |
| `--space-30` | 120px |
| `--space-38` | 150px |

### Semântico

| Token | Valor | Uso |
|---|---|---|
| `--spacing-section-top-lg` | 150px | Padding-top seções grandes |
| `--spacing-section-top-md` | 80px | Padding-top seções médias |
| `--spacing-hero-gap` | 60px | Gap entre colunas do hero |
| `--spacing-news-gap` | 30px | Gap do grid de notícias |
| `--spacing-button-padding` | 18px 32px | Padding interno dos botões |
| `--spacing-corner-accent` | 20px | Dimensão dos L-accents |

---

## Layout e Grid

```css
/* Container padrão */
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 var(--spacing-container-padding-desktop);
}

@media (max-width: 749px) {
  .container {
    padding: 0 var(--spacing-container-padding-mobile);
  }
}

/* Grid do hero */
.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-hero-gap);
}

@media (max-width: 1024px) {
  .hero-grid {
    grid-template-columns: 1fr;
  }
}

/* Grid de notícias */
.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-news-gap);
}

@media (max-width: 989px) {
  .news-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 749px) {
  .news-grid {
    grid-template-columns: 1fr;
  }
}
```

### Breakpoints

| Token | Valor | Uso |
|---|---|---|
| `--bp-xs` | 480px | Mobile pequeno |
| `--bp-sm` | 749px | Mobile max |
| `--bp-md` | 768px | Tablet |
| `--bp-lg` | 989px | Desktop médio |
| `--bp-xl` | 1024px | Desktop — hero colapsa aqui |
| `--bp-2xl` | 1199px | Desktop grande |
| `--bp-max` | 1400px | Container max |

---

## Componentes Base

### Button Primary

Fundo transparente, borda dashed assinatura, texto amarelo.

```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: var(--spacing-button-padding);
  background: transparent;
  border: var(--border-signature);
  border-radius: var(--radius-button);
  color: var(--color-accent);
  font-family: var(--font-ui);
  font-size: var(--font-size-cta);
  font-weight: 500;
  letter-spacing: var(--letter-spacing-cta);
  text-transform: uppercase;
  cursor: pointer;
  transition: background var(--duration-medium) var(--easing-default);
}

.btn-primary:hover {
  background: var(--color-accent-fill-hover);
  box-shadow: var(--shadow-button-hover);
}

.btn-primary:focus-visible {
  outline: 2px solid var(--color-system-focus);
  outline-offset: 2px;
}

.btn-primary:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  pointer-events: none;
}

@media (max-width: 749px) {
  .btn-primary {
    padding: var(--spacing-button-padding-mobile);
  }
}
```

### Button Ghost (Dashed)

Igual ao Primary mas com texto branco.

```css
.btn-ghost {
  /* Herda tudo do .btn-primary */
  color: var(--color-text-primary);
}

.btn-ghost:hover {
  background: rgba(255, 255, 255, 0.10);
}
```

---

### Card de Player

```css
.player-card {
  background: var(--color-bg-surface);
  border: var(--border-signature);
  border-radius: var(--radius-card);
  overflow: hidden;
}

.player-card__image {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  transition: transform var(--duration-slow) var(--easing-default);
}

.player-card:hover .player-card__image {
  transform: scale(1.05);
}

.player-card__body {
  padding: var(--spacing-card-content-gap);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-card-inner-gap);
}

.player-card__name {
  font-family: var(--font-ui);
  font-size: var(--font-size-body);
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-text-primary);
  letter-spacing: var(--letter-spacing-none);
}

.player-card__role {
  font-family: var(--font-ui);
  font-size: var(--font-size-body-sm);
  font-weight: 400;
  color: var(--color-text-muted);
}

/* Badge de acento — status ativo */
.player-card__badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: var(--font-size-badge);
  letter-spacing: var(--letter-spacing-badge);
  text-transform: uppercase;
  color: var(--color-accent);
}

.player-card__badge::before {
  content: '';
  display: block;
  width: 6px;
  height: 6px;
  border-radius: var(--radius-dot);
  background: var(--color-accent);
}
```

---

### Card de Partida (Match Card)

Cards sobre fundo preto com borda amarela — inversão deliberada de contraste.

```css
.match-card {
  border: var(--border-match);
  border-radius: var(--radius-card);
  padding: var(--spacing-card-content-gap);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-card-inner-gap);
}

.match-card--upcoming {
  background: var(--color-bg-match-upcoming);
  color: var(--color-text-on-light);
}

.match-card--past {
  background: var(--color-bg-match-past);
  color: var(--color-text-on-light);
}

.match-card__title {
  font-family: var(--font-display);
  font-size: var(--font-size-section-match);
  font-weight: var(--font-weight-display);
  letter-spacing: var(--letter-spacing-display);
  text-transform: uppercase;
  line-height: var(--line-height-display);
  color: var(--color-text-body-dark);
}

.match-card__meta {
  font-family: var(--font-ui);
  font-size: var(--font-size-body-sm);
  color: var(--color-text-on-light);
}

.match-card__score {
  font-family: var(--font-display);
  font-size: var(--font-size-section-lg);
  font-weight: var(--font-weight-display);
  letter-spacing: var(--letter-spacing-display);
  color: var(--color-accent);
}
```

---

### News Card

```css
.news-card {
  background: transparent;
  border-radius: var(--radius-card);
  overflow: hidden;
}

.news-card__image-wrap {
  overflow: hidden;
  aspect-ratio: 16 / 10;
}

.news-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--duration-slow) var(--easing-default);
}

.news-card:hover .news-card__image {
  transform: scale(1.05);
}

.news-card__body {
  padding: var(--spacing-card-content-gap) 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-card-inner-gap);
}

.news-card__category {
  font-family: var(--font-ui);
  font-size: var(--font-size-badge);
  font-weight: 500;
  letter-spacing: var(--letter-spacing-badge);
  text-transform: uppercase;
  color: var(--color-accent);
}

.news-card__title {
  font-family: var(--font-ui);
  font-size: var(--font-size-body);
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-text-primary);
  line-height: var(--line-height-tight);
}

.news-card__excerpt {
  font-family: var(--font-ui);
  font-size: var(--font-size-body-sm);
  font-weight: 400;
  color: var(--color-text-muted);
  line-height: var(--line-height-body);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
```

---

### Navigation (Nav)

```css
.nav {
  background: var(--color-bg-header);
  border-bottom: var(--border-header);
  padding: var(--spacing-header-padding);
  position: sticky;
  top: 0;
  z-index: var(--z-sticky);
}

.nav__inner {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-container-padding-desktop);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav__logo {
  height: 50px;
}

@media (max-width: 749px) {
  .nav__logo {
    height: 44px;
  }
}

.nav__link {
  font-family: var(--font-heading);
  font-size: var(--font-size-nav);
  font-weight: 400;
  color: var(--color-text-near-black);
  text-decoration: none;
  transition: color var(--duration-default) var(--easing-default);
}

.nav__link:hover {
  color: var(--color-text-on-light);
}

.nav__cta {
  /* Reutiliza .btn-primary mas adaptado ao header claro */
  color: var(--color-text-on-light);
  border-color: var(--color-text-on-light);
}
```

---

### Badge

```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border: var(--border-signature);
  border-radius: var(--radius-none);
  font-family: var(--font-ui);
  font-size: var(--font-size-badge);
  font-weight: 500;
  letter-spacing: var(--letter-spacing-badge);
  text-transform: uppercase;
  color: var(--color-text-primary);
  background: transparent;
}

.badge--accent {
  color: var(--color-accent);
  border-color: var(--color-accent);
}

.badge--live {
  color: var(--color-accent);
}

.badge--live::before {
  content: '';
  display: block;
  width: 6px;
  height: 6px;
  border-radius: var(--radius-dot);
  background: var(--color-accent);
  animation: pulse 1.5s ease infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}
```

---

### Logo Strip

Scroll infinito com logos em branco sobre fundo escuro.

```css
.logo-strip {
  overflow: hidden;
  border-top: var(--border-signature);
  border-bottom: var(--border-signature);
}

.logo-strip__track {
  display: flex;
  animation: logoScroll var(--logo-scroll-duration) linear infinite;
}

.logo-strip__track:hover {
  animation-play-state: paused;
}

@keyframes logoScroll {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-25%); }
}

.logo-strip__item {
  flex-shrink: 0;
  width: var(--logo-item-width-desktop);
  height: var(--logo-item-height-desktop);
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: var(--border-signature);
  margin-right: -1px; /* overlap para bordar contínua */
}

.logo-strip__item img {
  filter: var(--logo-filter-white);
  max-width: 80%;
  max-height: 60%;
  object-fit: contain;
}

@media (max-width: 749px) {
  .logo-strip__item {
    width: var(--logo-item-width-mobile);
    height: var(--logo-item-height-mobile);
  }
}
```

---

### Video Frame (com L-accents)

```css
.video-frame {
  position: relative;
  aspect-ratio: 16 / 10;
  max-width: 600px;
  border: var(--border-signature);
  border-radius: var(--radius-none);
  overflow: visible;
  background: var(--color-bg-video-inner);
}

/* L-accent nos 4 cantos */
.video-frame::before,
.video-frame::after {
  content: '';
  position: absolute;
  width: var(--corner-accent-size);
  height: var(--corner-accent-size);
  z-index: var(--z-raised);
}

.video-frame::before {
  top: -2px;
  left: -2px;
  border-top: var(--corner-accent-border);
  border-left: var(--corner-accent-border);
}

.video-frame::after {
  bottom: -2px;
  right: -2px;
  border-bottom: var(--corner-accent-border);
  border-right: var(--corner-accent-border);
}

/* Inner corners via wrapper adicional */
.video-frame__inner {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.video-frame__inner::before {
  content: '';
  position: absolute;
  top: -2px;
  right: -2px;
  width: var(--corner-accent-size);
  height: var(--corner-accent-size);
  border-top: var(--corner-accent-border);
  border-right: var(--corner-accent-border);
}

.video-frame__inner::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: -2px;
  width: var(--corner-accent-size);
  height: var(--corner-accent-size);
  border-bottom: var(--corner-accent-border);
  border-left: var(--corner-accent-border);
}

/* Play button */
.video-frame__play {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-top: 18px solid transparent;
  border-bottom: 18px solid transparent;
  border-left: 28px solid var(--color-accent);
  transition: transform var(--duration-medium) var(--easing-default);
  cursor: pointer;
}

.video-frame:hover .video-frame__play {
  transform: translate(-50%, -50%) scale(1.1);
}
```

---

## Efeitos Especiais

### Noise Texture (dark sections)

```css
.section--dark {
  position: relative;
}

.section--dark::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: var(--noise-opacity); /* 0.03 */
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
  z-index: var(--z-raised);
}
```

### Radial Glow (hero)

```css
.hero {
  background: var(--color-bg-hero-gradient);
  position: relative;
}

.hero__glow-right {
  position: absolute;
  right: 0;
  top: 0;
  width: 50%;
  height: 200%;
  background: var(--color-accent-glow-right);
  pointer-events: none;
  z-index: var(--z-base);
}

.hero__glow-left {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 40%;
  height: 100%;
  background: var(--color-accent-glow-left);
  pointer-events: none;
  z-index: var(--z-base);
}
```

---

## Motion

### Transições padrão

| Propriedade | Duração | Easing | Uso |
|---|---|---|---|
| `background-color` | 0.3s | ease | Button fill hover |
| `transform` (scale) | 0.4s | ease | Image zoom hover |
| `transform` (translate) | 0.3s | ease | Arrow/play hover |
| `color` | 0.25s | ease | Link, nav hover |
| Logo scroll | 30s | linear infinite | Logo strip animation |

### Regras de motion

- Sempre usar `transition` em propriedades específicas — nunca `transition: all`
- Imagens: `overflow: hidden` no wrapper para conter o `scale(1.05)` do hover
- Logo strip: `animation-play-state: paused` on hover

---

## Tipografia Responsiva

```css
/* Display (Base Neue) */
h1, .display {
  font-family: var(--font-display);
  font-size: var(--font-size-hero-display);
  font-weight: var(--font-weight-display);
  letter-spacing: var(--letter-spacing-display);
  line-height: var(--line-height-display);
  text-transform: uppercase;
  -webkit-font-smoothing: var(--font-smoothing);
}

/* Section title */
.section-title {
  font-family: var(--font-display);
  font-size: var(--font-size-section-xl);
  font-weight: var(--font-weight-display);
  letter-spacing: var(--letter-spacing-display);
  line-height: var(--line-height-display);
  text-transform: uppercase;
  color: var(--color-text-primary);
}

/* Eyebrow / subtitle */
.eyebrow {
  font-family: var(--font-ui);
  font-size: var(--font-size-cta);
  font-weight: 500;
  letter-spacing: var(--letter-spacing-cta);
  text-transform: uppercase;
  color: var(--color-text-muted-title);
}

/* Body padrão */
p, .body {
  font-family: var(--font-body);
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-body);
  color: var(--color-text-primary);
}
```

---

## Z-Index

| Token | Valor | Uso |
|---|---|---|
| `--z-below` | -1 | Backgrounds pseudo-elementos |
| `--z-base` | 0 | Fluxo normal |
| `--z-raised` | 10 | Noise overlay, corner accents |
| `--z-dropdown` | 100 | Menus dropdown |
| `--z-sticky` | 200 | Header sticky |
| `--z-overlay` | 300 | Overlays |
| `--z-modal` | 400 | Modais |
| `--z-toast` | 500 | Notificações |

---

## Regras de Uso (Checklist)

Antes de estilizar qualquer componente:

- [ ] Radius = 0px (exceto `--radius-video-inner` 2px e `--radius-dot` 50%)
- [ ] Borda = `--border-signature` (1px dashed #41413B) como padrão em containers
- [ ] Acento = só `--color-accent` (#FFFF00) — zero cores inventadas
- [ ] Tipografia display = Base Neue, w800, uppercase, ls 3px
- [ ] Sombras = apenas `--shadow-button-hover` em hover states específicos
- [ ] Noise = `opacity: 0.03` em todas as seções escuras
- [ ] Font smoothing = antialiased em todo texto display
