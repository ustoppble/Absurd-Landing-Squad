import { useState, useRef } from 'react'
import { Button } from '../base/Button'
import { UpcomingMatchCard, PastMatchCard } from '../cards/MatchCard'
import { useInView } from '../../hooks/useInView'
import { MATCHES_SECTION, UPCOMING_MATCHES, PAST_MATCHES } from '../../data/content'
import type { MatchTab } from '../../types'

export function Matches() {
  const [activeTab, setActiveTab] = useState<MatchTab>('upcoming')
  const { ref: sectionRef, inView } = useInView(0.1)

  return (
    <section
      id="matches"
      className="bg-[#000000]"
      style={{ paddingTop: '150px', paddingBottom: '100px' }}
    >
      <div
        ref={sectionRef as React.RefObject<HTMLDivElement>}
        className="oc-container"
      >
        {/* Header */}
        <div
          className="mb-10"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          <p className="font-ui text-[11px] font-medium tracking-[2px] uppercase text-accent mb-3">
            {MATCHES_SECTION.eyebrow}
          </p>
          <h2
            className="font-display text-white uppercase leading-[0.95] tracking-[3px]"
            style={{ fontSize: 'var(--font-size-section-match)', fontWeight: 800, WebkitFontSmoothing: 'antialiased' }}
          >
            {MATCHES_SECTION.title}
          </h2>
        </div>

        {/* Tabs */}
        <div
          className="flex gap-0 mb-8"
          style={{
            borderBottom: '1px dashed #41413B',
            opacity: inView ? 1 : 0,
            transition: 'opacity 0.6s ease 0.1s',
          }}
        >
          {(['upcoming', 'results'] as MatchTab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-ui text-[14px] font-medium uppercase tracking-[1px] bg-transparent border-none cursor-pointer transition-all duration-[250ms] ${
                activeTab === tab
                  ? 'text-accent border-b-2 border-b-accent -mb-px'
                  : 'text-[#888888] hover:text-white border-b-2 border-b-transparent -mb-px'
              }`}
            >
              {tab === 'upcoming' ? MATCHES_SECTION.tabs.upcoming : MATCHES_SECTION.tabs.results}
            </button>
          ))}
        </div>

        {/* Match cards — fade on tab switch */}
        <div
          className="overflow-x-auto scrollbar-hide pb-4"
          style={{
            opacity: inView ? 1 : 0,
            transition: 'opacity 0.6s ease 0.2s',
          }}
        >
          <div
            key={activeTab}
            style={{
              animation: 'fadeIn 0.35s ease forwards',
            }}
          >
            {activeTab === 'upcoming' && (
              <>
                {UPCOMING_MATCHES.length > 0 ? (
                  <div className="flex gap-4 min-w-max">
                    {UPCOMING_MATCHES.map((match, i) => (
                      <div
                        key={match.id}
                        className="w-[320px] flex-shrink-0"
                        style={{
                          animation: `fadeUp 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 0.08}s forwards`,
                          opacity: 0,
                        }}
                      >
                        <UpcomingMatchCard match={match} ocLogo={MATCHES_SECTION.ocLogoMini} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <EmptyState
                    title={MATCHES_SECTION.emptyUpcoming.title}
                    body={MATCHES_SECTION.emptyUpcoming.body}
                  />
                )}
              </>
            )}

            {activeTab === 'results' && (
              <>
                {PAST_MATCHES.length > 0 ? (
                  <div className="flex gap-4 min-w-max">
                    {PAST_MATCHES.map((match, i) => (
                      <div
                        key={match.id}
                        className="w-[320px] flex-shrink-0"
                        style={{
                          animation: `fadeUp 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 0.08}s forwards`,
                          opacity: 0,
                        }}
                      >
                        <PastMatchCard match={match} ocLogo={MATCHES_SECTION.ocLogoMini} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <EmptyState
                    title={MATCHES_SECTION.emptyResults.title}
                    body={MATCHES_SECTION.emptyResults.body}
                  />
                )}
              </>
            )}
          </div>
        </div>

        {/* CTA */}
        <div
          className="mt-10 flex flex-col items-start gap-2"
          style={{
            opacity: inView ? 1 : 0,
            transition: 'opacity 0.6s ease 0.3s',
          }}
        >
          <Button variant="ghost" href={MATCHES_SECTION.ctaHref}>
            {MATCHES_SECTION.cta}
          </Button>
          <span className="font-ui text-[11px] text-[#888888] uppercase tracking-[1px]">
            {MATCHES_SECTION.ctaMicrocopy}
          </span>
        </div>
      </div>
    </section>
  )
}

function EmptyState({ title, body }: { title: string; body: string }) {
  return (
    <div
      className="flex flex-col items-center justify-center gap-3 py-16 text-center"
      style={{ border: '1px dashed #41413B' }}
    >
      <span className="font-display text-accent text-[32px] font-[800] uppercase tracking-[3px]">{title}</span>
      <p className="font-ui text-[#888888] text-[14px] max-w-[400px]">{body}</p>
    </div>
  )
}
