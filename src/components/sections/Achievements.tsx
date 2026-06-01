import { useRef } from 'react'
import { SectionHeader } from '../base/SectionHeader'
import { Button } from '../base/Button'
import { NoiseOverlay } from '../base/NoiseOverlay'
import { useInView } from '../../hooks/useInView'
import { useCountUp } from '../../hooks/useCountUp'
import { ACHIEVEMENTS_SECTION, ACHIEVEMENTS_DATA } from '../../data/content'

function StatCounter() {
  const { ref, inView } = useInView(0.3)
  const count = useCountUp(3, 1400, inView)

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="flex flex-col gap-1"
    >
      <span
        className={`font-display text-accent uppercase leading-[0.9] counter-pop${inView ? ' in-view' : ''}`}
        style={{ fontSize: 'clamp(60px, 10vw, 120px)', fontWeight: 800, WebkitFontSmoothing: 'antialiased' }}
      >
        {count}×
      </span>
      <span className="font-display text-white text-[24px] font-[800] uppercase tracking-[3px] leading-[0.95]">
        {ACHIEVEMENTS_SECTION.statLabel}
      </span>
      <span className="font-ui text-[#888888] text-[14px] mt-1">
        {ACHIEVEMENTS_SECTION.statSubtitle}
      </span>
    </div>
  )
}

export function Achievements() {
  const { ref: headerRef, inView: headerIn } = useInView(0.15)
  const { ref: listRef, inView: listIn } = useInView(0.08)
  const { ref: photoRef, inView: photoIn } = useInView(0.1)

  return (
    <section
      id="achievements"
      className="relative bg-[#000000] overflow-hidden"
      style={{ paddingTop: '150px', paddingBottom: '100px' }}
    >
      <NoiseOverlay />

      <div className="oc-container relative z-[5]">
        <div
          className="grid gap-[60px] items-start"
          style={{ gridTemplateColumns: '1fr 1fr' }}
        >
          {/* Left: stats + list */}
          <div className="flex flex-col gap-8 max-xl:col-span-2">
            <div
              ref={headerRef as React.RefObject<HTMLDivElement>}
              className={`reveal-up${headerIn ? ' in-view' : ''}`}
            >
              <SectionHeader
                eyebrow={ACHIEVEMENTS_SECTION.eyebrow}
                title={ACHIEVEMENTS_SECTION.title}
              />
            </div>

            {/* Animated stat */}
            <StatCounter />

            {/* Achievement list — staggered row slide-in */}
            <ol
              ref={listRef as React.RefObject<HTMLOListElement>}
              className="flex flex-col gap-0 list-none"
              role="list"
            >
              {ACHIEVEMENTS_DATA.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start justify-between gap-4 py-4 achievement-row"
                  style={{
                    borderTop: '1px dashed #41413B',
                    opacity: listIn ? 1 : 0,
                    transform: listIn ? 'translateX(0)' : 'translateX(-16px)',
                    transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s`,
                  }}
                >
                  {/* Left side */}
                  <div className="flex flex-col gap-1 flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      {item.eventBadge && (
                        <img
                          src={item.eventBadge}
                          alt=""
                          className="h-8 w-8 object-contain"
                          style={{ filter: 'brightness(0) invert(1)' }}
                        />
                      )}
                      <span className="font-ui text-[13px] font-semibold text-white uppercase tracking-[1px] truncate">
                        {item.tournament}
                      </span>
                    </div>
                    <span className="font-ui text-[12px] text-[#888888]">{item.detail}</span>
                    <span className="font-ui text-[11px] text-[#888888] italic">{item.microcopy}</span>
                  </div>

                  {/* Result */}
                  <div className="flex flex-col items-end gap-1 flex-shrink-0">
                    <span className="text-lg" aria-hidden="true">{item.resultEmoji}</span>
                    <span className="font-ui text-[11px] font-semibold text-accent uppercase tracking-[1px]">
                      {item.result}
                    </span>
                    <span className="font-ui text-[11px] text-[#888888]">{item.year}</span>
                  </div>
                </li>
              ))}
            </ol>

            <Button variant="ghost" href="#">
              {ACHIEVEMENTS_SECTION.cta}
            </Button>
          </div>

          {/* Right: trophy photo */}
          <div
            ref={photoRef as React.RefObject<HTMLDivElement>}
            className="flex items-start justify-center max-xl:col-span-2"
          >
            <div
              className="relative w-full"
              style={{
                aspectRatio: '16 / 9',
                opacity: photoIn ? 1 : 0,
                transform: photoIn ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.97)',
                transition: 'opacity 0.8s ease 0.15s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.15s',
              }}
            >
              <img
                src={ACHIEVEMENTS_SECTION.trophyImage.src}
                alt={ACHIEVEMENTS_SECTION.trophyImage.alt}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* L-accents */}
              <span className="absolute" style={{ top: '-2px', left: '-2px', width: '20px', height: '20px', borderTop: '2px solid #FFFF00', borderLeft: '2px solid #FFFF00' }} aria-hidden="true" />
              <span className="absolute" style={{ top: '-2px', right: '-2px', width: '20px', height: '20px', borderTop: '2px solid #FFFF00', borderRight: '2px solid #FFFF00' }} aria-hidden="true" />
              <span className="absolute" style={{ bottom: '-2px', left: '-2px', width: '20px', height: '20px', borderBottom: '2px solid #FFFF00', borderLeft: '2px solid #FFFF00' }} aria-hidden="true" />
              <span className="absolute" style={{ bottom: '-2px', right: '-2px', width: '20px', height: '20px', borderBottom: '2px solid #FFFF00', borderRight: '2px solid #FFFF00' }} aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #achievements .grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
