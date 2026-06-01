# QA_REPORT — Overclock CS Landing Page
> Revisão: 2026-06-01 · Alvo: http://localhost:2626 · Stack: Vite + React + TS + Tailwind
> Revisor: Agent REVIEWER (passo 8)

---

## VEREDITO GERAL: ❌ FAIL

> FAIL em 2 de 6 camadas críticas (IMAGENS, MONTAGEM FINAL). As demais passam com ressalvas menores.

---

## Tabela PASS/FAIL por Camada

| # | Camada | Veredito | Evidência |
|---|--------|----------|-----------|
| 1 | COPY | ✅ PASS* | Zero lorem. Todo copy do CONTENT.md presente. *Um erro de acento (ver D04). |
| 2 | TOKENS / DESIGN | ✅ PASS | Acento #FFFF00 único, preto #000000, dashed #41413B, radius 0px, fontes corretas. |
| 3 | IMAGENS | ❌ FAIL | `match-oc-logo-mini.png` ausente (3 broken). Partner logos como quadrados brancos. |
| 4 | ESTRUTURA | ✅ PASS | 11 seções na ordem correta. Console: 0 erros, 0 warnings. Build verde. |
| 5 | MONTAGEM FINAL | ❌ FAIL | Logo "OVERCLOCK" clipa em "OVERCLOCI" em todos os viewports. Responsivo OK demais. |
| 6 | FIDELIDADE DNA | ✅ PASS* | Sharp/sóbrio/agressivo/premium. Não é template genérico. *Quadrados brancos degradam premium. |

---

## Lista de Defeitos — Prioridade

### 🔴 CRÍTICO — Bloqueante

#### D01 · `match-oc-logo-mini.png` FALTANDO
- **Camada:** IMAGENS
- **Evidência:** `http://localhost:2626/graphics/match-oc-logo-mini.png` → 404. Playwright confirma 3 imagens com `naturalWidth=0` (broken). Visível como ícone de imagem quebrada nos 3 cards da aba "PRÓXIMAS".
- **Causa:** Arquivo `assets/graphics/match-oc-logo-mini.png` não existe no repo. Referenciado em `src/data/content.ts:279` como `ocLogoMini: '/graphics/match-oc-logo-mini.png'`.
- **Screenshot:** `tmp/screenshots_qa/qa_desktop_matches.png` · `tmp/screenshots_qa/qa_mobile_matches.png`
- **Dono:** prompt-engineer

#### D02 · Partner logos renderizam como quadrados brancos
- **Camada:** IMAGENS
- **Evidência:** Todos os 8 partner logos (`partner-logo-1.png` … `partner-logo-8.png`) carregam (1024×1024, OK), mas renderizam como quadrados brancos sólidos.
- **Causa:** Os PNGs gerados têm fundo opaco sólido. O CSS `filter: brightness(0) invert(1)` (correto para logos em fundo transparente) converte qualquer fundo opaco em branco total. Efeito: caixas brancas sem nenhum símbolo visível.
- **Screenshot:** `tmp/screenshots_qa/qa_desktop_partners.png`
- **Dono:** prompt-engineer (regenerar logos com fundo transparente)

#### D03 · Logo wordmark "OVERCLOCK" clipa → aparece "OVERCLOCI"
- **Camada:** MONTAGEM FINAL
- **Evidência:** Visível em Nav (claro e escuro), VideoHero overlay, mobile hamburger, Footer. Screenshot em todos os estados.
- **Causa:** `OverclockLogo.tsx` usa SVG `<text>` com viewBox `0 0 228 44` e font-family `'Arial Narrow', 'Arial'`. Quando Arial Narrow **não está instalada** (common em macOS/Linux), o fallback "Arial" é ~40% mais largo — a string "OVERCLOCK" a 32px bold Arial ultrapassa x=228px e é clipada pelo SVG viewBox, removendo o "K".
- **Fix sugerido:** Ampliar viewBox para `0 0 280 44` (ou mais), ou usar `overflow="visible"`, ou preferir `textLength` com `lengthAdjust="spacing"`.
- **Screenshots:** `tmp/screenshots_qa/qa_desktop_nav_dark.png`, `tmp/screenshots_qa/qa_desktop_videohero.png`, `tmp/screenshots_qa/qa_desktop_footer.png`, `tmp/screenshots_qa/qa_mobile_hamburger.png`
- **Dono:** expert-react / frontend-developer

---

### 🟡 IMPORTANTE — Não bloqueante mas visível

#### D04 · "renda media alta" sem acento
- **Camada:** COPY
- **Localização:** `src/data/content.ts:534` e `CONTENT.md:671`
- **Evidência:** Texto renderizado: *"Público 18–34 anos, 72% masculino, renda media alta"* — falta acento em "média".
- **Erro ortográfico pt-BR.** Presente na seção RECRUITMENT, card B (Parceiros).
- **Dono:** content-marketer

#### D05 · Produto 4 (Mousepad XL) ausente na seção MERCH
- **Camada:** ESTRUTURA / COPY
- **Evidência:** `CONTENT.md` define 4 produtos (Jersey, Hoodie, Cap, **Mousepad XL R$129,90 — "MAIS VENDIDO"**). `src/data/content.ts:MERCH_PRODUCTS` só tem 3 (Jersey, Hoodie, Cap). Mousepad nunca foi adicionado ao código.
- **Screenshot:** `tmp/screenshots_qa/qa_desktop_merch.png` — 3 produtos visíveis, mousepad ausente.
- **Dono:** expert-react

---

### 🟢 OBSERVAÇÕES / Minor

#### D06 · `video-hero-reel` ausente — fallback estático em uso
- **Camada:** IMAGENS
- **Nota:** Spec define slot de vídeo mp4. Nenhum arquivo de vídeo presente no repo. O componente `VideoHero.tsx` usa apenas imagem estática (`video-hero-fallback.png`). Resultado visual é aceitável — a imagem carrega e o parallax funciona. Não é broken visualmente.
- **Dono:** prompt-engineer (entregar arquivo de vídeo quando disponível)

#### D07 · `trophy-shot-secondary` definido na spec mas não renderizado
- **Camada:** IMAGENS
- **Nota:** Slot `trophy-shot-secondary` listado na IA_SPEC. Arquivo existe em `assets/photos/`. Componente `Achievements.tsx` usa somente `trophy-shot-main`. Decisão de design — não é broken.
- **Dono:** expert-react (verificar se era intencional)

#### D08 · `hero-main-logo-badge` definido mas não referenciado
- **Camada:** IMAGENS
- **Nota:** Slot da spec mas código não faz `<img>` para esse arquivo. Badge area usa apenas texto/dot. Arquivo existe mas não está em uso.
- **Dono:** expert-react

#### D09 · Scroll horizontal de partidas mobile mostra apenas 1 card
- **Camada:** MONTAGEM FINAL
- **Nota:** No mobile 390px, o scroll horizontal de match cards funciona (overflow-x: auto), mas apenas ~1.1 card fica visível. O truncamento visual sem affordance de scroll pode confundir usuários. Não é bug técnico, mas UX abaixo do ideal.
- **Screenshot:** `tmp/screenshots_qa/qa_mobile_matches.png`
- **Dono:** frontend-developer

---

## Verificação das Pendências Já Conhecidas

| Pendência | Confirmado? | Causa |
|-----------|-------------|-------|
| Partner logos como quadrados brancos | ✅ CONFIRMADO | PNGs têm fundo opaco sólido; `brightness(0) invert(1)` torna tudo branco. Não é erro de path — as imagens carregam. |
| `match-oc-logo-mini.png` broken | ✅ CONFIRMADO | Arquivo simplesmente **não existe** em `assets/graphics/`. Path correto seria `assets/graphics/match-oc-logo-mini.png`. |
| `hero-main-frame.png` ausente no HeroMain | ❌ REFUTADO | Arquivo EXISTE (`assets/photos/hero-main-frame.png`) e renderiza corretamente. `naturalWidth=1536`. Screenshot `qa_desktop_hero.png` mostra imagem real de jogador. |

---

## Evidências de PASS por Camada

### CAMADA 1 — COPY ✅
- Todos os 11 títulos de seção presentes: TIME, CONQUISTAS, PARTIDAS, NOTÍCIAS, LOJA, PARCEIROS, FAÇA PARTE, etc.
- Todos os 6 nicks do roster: BRVNO, XANT, ZEDY, FLKR, NOVA, SIGMA ✓
- 5 conquistas completas com microcopy ✓
- 3 partidas próximas + 3 resultados ✓
- 6 cards de notícias com títulos, excertos e datas ✓
- Footer: copyright "© 2026 Overclock Esports. Todos os direitos reservados." ✓
- Zero lorem ipsum, zero placeholder ✓

### CAMADA 2 — TOKENS / DESIGN ✅
- `#FFFF00` acento único — verificado em badges, CTAs, tabs ativas, corner accents, stat counter
- `#000000` fundo predominante ✓
- `1px dashed #41413B` borda assinatura visível em containers, botões, divisores ✓
- `border-radius: 0` em todos os elementos — confirmado via tailwind.config.ts (todos `0px`) ✓
- Fontes: Base Neue (display), Instrument Sans (heading), Inter (UI) — corretas no config ✓
- L-accents amarelos no hero frame e trophyshot photo ✓

### CAMADA 4 — ESTRUTURA ✅
Seções na ordem correta:
```
01 NAV ✓ · 02 VIDEO-HERO ✓ · 03 HERO-MAIN ✓ · 04 ROSTER ✓ · 05 ACHIEVEMENTS ✓
06 MATCHES ✓ · 07 NEWS ✓ · 08 MERCH ✓ · 09 PARTNERS ✓ · 10 RECRUITMENT ✓ · 11 FOOTER ✓
```
- Console: **0 erros**, **0 warnings** (Playwright desktop 1440px)
- Build: ✅ `tsc && vite build` verde em 2.11s (1603 modules, 438kB JS, 23.6kB CSS)

### CAMADA 5 — MONTAGEM FINAL (parcial ✅ / parcial ❌)
**PASS:**
- Mobile hamburger abre e fecha ✓ (`tmp/screenshots_qa/qa_mobile_hamburger.png`)
- Nav dark-on-scroll funcionando (background muda para #000 após 70vh) ✓ (`qa_desktop_nav_dark.png`)
- Scroll-reveal animations (reveal-fade, reveal-up, counter-pop) ✓
- Parallax no VideoHero (translateY via requestAnimationFrame) ✓
- Logo strip animado (CSS `logoScroll 30s linear infinite`) ✓
- StatCounter count-up (0 → 3 animado) ✓
- Grid responsivo: desktop 3-col roster → mobile 2-col → 1-col ✓
- Partner logos infinite scroll (4× duplication) ✓

**FAIL:**
- Logo wordmark clipa (ver D03) ✗

### CAMADA 6 — FIDELIDADE DNA ✅*
- Sharp/agressivo: radius 0 everywhere, borders dashed, typography condensed bold ✓
- Sóbrio/premium: black backgrounds, muted colors, noise texture ✓
- Acento único amarelo: nunca foge para outra cor ✓
- Sem aparência de template genérico: hero frame, roster cards, match HUD, achievement list com estética de scoreboard ✓
- Degrada: partner squares quebram o "premium" momentaneamente (D02)

---

## Auditoria de Imagens — Resumo Quantitativo

| Status | Qtd | Slots afetados |
|--------|-----|----------------|
| ✅ OK | 92 | Todos exceto match-oc-logo-mini |
| ❌ Broken (naturalWidth=0) | 3 | `match-oc-logo-mini.png` (×3 nas 3 cards) |
| ⚠️ Carrega mas parece broken | 32 | `partner-logo-1..8` (4× cada por strip) |
| **Total imagens no DOM** | **95** | — |

---

## Screenshots Capturadas

```
tmp/screenshots_qa/
├── qa_desktop_videohero.png    ← VideoHero + nav (confirma logo truncado)
├── qa_desktop_hero.png         ← HeroMain (frame OK, L-accents OK)
├── qa_desktop_roster.png       ← 6 cards, 3-col grid, portraits OK
├── qa_desktop_achievements.png ← counter animado, trophy photo OK
├── qa_desktop_matches.png      ← broken match-oc-logo-mini VISÍVEL
├── qa_desktop_news.png         ← 6 cards masonry, thumbs OK
├── qa_desktop_merch.png        ← 3 produtos, hero image OK
├── qa_desktop_partners.png     ← quadrados brancos VISÍVEIS
├── qa_desktop_recruitment.png  ← 2 cards, bg photo OK
├── qa_desktop_footer.png       ← footer estrutura OK, logo clipado
├── qa_desktop_nav_dark.png     ← nav dark-on-scroll, logo clipado
├── qa_desktop_full.png         ← full page desktop
├── qa_mobile_full.png          ← full page mobile 390px
├── qa_mobile_hamburger.png     ← menu mobile aberto, stacking OK
├── qa_mobile_matches.png       ← scroll horizontal, broken OC logo
└── qa_mobile_roster.png        ← roster empilhado mobile
```

---

*QA_REPORT.md — Overclock CS · v1.0 · 2026-06-01 · 6 camadas auditadas · 3 críticos · 2 importantes · 3 observações*
