# IMAGE_PROMPTS — Overclock CS Landing Page
> Gerado em 2026-06-01. Skill: higgsfield-prompt + higgsfield-image-shots + imagegen.
> Modelo: gpt-image-2 (OpenAI). Paleta obrigatória: preto puro #000000 + amarelo neon #FFFF00.

---

## Decisão de Escopo

### Delegados ao BUILD (não gerados via IA)

| ID | Motivo |
|----|--------|
| `nav-logo` | Branding Overclock — SVG horizontal versão preta. Criar no Illustrator/Figma. |
| `video-hero-reel` | Vídeo 30s loop — não suportado por imagegen. Montar no editor de vídeo. |
| `video-hero-logo-overlay` | Branding Overclock — SVG branco grande. Variante do nav-logo. |
| `hero-main-logo-badge` | Branding Overclock — SVG ícone/símbolo. Versão monograma. |
| `match-oc-logo-mini` | Branding Overclock — SVG compacto para cards. Variante do badge. |
| `footer-logo` | Branding Overclock — SVG horizontal versão branca. Variante do nav-logo. |

### Gerados por IA

- **21 FOTO** → `assets/photos/`
- **21 ASSET gráfico** → `assets/graphics/`

---

## FOTOS — assets/photos/

### video-hero-fallback *(também serve como video-hero-reel)*
**Tipo:** FOTO STILL · **Proporção:** 16:9 (1536×1024) · **Seção:** VIDEO-HERO
> ⚠️ STILL ONLY — este squad não gera vídeo. Slot `video-hero-reel` usa a mesma imagem estática. Componente video-frame recebe still + botão play decorativo via build.

```
Wide shot, eye-level, static camera. Six esports players seated at illuminated gaming stations on a large tournament arena stage, wearing matching black jerseys with neon yellow #FFFF00 trim. Stage bathed in dramatic white and amber theatrical spotlights. Crowd fills the blurred background, arena smoke haze drifts across the stage. Cinematic editorial photography, deep shadows, pure black #000000 dominant background. Color grade: crushed blacks, amber and white highlights, high contrast. Anatomically correct, sharp focus throughout, no watermarks, no text.
```
**Negative constraints applied:** Body/Motion (anatomically correct), Texture/Lighting (specify lighting source).

---

### hero-main-frame
**Tipo:** FOTO · **Proporção:** 16:10 (1536×1024) · **Seção:** HERO-MAIN

```
Medium close-up, low angle, dolly-in framing. Esports athlete in aggressive tactical stance, holding a rifle at chest height, wearing all-black jersey with neon yellow #FFFF00 geometric trim. Pure black #000000 studio background. Dramatic single-source rim lighting from camera-right creates sharp shadows across face and forearms. Eyes locked forward with intense focus, jaw set. Style: cinematic hyperrealistic sports portrait, high contrast, cold blue shadows with warm rim light, neon yellow #FFFF00 rim accent from behind. Anatomically correct, natural skin texture, subtle imperfections, sharp focus, no watermarks, no text.
```

---

### player-portrait-brvno
**Tipo:** FOTO · **Proporção:** 3:4 (1024×1536) · **Seção:** ROSTER

```
Medium close-up, eye-level, static. Young Brazilian male esports athlete, early 20s, direct intense gaze into lens, jaw slightly forward, determined expression — jaw clenched, eyes sharp and unblinking. Wearing all-black esports jersey with neon yellow #FFFF00 number and trim details. Pure black #000000 studio background. Dramatic split lighting: left side illuminated with cool white, right side in deep shadow, neon yellow #FFFF00 rim light from directly behind outlining the shoulders. Framed from chest up, 3/4 portrait. Style: cinematic sports portrait, high contrast, Kodak Vision3 500T color grade. Natural skin texture, subtle imperfections, anatomically correct, sharp focus, no watermarks, no text.
```

---

### player-portrait-xanT
**Tipo:** FOTO · **Proporção:** 3:4 (1024×1536) · **Seção:** ROSTER

```
Medium close-up, eye-level, static. French male esports IGL player, late 20s, calm commanding presence, slight forward lean, chin up, gaze directly into lens with quiet authority — both eyebrows level, lips pressed together. Wearing all-black esports jersey with neon yellow #FFFF00 trim. Pure black #000000 studio background. Dramatic Rembrandt lighting: one side strongly lit with cool white, the other in shadow, neon yellow #FFFF00 hairline rim light from behind. Framed from chest up, 3/4 portrait. Style: cinematic sports editorial, high contrast, cool color grade. Natural skin texture, sharp focus, anatomically correct, no watermarks, no text.
```

---

### player-portrait-ZEDy
**Tipo:** FOTO · **Proporção:** 3:4 (1024×1536) · **Seção:** ROSTER

```
Medium close-up, low angle, static. Brazilian male esports AWP sniper, intense upward gaze into lens, chin slightly raised, eyes sharp and calculating — one eyebrow arched, pupils steady and focused. Sniper rifle barrel visible at the lower edge of frame. Wearing all-black esports jersey with neon yellow #FFFF00 trim. Pure black #000000 studio background. Dramatic backlight: neon yellow #FFFF00 glow outlining the shoulders and rifle barrel, face lit with cold front fill light. Framed from chest up, 3/4 portrait. Style: cinematic sports editorial, deep shadows, high contrast, desaturated blue-black color grade. Natural skin texture, sharp focus, no watermarks, no text.
```

---

### player-portrait-FLKR
**Tipo:** FOTO · **Proporção:** 3:4 (1024×1536) · **Seção:** ROSTER

```
Medium close-up, eye-level, static. Polish male esports rifler, serious focused expression, lips pressed flat, eyes steady and hard — the look of someone who misses nothing. Wearing all-black esports jersey with neon yellow #FFFF00 trim. Pure black #000000 studio background. Side-lit with a single cool white light source from camera-left, deep shadow on the right side, neon yellow #FFFF00 rim light from behind. Framed from chest up, 3/4 portrait. Style: cinematic sports editorial, high contrast, desaturated, sharp. Natural skin texture, anatomically correct, sharp focus, no watermarks, no text.
```

---

### player-portrait-nOVA
**Tipo:** FOTO · **Proporção:** 3:4 (1024×1536) · **Seção:** ROSTER

```
Medium close-up, eye-level, static. Brazilian male esports support player, calm almost invisible expression, deep focus in eyes — a slight squint, lips neutral, body still, the patience of a lurker. Wearing all-black esports jersey with neon yellow #FFFF00 trim. Pure black #000000 studio background. Soft underlighting with one narrow key light from camera-right, neon yellow #FFFF00 rim from behind, rest in deep shadow. Framed from chest up, 3/4 portrait. Style: cinematic sports editorial, moody, desaturated, high contrast. Natural skin texture, sharp focus, anatomically correct, no watermarks, no text.
```

---

### player-portrait-SIGMA
**Tipo:** FOTO · **Proporção:** 3:4 (1024×1536) · **Seção:** ROSTER

```
Medium close-up, eye-level, static. Brazilian male head coach, 30s, analytical and confident expression, arms partially crossed, chin level, eyes studying the lens with composed authority — the gaze of someone who reads patterns. Wearing a sleek all-black coaching polo with neon yellow #FFFF00 accent piping on the collar. Pure black #000000 studio background. Broad front lighting with cool key light, deep shadow from one side, neon yellow #FFFF00 shoulder rim light from behind. Framed from chest up, 3/4 portrait. Style: cinematic editorial, high contrast, authoritative, clean. Natural skin texture, sharp focus, anatomically correct, no watermarks, no text.
```

---

### trophy-shot-main
**Tipo:** FOTO · **Proporção:** 16:9 (1536×1024) · **Seção:** ACHIEVEMENTS

```
Wide shot, eye-level, static. Six esports players on a large arena championship stage, center player raising a large metallic trophy overhead with both hands, teammates reacting around them. All in matching all-black jerseys with neon yellow #FFFF00 trim. Confetti rain in the air, arena spotlights in white and amber beaming down, stage smoke drifting low. Atmosphere: ecstatic celebration, fists raised, mouths open. Style: cinematic editorial sports photography, crushed blacks, warm amber highlights, high contrast. Anatomically correct, no watermarks, no text.
```

---

### trophy-shot-secondary
**Tipo:** FOTO · **Proporção:** 16:9 (1536×1024) · **Seção:** ACHIEVEMENTS

```
Medium close-up, eye-level. Single esports player in sharp focus, wearing all-black jersey with neon yellow #FFFF00 trim, fist raised chest high, eyes closed, head slightly back — eyebrows raised, face muscles relaxed in pure euphoric relief. Shallow depth of field: blurred teammates celebrating behind. Warm tournament arena lighting, amber backlight glowing through the background bokeh. Style: cinematic sports editorial, warm color grade, soft bokeh background, high contrast foreground. Anatomically correct, natural skin texture, no watermarks, no text.
```

---

### news-thumb-1
**Tipo:** FOTO · **Proporção:** 16:10 (1536×1024) · **Seção:** NEWS · Tema: LAN round

```
Extreme close-up, overhead angle, rack focus. Esports player hands on a black mechanical keyboard mid-keystroke, gaming mouse on a black mouse pad beside it, monitor glow casting neon yellow #FFFF00 and cool blue light across the surface. Pure black #000000 desk surface. Motion blur on moving fingers, sharp focus on keycap details and finger contact points. Style: cinematic product-editorial, high contrast, neon yellow #FFFF00 accent light, pure black background. No watermarks, no text.
```

---

### news-thumb-2
**Tipo:** FOTO · **Proporção:** 16:10 (1536×1024) · **Seção:** NEWS · Tema: bootcamp

```
Wide shot, eye-level. Esports team bootcamp interior, multiple players at gaming stations in a dark room, faces illuminated only by monitor screens. Neon yellow #FFFF00 from screen edges bleeds onto black jerseys, creating a warm glow. Coach figure stands at back reviewing a monitor. Candid documentary framing, pure black #000000 dominant with yellow and blue screen glow. Style: cinematic documentary, desaturated, high contrast, gritty. No watermarks, no text.
```

---

### news-thumb-3
**Tipo:** FOTO · **Proporção:** 16:10 (1536×1024) · **Seção:** NEWS · Tema: troféu

```
Close-up, low angle, static. Esports championship trophy on a dark pedestal, dramatic single spotlight from above creating a halo of warm light. Gold and silver angular trophy, geometric form. Reflected light catches on edges in neon yellow #FFFF00. Pure black #000000 background. Blurred stage lights in extreme background bokeh. Style: cinematic product editorial, crushed blacks, warm golden highlight on trophy, high contrast. No watermarks, no text.
```

---

### news-thumb-4
**Tipo:** FOTO · **Proporção:** 16:10 (1536×1024) · **Seção:** NEWS · Tema: entrevista

```
Medium close-up, eye-level, static. Esports player in behind-the-scenes interview setup, relaxed and engaged expression — leaning slightly forward, a faint smile, direct eye contact into frame. Wearing all-black jersey with neon yellow #FFFF00 trim. Small lavalier mic visible on the collar. Semi-dark background with soft fill light from the side. Style: cinematic documentary editorial, warm tones, soft shallow depth of field on background. Natural skin texture, no watermarks, no text.
```

---

### news-thumb-5
**Tipo:** FOTO · **Proporção:** 16:10 (1536×1024) · **Seção:** NEWS · Tema: merch drop

```
Overhead flat lay, static. All-black esports jersey folded flat on a dark matte black surface. Neon yellow #FFFF00 geometric graphic design elements on the chest area — angular shapes and bold trim. Overhead studio lighting from directly above, even shadows, fabric texture visible catching the light. Style: editorial product photography, high contrast, pure black #000000 dominant, neon yellow #FFFF00 accent. Sharp focus throughout, no watermarks, no text.
```

---

### news-thumb-6
**Tipo:** FOTO · **Proporção:** 16:10 (1536×1024) · **Seção:** NEWS · Tema: viagem

```
Wide shot, eye-level, handheld feel. Two esports players walking through an airport corridor, carrying equipment bags and backpacks, wearing matching all-black team jackets with neon yellow #FFFF00 logo details on the back. Available light from overhead airport fluorescents. Slight motion blur on the bags from walking pace. Style: cinematic documentary, cool desaturated tones, high contrast, available light. No watermarks, no text.
```

---

### merch-hero-img
**Tipo:** FOTO · **Proporção:** 16:10 (1536×1024) · **Seção:** MERCH

```
Medium shot, eye-level, static. Athletic model wearing all-black esports jersey with bold neon yellow #FFFF00 geometric graphic on the chest and yellow trim on sleeves, standing in a confident athletic pose facing camera directly, arms relaxed at sides. Pure black #000000 studio background. Dramatic side lighting: strong key light from camera-right casting sharp shadows, neon yellow #FFFF00 rim light from behind outlining the silhouette against the black background. Style: high-end sportswear editorial, cinematic, high contrast, no distractions. Anatomically correct, sharp focus, no watermarks, no text.
```

---

### merch-product-jersey
**Tipo:** FOTO · **Proporção:** 1:1 (1024×1024) · **Seção:** MERCH

```
Full shot, eye-level, static. All-black esports jersey front-facing on a minimal mannequin form, centered in frame. Neon yellow #FFFF00 geometric graphic on chest, yellow trim on sleeves. Pure black #000000 background. Even diffused studio lighting, two soft boxes flanking the subject. Fabric texture visible. Style: clean catalog product photography, high contrast, sharp focus throughout, no watermarks, no text.
```

---

### merch-product-hoodie
**Tipo:** FOTO · **Proporção:** 1:1 (1024×1024) · **Seção:** MERCH

```
Full shot, eye-level, static. All-black esports hoodie on a minimal mannequin form, centered in frame. Small neon yellow #FFFF00 embroidered graphic on chest, yellow drawstring details. Hood down. Pure black #000000 background. Even diffused studio lighting. Style: clean catalog product photography, sharp focus, high contrast. No watermarks, no text.
```

---

### merch-product-cap
**Tipo:** FOTO · **Proporção:** 1:1 (1024×1024) · **Seção:** MERCH

```
Close-up, eye-level, three-quarter front angle, static. All-black snapback cap on a minimal display surface, angled 3/4 forward. Small neon yellow #FFFF00 embroidered detail on the front panel. Pure black #000000 background. Soft side lighting catching the cap structure and brim edge. Style: catalog product photography, sharp focus, high contrast, clean. No watermarks, no text.
```

---

### recruitment-bg
**Tipo:** FOTO · **Proporção:** 16:9 (1536×1024) · **Seção:** RECRUITMENT

```
Wide shot, eye-level, static. Empty esports training facility interior at night, multiple black gaming stations lit by monitor screens emitting subtle neon yellow #FFFF00 light from screen edges. Pure black #000000 dominates the space, with yellow and cool-blue monitor glow creating atmospheric depth. Cables and peripherals visible on desks, no people present, intensity conveyed through the environment alone. Style: cinematic atmospheric, dark and moody, deep blacks, warm yellow screen glow. No watermarks, no text. Dark enough for overlay use.
```

---

## ASSETS GRÁFICOS — assets/graphics/

### event-badge-1
**Tipo:** ASSET · **Proporção:** 1:1 (1024×1024) · **Seção:** ACHIEVEMENTS · Torneio: CBCS Masters

```
Minimal flat graphic design, pure black #000000 square background. Tournament badge: abstract geometric shield silhouette with angular crown-like top, composed from flat white and neon yellow #FFFF00 geometric shapes. A stylized trophy form inside the shield. Flat vector-style design, no gradients, no shadows, no drop shadows. White and yellow #FFFF00 on black only. Centered in frame. No text, no letters, no watermarks.
```

---

### event-badge-2
**Tipo:** ASSET · **Proporção:** 1:1 (1024×1024) · **Seção:** ACHIEVEMENTS · Torneio: Blast Premier

```
Minimal flat graphic design, pure black #000000 square background. Tournament badge: abstract compass rose or 8-pointed star burst, each point a sharp angular triangle, arranged radially around a central circle. Flat white design. No gradients, no shadows. Centered in frame. No text, no letters, no watermarks.
```

---

### event-badge-3
**Tipo:** ASSET · **Proporção:** 1:1 (1024×1024) · **Seção:** ACHIEVEMENTS · Torneio: IEM

```
Minimal flat graphic design, pure black #000000 square background. Tournament badge: abstract interlocked diamonds and angular connecting lines forming a championship emblem. Flat white and neon yellow #FFFF00. No gradients, no shadows. Centered in frame. No text, no letters, no watermarks.
```

---

### match-opp-logo-1
**Tipo:** ASSET · **Proporção:** 1:1 (1024×1024) · **Seção:** MATCHES

```
Minimal flat vector esports team logomark, pure black #000000 square background. Abstract geometric wolf head facing forward: bold angular planes defining muzzle, pointed ears, and eye slits in flat white shapes only. Clean sharp edges, monochromatic white on black, no gradients. Centered in frame. No text, no letters, no watermarks.
```

---

### match-opp-logo-2
**Tipo:** ASSET · **Proporção:** 1:1 (1024×1024) · **Seção:** MATCHES

```
Minimal flat vector esports team logomark, pure black #000000 square background. Abstract upward-pointing lightning bolt formed from three interlocking angular parallelograms, flat white. Clean geometric design, monochromatic white on black, no gradients. Centered in frame. No text, no letters, no watermarks.
```

---

### match-opp-logo-3
**Tipo:** ASSET · **Proporção:** 1:1 (1024×1024) · **Seção:** MATCHES

```
Minimal flat vector esports team logomark, pure black #000000 square background. Abstract horned skull: minimal geometric skull form with two upward-curved horn shapes above it, all in flat white angular shapes. Clean bold flat design, monochromatic white on black, no gradients. Centered in frame. No text, no letters, no watermarks.
```

---

### match-opp-logo-4
**Tipo:** ASSET · **Proporção:** 1:1 (1024×1024) · **Seção:** MATCHES

```
Minimal flat vector esports team logomark, pure black #000000 square background. Abstract phoenix or rising wings: two angular wing shapes sweeping upward and outward from a central vertical axis, flat white. Clean geometric flat design, monochromatic white on black, no gradients. Centered in frame. No text, no letters, no watermarks.
```

---

### match-opp-logo-5
**Tipo:** ASSET · **Proporção:** 1:1 (1024×1024) · **Seção:** MATCHES

```
Minimal flat vector esports team logomark, pure black #000000 square background. Abstract eagle silhouette reduced to geometry: body as a bold diamond, wings as two flat angular lines extending left and right, head as a small pointed wedge above. Flat white on black, monochromatic, no gradients. Centered in frame. No text, no letters, no watermarks.
```

---

### match-event-logo-1
**Tipo:** ASSET · **Proporção:** livre (1024×1024) · **Seção:** MATCHES

```
Minimal flat graphic design, pure black #000000 square background. Esports league logomark: abstract circular ring formed from four angular arc segments, with a five-pointed star at the center. Flat white and neon yellow #FFFF00. No shadows, no gradients. Centered in frame. No text, no letters, no watermarks.
```

---

### match-event-logo-2
**Tipo:** ASSET · **Proporção:** livre (1024×1024) · **Seção:** MATCHES

```
Minimal flat graphic design, pure black #000000 square background. Esports season tournament logomark: abstract crown shape built from five sharp geometric points, a small trophy cup silhouette at center base. Flat white and neon yellow #FFFF00. No gradients. Centered in frame. No text, no letters, no watermarks.
```

---

### match-map-thumb-1
**Tipo:** ASSET · **Proporção:** 16:9 (1536×1024) · **Seção:** MATCHES · Mapa: Dust2

```
Top-down stylized tactical map view of a desert urban Counter-Strike environment. Two rectangular base areas connected by corridors and a central mid section, viewed from directly overhead. Dark background #000000, pathway outlines and zone borders glowing in neon yellow #FFFF00, building footprints in dark olive-gray. Strategic map aesthetic, minimal and clean. No text labels, no HUD elements, no player icons, no watermarks.
```

---

### match-map-thumb-2
**Tipo:** ASSET · **Proporção:** 16:9 (1536×1024) · **Seção:** MATCHES · Mapa: Mirage

```
Top-down stylized tactical map view of a Mediterranean-themed Counter-Strike environment with a central elevated ramp and two bomb site areas, viewed from directly overhead. Dark background #000000, pathway outlines glowing in neon yellow #FFFF00, structures in dark gray. Strategic game map aesthetic. No text labels, no HUD elements, no watermarks.
```

---

### partner-logo-1
**Tipo:** ASSET · **Proporção:** livre (1024×1024) · **Seção:** PARTNERS · Categoria: tecnologia

```
Minimal flat vector corporate logomark, pure black #000000 square background. Abstract pixel-grid icon: 3x3 arrangement of small squares connected by thin lines, forming a circuit-node pattern. Monochromatic flat white, no gradients. Centered in frame. No text, no letters, no watermarks.
```

---

### partner-logo-2
**Tipo:** ASSET · **Proporção:** livre (1024×1024) · **Seção:** PARTNERS · Categoria: periféricos gaming

```
Minimal flat vector corporate logomark, pure black #000000 square background. Abstract gaming headset icon reduced to minimal geometry: circular earcup, thin arc headband, small mic arm. Monochromatic flat white, no gradients. Centered in frame. No text, no letters, no watermarks.
```

---

### partner-logo-3
**Tipo:** ASSET · **Proporção:** livre (1024×1024) · **Seção:** PARTNERS · Categoria: bebida energética

```
Minimal flat vector corporate logomark, pure black #000000 square background. Abstract stylized lightning bolt inside a tall rectangular can silhouette, all in flat white geometric shapes. Clean bold flat design, no gradients. Centered in frame. No text, no letters, no watermarks.
```

---

### partner-logo-4
**Tipo:** ASSET · **Proporção:** livre (1024×1024) · **Seção:** PARTNERS · Categoria: streaming

```
Minimal flat vector corporate logomark, pure black #000000 square background. Abstract play button icon: equilateral triangle pointing right, inside a rounded-corner square frame. Monochromatic flat white, no gradients. Centered in frame. No text, no letters, no watermarks.
```

---

### partner-logo-5
**Tipo:** ASSET · **Proporção:** livre (1024×1024) · **Seção:** PARTNERS · Categoria: hardware

```
Minimal flat vector corporate logomark, pure black #000000 square background. Abstract processor chip icon: square with small connector pins along all four sides, inner 2x2 grid detail. Flat white geometric design, no gradients. Centered in frame. No text, no letters, no watermarks.
```

---

### partner-logo-6
**Tipo:** ASSET · **Proporção:** livre (1024×1024) · **Seção:** PARTNERS · Categoria: vestuário

```
Minimal flat vector corporate logomark, pure black #000000 square background. Abstract shield shape containing a thin angular chevron mark inside it, flat white geometric forms. Clean sport-fashion aesthetic, no gradients. Centered in frame. No text, no letters, no watermarks.
```

---

### partner-logo-7
**Tipo:** ASSET · **Proporção:** livre (1024×1024) · **Seção:** PARTNERS · Categoria: apostas/gaming

```
Minimal flat vector corporate logomark, pure black #000000 square background. Abstract six-sided dice icon with three dot pips visible on the top face, reduced to minimal geometric form in flat white. Clean flat design, no gradients. Centered in frame. No text, no letters, no watermarks.
```

---

### partner-logo-8
**Tipo:** ASSET · **Proporção:** livre (1024×1024) · **Seção:** PARTNERS · Categoria: telecom/internet

```
Minimal flat vector corporate logomark, pure black #000000 square background. Abstract wifi signal icon: three concentric arcs radiating upward from a central dot, flat white geometric form. Clean tech flat design, no gradients. Centered in frame. No text, no letters, no watermarks.
```

---

## Sumário de Geração

| Categoria | Count | Destino |
|-----------|-------|---------|
| FOTO landscape (1536×1024) | 13 | assets/photos/ |
| FOTO portrait (1024×1536) | 6 | assets/photos/ |
| FOTO square (1024×1024) | 3 | assets/photos/ |
| ASSET square (1024×1024) | 17 | assets/graphics/ |
| ASSET landscape (1536×1024) | 2 | assets/graphics/ |
| **TOTAL GERADO** | **41** | — |
| Delegados ao BUILD | 6 | SVG/Vídeo |

> Nota: 48 slots total — 42 gerados (41 listados acima + 1 contagem corrigida abaixo) + 6 delegados.
> Contagem final: 21 fotos + 21 graphics = 42 gerados.
