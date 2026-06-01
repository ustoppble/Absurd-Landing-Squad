/* ============================================================
   OVERCLOCK CS — Content Data
   Source: CONTENT.md (2026-06-01)
   Images: /photos/* and /graphics/* (served from assets/ dir via Vite publicDir)

   NEXT AGENT — plugar aqui:
   - Atualizar datas de partidas ao vivo
   - Verificar paths de imagem após geração final
   - Badge "AO VIVO" quando match estiver acontecendo
   ============================================================ */

import type {
  NavLink, SocialLink, PlayerData, AchievementEntry,
  UpcomingMatch, PastMatch, NewsItem, MerchProduct,
  PartnerData, FooterColumn,
} from '../types'

// ============================================================
// 01 · NAV
// ============================================================

export const NAV_LINKS: NavLink[] = [
  { label: 'TIME', href: '#roster' },
  { label: 'CONQUISTAS', href: '#achievements' },
  { label: 'PARTIDAS', href: '#matches' },
  { label: 'NOTÍCIAS', href: '#news' },
  { label: 'LOJA', href: '#merch' },
]

export const NAV_CTA = 'SEJA UM PARCEIRO'

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'twitter', href: '#', ariaLabel: 'Overclock no X' },
  { platform: 'instagram', href: '#', ariaLabel: 'Overclock no Instagram' },
  { platform: 'youtube', href: '#', ariaLabel: 'Overclock no YouTube' },
  { platform: 'twitch', href: '#', ariaLabel: 'Overclock na Twitch' },
  { platform: 'tiktok', href: '#', ariaLabel: 'Overclock no TikTok' },
]

// ============================================================
// 02 · VIDEO-HERO
// ============================================================

export const VIDEO_HERO = {
  tagline: ['DESTRUINDO ADVERSÁRIOS', 'DESDE 2023'],
  scrollLabel: 'ROLE PARA CONHECER',
  fallbackImage: {
    src: '/photos/video-hero-fallback.png',
    alt: 'Overclock Esports no palco da LAN — cinco jogadores sob holofotes, jersey preto e amarelo, olhares fixos na tela',
  },
}

// ============================================================
// 03 · HERO-MAIN
// ============================================================

export const HERO_MAIN = {
  badge: {
    isLive: false,
    text: '● PRÓXIMA PARTIDA: 08 JUN · 19H00 BRT',
    liveText: '● AO VIVO AGORA — ASSISTA',
  },
  eyebrow: 'CS2 · CBCS PRO SERIES 2026',
  titleLine1: 'OVERCLOCK',
  titleLine2: 'ESPORTS',
  subtitle: 'TIME PROFISSIONAL DE COUNTER-STRIKE',
  description: [
    'Fundados em 2023 com uma missão simples: levar o Counter-Strike brasileiro ao topo do cenário mundial. Três títulos nacionais, uma classificação para IEM e um roster que joga junto como se tivesse nascido assim.',
    'Overclock não é promessa. É resultado.',
  ],
  ctaPrimary: 'CONHEÇA O TIME',
  ctaSecondary: 'ASSISTA AO VIVO',
  frameImage: {
    src: '/photos/hero-main-frame.png',
    alt: 'Eduardo "ZEDy" Santos com AWP em posição de controle, uniforme oficial Overclock, luz dramática sobre fundo preto',
  },
}

// ============================================================
// 04 · ROSTER
// ============================================================

export const ROSTER_SECTION = {
  eyebrow: 'TIME',
  title: 'NOSSO ROSTER',
  subtitle: 'Cinco jogadores. Um sistema. Zero margem de erro.',
}

export const ROSTER_DATA: PlayerData[] = [
  {
    id: 'brvno',
    nick: 'brvno',
    displayNick: 'BRVNO',
    fullName: 'Bruno "brvno" Ferreira',
    role: 'ENTRY FRAGGER',
    roleColor: '#FF8800',
    nation: 'BR',
    nationFlag: '🇧🇷',
    number: '07',
    portrait: '/photos/player-portrait-brvno.png',
    bio: 'A primeira bala é dele. Entry puro, sem medo de abrir sozinho — brvno entra no site antes que qualquer adversário processe o que está acontecendo. O frag-trader favorito do Brasil.',
    stats: [
      { label: 'Rating 2.0', value: '1.18' },
      { label: 'Maps', value: '62' },
      { label: 'HS%', value: '58%' },
    ],
  },
  {
    id: 'xanT',
    nick: 'xanT',
    displayNick: 'XANT',
    fullName: 'Antoine "xanT" Moreau',
    role: 'IGL',
    roleColor: '#FFFF00',
    nation: 'FR',
    nationFlag: '🇫🇷',
    number: '01',
    portrait: '/photos/player-portrait-xanT.png',
    bio: 'Não é o que grita mais alto, é o que lê o jogo mais rápido. xanT chegou do cenário europeu com um mid-round game que transformou o Overclock em um time impossível de ler. Dois passos à frente — sempre.',
    stats: [
      { label: 'Rating 2.0', value: '1.05' },
      { label: 'Maps', value: '71' },
      { label: 'HS%', value: '44%' },
    ],
  },
  {
    id: 'ZEDy',
    nick: 'ZEDy',
    displayNick: 'ZEDY',
    fullName: 'Eduardo "ZEDy" Santos',
    role: 'AWPER',
    roleColor: '#FF4444',
    nation: 'BR',
    nationFlag: '🇧🇷',
    number: '04',
    portrait: '/photos/player-portrait-ZEDy.png',
    bio: 'Um AWP na mão de ZEDy é uma sentença de morte. O AWPer de São Paulo que virou pesadelo de opponents desde os qualificatórios da CBCS — 1.24 de rating e um 4k na overtime que ainda passa em loop nos highlights.',
    stats: [
      { label: 'Rating 2.0', value: '1.24' },
      { label: 'Maps', value: '68' },
      { label: 'HS%', value: '28%' },
    ],
  },
  {
    id: 'FLKR',
    nick: 'FLKR',
    displayNick: 'FLKR',
    fullName: 'Filip "FLKR" Krasnov',
    role: 'RIFLER',
    roleColor: '#AAAAAA',
    nation: 'PL',
    nationFlag: '🇵🇱',
    number: '11',
    portrait: '/photos/player-portrait-FLKR.png',
    bio: 'Consistência na forma de um rifle. FLKR veio do cenário polonês trazendo disciplina, posicionamento e uma taxa de clutch que faz a web reclamar de viés toda rodada. Silencioso nas entrevistas, devastador no servidor.',
    stats: [
      { label: 'Rating 2.0', value: '1.12' },
      { label: 'Maps', value: '65' },
      { label: 'HS%', value: '52%' },
    ],
  },
  {
    id: 'nOVA',
    nick: 'nOVA',
    displayNick: 'NOVA',
    fullName: 'Lucas "nOVA" Novak',
    role: 'SUPPORT / LURKER',
    roleColor: '#44AAFF',
    nation: 'BR',
    nationFlag: '🇧🇷',
    number: '09',
    portrait: '/photos/player-portrait-nOVA.png',
    bio: 'O mais difícil de encontrar no mapa — e o último que você quer que encontre você. nOVA opera nos flancos, sabe o momento exato de aparecer e carrega o suporte silencioso que faz os outros cinco brilharem.',
    stats: [
      { label: 'Rating 2.0', value: '1.08' },
      { label: 'Maps', value: '71' },
      { label: 'HS%', value: '47%' },
    ],
  },
  {
    id: 'SIGMA',
    nick: 'SIGMA',
    displayNick: 'SIGMA',
    fullName: 'Rodrigo "SIGMA" Almeida',
    role: 'HEAD COACH',
    roleColor: 'rgba(255,255,255,0.5)',
    nation: 'BR',
    nationFlag: '🇧🇷',
    number: '',
    portrait: '/photos/player-portrait-SIGMA.png',
    bio: 'Dez anos no cenário competitivo. Três como jogador, sete como analista e coach. SIGMA não grita na headset — ele prepara o time para que não precise gritar. A mente por trás de cada read que deixa o adversário sem resposta.',
    stats: [],
    isCoach: true,
  },
]

// ============================================================
// 05 · ACHIEVEMENTS
// ============================================================

export const ACHIEVEMENTS_SECTION = {
  eyebrow: 'CONQUISTAS',
  title: ['HISTÓRIA DE', 'VITÓRIAS'],
  statNumber: '3×',
  statLabel: 'CAMPEÕES NACIONAIS',
  statSubtitle: 'Em menos de dois anos de competição profissional',
  cta: 'VER HISTÓRICO COMPLETO →',
  trophyImage: {
    src: '/photos/trophy-shot-main.png',
    alt: 'Os cinco jogadores da Overclock no palco do DreamHack São Paulo, troféu erguido, confetes pretos e amarelos preenchendo o ar',
  },
}

export const ACHIEVEMENTS_DATA: AchievementEntry[] = [
  {
    tournament: 'CBCS Pro Series — Verão 2024',
    result: 'CAMPEÕES',
    resultEmoji: '🥇',
    detail: 'Grand Final Bo5 · 3–1 contra Keyd Stars · São Paulo, BR',
    microcopy: 'Primeiro título da org. xanT e ZEDy finalistas do MVP.',
    year: '2024',
    eventBadge: '/graphics/event-badge-1.png',
  },
  {
    tournament: 'DreamHack Open São Paulo 2025',
    result: 'CAMPEÕES',
    resultEmoji: '🥇',
    detail: 'Grand Final Bo3 · 2–0 contra NIP Academy · Arena Anhembi',
    microcopy: 'Primeiro título em LAN presencial. Piso cheio. Confetes pretos e amarelos.',
    year: '2025',
    eventBadge: '/graphics/event-badge-2.png',
  },
  {
    tournament: 'ESL Impact Latin America 2024',
    result: 'TOP 4',
    resultEmoji: '🏅',
    detail: 'Semifinal · eliminados por FURIA Academy · Bo3',
    microcopy: 'Maior classificação regional da org até então.',
    year: '2024',
    eventBadge: '/graphics/event-badge-3.png',
  },
  {
    tournament: 'IEM Road to Rio Qualifier — BR 2025',
    result: 'CLASSIFICADOS',
    resultEmoji: '✅',
    detail: 'Grupo A · 4–1 em fase de grupos · direto para Rio',
    microcopy: 'Overclock no palco do IEM Rio. Primeiro qualifier do Major.',
    year: '2025',
  },
  {
    tournament: 'BLAST Bounty Circuit BR 2024',
    result: 'SEMIFINAL',
    resultEmoji: '🏅',
    detail: 'eliminados por paiN Gaming · Bo3',
    microcopy: 'brvno termina como top fragger do torneio com 1.31 de rating.',
    year: '2024',
  },
]

// ============================================================
// 06 · MATCHES
// ============================================================

export const MATCHES_SECTION = {
  eyebrow: 'PARTIDAS',
  title: 'CALENDÁRIO',
  tabs: { upcoming: 'PRÓXIMAS', results: 'RESULTADOS' },
  cta: 'TODAS AS PARTIDAS →',
  ctaMicrocopy: 'Agenda completa no HLTV e Liquipedia',
  ctaHref: '#',
  emptyUpcoming: {
    title: 'EM BREVE',
    body: 'Nenhuma partida agendada no momento. Siga nossas redes para não perder o próximo confronto.',
  },
  emptyResults: {
    title: 'TEMPORADA AINDA NÃO INICIADA',
    body: 'Volte quando o torneio começar.',
  },
  ocLogoMini: '/graphics/match-oc-logo-mini.png',
}

export const UPCOMING_MATCHES: UpcomingMatch[] = [
  {
    id: 'p1',
    opponentName: 'FURIA Academy',
    opponentLogo: '/graphics/match-opp-logo-1.png',
    eventName: 'ESL Pro League BR — Temporada 3',
    eventLogo: '/graphics/match-event-logo-1.png',
    format: 'Bo3',
    dateLabel: '08 JUN · 19H00 BRT',
    dateISO: '2026-06-08T19:00:00-03:00',
    microcopy: 'Confronto direto pelo top 3 da tabela',
  },
  {
    id: 'p2',
    opponentName: 'Sharks Esports',
    opponentLogo: '/graphics/match-opp-logo-2.png',
    eventName: 'CBCS Pro Series 2026 — Playoffs',
    eventLogo: '/graphics/match-event-logo-2.png',
    format: 'Bo3',
    dateLabel: '12 JUN · 21H00 BRT',
    dateISO: '2026-06-12T21:00:00-03:00',
    microcopy: 'Sharks vem de 4 vitórias seguidas. Overclock não perde há 3 semanas.',
  },
  {
    id: 'p3',
    opponentName: '9z Team',
    opponentLogo: '/graphics/match-opp-logo-3.png',
    eventName: 'IEM Road to Rio Qualifier — Etapa 2',
    format: 'Bo5',
    dateLabel: '15 JUN · 18H00 BRT',
    dateISO: '2026-06-15T18:00:00-03:00',
    microcopy: 'O maior confronto do ano — passagem direta para o Major em jogo',
  },
]

export const PAST_MATCHES: PastMatch[] = [
  {
    id: 'r1',
    opponentName: 'Keyd Stars',
    opponentLogo: '/graphics/match-opp-logo-4.png',
    eventName: 'CBCS Pro Series 2026',
    format: 'Bo2',
    dateLabel: '31 MAI 2026',
    scoreOC: 2,
    scoreOpp: 0,
    isWin: true,
    microcopy: 'ZEDy: 4k na overtime da Nuke. Rating do match: 1.38',
    maps: [
      { name: 'Nuke', scoreOC: 16, scoreOpp: 10, thumb: '/graphics/match-map-thumb-1.png' },
      { name: 'Inferno', scoreOC: 16, scoreOpp: 12, thumb: '/graphics/match-map-thumb-2.png' },
    ],
  },
  {
    id: 'r2',
    opponentName: 'FURIA Academy',
    opponentLogo: '/graphics/match-opp-logo-1.png',
    eventName: 'ESL Pro League BR',
    format: 'Bo3',
    dateLabel: '28 MAI 2026',
    scoreOC: 1,
    scoreOpp: 2,
    isWin: false,
    microcopy: 'Disputa equilibrada. Bo3 que foi ao limit — 14–16 no mapa decisivo.',
    maps: [
      { name: 'Mirage', scoreOC: 13, scoreOpp: 16 },
      { name: 'Overpass', scoreOC: 16, scoreOpp: 14 },
      { name: 'Ancient', scoreOC: 14, scoreOpp: 16 },
    ],
  },
  {
    id: 'r3',
    opponentName: 'paiN Gaming',
    opponentLogo: '/graphics/match-opp-logo-5.png',
    eventName: 'BLAST Bounty Circuit BR — Fase de Grupos',
    format: 'Bo2',
    dateLabel: '22 MAI 2026',
    scoreOC: 2,
    scoreOpp: 0,
    isWin: true,
    microcopy: 'brvno MVP da partida — 24 frags em dois mapas, HS% de 67%',
    maps: [
      { name: 'Dust2', scoreOC: 16, scoreOpp: 9 },
      { name: 'Anubis', scoreOC: 16, scoreOpp: 11 },
    ],
  },
]

// ============================================================
// 07 · NEWS
// ============================================================

export const NEWS_SECTION = {
  eyebrow: 'CONTEÚDO',
  title: ['ÚLTIMAS', 'NOTÍCIAS'],
  cta: 'VER TODOS OS POSTS →',
  ctaHref: '#',
}

export const NEWS_DATA: NewsItem[] = [
  {
    id: 'n1',
    category: 'MATCH',
    title: 'ZEDY FAZ 4K NA OVERTIME E GARANTE VITÓRIA SOBRE KEYD NA NUKE',
    excerpt: 'AWPer brasileiro foi o diferencial no round mais tenso da série — o clipe já tem 180 mil views em menos de 24 horas.',
    date: '31 MAI 2026',
    href: '#',
    thumbnail: '/photos/news-thumb-1.png',
  },
  {
    id: 'n2',
    category: 'TEAM',
    title: 'OVERCLOCK RENOVA CONTRATO COM XANT ATÉ O FINAL DE 2027',
    excerpt: 'IGL francês assina extensão em cerimônia na sede da organização em São Paulo. "Essa ainda não é a melhor versão desse time," diz o capitão.',
    date: '26 MAI 2026',
    href: '#',
    thumbnail: '/photos/news-thumb-2.png',
  },
  {
    id: 'n3',
    category: 'MEDIA',
    title: 'DOCUMENTÁRIO "CIRCUITO FECHADO" ESTREIA NO YOUTUBE COM TRÊS EPISÓDIOS',
    excerpt: 'Bastidores do bootcamp de São Paulo: câmeras no vestiário, análise de demo às 2h da manhã e a rotina que ninguém vê.',
    date: '20 MAI 2026',
    href: '#',
    thumbnail: '/photos/news-thumb-3.png',
  },
  {
    id: 'n4',
    category: 'MATCH',
    title: 'PREVIEW: OVERCLOCK VS FURIA ACADEMY — O QUE ESPERAR DO CONFRONTO DE 08 JUN',
    excerpt: 'Análise de mappool, tendências recentes e por que esse Bo3 pode decidir quem termina no top 2 da temporada regular.',
    date: '06 JUN 2026',
    href: '#',
    thumbnail: '/photos/news-thumb-4.png',
  },
  {
    id: 'n5',
    category: 'TEAM',
    title: 'BRVNO: "ALGUÉM TEM QUE ABRIR. ENTÃO ABRE EU."',
    excerpt: 'Entrevista exclusiva com o entry fragger da Overclock — sobre pressão, estilo de jogo e a diferença entre coragem e impulsividade no CS competitivo.',
    date: '15 MAI 2026',
    href: '#',
    thumbnail: '/photos/news-thumb-5.png',
  },
  {
    id: 'n6',
    category: 'MEDIA',
    title: 'VLOG: 72 HORAS EM BUENOS AIRES PARA O ESL LATAM — CAMARIM, JOGO E MADRUGADA NO HOTEL',
    excerpt: 'A câmera foi junto do primeiro ao último round. Viagem, concentração, derrota e a conversa no hall do hotel que redefiniu o grupo.',
    date: '10 MAI 2026',
    href: '#',
    thumbnail: '/photos/news-thumb-6.png',
  },
]

// ============================================================
// 08 · MERCH
// ============================================================

export const MERCH_SECTION = {
  eyebrow: 'LOJA',
  titleWhite: 'VISTA A',
  titleAccent: 'OVERCLOCK',
  copy: 'Coleção oficial — o equipamento dos campeões, disponível para quem joga do mesmo lado.',
  cta: 'IR PARA A LOJA →',
  ctaMicrocopy: 'Entrega nacional · Troca garantida em 30 dias',
  ctaHref: '#',
  heroImage: {
    src: '/photos/merch-hero-img.png',
    alt: 'Jersey oficial Overclock 2026 em modelo masculino, fundo escuro, luz lateral revelando texture do tecido e bordado do logo no peito',
  },
}

export const MERCH_PRODUCTS: MerchProduct[] = [
  {
    id: 'jersey',
    name: 'JERSEY OFICIAL OVERCLOCK 2026',
    description: 'Tecido performance dry-fit, silk da organização na frente, número do jersey costurado no dorso.',
    price: 'R$ 249,90',
    image: '/photos/merch-product-jersey.png',
    badge: 'LANÇAMENTO',
  },
  {
    id: 'hoodie',
    name: 'HOODIE OVERCLOCK ESSENTIAL',
    description: 'Fleece pesado 320g. Logo bordado em relevo. Bolso canguru com zíper interno para headset.',
    price: 'R$ 189,90',
    image: '/photos/merch-product-hoodie.png',
  },
  {
    id: 'cap',
    name: 'CAP SNAPBACK LOGO SERIES',
    description: 'Aba reta, ajuste traseiro snapback, bordado em 3D do logo da organização.',
    price: 'R$ 79,90',
    image: '/photos/merch-product-cap.png',
  },
  {
    id: 'mousepad',
    name: 'MOUSEPAD XL TEAM EDITION',
    description: '900×400mm, base antiderrapante, superfície texturizada para controle de mouse. Arte exclusiva do roster 2026.',
    price: 'R$ 129,90',
    image: '/photos/merch-product-mousepad.png',
    badge: 'MAIS VENDIDO',
  },
]

// ============================================================
// 09 · PARTNERS
// ============================================================

export const PARTNERS_SECTION = {
  eyebrow: 'PARCEIROS',
  title: ['NOSSOS', 'APOIADORES'],
  copy: 'Marcas que apostaram no Counter-Strike brasileiro quando era só ideia — e colhem os resultados junto com o time.',
  cta: 'SEJA UM PARCEIRO →',
  ctaHref: '#recruitment',
  microcopy: 'Interessado em patrocinar a Overclock? esports@overclock.gg · Respondemos em até 48h.',
}

export const PARTNERS_DATA: PartnerData[] = [
  { id: 'p1', name: 'NexForce', logo: '/graphics/partner-logo-1.png' },
  { id: 'p2', name: 'VoltRush', logo: '/graphics/partner-logo-2.png' },
  { id: 'p3', name: 'Kinetica', logo: '/graphics/partner-logo-3.png' },
  { id: 'p4', name: 'CloudSync', logo: '/graphics/partner-logo-4.png' },
  { id: 'p5', name: 'GrindWear', logo: '/graphics/partner-logo-5.png' },
  { id: 'p6', name: 'PitStop BR', logo: '/graphics/partner-logo-6.png' },
  { id: 'p7', name: 'DeepFrag', logo: '/graphics/partner-logo-7.png' },
  { id: 'p8', name: 'Axiom Bank', logo: '/graphics/partner-logo-8.png' },
]

// ============================================================
// 10 · RECRUITMENT
// ============================================================

export const RECRUITMENT_SECTION = {
  eyebrow: 'FAÇA PARTE',
  title: ['QUER JOGAR COM', 'OS MELHORES?'],
  bgImage: {
    src: '/photos/recruitment-bg.png',
    alt: 'Sala de bootcamp Overclock — telas, teclados, intensidade competitiva',
  },
  contact: 'Fale com a gente: esports@overclock.gg',
  cardPlayers: {
    headline: 'TRYOUTS ABERTOS',
    body: 'Recrutamos talentos BR e EU periodicamente. Não existe atalho — existe preparação, dedicação e o nível de jogo que impressiona no servidor antes da entrevista.\n\nSe você tem o que é preciso, queremos ver.',
    requirements: [
      'Rank Global Elite ou Faceit Nível 9+',
      'Disponibilidade para bootcamp presencial em SP',
      'Comunicação fluente em inglês ou português',
      'Ao menos 1 ano em time organizado',
    ],
    cta: 'CANDIDATE-SE',
    microcopy: 'Envie perfil HLTV/Faceit + demos para tryouts@overclock.gg',
  },
  cardPartners: {
    headline: 'SUA MARCA AO LADO\nDE CAMPEÕES',
    body: 'Alcançamos mais de 280 mil fãs mensais nas redes sociais. Nossas transmissões acumulam 40 mil horas assistidas por torneio. Seja durante a partida, no palco ou no conteúdo do dia a dia — sua marca aparece onde o público de CS vive.',
    stats: [
      '280K+ fãs mensais nas redes',
      '40K+ horas assistidas por torneio',
      'Público 18–34 anos, 72% masculino, renda média alta',
      'Presença em BR, PL, FR e LATAM',
    ],
    cta: 'SEJA PARCEIRO',
    microcopy: 'Deck de patrocínio disponível mediante contato: comercial@overclock.gg',
  },
}

// ============================================================
// 11 · FOOTER
// ============================================================

export const FOOTER = {
  tagline: 'OVERCLOCK · DESTRUINDO ADVERSÁRIOS DESDE 2023',
  copyright: '© 2026 Overclock Esports. Todos os direitos reservados.',
  legalLinks: [
    { label: 'Privacidade', href: '#' },
    { label: 'Termos de Uso', href: '#' },
  ],
  columns: [
    {
      heading: 'TIME',
      links: [
        { label: 'Roster', href: '#roster' },
        { label: 'Conquistas', href: '#achievements' },
        { label: 'Staff', href: '#' },
      ],
    },
    {
      heading: 'CONTEÚDO',
      links: [
        { label: 'Notícias', href: '#news' },
        { label: 'Vídeos', href: '#' },
        { label: 'Calendário', href: '#matches' },
      ],
    },
    {
      heading: 'ORGANIZAÇÃO',
      links: [
        { label: 'Sobre', href: '#' },
        { label: 'Patrocínio', href: '#recruitment' },
        { label: 'Imprensa', href: '#' },
      ],
    },
  ] as FooterColumn[],
}
