import { Button } from '../base/Button'
import { MerchCard } from '../cards/MerchCard'
import { NoiseOverlay } from '../base/NoiseOverlay'
import { useInView } from '../../hooks/useInView'
import { MERCH_SECTION, MERCH_PRODUCTS } from '../../data/content'

export function Merch() {
  const { ref: headerRef, inView: headerIn } = useInView(0.15)
  const { ref: heroRef, inView: heroIn } = useInView(0.1)
  const { ref: sliderRef, inView: sliderIn } = useInView(0.08)

  return (
    <section
      id="merch"
      className="relative bg-[#000000] overflow-hidden"
      style={{ paddingTop: '150px', paddingBottom: '100px' }}
    >
      <NoiseOverlay />

      <div className="oc-container relative z-[5]">
        {/* Header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-10"
          style={{
            opacity: headerIn ? 1 : 0,
            transform: headerIn ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          <div>
            <p className="font-ui text-[11px] font-medium tracking-[2px] uppercase text-accent mb-3">
              {MERCH_SECTION.eyebrow}
            </p>
            <h2
              className="font-display uppercase leading-[0.95] tracking-[3px]"
              style={{ fontSize: 'var(--font-size-section-lg)', fontWeight: 800, WebkitFontSmoothing: 'antialiased' }}
            >
              <span className="text-white">{MERCH_SECTION.titleWhite} </span>
              <span className="text-accent">{MERCH_SECTION.titleAccent}</span>
            </h2>
            <p className="font-ui text-[#888888] text-[14px] mt-3 max-w-[420px]">
              {MERCH_SECTION.copy}
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-1">
            <Button variant="primary" href={MERCH_SECTION.ctaHref}>
              {MERCH_SECTION.cta}
            </Button>
            <span className="font-ui text-[11px] text-[#888888] uppercase tracking-[1px] mt-1">
              {MERCH_SECTION.ctaMicrocopy}
            </span>
          </div>
        </div>

        {/* Hero image */}
        {MERCH_SECTION.heroImage && (
          <div
            ref={heroRef as React.RefObject<HTMLDivElement>}
            className="w-full mb-8 overflow-hidden"
            style={{
              aspectRatio: '16 / 6',
              maxHeight: '400px',
              border: '1px dashed #41413B',
              opacity: heroIn ? 1 : 0,
              transform: heroIn ? 'scale(1)' : 'scale(0.98)',
              transition: 'opacity 0.7s ease 0.1s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s',
            }}
          >
            <img
              src={MERCH_SECTION.heroImage.src}
              alt={MERCH_SECTION.heroImage.alt}
              className="w-full h-full object-cover"
              style={{
                transition: 'transform 0.6s ease',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.transform = 'scale(1.03)')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.transform = 'scale(1)')}
            />
          </div>
        )}

        {/* Products slider */}
        <div
          ref={sliderRef as React.RefObject<HTMLDivElement>}
          className="overflow-x-auto scrollbar-hide pb-4"
        >
          <div className="flex gap-5 min-w-max">
            {MERCH_PRODUCTS.map((product, i) => (
              <div
                key={product.id}
                className="merch-card-wrap"
                style={{
                  width: '280px',
                  flexShrink: 0,
                  opacity: sliderIn ? 1 : 0,
                  transform: sliderIn ? 'translateX(0)' : 'translateX(32px)',
                  transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s`,
                }}
              >
                <MerchCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
