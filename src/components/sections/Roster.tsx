import { useRef } from 'react'
import { PlayerCard } from '../cards/PlayerCard'
import { SectionHeader } from '../base/SectionHeader'
import { useInView } from '../../hooks/useInView'
import { ROSTER_SECTION, ROSTER_DATA } from '../../data/content'

export function Roster() {
  const { ref: headerRef, inView: headerIn } = useInView(0.15)
  const { ref: gridRef, inView: gridIn } = useInView(0.08)

  return (
    <section
      id="roster"
      className="bg-[#000000] relative overflow-hidden"
      style={{ paddingTop: '150px', paddingBottom: '100px' }}
    >
      <div className="oc-container">
        {/* Section header reveal */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`mb-16 reveal-up${headerIn ? ' in-view' : ''}`}
        >
          <SectionHeader
            eyebrow={ROSTER_SECTION.eyebrow}
            title={ROSTER_SECTION.title}
            subtitle={ROSTER_SECTION.subtitle}
          />
        </div>

        {/* Player grid — 3 cols desktop, 2 tablet, 1 mobile */}
        <div
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className="grid gap-0"
          style={{
            gridTemplateColumns: 'repeat(3, 1fr)',
            border: '1px dashed #41413B',
          }}
        >
          {ROSTER_DATA.map((player, i) => (
            <div
              key={player.id}
              className="player-card-wrap"
              style={{
                borderRight: '1px dashed #41413B',
                borderBottom: '1px dashed #41413B',
                opacity: gridIn ? 1 : 0,
                transform: gridIn ? 'translateY(0)' : 'translateY(32px)',
                transition: `opacity 0.6s ease ${i * 0.08}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.08}s`,
              }}
            >
              <PlayerCard player={player} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 989px) {
          #roster .grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          #roster .grid > div:nth-child(2n) {
            border-right: 0 !important;
          }
          #roster .grid > div:nth-child(3n) {
            border-right: 1px dashed #41413B !important;
          }
        }
        @media (max-width: 749px) {
          #roster .grid {
            grid-template-columns: 1fr !important;
          }
          #roster .grid > div {
            border-right: 0 !important;
          }
        }
      `}</style>
    </section>
  )
}
