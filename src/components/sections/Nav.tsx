import { useState, useEffect, useRef } from 'react'
import { Menu, X, Twitter, Instagram, Youtube, Twitch } from 'lucide-react'
import { OverclockLogo } from '../base/OverclockLogo'
import { NAV_LINKS, NAV_CTA, SOCIAL_LINKS } from '../../data/content'

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
  const [dark, setDark] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 80)
      // Switch dark once past VideoHero (~100vh)
      setDark(y > window.innerHeight * 0.7)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinkColor = dark ? '#FFFFFF' : 'rgb(40,40,40)'
  const navLinkHoverColor = dark ? '#FFFF00' : '#000000'

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-[200]"
      style={{
        background: dark ? '#000000' : '#FFFFFF',
        borderBottom: dark ? '1px solid #41413B' : '1px solid #D2D5D9',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.12)' : 'none',
        transition: 'background 0.4s ease, border-color 0.4s ease, box-shadow 0.3s ease',
      }}
    >
      <div className="oc-container">
        <nav
          className="flex items-center justify-between py-3"
          aria-label="Navegação principal"
        >
          {/* Logo */}
          <a href="#" aria-label="Overclock Esports — Página inicial">
            <OverclockLogo variant={dark ? 'light' : 'dark'} height={44} />
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-8 list-none" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-heading text-[14px] no-underline"
                  style={{
                    color: navLinkColor,
                    transition: 'color 0.25s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = navLinkHoverColor)}
                  onMouseLeave={e => (e.currentTarget.style.color = navLinkColor)}
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
                style={{
                  color: navLinkColor,
                  transition: 'color 0.25s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = navLinkHoverColor)}
                onMouseLeave={e => (e.currentTarget.style.color = navLinkColor)}
              >
                {SOCIAL_ICONS[social.platform]}
              </a>
            ))}

            <a
              href="#recruitment"
              className="nav-cta-btn inline-flex items-center gap-2 px-6 py-3 rounded-none font-ui text-[11px] font-medium tracking-[2px] uppercase border border-dashed"
              style={{
                color: dark ? '#FFFF00' : '#000000',
                borderColor: '#41413B',
                background: 'transparent',
                transition: 'background 0.25s ease, color 0.4s ease',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = dark ? 'rgba(255,255,0,0.1)' : 'rgba(0,0,0,0.06)')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'transparent')}
            >
              {NAV_CTA}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 transition-colors"
            style={{ color: navLinkColor }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </nav>

        {/* Mobile menu — slide down */}
        <div
          className="lg:hidden overflow-hidden"
          style={{
            maxHeight: menuOpen ? '500px' : '0',
            opacity: menuOpen ? 1 : 0,
            transition: 'max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease',
          }}
        >
          <div style={{ borderTop: dark ? '1px solid #41413B' : '1px solid #D2D5D9', paddingBottom: '16px' }}>
            <ul className="flex flex-col gap-0 list-none" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block py-3 font-heading text-[14px] transition-colors"
                    style={{ color: navLinkColor }}
                    onClick={() => setMenuOpen(false)}
                    onMouseEnter={e => (e.currentTarget.style.color = navLinkHoverColor)}
                    onMouseLeave={e => (e.currentTarget.style.color = navLinkColor)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-3 pt-3 flex items-center gap-4" style={{ borderTop: dark ? '1px solid #41413B' : '1px solid #D2D5D9' }}>
              {SOCIAL_LINKS.slice(0, 4).map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  aria-label={social.ariaLabel}
                  style={{ color: navLinkColor, transition: 'color 0.25s ease' }}
                  onMouseEnter={e => (e.currentTarget.style.color = navLinkHoverColor)}
                  onMouseLeave={e => (e.currentTarget.style.color = navLinkColor)}
                >
                  {SOCIAL_ICONS[social.platform]}
                </a>
              ))}
            </div>
            <a
              href="#recruitment"
              className="mt-4 flex items-center justify-center gap-2 py-3 font-ui text-[11px] font-medium tracking-[2px] uppercase border border-dashed border-[#41413B] w-full"
              style={{
                color: dark ? '#FFFF00' : '#000000',
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
