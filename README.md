# Overclock CS — Landing Page

Premium one-page landing for the **Overclock Counter-Strike** esports team, mirroring the visual DNA of [Team Vitality](https://vitality.gg). Built by the **Absurd Landing Squad** multi-agent pipeline.

## Stack

- **Vite** — fast build tooling
- **React 18** — component model
- **TypeScript** — full type safety
- **Tailwind CSS** — utility-first styling
- Custom design tokens (`tokens.css` / `tokens.json`) derived from the Vitality design audit

## Rodar localmente

```bash
npm install
npm run dev -- --port 2626
```

Acesse: `http://localhost:2626`

## Build de produção

```bash
npm run build
```

Saída em `dist/`.

## Estrutura de pastas

```
src/
  components/
    base/        # Componentes atômicos (Button, Badge, Tag…)
    cards/       # Cards reutilizáveis (Player, News, Match, Partner…)
    sections/    # Seções da landing (Hero, Roster, Matches, Merch, News, Recruitment…)
  data/
    content.ts   # Toda a copy e dados mockados da landing
  hooks/         # Custom hooks (useIntersectionObserver, etc.)
  styles/        # Estilos globais e utilitários
  types/         # Definições TypeScript compartilhadas
assets/
  graphics/      # Logos de eventos, badges, logos de parceiros e adversários
  photos/        # Portraits de jogadores, hero frame, merch, trophies, thumbnails de notícias
```

## Sobre o pipeline

Gerado pelo pipeline multi-agente **Absurd Landing Squad** do Overclock. Cada agente especializado (Design DNA, Content Writer, UI Builder, QA) operou em paralelo para entregar em minutos o que levaria horas manualmente.
