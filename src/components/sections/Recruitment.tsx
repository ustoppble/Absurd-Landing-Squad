import { Button } from '../base/Button'
import { NoiseOverlay } from '../base/NoiseOverlay'
import { useInView } from '../../hooks/useInView'
import { RECRUITMENT_SECTION, SOCIAL_LINKS } from '../../data/content'
import { Twitter, Instagram, Youtube, Twitch } from 'lucide-react'

const SOCIAL_ICONS_SMALL: Record<string, React.ReactNode> = {
  twitter: <Twitter size={18} strokeWidth={1.5} />,
  instagram: <Instagram size={18} strokeWidth={1.5} />,
  youtube: <Youtube size={18} strokeWidth={1.5} />,
  twitch: <Twitch size={18} strokeWidth={1.5} />,
}

export function Recruitment() {
  const { cardPlayers, cardPartners } = RECRUITMENT_SECTION
  const { ref: headerRef, inView: headerIn } = useInView(0.15)
  const { ref: cardsRef, inView: cardsIn } = useInView(0.08)

  return (
    <section
      id="recruitment"
      className="relative overflow-hidden"
      style={{ minHeight: '600px' }}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={RECRUITMENT_SECTION.bgImage.src}
          alt={RECRUITMENT_SECTION.bgImage.alt}
          className="w-full h-full object-cover"
          style={{ transform: 'scale(1.04)', transition: 'transform 8s ease' }}
        />
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.78)' }} aria-hidden="true" />
      </div>

      <NoiseOverlay className="z-[2]" />

      <div className="oc-container relative z-[5] py-[150px]">
        {/* Header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className="text-center mb-12"
          style={{
            opacity: headerIn ? 1 : 0,
            transform: headerIn ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          <p className="font-ui text-[11px] font-medium tracking-[2px] uppercase text-accent mb-3">
            {RECRUITMENT_SECTION.eyebrow}
          </p>
          <h2
            className="font-display text-white uppercase leading-[0.95] tracking-[3px]"
            style={{ fontSize: 'var(--font-size-section-lg)', fontWeight: 800, WebkitFontSmoothing: 'antialiased' }}
          >
            {RECRUITMENT_SECTION.title.map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h2>
        </div>

        {/* 2 cards side by side */}
        <div
          ref={cardsRef as React.RefObject<HTMLDivElement>}
          className="grid gap-0"
          style={{ gridTemplateColumns: '1fr 1fr', gap: '1px', background: '#41413B' }}
        >
          {/* Card A — Players */}
          <div
            className="flex flex-col gap-6 p-[60px] max-md:p-8"
            style={{
              background: 'rgba(0,0,0,0.5)',
              border: '1px dashed #41413B',
              opacity: cardsIn ? 1 : 0,
              transform: cardsIn ? 'translateX(0)' : 'translateX(-20px)',
              transition: 'opacity 0.65s ease 0.05s, transform 0.65s cubic-bezier(0.16,1,0.3,1) 0.05s',
            }}
          >
            <h3 className="font-display text-accent uppercase font-[800] tracking-[3px] leading-[0.95]"
              style={{ fontSize: 'clamp(24px, 4vw, 42px)', WebkitFontSmoothing: 'antialiased' }}
            >
              {cardPlayers.headline}
            </h3>

            <div className="flex flex-col gap-3">
              {cardPlayers.body.split('\n\n').map((para, i) => (
                <p key={i} className="font-ui text-[15px] text-white/80 leading-[1.6]">{para}</p>
              ))}
            </div>

            <ul className="flex flex-col gap-2 list-none" role="list">
              {cardPlayers.requirements.map((req, i) => (
                <li key={i} className="font-ui text-[13px] text-[#888888] flex items-start gap-2">
                  <span className="text-accent mt-[2px] flex-shrink-0">·</span>
                  {req}
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-2">
              <Button variant="primary" href="mailto:tryouts@overclock.gg">
                {cardPlayers.cta}
              </Button>
              <span className="font-ui text-[11px] text-[#888888]">{cardPlayers.microcopy}</span>
            </div>
          </div>

          {/* Card B — Partners */}
          <div
            className="flex flex-col gap-6 p-[60px] max-md:p-8"
            style={{
              background: 'rgba(0,0,0,0.5)',
              border: '1px dashed #41413B',
              opacity: cardsIn ? 1 : 0,
              transform: cardsIn ? 'translateX(0)' : 'translateX(20px)',
              transition: 'opacity 0.65s ease 0.15s, transform 0.65s cubic-bezier(0.16,1,0.3,1) 0.15s',
            }}
          >
            <h3 className="font-display text-white uppercase font-[800] tracking-[3px] leading-[0.95]"
              style={{ fontSize: 'clamp(24px, 4vw, 42px)', WebkitFontSmoothing: 'antialiased' }}
            >
              {cardPartners.headline}
            </h3>

            <div className="flex flex-col gap-3">
              {cardPartners.body.split('\n\n').map((para, i) => (
                <p key={i} className="font-ui text-[15px] text-white/80 leading-[1.6]">{para}</p>
              ))}
            </div>

            <ul className="flex flex-col gap-2 list-none" role="list">
              {cardPartners.stats.map((stat, i) => (
                <li key={i} className="font-ui text-[13px] text-[#888888] flex items-start gap-2">
                  <span className="text-accent mt-[2px] flex-shrink-0">·</span>
                  {stat}
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-2">
              <Button variant="ghost" href="mailto:comercial@overclock.gg">
                {cardPartners.cta}
              </Button>
              <span className="font-ui text-[11px] text-[#888888]">{cardPartners.microcopy}</span>
            </div>
          </div>
        </div>

        {/* Contact + socials */}
        <div
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{
            opacity: cardsIn ? 1 : 0,
            transition: 'opacity 0.6s ease 0.4s',
          }}
        >
          <a
            href="mailto:esports@overclock.gg"
            className="font-ui text-[14px] text-[#888888] hover:text-white transition-colors duration-250"
          >
            {RECRUITMENT_SECTION.contact}
          </a>
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.slice(0, 4).map((social) => (
              <a
                key={social.platform}
                href={social.href}
                aria-label={social.ariaLabel}
                className="text-[#888888] hover:text-white transition-colors duration-250"
              >
                {SOCIAL_ICONS_SMALL[social.platform]}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 749px) {
          #recruitment .grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
