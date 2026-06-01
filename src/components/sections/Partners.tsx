import { SectionHeader } from '../base/SectionHeader'
import { Button } from '../base/Button'
import { LogoStrip } from '../base/LogoStrip'
import { useInView } from '../../hooks/useInView'
import { PARTNERS_SECTION, PARTNERS_DATA } from '../../data/content'

export function Partners() {
  const { ref: headerRef, inView: headerIn } = useInView(0.15)
  const { ref: ctaRef, inView: ctaIn } = useInView(0.2)

  return (
    <section
      id="partners"
      className="bg-[#000000]"
      style={{ paddingTop: '150px', paddingBottom: '100px' }}
    >
      {/* Title */}
      <div
        ref={headerRef as React.RefObject<HTMLDivElement>}
        className="oc-container text-center mb-12"
        style={{
          opacity: headerIn ? 1 : 0,
          transform: headerIn ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        <SectionHeader
          eyebrow={PARTNERS_SECTION.eyebrow}
          title={PARTNERS_SECTION.title}
          subtitle={PARTNERS_SECTION.copy}
          align="center"
        />
      </div>

      {/* Logo strip — full width */}
      <LogoStrip partners={PARTNERS_DATA} className="my-8" />

      {/* CTA + microcopy */}
      <div
        ref={ctaRef as React.RefObject<HTMLDivElement>}
        className="oc-container flex flex-col items-center gap-4 mt-12"
        style={{
          opacity: ctaIn ? 1 : 0,
          transition: 'opacity 0.6s ease 0.1s',
        }}
      >
        <Button variant="primary" href={PARTNERS_SECTION.ctaHref}>
          {PARTNERS_SECTION.cta}
        </Button>
        <p className="font-ui text-[13px] text-[#888888] text-center max-w-[400px]">
          {PARTNERS_SECTION.microcopy}
        </p>
      </div>
    </section>
  )
}
