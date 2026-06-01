import { Twitter, Instagram, Youtube, Twitch } from 'lucide-react'
import { OverclockLogo } from '../base/OverclockLogo'
import { FOOTER, SOCIAL_LINKS } from '../../data/content'

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

export function Footer() {
  return (
    <footer className="bg-[#000000]" style={{ borderTop: '1px dashed #41413B' }}>
      <div className="oc-container py-16">
        {/* Main grid: logo + 3 columns + socials */}
        <div
          className="grid gap-12"
          style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}
        >
          {/* Logo + tagline */}
          <div className="flex flex-col gap-4">
            <a href="#" aria-label="Overclock Esports">
              <OverclockLogo variant="light" height={40} />
            </a>
            <p className="font-ui text-[11px] text-[#888888] uppercase tracking-[1px] leading-[1.5]">
              {FOOTER.tagline}
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3 mt-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  aria-label={social.ariaLabel}
                  className="text-white hover:text-accent transition-colors duration-[250ms]"
                >
                  {SOCIAL_ICONS[social.platform]}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER.columns.map((col) => (
            <div key={col.heading} className="flex flex-col gap-4">
              <h4 className="font-ui text-[12px] font-medium uppercase tracking-[2px] text-[rgba(255,255,255,0.5)]">
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-3 list-none" role="list">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-ui text-[14px] text-white hover:text-accent transition-colors duration-[250ms]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-10" style={{ borderTop: '1px dashed #41413B' }} />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-ui text-[12px] text-[#888888]">{FOOTER.copyright}</p>
          <div className="flex items-center gap-6">
            {FOOTER.legalLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                className="font-ui text-[12px] text-[#888888] hover:text-white transition-colors duration-[250ms]"
              >
                {link.label}
                {i < FOOTER.legalLinks.length - 1 && (
                  <span className="ml-6 text-[#41413B]" aria-hidden="true">·</span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 989px) {
          footer .grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 749px) {
          footer .grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}
