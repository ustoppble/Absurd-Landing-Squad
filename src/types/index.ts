/* ============================================================
   OVERCLOCK CS — Type Definitions
   ============================================================ */

export type ButtonVariant = 'primary' | 'ghost' | 'nav-cta'
export type BadgeVariant = 'accent' | 'live' | 'default' | 'match' | 'team' | 'media'
export type LogoVariant = 'dark' | 'light' | 'icon-only'
export type MatchTab = 'upcoming' | 'results'

export interface NavLink {
  label: string
  href: string
}

export interface SocialLink {
  platform: 'twitter' | 'instagram' | 'youtube' | 'twitch' | 'tiktok'
  href: string
  ariaLabel: string
}

export interface PlayerData {
  id: string
  nick: string
  displayNick: string
  fullName: string
  role: string
  roleColor: string
  nation: string
  nationFlag: string
  number: string
  portrait: string
  bio: string
  stats: { label: string; value: string }[]
  isCoach?: boolean
}

export interface AchievementEntry {
  tournament: string
  result: string
  resultEmoji: string
  detail: string
  microcopy: string
  year: string
  eventBadge?: string
}

export interface MatchData {
  id: string
  opponentName: string
  opponentLogo: string
  eventName: string
  eventLogo?: string
  format: string
  microcopy: string
}

export interface UpcomingMatch extends MatchData {
  dateLabel: string
  dateISO: string
}

export interface PastMatch extends MatchData {
  scoreOC: number
  scoreOpp: number
  dateLabel: string
  maps: { name: string; scoreOC: number; scoreOpp: number; thumb?: string }[]
  isWin: boolean
}

export interface NewsItem {
  id: string
  category: 'MATCH' | 'TEAM' | 'MEDIA'
  title: string
  excerpt: string
  date: string
  href: string
  thumbnail: string
}

export interface MerchProduct {
  id: string
  name: string
  description: string
  price: string
  image: string
  badge?: string
}

export interface PartnerData {
  id: string
  name: string
  logo: string
}

export interface FooterColumn {
  heading: string
  links: { label: string; href: string }[]
}
