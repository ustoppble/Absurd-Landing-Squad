import { useRef } from 'react'
import { NewsCard } from '../cards/NewsCard'
import { Button } from '../base/Button'
import { useInView } from '../../hooks/useInView'
import { NEWS_SECTION, NEWS_DATA } from '../../data/content'

/* Stagger offsets: cards at index 1 and 4 get +80px margin-top (masonry effect per DS spec) */
const STAGGER_INDICES = new Set([1, 4])

export function News() {
  const { ref: headerRef, inView: headerIn } = useInView(0.15)
  const { ref: gridRef, inView: gridIn } = useInView(0.05)

  return (
    <section
      id="news"
      className="bg-[#000000]"
      style={{ paddingTop: '150px', paddingBottom: '100px' }}
    >
      <div className="oc-container">
        {/* Title — centered per spec */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-[60px] reveal-up${headerIn ? ' in-view' : ''}`}
        >
          <p className="font-ui text-[11px] font-medium tracking-[2px] uppercase text-accent mb-3">
            {NEWS_SECTION.eyebrow}
          </p>
          <h2
            className="font-display text-white uppercase leading-[0.95] tracking-[3px]"
            style={{ fontSize: 'var(--font-size-section-xl)', fontWeight: 800, WebkitFontSmoothing: 'antialiased' }}
          >
            {NEWS_SECTION.title.map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h2>
        </div>

        {/* Grid 3×2 with stagger */}
        <div
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className="grid gap-[30px]"
          style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}
        >
          {NEWS_DATA.map((item, i) => (
            <div
              key={item.id}
              className="news-card-wrap"
              style={{
                marginTop: STAGGER_INDICES.has(i) ? '80px' : undefined,
                opacity: gridIn ? 1 : 0,
                transform: gridIn ? 'translateY(0)' : 'translateY(32px)',
                transition: `opacity 0.65s ease ${i * 0.09}s, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${i * 0.09}s`,
              }}
            >
              <NewsCard item={item} staggerOffset={false} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`mt-16 flex justify-center reveal-up${headerIn ? ' in-view delay-2' : ''}`}
        >
          <Button variant="ghost" href={NEWS_SECTION.ctaHref}>
            {NEWS_SECTION.cta}
          </Button>
        </div>
      </div>

      <style>{`
        @media (max-width: 989px) {
          #news .grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 749px) {
          #news .grid {
            grid-template-columns: 1fr !important;
          }
          #news .grid > div {
            margin-top: 0 !important;
          }
        }
      `}</style>
    </section>
  )
}
