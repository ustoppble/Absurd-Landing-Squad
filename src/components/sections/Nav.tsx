import { useState, useEffect, useRef } from 'react'
import { Menu, X, Twitter, Instagram, Youtube, Twitch } from 'lucide-react'
import { NAV_LINKS, NAV_CTA, SOCIAL_LINKS } from '../../data/content'
import { asset } from '../../utils/asset'

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  twitter: <Twitter size={20} strokeWidth={1.5} />,
  instagram: <Instagram size={20} strokeWidth={1.5} />,
  youtube: <Youtube size={20} strokeWidth={1.5} />,
  twitch: <Twitch size={20} strokeWidth={1.5} />,
  tiktok: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  ),
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-[200]"
      style={{
        background: scrolled ? 'rgba(0,0,0,0.82)' : 'transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(8px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
        transition: 'background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease',
      }}
    >
      <div className="oc-container">
        <nav
          className="flex items-center justify-between py-3"
          aria-label="Navegação principal"
        >
          {/* Logo — always white (invert the dark emblem) */}
          <a href="#" aria-label="Overclock Esports — Página inicial">
            <img
              src={asset('/graphics/match-oc-logo-mini.png')}
              alt="Overclock Esports"
              style={{
                height: '36px',
                width: 'auto',
                objectFit: 'contain',
                filter: 'brightness(0) invert(1)',
              }}
            />
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-8 list-none" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-heading text-[14px] no-underline"
                  style={{ color: '#FFFFFF', transition: 'color 0.25s ease' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#FFFF00')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#FFFFFF')}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right: socials + CTA */}
          <div className="hidden lg:flex items-center gap-5">
            {SOCIAL_LINKS.slice(0, 4).map((social) => (
              <a
                key={social.platform}
                href={social.href}
                aria-label={social.ariaLabel}
                style={{ color: '#FFFFFF', transition: 'color 0.25s ease' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#FFFF00')}
                onMouseLeave={e => (e.currentTarget.style.color = '#FFFFFF')}
              >
                {SOCIAL_ICONS[social.platform]}
              </a>
            ))}

            <a
              href="#recruitment"
              className="nav-cta-btn inline-flex items-center gap-2 px-6 py-3 rounded-none font-ui text-[11px] font-medium tracking-[2px] uppercase border border-dashed"
              style={{
                color: '#FFFF00',
                borderColor: 'rgba(255,255,0,0.4)',
                background: 'transparent',
                transition: 'background 0.25s ease',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = 'rgba(255,255,0,0.1)')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'transparent')}
            >
              {NAV_CTA}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2"
            style={{ color: '#FFFFFF' }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </nav>

        {/* Mobile menu */}
        <div
          className="lg:hidden overflow-hidden"
          style={{
            maxHeight: menuOpen ? '500px' : '0',
            opacity: menuOpen ? 1 : 0,
            transition: 'max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease',
          }}
        >
          <div
            style={{
              borderTop: '1px solid rgba(255,255,255,0.12)',
              paddingBottom: '16px',
              background: 'rgba(0,0,0,0.92)',
            }}
          >
            <ul className="flex flex-col gap-0 list-none" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block py-3 font-heading text-[14px]"
                    style={{ color: '#FFFFFF', transition: 'color 0.25s ease' }}
                    onClick={() => setMenuOpen(false)}
                    onMouseEnter={e => (e.currentTarget.style.color = '#FFFF00')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#FFFFFF')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-3 pt-3 flex items-center gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}>
              {SOCIAL_LINKS.slice(0, 4).map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  aria-label={social.ariaLabel}
                  style={{ color: '#FFFFFF', transition: 'color 0.25s ease' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#FFFF00')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#FFFFFF')}
                >
                  {SOCIAL_ICONS[social.platform]}
                </a>
              ))}
            </div>
            <a
              href="#recruitment"
              className="mt-4 flex items-center justify-center gap-2 py-3 font-ui text-[11px] font-medium tracking-[2px] uppercase border border-dashed w-full"
              style={{
                color: '#FFFF00',
                borderColor: 'rgba(255,255,0,0.4)',
                background: 'transparent',
              }}
              onClick={() => setMenuOpen(false)}
            >
              {NAV_CTA}
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
